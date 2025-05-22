import type { ReactNode } from "react"
import { redirect } from "next/navigation"
import AdminSidebar from "@/components/admin-sidebar"
import AdminHeader from "@/components/admin-header"

// This is a simple auth check - in a real app, you would use a proper auth system
const checkAuth = () => {
  // For demo purposes, we'll just return true
  // In a real app, you would check if the user is authenticated and has admin privileges
  return true
}

export default function RootLayout({ children }: { children: ReactNode }) {
  // Check if user is authenticated
  const isAuthenticated = checkAuth()

  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    redirect("/admin/login")
  }

  return (
     <html>
+      <body>
          <div className="flex min-h-screen bg-gray-100">
            <AdminSidebar />
            <div className="flex flex-1 flex-col">
              <AdminHeader />
              <main className="flex-1 p-6">{children}</main>
            </div>
          </div>
        </body>
  </html>

  )
}
