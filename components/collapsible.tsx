"use client"

import * as React from "react"
import { ChevronsLeftRight, ChevronsUpDown, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="min-w space-y-2"
    >
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">
          my name is ayyoob ajward and i am a full stack developer
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsLeftRight className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="">
          @radix-ui/colors
        </div>
        <div className="">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
