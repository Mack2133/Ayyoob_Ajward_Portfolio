"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight } from "lucide-react"
import Link from "next/link"

export function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link"><AlignRight></AlignRight></Button>
      </SheetTrigger>
      <SheetContent className="max-w-[300px]">
        <div className="flex flex-col items-start w-full gap-5">
            <Button variant="link" asChild ><Link href={"/"}>Home</Link></Button>
            <Button variant="link" asChild ><Link href={"/projects"}>Projects</Link></Button>
            <Button variant="link" asChild ><Link download={true} href={"https://drive.google.com/drive/folders/13YnZNY7MEvAL80Q_fqZlnnsiAVgzxm1n?usp=drive_link"}>CV/Resume</Link></Button>
            <Button variant="link" asChild ><Link href={"/contact"}>Contact</Link></Button>
        </div>
      </SheetContent>
    </Sheet>
  ) // 
}
