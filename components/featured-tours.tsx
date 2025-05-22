import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tours = [
  {
    id: 1,
    title: "Mount Cameroon Hiking Adventure",
    image: "/placeholder.svg?height=300&width=400",
    price: 85000,
    duration: "2 days",
    rating: 4.8,
    reviews: 124,
    location: "Buea",
    tag: "Adventure",
  },
  {
    id: 2,
    title: "Limbe Wildlife Centre & Black Sand Beaches",
    image: "/placeholder.svg?height=300&width=400",
    price: 45000,
    duration: "1 day",
    rating: 4.7,
    reviews: 98,
    location: "Limbe",
    tag: "Nature",
  },
  {
    id: 3,
    title: "Kribi Waterfall & Beach Excursion",
    image: "/placeholder.svg?height=300&width=400",
    price: 55000,
    duration: "1 day",
    rating: 4.9,
    reviews: 156,
    location: "Kribi",
    tag: "Beach",
  },
  {
    id: 4,
    title: "Yaoundé Cultural Heritage Tour",
    image: "/placeholder.svg?height=300&width=400",
    price: 35000,
    duration: "1 day",
    rating: 4.6,
    reviews: 87,
    location: "Yaoundé",
    tag: "Cultural",
  },
]

export default function FeaturedTours() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {tours.map((tour) => (
        <Card key={tour.id} className="overflow-hidden transition-all hover:shadow-lg">
          <div className="relative h-48">
            <Badge className="absolute left-2 top-2 z-10 bg-green-700">{tour.tag}</Badge>
            <Image
              src={tour.image || "/placeholder.svg"}
              alt={tour.title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{tour.location}</span>
              <span className="text-sm text-gray-500">{tour.duration}</span>
            </div>
            <h3 className="mt-2 line-clamp-2 font-semibold">{tour.title}</h3>
            <div className="mt-2 flex items-center">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <span className="ml-1 text-sm font-medium">{tour.rating}</span>
              <span className="ml-1 text-sm text-gray-500">({tour.reviews} reviews)</span>
            </div>
          </CardContent>
          <CardFooter className="border-t p-4">
            <div className="flex w-full items-center justify-between">
              <div>
                <span className="text-lg font-bold text-green-700">{tour.price.toLocaleString()} XAF</span>
                <span className="text-sm text-gray-500"> per person</span>
              </div>
              <button className="rounded-full bg-green-700 px-4 py-1 text-sm font-medium text-white hover:bg-green-800">
                View Details
              </button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
