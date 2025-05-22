import Image from "next/image"
import Link from "next/link"
import { Star, Clock, MapPin, Calendar, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface TourCardProps {
  title: string
  image: string
  price: number
  duration: string
  rating: number
  reviews: number
  location: string
  description: string
  highlights: string[]
}

export default function TourCard({
  title,
  image,
  price,
  duration,
  rating,
  reviews,
  location,
  description,
  highlights,
}: TourCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-60 w-full md:h-auto md:w-1/3">
          <Badge className="absolute left-2 top-2 z-10 bg-green-700">Bestseller</Badge>
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col p-4">
          <div className="mb-2 flex items-center">
            <MapPin className="mr-1 h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-500">{location}</span>
            <div className="ml-auto flex items-center">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
              <span className="ml-1 text-sm text-gray-500">({reviews} reviews)</span>
            </div>
          </div>

          <h3 className="mb-2 text-xl font-bold">{title}</h3>

          <p className="mb-4 text-gray-600">{description}</p>

          <div className="mb-4">
            <h4 className="mb-2 font-semibold text-green-700">Tour Highlights:</h4>
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-green-700" />
                  <span className="text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4 text-gray-500" />
                <span className="text-sm">{duration}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4 text-gray-500" />
                <span className="text-sm">Available Today</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm text-gray-500">From</div>
                <div className="text-2xl font-bold text-green-700">{price.toLocaleString()} XAF</div>
              </div>
              <Link href={`/tours/${title.toLowerCase().replace(/\s+/g, "-")}`}>
                <Button className="bg-green-700 hover:bg-green-800">View Details</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
