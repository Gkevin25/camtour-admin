import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ToursTable } from "@/components/tours-table"

export default function ToursPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tours</h1>
          <p className="text-muted-foreground">Manage your tours and excursions.</p>
        </div>
        <Link href="/tours/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Tour
          </Button>
        </Link>
      </div>

      <Card>
        <ToursTable />
      </Card>
    </div>
  )
}
