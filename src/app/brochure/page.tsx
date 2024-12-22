import Image from 'next/image'

export default function IsraelBrochure() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="relative h-64 mb-8 overflow-hidden rounded-lg">
        <Image
          src="/israel.svg"
          alt="Israeli Flag"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg" />
        <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-blue-800">
          Israel
        </h1>
      </div>

      {/* Cultural aspects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {['Cuisine', 'History', 'Religion', 'Technology', 'Arts'].map((aspect, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={`/placeholder.svg?height=200&width=400&text=${aspect}`}
              alt={aspect}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{aspect}</h2>
              <p className="text-gray-600">
            
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

