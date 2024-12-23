import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db";

export const credentialsRouter = createTRPCRouter({
  validate: publicProcedure
    .input(z.object({ username: z.string(), password: z.string() }))
    .query(({ input }) => {
      return {
        id: db.user.findFirst({
            where: {
                name: input.username,
                password: input.password,
            }
        }),
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),
});
