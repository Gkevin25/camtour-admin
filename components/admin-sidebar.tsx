"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { LayoutDashboard, Map, MapPin, Users, MessageSquare, Settings, LogOut, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Tours",
    href: "/tours",
    icon: Map,
  },
  {
    title: "Destinations",
    href: "/destinations",
    icon: MapPin,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
        collapsed ? "w-[80px]" : "w-[250px]",
      )}
    >
      <div className="p-4 border-b flex items-center justify-between">
        <div className={cn("flex items-center", collapsed && "justify-center w-full")}>
          <Image src="/logo.png" alt="CamTour Logo" width={120} height={80} className="h-10 w-auto" />
          {!collapsed && <span className="ml-2 font-bold text-lg">Admin</span>}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={collapsed ? "absolute right-0 -mr-10 bg-white border rounded-full" : ""}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex-1 py-6 px-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center py-2 px-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
              pathname === item.href && "bg-green-50 text-green-700 font-medium",
              collapsed && "justify-center px-2",
            )}
          >
            <item.icon className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-3")} />
            {!collapsed && <span>{item.title}</span>}
          </Link>
        ))}
      </div>
      <div className="p-4 border-t">
        <Link
          href="/admin/logout"
          className={cn(
            "flex items-center py-2 px-3 rounded-md text-red-600 hover:bg-red-50 transition-colors",
            collapsed && "justify-center px-2",
          )}
        >
          <LogOut className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-3")} />
          {!collapsed && <span>Logout</span>}
        </Link>
      </div>
    </div>
  )
}
