import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="CamTour Logo" width={120} height={80} className="h-16 w-auto" />
            </div>
            <p className="mt-4">
              Discover the beauty and culture of Cameroon with our expertly curated tours and experiences.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="hover:text-green-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-green-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-green-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-green-500">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-green-500">
                  Kribi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Limbe
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Douala
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Yaoundé
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Bamenda
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Foumban
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-green-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Become a Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <address className="not-italic">
              <p>123 Tourism Avenue</p>
              <p>Yaoundé, Cameroon</p>
              <p className="mt-4">Phone: +237 123 456 789</p>
              <p>Email: info@camtour.com</p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>&copy; {new Date().getFullYear()} CamTour. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm hover:text-green-500">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:text-green-500">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:text-green-500">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
