import { TourForm } from "@/components/tour-form"
import { getTourById } from "@/lib/data"

export default function EditTourPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the tour data from your database
  const tour = getTourById(params.id)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Tour</h1>
        <p className="text-muted-foreground">Update tour information and details.</p>
      </div>

      <TourForm tour={tour} />
    </div>
  )
}
