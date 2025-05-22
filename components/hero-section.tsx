import Image from "next/image"
import SearchBar from "@/components/search-bar"

export default function HeroSection() {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Beautiful Cameroon landscape"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Discover Cameroon's Beauty</h1>
        <p className="mb-8 max-w-2xl text-lg">
          Experience the rich culture, stunning landscapes, and unforgettable adventures across Cameroon
        </p>
        <SearchBar />
      </div>
    </section>
  )
}
