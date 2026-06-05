import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Radio, Lock, CheckCircle2, Circle, Clock, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "VATSIM Mastery — Skye",
};

const modules = [
  {
    number: 1,
    title: "What is VATSIM and How It Works",
    lessonCount: 5,
    estimatedMinutes: 35,
    unlocked: true,
    completedLessons: 0,
    href: "/dashboard/vatsim/module-1/lesson-1",
  },
  {
    number: 2,
    title: "Setting Up Your Software (vPilot, xPilot)",
    lessonCount: 6,
    estimatedMinutes: 45,
    unlocked: true,
    completedLessons: 0,
    href: "#",
  },
  {
    number: 3,
    title: "Basic Radio Phraseology",
    lessonCount: 7,
    estimatedMinutes: 55,
    unlocked: false,
    completedLessons: 0,
    href: "#",
  },
  {
    number: 4,
    title: "Your First Flight on VATSIM",
    lessonCount: 6,
    estimatedMinutes: 50,
    unlocked: false,
    completedLessons: 0,
    href: "#",
  },
  {
    number: 5,
    title: "IFR Procedures and Flying with ATC",
    lessonCount: 7,
    estimatedMinutes: 60,
    unlocked: false,
    completedLessons: 0,
    href: "#",
  },
  {
    number: 6,
    title: "Advanced Operations — Oceanic, Holds, Approaches",
    lessonCount: 5,
    estimatedMinutes: 45,
    unlocked: false,
    completedLessons: 0,
    href: "#",
  },
];

const totalLessons = modules.reduce((s, m) => s + m.lessonCount, 0);
const completedLessons = modules.reduce((s, m) => s + m.completedLessons, 0);

export default function VatsimPage() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <Badge variant="cyan" className="mb-3">VATSIM Course</Badge>
        <h1 className="font-heading text-3xl font-bold text-white mb-2">VATSIM Mastery</h1>
        <p className="text-[#A0AEC0] max-w-2xl">
          Six modules taking you from never having pressed the PTT button to flying IFR on VATSIM with professional-quality radio calls and procedures.
        </p>
      </div>

      {/* Progress */}
      <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-heading font-semibold text-white">Your Progress</h2>
            <p className="text-[#A0AEC0] text-sm">
              {completedLessons} of {totalLessons} lessons completed
            </p>
          </div>
          <span className="font-heading text-2xl font-bold text-[#00D4FF]">
            {completedLessons === 0 ? "0" : Math.round((completedLessons / totalLessons) * 100)}%
          </span>
        </div>
        <ProgressBar value={completedLessons} max={totalLessons} color="cyan" />
        <div className="mt-4">
          <Link href="/dashboard/vatsim/module-1/lesson-1">
            <Button variant="primary" size="sm">
              <Radio size={14} className="mr-1.5" aria-hidden="true" />
              Start Module 1
            </Button>
          </Link>
        </div>
      </div>

      {/* Module list */}
      <h2 className="font-heading text-xl font-semibold text-white mb-4">All Modules</h2>
      <div className="space-y-3">
        {modules.map((mod) => {
          const isComplete = mod.completedLessons === mod.lessonCount && mod.lessonCount > 0;
          const isInProgress = mod.completedLessons > 0 && !isComplete;

          return (
            <div
              key={mod.number}
              className={`bg-[#111827] border rounded-xl p-5 transition-all duration-200 ${
                mod.unlocked
                  ? "border-[#1F2937] hover:border-[#00D4FF]/50 cursor-pointer"
                  : "border-[#1F2937] opacity-60"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  {!mod.unlocked ? (
                    <Lock size={20} className="text-[#A0AEC0]" aria-label="Locked" />
                  ) : isComplete ? (
                    <CheckCircle2 size={20} className="text-green-400" aria-label="Complete" />
                  ) : (
                    <Circle size={20} className="text-[#00D4FF]" aria-label="Not started" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-[#A0AEC0] uppercase tracking-wider">Module {mod.number}</span>
                    {isInProgress && (
                      <span className="text-xs bg-[#00D4FF]/10 text-[#00D4FF] px-2 py-0.5 rounded-full border border-[#00D4FF]/20">
                        In progress
                      </span>
                    )}
                  </div>
                  <h3 className={`font-heading font-semibold text-base ${mod.unlocked ? "text-white" : "text-[#A0AEC0]"}`}>
                    {mod.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1.5 text-xs text-[#A0AEC0]">
                      <BookOpen size={12} aria-hidden="true" />
                      {mod.lessonCount} lessons
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-[#A0AEC0]">
                      <Clock size={12} aria-hidden="true" />
                      ~{mod.estimatedMinutes} min
                    </span>
                  </div>
                </div>

                {mod.unlocked && mod.href !== "#" && (
                  <Link href={mod.href}>
                    <Button variant="outline" size="sm" className="border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF] hover:text-[#0A0E1A] hover:border-[#00D4FF] shrink-0">
                      {mod.completedLessons > 0 ? "Continue" : "Start"}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
