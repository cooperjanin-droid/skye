import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ChapterList, type Chapter } from "@/components/course/ChapterList";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Ground School — Skye",
};

const chapters: Chapter[] = [
  {
    number: 1,
    title: "Aerodynamics and How Flight Works",
    lessonCount: 6,
    estimatedMinutes: 45,
    unlocked: true,
    completedLessons: 1,
  },
  {
    number: 2,
    title: "The Cessna 172 — Cockpit and Systems",
    lessonCount: 7,
    estimatedMinutes: 55,
    unlocked: true,
    completedLessons: 0,
  },
  {
    number: 3,
    title: "Weather and How It Affects Flight",
    lessonCount: 5,
    estimatedMinutes: 40,
    unlocked: false,
    completedLessons: 0,
  },
  {
    number: 4,
    title: "Navigation Fundamentals",
    lessonCount: 6,
    estimatedMinutes: 50,
    unlocked: false,
    completedLessons: 0,
  },
  {
    number: 5,
    title: "Radio Communications",
    lessonCount: 5,
    estimatedMinutes: 35,
    unlocked: false,
    completedLessons: 0,
  },
  {
    number: 6,
    title: "Airport Operations",
    lessonCount: 5,
    estimatedMinutes: 40,
    unlocked: false,
    completedLessons: 0,
  },
  {
    number: 7,
    title: "Flight Maneuvers and Procedures",
    lessonCount: 7,
    estimatedMinutes: 60,
    unlocked: false,
    completedLessons: 0,
  },
  {
    number: 8,
    title: "Checkride Prep and Practical Test Standards",
    lessonCount: 7,
    estimatedMinutes: 55,
    unlocked: false,
    completedLessons: 0,
  },
];

const totalLessons = chapters.reduce((sum, c) => sum + c.lessonCount, 0);
const completedLessons = chapters.reduce((sum, c) => sum + c.completedLessons, 0);

export default function GroundSchoolPage() {
  return (
    <div className="p-8 max-w-4xl">
      {/* Course header */}
      <div className="mb-8">
        <Badge variant="accent" className="mb-3">Ground School</Badge>
        <h1 className="font-heading text-3xl font-bold text-white mb-2">
          Cessna 172 Ground School
        </h1>
        <p className="text-[#A0AEC0] max-w-2xl">
          Eight structured chapters covering everything from aerodynamics to checkride prep. Learn at your own pace — each chapter builds on the last.
        </p>
      </div>

      {/* Overall progress */}
      <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-heading font-semibold text-white">Your Progress</h2>
            <p className="text-[#A0AEC0] text-sm">
              {completedLessons} of {totalLessons} lessons completed
            </p>
          </div>
          <span className="font-heading text-2xl font-bold text-[#3B7BF6]">
            {Math.round((completedLessons / totalLessons) * 100)}%
          </span>
        </div>
        <ProgressBar value={completedLessons} max={totalLessons} color="accent" />

        <div className="mt-4">
          <Link href="/dashboard/ground-school/chapter-1/lesson-1">
            <Button variant="primary" size="sm">
              <BookOpen size={14} className="mr-1.5" aria-hidden="true" />
              Continue Learning
            </Button>
          </Link>
        </div>
      </div>

      {/* Chapter list */}
      <h2 className="font-heading text-xl font-semibold text-white mb-4">All Chapters</h2>
      <ChapterList chapters={chapters} basePath="/dashboard/ground-school" />
    </div>
  );
}
