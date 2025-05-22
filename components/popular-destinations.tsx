import Image from "next/image"
import Link from "next/link"

const destinations = [
  {
    id: 1,
    name: "Kribi",
    image: "/placeholder.svg?height=400&width=600",
    tours: 24,
  },
  {
    id: 2,
    name: "Limbe",
    image: "/placeholder.svg?height=400&width=600",
    tours: 18,
  },
  {
    id: 3,
    name: "Douala",
    image: "/placeholder.svg?height=400&width=600",
    tours: 32,
  },
  {
    id: 4,
    name: "Yaoundé",
    image: "/placeholder.svg?height=400&width=600",
    tours: 29,
  },
  {
    id: 5,
    name: "Bamenda",
    image: "/placeholder.svg?height=400&width=600",
    tours: 15,
  },
  {
    id: 6,
    name: "Foumban",
    image: "/placeholder.svg?height=400&width=600",
    tours: 12,
  },
]

export default function PopularDestinations() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination) => (
        <Link
          key={destination.id}
          href={`/destinations/${destination.name.toLowerCase()}`}
          className="group relative overflow-hidden rounded-lg"
        >
          <div className="aspect-[4/3] w-full">
            <Image
              src={destination.image || "/placeholder.svg"}
              alt={destination.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-xl font-bold">{destination.name}</h3>
              <p className="text-sm">{destination.tours} tours available</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
