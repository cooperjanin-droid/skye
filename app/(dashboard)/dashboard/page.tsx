import type { Metadata } from "next";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
  TrendingUp,
  BookOpen,
  Plug,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Dashboard — Skye",
};

const statCards = [
  {
    label: "Course Progress",
    value: "12%",
    sub: "Ground School",
    icon: TrendingUp,
    color: "text-[#3B7BF6]",
    bg: "bg-[#3B7BF6]/10",
  },
  {
    label: "Lessons Completed",
    value: "3",
    sub: "of 48 total",
    icon: BookOpen,
    color: "text-[#00D4FF]",
    bg: "bg-[#00D4FF]/10",
  },
  {
    label: "Plugin Status",
    value: "Active",
    sub: "MSFS + X-Plane",
    icon: Plug,
    color: "text-green-400",
    bg: "bg-green-900/20",
  },
  {
    label: "Community Posts",
    value: "0",
    sub: "Join the forum",
    icon: MessageSquare,
    color: "text-[#A0AEC0]",
    bg: "bg-[#1F2937]",
  },
];

const quickActions = [
  { label: "Continue Ground School", href: "/dashboard/ground-school", icon: BookOpen, primary: true },
  { label: "Download Plugin", href: "/dashboard/plugins", icon: Plug, primary: false },
  { label: "Start VATSIM Course", href: "/dashboard/vatsim", icon: BookOpen, primary: false },
];

const recentActivity = [
  { label: "Completed: How Wings Generate Lift (Lesson 1)", time: "2 hours ago", done: true },
  { label: "Started: Ground School Chapter 1", time: "2 hours ago", done: false },
  { label: "Account created", time: "Today", done: true },
];

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const displayName =
    user?.user_metadata?.full_name ||
    user?.email?.split("@")[0] ||
    "Pilot";

  return (
    <div className="p-8">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-white mb-1">
          Welcome back, {displayName}
        </h1>
        <p className="text-[#A0AEC0]">Here&apos;s where you left off.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="bg-[#111827] border border-[#1F2937] rounded-xl p-5">
              <div className={`w-10 h-10 rounded-lg ${card.bg} flex items-center justify-center mb-4`}>
                <Icon size={18} className={card.color} aria-hidden="true" />
              </div>
              <p className="font-heading text-2xl font-bold text-white">{card.value}</p>
              <p className="text-sm text-white font-medium">{card.label}</p>
              <p className="text-xs text-[#A0AEC0] mt-0.5">{card.sub}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Course progress */}
        <div className="lg:col-span-2 bg-[#111827] border border-[#1F2937] rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-semibold text-white">Course Progress</h2>
            <Link href="/dashboard/ground-school" className="text-xs text-[#3B7BF6] hover:text-[#00D4FF] transition-colors flex items-center gap-1">
              View all <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white font-medium">Cessna 172 Ground School</span>
                <span className="text-[#A0AEC0]">3 / 48 lessons</span>
              </div>
              <ProgressBar value={3} max={48} color="accent" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white font-medium">VATSIM Mastery</span>
                <span className="text-[#A0AEC0]">0 / 36 lessons</span>
              </div>
              <ProgressBar value={0} max={36} color="cyan" />
            </div>
          </div>

          <div className="mt-6">
            <Link href="/dashboard/ground-school/chapter-1/lesson-1">
              <Button variant="primary" size="sm">
                <BookOpen size={14} className="mr-1.5" aria-hidden="true" />
                Continue: How Wings Generate Lift
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick actions */}
        <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-6">
          <h2 className="font-heading font-semibold text-white mb-4">Quick Actions</h2>
          <div className="space-y-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link key={action.label} href={action.href}>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1F2937] transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-lg bg-[#3B7BF6]/10 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-[#3B7BF6]" aria-hidden="true" />
                    </div>
                    <span className="text-sm text-[#A0AEC0] group-hover:text-white transition-colors">
                      {action.label}
                    </span>
                    <ArrowRight size={14} className="text-[#A0AEC0] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent activity */}
        <div className="lg:col-span-3 bg-[#111827] border border-[#1F2937] rounded-xl p-6">
          <h2 className="font-heading font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                {item.done ? (
                  <CheckCircle2 size={16} className="text-green-400 shrink-0" aria-hidden="true" />
                ) : (
                  <Clock size={16} className="text-[#3B7BF6] shrink-0" aria-hidden="true" />
                )}
                <span className="text-sm text-[#A0AEC0] flex-1">{item.label}</span>
                <span className="text-xs text-[#A0AEC0]">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
