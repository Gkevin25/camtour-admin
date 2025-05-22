import { DestinationForm } from "@/components/destination-form"

export default function NewDestinationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add New Destination</h1>
        <p className="text-muted-foreground">Create a new destination to display on the website.</p>
      </div>

      <DestinationForm />
    </div>
  )
}
