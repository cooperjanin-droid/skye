import Link from "next/link";
import { Bot, ChevronLeft, ChevronRight, CheckSquare } from "lucide-react";
import Button from "@/components/ui/Button";

interface LessonLayoutProps {
  lessonTitle: string;
  chapterTitle: string;
  prevHref?: string;
  nextHref?: string;
  children: React.ReactNode;
}

export function LessonLayout({
  lessonTitle,
  chapterTitle,
  prevHref,
  nextHref,
  children,
}: LessonLayoutProps) {
  return (
    <main className="flex-1 overflow-y-auto">
      {/* Lesson header */}
      <div className="border-b border-[#1F2937] px-8 py-6">
        <p className="text-xs text-[#A0AEC0] uppercase tracking-wider mb-1">{chapterTitle}</p>
        <h1 className="font-heading text-2xl font-bold text-white">{lessonTitle}</h1>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-8 py-10">
        <article className="prose prose-invert prose-sm max-w-none">
          {children}
        </article>

        {/* AI Instructor button */}
        <div className="mt-12 bg-gradient-to-r from-[#3B7BF6]/10 to-[#00D4FF]/10 border border-[#3B7BF6]/20 rounded-xl p-6 flex items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Bot size={18} className="text-[#3B7BF6]" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-white text-sm">Ask the AI Instructor</h3>
            </div>
            <p className="text-[#A0AEC0] text-xs">
              Have a question about this lesson? Ask Skye and get an instant, detailed answer.
            </p>
          </div>
          <Button variant="primary" size="sm" className="shrink-0" disabled>
            Coming in Phase 5
          </Button>
        </div>

        {/* Navigation & complete */}
        <div className="mt-8 flex items-center justify-between">
          <div>
            {prevHref ? (
              <Link href={prevHref}>
                <Button variant="secondary" size="sm">
                  <ChevronLeft size={16} className="mr-1" aria-hidden="true" />
                  Previous Lesson
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>

          <Button variant="outline" size="sm">
            <CheckSquare size={16} className="mr-1.5" aria-hidden="true" />
            Mark as Complete
          </Button>

          <div>
            {nextHref ? (
              <Link href={nextHref}>
                <Button variant="primary" size="sm">
                  Next Lesson
                  <ChevronRight size={16} className="ml-1" aria-hidden="true" />
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
