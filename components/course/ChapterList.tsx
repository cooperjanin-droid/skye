import { Lock, CheckCircle2, Circle, Clock, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Chapter {
  number: number;
  title: string;
  lessonCount: number;
  estimatedMinutes: number;
  unlocked: boolean;
  completedLessons: number;
}

interface ChapterListProps {
  chapters: Chapter[];
  basePath?: string;
}

export function ChapterList({ chapters }: ChapterListProps) {
  return (
    <div className="space-y-3">
      {chapters.map((chapter) => {
        const isComplete = chapter.completedLessons === chapter.lessonCount && chapter.lessonCount > 0;
        const isInProgress = chapter.completedLessons > 0 && !isComplete;

        return (
          <div
            key={chapter.number}
            className={cn(
              "bg-[#111827] border rounded-xl p-5 transition-all duration-200",
              chapter.unlocked
                ? "border-[#1F2937] hover:border-[#3B7BF6]/50 cursor-pointer"
                : "border-[#1F2937] opacity-60"
            )}
          >
            <div className="flex items-center gap-4">
              {/* Status icon */}
              <div className="shrink-0">
                {!chapter.unlocked ? (
                  <Lock size={20} className="text-[#A0AEC0]" aria-label="Locked" />
                ) : isComplete ? (
                  <CheckCircle2 size={20} className="text-green-400" aria-label="Complete" />
                ) : (
                  <Circle size={20} className="text-[#3B7BF6]" aria-label="Not started" />
                )}
              </div>

              {/* Chapter info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-[#A0AEC0] uppercase tracking-wider">
                    Chapter {chapter.number}
                  </span>
                  {isInProgress && (
                    <span className="text-xs bg-[#3B7BF6]/10 text-[#3B7BF6] px-2 py-0.5 rounded-full border border-[#3B7BF6]/20">
                      In progress
                    </span>
                  )}
                </div>
                <h3 className={cn(
                  "font-heading font-semibold text-base",
                  chapter.unlocked ? "text-white" : "text-[#A0AEC0]"
                )}>
                  {chapter.title}
                </h3>

                <div className="flex items-center gap-4 mt-2">
                  <span className="flex items-center gap-1.5 text-xs text-[#A0AEC0]">
                    <BookOpen size={12} aria-hidden="true" />
                    {chapter.lessonCount} lessons
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[#A0AEC0]">
                    <Clock size={12} aria-hidden="true" />
                    ~{chapter.estimatedMinutes} min
                  </span>
                </div>
              </div>

              {/* Progress */}
              {chapter.unlocked && chapter.lessonCount > 0 && (
                <div className="text-right shrink-0">
                  <p className="text-xs text-[#A0AEC0]">
                    {chapter.completedLessons}/{chapter.lessonCount}
                  </p>
                  <div className="w-16 bg-[#1F2937] rounded-full h-1.5 mt-1">
                    <div
                      className="bg-[#3B7BF6] h-full rounded-full"
                      style={{
                        width: `${(chapter.completedLessons / chapter.lessonCount) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
