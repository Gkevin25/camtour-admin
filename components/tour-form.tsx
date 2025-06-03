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
import { databases, storage } from "@/appwrite" // Use the correct path if needed
import { ID } from "appwrite"

interface Highlight {
  id: string
  text: string
}

interface TourFormProps {
  tour?: any // In a real app, you would define a proper type for this
}

export function TourForm({ tour }: TourFormProps = {}) {
  const router = useRouter()
  const isEditing = !!tour

  const [title, setTitle] = useState(tour?.title || "")
  const [description, setDescription] = useState(tour?.description || "")
  const [price, setPrice] = useState(tour?.price?.toString() || "")
  const [location, setLocation] = useState(tour?.location || "")
  const [duration, setDuration] = useState(tour?.duration || "")
  const [category, setCategory] = useState(tour?.tag || "")
  const [highlights, setHighlights] = useState<Highlight[]>(
    tour?.highlights?.map((text: string, index: number) => ({ id: `highlight-${index}`, text })) || [
      { id: "highlight-1", text: "" },
    ],
  )
  const [mainImage, setMainImage] = useState<string | null>(tour?.image || null)
  const [galleryImages, setGalleryImages] = useState<string[]>(tour?.galleryImages || [])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isUploadingMainImage, setIsUploadingMainImage] = useState(false)
  const [isUploadingGalleryImage, setIsUploadingGalleryImage] = useState(false)

  const DATABASE_ID = "682eeb4b0034b4b0f901";
  const COLLECTION_ID = "682eeb5c0033b37e5b6a";
  const STORAGE_BUCKET_ID = "683eca93002024542877"; 
  
  const handleAddHighlight = () => {
    setHighlights([...highlights, { id: `highlight-${highlights.length + 1}`, text: "" }])
  }

  const handleRemoveHighlight = (id: string) => {
    setHighlights(highlights.filter((highlight) => highlight.id !== id))
  }

  const handleHighlightChange = (id: string, value: string) => {
    setHighlights(highlights.map((highlight) => (highlight.id === id ? { ...highlight, text: value } : highlight)))
  }

  const handleMainImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB")
      return
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert("Please select a valid image file")
      return
    }

    setIsUploadingMainImage(true)
    console.log("Uploading file:", file.name, "Size:", file.size, "Type:", file.type)
    console.log("Using bucket ID:", STORAGE_BUCKET_ID)

    try {
      // Upload file to Appwrite storage
      const response = await storage.createFile(
        STORAGE_BUCKET_ID,
        ID.unique(),
        file
      )
      console.log("Upload response:", response)

      // Get the file URL
      const fileUrl = storage.getFileView(STORAGE_BUCKET_ID, response.$id)

      // Update the main image state with the URL
      setMainImage(fileUrl.toString())

    } catch (error) {
      console.error("Error uploading main image:", error)
      // More detailed error message
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
      alert(`Failed to upload image: ${errorMessage}. Please check your bucket permissions and try again.`)
    } finally {
      setIsUploadingMainImage(false)
    }
  }

  const handleGalleryImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploadingGalleryImage(true)

    try {
      // Upload file to Appwrite storage
      const response = await storage.createFile(
        STORAGE_BUCKET_ID,
        ID.unique(),
        file
      )

      // Get the file URL
      const fileUrl = storage.getFileView(STORAGE_BUCKET_ID, response.$id)

      // Add the URL to the gallery images array
      setGalleryImages([...galleryImages, fileUrl.toString()])

    } catch (error) {
      console.error("Error uploading gallery image:", error)
      // More detailed error message
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
      alert(`Failed to upload image: ${errorMessage}. Please check your bucket permissions and try again.`)
    } finally {
      setIsUploadingGalleryImage(false)
      // Reset the file input to allow uploading the same file again
      e.target.value = ''
    }
  }

  const handleRemoveGalleryImage = (index: number) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare data for Appwrite
      const data = {
        tour_name: title,
        category,
        location,
        price: parseInt(price, 10),
        duration,
        description,
        highlights: highlights.map(h => h.text),
        image: mainImage,
        galleryImages,
      }

      console.log("Submitting tour data:", data)
      console.log("Database ID:", DATABASE_ID)
      console.log("Collection ID:", COLLECTION_ID)

      // Create document in Appwrite
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        'unique()', // Let Appwrite generate a unique ID
        data
      )
      // Redirect to the tours page
      router.push("/tours")
    } catch (error) {
      console.error("Error submitting form:", error)
      // More detailed error message
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
      alert(`Failed to create tour: ${errorMessage}. Please check the console for more details.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic Information</TabsTrigger>
          <TabsTrigger value="details">Details & Highlights</TabsTrigger>
          <TabsTrigger value="media">Images & Media</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Tour Title</Label>
              <Input
                id="title"
                placeholder="Enter tour title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="nature">Nature</SelectItem>
                  <SelectItem value="beach">Beach</SelectItem>
                  <SelectItem value="wildlife">Wildlife</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price (XAF)</Label>
              <Input
                id="price"
                type="number"
                placeholder="Enter price in XAF"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                placeholder="e.g. 1 day, 3 hours"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter tour description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-32"
              required
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Tour Highlights</Label>
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

        <TabsContent value="media" className="space-y-6">
          <div className="space-y-4">
            <Label>Main Tour Image</Label>
            <div className="flex items-center gap-4">
              {mainImage ? (
                <div className="relative h-40 w-60 overflow-hidden rounded-md border">
                  <Image src={mainImage || "/placeholder.svg"} alt="Main tour image" fill className="object-cover" />
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
                        disabled={isUploadingMainImage}
                      />
                      <Label
                        htmlFor="main-image-upload"
                        className={`cursor-pointer rounded-md px-3 py-1.5 text-sm font-medium text-white ${
                          isUploadingMainImage
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-700 hover:bg-green-800"
                        }`}
                      >
                        {isUploadingMainImage ? "Uploading..." : "Select File"}
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
                  disabled={isUploadingGalleryImage}
                />
                <Label
                  htmlFor="gallery-image-upload"
                  className={`cursor-pointer inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium text-white ${
                    isUploadingGalleryImage
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-700 hover:bg-green-800"
                  }`}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  {isUploadingGalleryImage ? "Uploading..." : "Add Image"}
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
        <Button type="button" variant="outline" onClick={() => router.push("/tours")}>
          Cancel
        </Button>
        <Button type="submit" className="bg-green-700 hover:bg-green-800" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : isEditing ? "Update Tour" : "Create Tour"}
        </Button>
      </div>
    </form>
  )
}
