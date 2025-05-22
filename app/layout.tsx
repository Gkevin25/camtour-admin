"use client"
import type { ReactNode } from "react"
import { usePathname } from "next/navigation"
import AdminSidebar from "@/components/admin-sidebar"
import AdminHeader from "@/components/admin-header"



export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/login"

  return (
    <html>
      <body>
        <div className="flex min-h-screen bg-gray-100">
          {!isLoginPage && <AdminSidebar />}
          <div className="flex flex-1 flex-col">
            {!isLoginPage && <AdminHeader />}
            <main className={`flex-1 ${!isLoginPage ? "p-6" : ""}`}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
