"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Trash2, Upload, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Highlight {
  id: string
  text: string
}

interface Activity {
  id: string
  name: string
  description: string
  image: string | null
}

interface DestinationFormProps {
  destination?: any // In a real app, you would define a proper type for this
}

export function DestinationForm({ destination }: DestinationFormProps = {}) {
  const router = useRouter()
  const isEditing = !!destination

  const [name, setName] = useState(destination?.name || "")
  const [region, setRegion] = useState(destination?.region || "")
  const [description, setDescription] = useState(destination?.description || "")
  const [history, setHistory] = useState(destination?.history || "")
  const [weather, setWeather] = useState(destination?.weather || "")
  const [gettingThere, setGettingThere] = useState(destination?.gettingThere || "")

  const [highlights, setHighlights] = useState<Highlight[]>(
    destination?.highlights?.map((text: string, index: number) => ({ id: `highlight-${index}`, text })) || [
      { id: "highlight-1", text: "" },
    ],
  )

  const [activities, setActivities] = useState<Activity[]>(
    destination?.activities?.map((activity: any, index: number) => ({
      id: `activity-${index}`,
      name: activity.name,
      description: activity.description,
      image: activity.image,
    })) || [{ id: "activity-1", name: "", description: "", image: null }],
  )

  const [mainImage, setMainImage] = useState<string | null>(destination?.image || null)
  const [galleryImages, setGalleryImages] = useState<string[]>(destination?.galleryImages || [])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAddHighlight = () => {
    setHighlights([...highlights, { id: `highlight-${highlights.length + 1}`, text: "" }])
  }

  const handleRemoveHighlight = (id: string) => {
    setHighlights(highlights.filter((highlight) => highlight.id !== id))
  }

  const handleHighlightChange = (id: string, value: string) => {
    setHighlights(highlights.map((highlight) => (highlight.id === id ? { ...highlight, text: value } : highlight)))
  }

  const handleAddActivity = () => {
    setActivities([
      ...activities,
      {
        id: `activity-${activities.length + 1}`,
        name: "",
        description: "",
        image: null,
      },
    ])
  }

  const handleRemoveActivity = (id: string) => {
    setActivities(activities.filter((activity) => activity.id !== id))
  }

  const handleActivityChange = (id: string, field: keyof Activity, value: string) => {
    setActivities(activities.map((activity) => (activity.id === id ? { ...activity, [field]: value } : activity)))
  }

  const handleActivityImageUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would upload the file to your server or a storage service
      // For demo purposes, we'll just use a placeholder
      setActivities(
        activities.map((activity) =>
          activity.id === id ? { ...activity, image: "/placeholder.svg?height=400&width=600" } : activity,
        ),
      )
    }
  }

  const handleMainImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would upload the file to your server or a storage service
      // For demo purposes, we'll just use a placeholder
      setMainImage("/placeholder.svg?height=400&width=600")
    }
  }

  const handleGalleryImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would upload the file to your server or a storage service
      // For demo purposes, we'll just use a placeholder
      setGalleryImages([...galleryImages, "/placeholder.svg?height=400&width=600"])
    }
  }

  const handleRemoveGalleryImage = (index: number) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, you would submit the form data to your backend
      // For demo purposes, we'll just simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to the destinations page
      router.push("/admin/destinations")
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-4">
          <TabsTrigger value="basic">Basic Information</TabsTrigger>
          <TabsTrigger value="details">Details & Highlights</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="media">Images & Media</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Destination Name</Label>
              <Input
                id="name"
                placeholder="Enter destination name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="region">Region</Label>
              <Select value={region} onValueChange={setRegion} required>
                <SelectTrigger id="region">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Coastal Region">Coastal Region</SelectItem>
                  <SelectItem value="Western Highlands">Western Highlands</SelectItem>
                  <SelectItem value="Northern Savanna">Northern Savanna</SelectItem>
                  <SelectItem value="Rainforest Region">Rainforest Region</SelectItem>
                  <SelectItem value="Central Region">Central Region</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter destination description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-32"
              required
            />
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="history">History</Label>
            <Textarea
              id="history"
              placeholder="Enter destination history"
              value={history}
              onChange={(e) => setHistory(e.target.value)}
              className="min-h-24"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="weather">Weather & Climate</Label>
              <Textarea
                id="weather"
                placeholder="Enter weather information"
                value={weather}
                onChange={(e) => setWeather(e.target.value)}
                className="min-h-24"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gettingThere">Getting There</Label>
              <Textarea
                id="gettingThere"
                placeholder="Enter transportation information"
                value={gettingThere}
                onChange={(e) => setGettingThere(e.target.value)}
                className="min-h-24"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Destination Highlights</Label>
              <Button type="button" variant="outline" size="sm" onClick={handleAddHighlight}>
                <Plus className="mr-2 h-4 w-4" />
                Add Highlight
              </Button>
            </div>

            {highlights.map((highlight, index) => (
              <div key={highlight.id} className="flex items-start gap-2">
                <Input
                  placeholder={`Highlight ${index + 1}`}
                  value={highlight.text}
                  onChange={(e) => handleHighlightChange(highlight.id, e.target.value)}
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveHighlight(highlight.id)}
                  disabled={highlights.length === 1}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activities" className="space-y-6">
          <div className="flex items-center justify-between">
            <Label>Things to Do</Label>
            <Button type="button" variant="outline" onClick={handleAddActivity}>
              <Plus className="mr-2 h-4 w-4" />
              Add Activity
            </Button>
          </div>

          {activities.map((activity, index) => (
            <Card key={activity.id} className="p-4">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Activity {index + 1}</h3>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveActivity(activity.id)}
                    disabled={activities.length === 1}
                    className="text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`activity-name-${activity.id}`}>Activity Name</Label>
                    <Input
                      id={`activity-name-${activity.id}`}
                      placeholder="Enter activity name"
                      value={activity.name}
                      onChange={(e) => handleActivityChange(activity.id, "name", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`activity-description-${activity.id}`}>Description</Label>
                    <Textarea
                      id={`activity-description-${activity.id}`}
                      placeholder="Enter activity description"
                      value={activity.description}
                      onChange={(e) => handleActivityChange(activity.id, "description", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Activity Image</Label>
                    <div className="flex items-center gap-4">
                      {activity.image ? (
                        <div className="relative h-32 w-48 overflow-hidden rounded-md border">
                          <Image
                            src={activity.image || "/placeholder.svg"}
                            alt={activity.name || `Activity ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute right-2 top-2"
                            onClick={() => handleActivityChange(activity.id, "image", "")}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <div className="flex h-32 w-48 flex-col items-center justify-center rounded-md border border-dashed">
                          <Upload className="mb-2 h-8 w-8 text-gray-400" />
                          <p className="text-sm text-gray-500">Upload image</p>
                          <div className="mt-2">
                            <Input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              id={`activity-image-${activity.id}`}
                              onChange={(e) => handleActivityImageUpload(activity.id, e)}
                            />
                            <Label
                              htmlFor={`activity-image-${activity.id}`}
                              className="cursor-pointer rounded-md bg-green-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-800"
                            >
                              Select File
                            </Label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="media" className="space-y-6">
          <div className="space-y-4">
            <Label>Main Destination Image</Label>
            <div className="flex items-center gap-4">
              {mainImage ? (
                <div className="relative h-40 w-60 overflow-hidden rounded-md border">
                  <Image
                    src={mainImage || "/placeholder.svg"}
                    alt="Main destination image"
                    fill
                    className="object-cover"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute right-2 top-2"
                    onClick={() => setMainImage(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Card className="flex h-40 w-60 flex-col items-center justify-center border-dashed">
                  <CardContent className="flex flex-col items-center justify-center pt-6">
                    <Upload className="mb-2 h-10 w-10 text-gray-400" />
                    <p className="text-sm text-gray-500">Upload main image</p>
                    <div className="mt-4">
                      <Input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="main-image-upload"
                        onChange={handleMainImageUpload}
                      />
                      <Label
                        htmlFor="main-image-upload"
                        className="cursor-pointer rounded-md bg-green-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-800"
                      >
                        Select File
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Gallery Images</Label>
              <div>
                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="gallery-image-upload"
                  onChange={handleGalleryImageUpload}
                />
                <Label
                  htmlFor="gallery-image-upload"
                  className="cursor-pointer inline-flex items-center rounded-md bg-green-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-800"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Image
                </Label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative h-32 overflow-hidden rounded-md border">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute right-2 top-2"
                    onClick={() => handleRemoveGalleryImage(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={() => router.push("/admin/destinations")}>
          Cancel
        </Button>
        <Button type="submit" className="bg-green-700 hover:bg-green-800" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : isEditing ? "Update Destination" : "Create Destination"}
        </Button>
      </div>
    </form>
  )
}
