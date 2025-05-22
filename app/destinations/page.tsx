import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DestinationsTable } from "@/components/destinations-table"
import { Suspense } from "react"

export default async function DestinationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Destinations</h1>
          <p className="text-muted-foreground">Manage your destinations and locations.</p>
        </div>
        <Link href="/destinations/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Destination
          </Button>
        </Link>
      </div>

      <Card>
        <Suspense fallback={<div>Loading...</div>}>
          <DestinationsTable />
        </Suspense>
      </Card>
    </div>
  )
}
