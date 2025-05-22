import type { ReactNode } from "react"
import AdminSidebar from "@/components/admin-sidebar"
import AdminHeader from "@/components/admin-header"



export default function RootLayout({ children }: { children: ReactNode }) {
  
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
