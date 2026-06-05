import Link from "next/link";
import { CheckCircle2, Circle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Lesson {
  number: number;
  title: string;
  durationMinutes: number;
  completed: boolean;
  locked: boolean;
  href: string;
}

interface LessonSidebarProps {
  chapterTitle: string;
  lessons: Lesson[];
  currentLessonNumber: number;
}

export function LessonSidebar({ chapterTitle, lessons, currentLessonNumber }: LessonSidebarProps) {
  return (
    <aside className="w-72 shrink-0 bg-[#111827] border-r border-[#1F2937] flex flex-col min-h-full">
      <div className="p-5 border-b border-[#1F2937]">
        <p className="text-xs text-[#A0AEC0] uppercase tracking-wider mb-1">Course</p>
        <h2 className="font-heading font-semibold text-white text-sm">{chapterTitle}</h2>
      </div>

      <nav className="flex-1 p-3 space-y-1" aria-label="Lesson navigation">
        {lessons.map((lesson) => {
          const isCurrent = lesson.number === currentLessonNumber;

          return (
            <Link
              key={lesson.number}
              href={lesson.locked ? "#" : lesson.href}
              className={cn(
                "flex items-start gap-3 px-3 py-3 rounded-lg text-sm transition-all duration-150",
                isCurrent
                  ? "bg-[#3B7BF6]/10 border border-[#3B7BF6]/20 text-white"
                  : lesson.locked
                  ? "text-[#A0AEC0]/50 cursor-not-allowed"
                  : "text-[#A0AEC0] hover:text-white hover:bg-[#1F2937]"
              )}
              aria-current={isCurrent ? "page" : undefined}
              aria-disabled={lesson.locked}
            >
              <div className="mt-0.5 shrink-0">
                {lesson.locked ? (
                  <Lock size={14} className="text-[#A0AEC0]/50" />
                ) : lesson.completed ? (
                  <CheckCircle2 size={14} className="text-green-400" />
                ) : (
                  <Circle size={14} className={isCurrent ? "text-[#3B7BF6]" : "text-[#A0AEC0]"} />
                )}
              </div>
              <div>
                <p className={cn("font-medium leading-tight", isCurrent && "text-white")}>
                  {lesson.number}. {lesson.title}
                </p>
                <p className="text-xs text-[#A0AEC0] mt-0.5">{lesson.durationMinutes} min</p>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
