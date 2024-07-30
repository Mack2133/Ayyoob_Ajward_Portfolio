import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function AvatarImageCircle() {
    return (
      <Avatar className="w-20 h-20">
        <AvatarImage src="/Ayyoob.png" alt="Ayyoob Ajward" className="bg-cover"/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  