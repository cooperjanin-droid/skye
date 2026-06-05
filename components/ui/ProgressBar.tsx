import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
  color?: "accent" | "cyan" | "green";
}

export function ProgressBar({
  value,
  max = 100,
  className,
  showLabel = false,
  color = "accent",
}: ProgressBarProps) {
  const percent = Math.round((value / max) * 100);

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between text-xs text-[#A0AEC0] mb-1">
          <span>Progress</span>
          <span>{percent}%</span>
        </div>
      )}
      <div className="w-full bg-[#1F2937] rounded-full h-2 overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all duration-500", {
            "bg-[#3B7BF6]": color === "accent",
            "bg-[#00D4FF]": color === "cyan",
            "bg-green-500": color === "green",
          })}
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
}
