import { DestinationForm } from "@/components/destination-form"
import { getDestinationById } from "@/lib/data"

export default function EditDestinationPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the destination data from your database
  const destination = getDestinationById(params.id)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Destination</h1>
        <p className="text-muted-foreground">Update destination information and details.</p>
      </div>

      <DestinationForm destination={destination} />
    </div>
  )
}
