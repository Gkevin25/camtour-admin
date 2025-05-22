import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jean Dupont</p>
          <p className="text-sm text-muted-foreground">jean.dupont@example.com</p>
        </div>
        <div className="ml-auto font-medium">+85,000 XAF</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>MK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Marie Kamga</p>
          <p className="text-sm text-muted-foreground">marie.k@example.com</p>
        </div>
        <div className="ml-auto font-medium">+45,000 XAF</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>PN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Paul Nkeng</p>
          <p className="text-sm text-muted-foreground">paul.n@example.com</p>
        </div>
        <div className="ml-auto font-medium">+95,000 XAF</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>SF</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sophie Foka</p>
          <p className="text-sm text-muted-foreground">sophie.f@example.com</p>
        </div>
        <div className="ml-auto font-medium">+55,000 XAF</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Robert Mbarga</p>
          <p className="text-sm text-muted-foreground">robert.m@example.com</p>
        </div>
        <div className="ml-auto font-medium">+65,000 XAF</div>
      </div>
    </div>
  )
}
