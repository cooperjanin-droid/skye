"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Puzzle,
  BookOpen,
  Radio,
  Bot,
  Newspaper,
  Library,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/dashboard/plugins", label: "My Plugins", icon: Puzzle },
  { href: "/dashboard/ground-school", label: "Ground School", icon: BookOpen },
  { href: "/dashboard/vatsim", label: "VATSIM Course", icon: Radio },
  { href: "/dashboard/ai-instructor", label: "AI Instructor", icon: Bot },
  { href: "/news", label: "News", icon: Newspaper },
  { href: "/knowledge", label: "Knowledge Base", icon: Library },
  { href: "/dashboard/forum", label: "Forum", icon: Users },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <aside className="w-64 min-h-screen bg-[#111827] border-r border-[#1F2937] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#1F2937]">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold text-lg text-white hover:text-[#3B7BF6] transition-colors">
          <span aria-hidden="true">✈</span>
          <span>Skye</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1" aria-label="Dashboard navigation">
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150",
                isActive
                  ? "bg-[#3B7BF6]/10 text-[#3B7BF6] border border-[#3B7BF6]/20"
                  : "text-[#A0AEC0] hover:text-white hover:bg-[#1F2937]"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon size={18} aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="p-4 border-t border-[#1F2937] space-y-3">
        <div className="bg-gradient-to-r from-[#3B7BF6]/10 to-[#00D4FF]/10 border border-[#3B7BF6]/20 rounded-lg p-4">
          <p className="text-xs text-[#A0AEC0] mb-2">Plugin Status</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white font-medium">Active</span>
          </div>
        </div>

        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#A0AEC0] hover:text-red-400 hover:bg-red-900/10 transition-all duration-150"
        >
          <LogOut size={18} aria-hidden="true" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
