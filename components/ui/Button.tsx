import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A0E1A] disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-[#3B7BF6] text-white hover:bg-blue-500 focus:ring-[#3B7BF6] shadow-lg shadow-blue-900/30":
              variant === "primary",
            "bg-[#111827] text-white border border-[#1F2937] hover:bg-[#1F2937] focus:ring-[#3B7BF6]":
              variant === "secondary",
            "border border-[#3B7BF6] text-[#3B7BF6] hover:bg-[#3B7BF6] hover:text-white focus:ring-[#3B7BF6]":
              variant === "outline",
            "text-[#A0AEC0] hover:text-white hover:bg-[#1F2937] focus:ring-[#3B7BF6]":
              variant === "ghost",
            "px-3 py-1.5 text-sm": size === "sm",
            "px-5 py-2.5 text-sm": size === "md",
            "px-7 py-3.5 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
