"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { UsersTable } from "@/components/users-table"



export default async function ToursPage() {

  // Check if the component is mounted on the client side
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Render nothing on the server side
  }
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">All users</p>
        </div>
        
      </div>

      <Card>
        <UsersTable />
      </Card>
    </div>
  )
}
