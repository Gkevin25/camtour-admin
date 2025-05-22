"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Models } from 'appwrite'
import { Edit, Trash2, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { databases } from "@/appwrite"

type User = Models.Document & {
  user_name: string
  email: string
  amount_spent: number
}

export function UsersTable() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [tourToDelete, setTourToDelete] = useState<string | null>(null)
  const [tours, setTours] = useState<User[]>([])

  //const DATABASE_ID = "682eeb4b0034b4b0f901"
  //const COLLECTION_ID = "682eeb5c0033b37e5b6a"

  /*useEffect(() => {
    fetchTours()
  }, [])*/

  /*const fetchTours = async () => {
    //try {
      //const response = await databases.listDocuments(
       // DATABASE_ID,
        //COLLECTION_ID
      )
      setTours(response.documents as Tour[])
    } catch (error) {
      console.error("Error fetching tours:", error)
    }
  }*/

  // Filter tours based on search query and category
  const filteredTours = tours.filter((tour) => {
    const matchesSearch =
      tour.tour_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || tour.category.toLowerCase() === categoryFilter.toLowerCase()

    return matchesSearch && matchesCategory
  })

  const handleDeleteClick = (id: string) => {
    setTourToDelete(id)
    setDeleteDialogOpen(true)
  }

  const handleDeleteConfirm = async () => {
    if (!tourToDelete) return

   /* try {
      await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        tourToDelete
      )
      await fetchTours() // Refresh the list
      setDeleteDialogOpen(false)
      setTourToDelete(null)
    } catch (error) {
      console.error("Error deleting tour:", error)
      alert("Failed to delete tour. Please try again.")
    }*/
  }

  return (
    <div>
      <div className="flex flex-col space-y-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="flex flex-1 items-center space-x-4">
          <Input
            placeholder="Search Users..."
            className="max-w-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Amount_Spent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTours.map((tour) => (
              <TableRow key={tour.$id}>
                <TableCell>
                  <div className="font-medium">{tour.tour_name}</div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {tour.category}
                  </Badge>
                </TableCell>
                <TableCell>{tour.location}</TableCell>
                <TableCell>{tour.price.toLocaleString()} XAF</TableCell>
                <TableCell>{tour.duration}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/tours/${tour.$id}`}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDeleteClick(tour.$id)}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure you want to delete this tour?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the tour and remove it from the website.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
