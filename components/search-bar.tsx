"use client"

import { useState } from "react"
import { Search, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"

export default function SearchBar() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="w-full max-w-4xl rounded-lg bg-white p-4 shadow-lg">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input type="text" placeholder="Where to?" className="pl-9" />
        </div>

        <div className="relative">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <Calendar className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Select>
            <SelectTrigger>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Travelers" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Traveler</SelectItem>
              <SelectItem value="2">2 Travelers</SelectItem>
              <SelectItem value="3">3 Travelers</SelectItem>
              <SelectItem value="4">4+ Travelers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="bg-green-700 hover:bg-green-800">Search Tours</Button>
      </div>
    </div>
  )
}
