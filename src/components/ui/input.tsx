import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, placeholder, ...props }: React.ComponentProps<"input">) {
  return (
    <div className="input-wrapper w-full rounded-md p-px bg-Gray-200 has-[input.error]:bg-Red-400">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "text-black tracking-normal placeholder:text-muted-foreground selection:bg-white border-input flex w-full min-w-0 rounded-md border bg-white ps-3 py-2 text-base sm:text-lg shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}

export { Input }
