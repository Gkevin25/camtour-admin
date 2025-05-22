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
  phone_number: string
}

export function UsersTable() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [userToDelete, setUserToDelete] = useState<string | null>(null)
  const [users, setUsers] = useState<User[]>([])

  //const DATABASE_ID = "682eeb4b0034b4b0f901"
  //const COLLECTION_ID = "682eeb5c0033b37e5b6a"

  /*useEffect(() => {
    fetchusers()
  }, [])*/

  /*const fetchusers = async () => {
    //try {
      //const response = await databases.listDocuments(
       // DATABASE_ID,
        //COLLECTION_ID
      )
      setusers(response.documents as user[])
    } catch (error) {
      console.error("Error fetching users:", error)
    }
  }*/

  // Filter users based on search query and category
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.user_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || user.category.toLowerCase() === categoryFilter.toLowerCase()

    return matchesSearch && matchesCategory
  })

  const handleDeleteClick = (id: string) => {
    setUserToDelete(id)
    setDeleteDialogOpen(true)
  }

  const handleDeleteConfirm = async () => {
    if (!userToDelete) return

   /* try {
      await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        userToDelete
      )
      await fetchusers() // Refresh the list
      setDeleteDialogOpen(false)
      setuserToDelete(null)
    } catch (error) {
      console.error("Error deleting user:", error)
      alert("Failed to delete user. Please try again.")
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
              <TableHead>Phone Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.$id}>
                <TableCell>
                  <div className="font-medium">{user.user_name}</div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {user.category}
                  </Badge>
                </TableCell>
                <TableCell>{user.user_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.amount_spent.toLocaleString()} XAF</TableCell>
                <TableCell>{user.phone_number}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/users/${user.$id}`}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDeleteClick(user.$id)}>
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
            <DialogTitle>Are you sure you want to delete this user?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the user and remove it from the website.
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
