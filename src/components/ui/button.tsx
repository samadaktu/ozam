import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        style={variant === "default" ? { backgroundColor: "#ffffff", color: "#0B0B0F" } : undefined}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-40 cursor-pointer",
          variant === "default" && "hover:opacity-90 active:scale-[0.98]",
          variant === "outline" && "border border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-white/40",
          variant === "ghost" && "bg-transparent text-white hover:bg-white/8",
          variant === "glass" && "bg-white/8 backdrop-blur-md border border-white/10 text-white hover:bg-white/12",
          size === "default" && "h-10 px-6 py-2 text-sm",
          size === "sm" && "h-9 px-4 text-sm",
          size === "lg" && "h-12 px-8 text-base",
          size === "icon" && "h-10 w-10",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
