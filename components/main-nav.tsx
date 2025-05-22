"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Tours", href: "/tours" },
  { name: "Destinations", href: "/destinations" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "admin", href: "/admin" },
]

export default function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="hidden md:flex md:items-center md:space-x-6">
      {navItems.map((item) => (
        <Link key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:text-green-700">
          {item.name}
        </Link>
      ))}
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        {isOpen && (
          <div className="absolute left-0 top-16 z-50 w-full bg-white p-4 shadow-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium transition-colors hover:text-green-700"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
