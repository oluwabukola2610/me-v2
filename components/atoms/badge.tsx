import type React from "react"

import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        variant === "default" && "bg-green-400/10 text-green-400",
        variant === "outline" && "border border-gray-800 text-gray-400",
        className,
      )}
      {...props}
    />
  )
}
