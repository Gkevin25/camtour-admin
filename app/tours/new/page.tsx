import { TourForm } from "@/components/tour-form"

export default function NewTourPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add New Tour</h1>
        <p className="text-muted-foreground">Create a new tour to display on the website.</p>
      </div>

      <TourForm />
    </div>
  )
}
