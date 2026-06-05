import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "cyan" | "success" | "warning" | "premium";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        {
          "bg-[#1F2937] text-[#A0AEC0]": variant === "default",
          "bg-[#3B7BF6]/20 text-[#3B7BF6] border border-[#3B7BF6]/30": variant === "accent",
          "bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20": variant === "cyan",
          "bg-green-900/30 text-green-400 border border-green-800/50": variant === "success",
          "bg-yellow-900/30 text-yellow-400 border border-yellow-800/50": variant === "warning",
          "bg-gradient-to-r from-[#3B7BF6]/20 to-[#00D4FF]/20 text-[#00D4FF] border border-[#3B7BF6]/30":
            variant === "premium",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
