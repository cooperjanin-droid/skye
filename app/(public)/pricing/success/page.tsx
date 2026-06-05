import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { CheckCircle2, Download, BookOpen, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Welcome to Premium — Skye",
};

const nextSteps = [
  {
    step: 1,
    icon: Download,
    title: "Download & Activate Your Plugin",
    description:
      "Head to My Plugins in your dashboard to download the Airliner Copilot and Cessna 172 Instructor for MSFS or X-Plane. Your licence key is already generated and waiting.",
    href: "/dashboard/plugins",
    cta: "Go to Plugins",
  },
  {
    step: 2,
    icon: BookOpen,
    title: "Start Ground School",
    description:
      "Begin Chapter 1 of the Cessna 172 Ground School. Each lesson takes 10–20 minutes and builds on the last. You can pick up wherever you left off at any time.",
    href: "/dashboard/ground-school",
    cta: "Start Learning",
  },
  {
    step: 3,
    icon: Users,
    title: "Join the Community Forum",
    description:
      "Introduce yourself in the forum, ask questions, share your flights, and connect with other Skye members. The community is the best place for tips and add-on recommendations.",
    href: "/dashboard/forum",
    cta: "Go to Forum",
  },
];

export default function PricingSuccessPage() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Success icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-900/20 border border-green-800/40 flex items-center justify-center">
            <CheckCircle2 size={40} className="text-green-400" aria-hidden="true" />
          </div>
        </div>

        <h1 className="font-heading text-4xl font-bold text-white mb-3">
          Welcome to Skye Premium!
        </h1>
        <p className="text-[#A0AEC0] text-lg mb-12">
          Your subscription is active. Here is how to get started:
        </p>

        {/* Steps */}
        <div className="space-y-4 mb-12 text-left">
          {nextSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 flex items-start gap-5"
              >
                <div className="w-10 h-10 rounded-full bg-[#3B7BF6]/10 border border-[#3B7BF6]/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#3B7BF6]" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-[#A0AEC0] font-medium">Step {step.step}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-[#A0AEC0] text-sm leading-relaxed mb-3">{step.description}</p>
                  <Link href={step.href}>
                    <Button variant="primary" size="sm">{step.cta}</Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <Link href="/dashboard">
          <Button variant="secondary" size="lg">Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
