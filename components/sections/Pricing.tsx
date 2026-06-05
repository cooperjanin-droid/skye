import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Check, AlertTriangle } from "lucide-react";

const freePlan = {
  name: "Free",
  price: "$0",
  period: "forever",
  description: "Get started with news, the knowledge base, and a community account.",
  features: [
    "Access to all news articles",
    "Basic Knowledge Base",
    "Community account",
    "Email support",
  ],
  notIncluded: [
    "Airliner Copilot plugin",
    "Cessna 172 Instructor plugin",
    "Ground School course",
    "VATSIM Mastery course",
    "AI Instructor",
    "Community forum",
  ],
  cta: "Get Started Free",
  ctaHref: "/signup",
  highlighted: false,
};

const premiumPlan = {
  name: "Premium",
  price: "$14.99",
  annualPrice: "$9.99",
  period: "/month",
  annualNote: "$119/year (save 33%)",
  description: "Everything you need to level up your sim flying — plugin, courses, AI instructor, and community.",
  features: [
    "Airliner Copilot plugin (MSFS + X-Plane)",
    "Cessna 172 Instructor plugin (MSFS + X-Plane)",
    "Full Cessna 172 Ground School course",
    "Full VATSIM Mastery course",
    "AI Instructor chat",
    "Community forum access",
    "Priority email support",
    "New aircraft as they release",
    "All future courses included",
  ],
  cta: "Start Free Trial",
  ctaHref: "/signup",
  highlighted: true,
};

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0D1120]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="cyan" className="mb-4">Pricing</Badge>
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#A0AEC0] max-w-xl mx-auto">
            Start free, upgrade when you are ready to take your sim flying to the next level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Free plan */}
          <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-bold text-white mb-1">{freePlan.name}</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="font-heading text-4xl font-bold text-white">{freePlan.price}</span>
              <span className="text-[#A0AEC0] text-sm">{freePlan.period}</span>
            </div>
            <p className="text-[#A0AEC0] text-sm mb-6">{freePlan.description}</p>

            <Link href={freePlan.ctaHref}>
              <Button variant="secondary" size="lg" className="w-full mb-8">
                {freePlan.cta}
              </Button>
            </Link>

            <ul className="space-y-3">
              {freePlan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-[#A0AEC0]">
                  <Check size={15} className="text-green-400 shrink-0" />
                  {f}
                </li>
              ))}
              {freePlan.notIncluded.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-[#A0AEC0]/50 line-through">
                  <span className="w-3.5 h-3.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium plan */}
          <div className="relative bg-gradient-to-b from-[#111827] to-[#0F1826] border-2 border-[#3B7BF6] rounded-2xl p-8 shadow-2xl shadow-blue-900/30">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge variant="premium" className="px-4 py-1 text-sm">Most Popular</Badge>
            </div>

            <h3 className="font-heading text-2xl font-bold text-white mb-1">{premiumPlan.name}</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="font-heading text-4xl font-bold text-white">{premiumPlan.price}</span>
              <span className="text-[#A0AEC0] text-sm">{premiumPlan.period}</span>
            </div>
            <p className="text-[#3B7BF6] text-xs mb-2">{premiumPlan.annualNote}</p>
            <p className="text-[#A0AEC0] text-sm mb-6">{premiumPlan.description}</p>

            <Link href={premiumPlan.ctaHref}>
              <Button variant="primary" size="lg" className="w-full mb-8">
                {premiumPlan.cta}
              </Button>
            </Link>

            <ul className="space-y-3">
              {premiumPlan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-[#A0AEC0]">
                  <Check size={15} className="text-[#3B7BF6] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cancellation warning */}
        <div className="mt-8 bg-yellow-900/10 border border-yellow-800/30 rounded-xl p-5 flex items-start gap-4">
          <AlertTriangle size={18} className="text-yellow-400 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-medium text-yellow-400 text-sm mb-1">Plugin Deactivation on Cancellation</p>
            <p className="text-[#A0AEC0] text-sm">
              The Skye plugin requires an active Premium subscription to function inside MSFS and X-Plane. If you cancel your subscription, the plugin will stop working at the end of your current billing period. Your account and progress are retained — simply resubscribe to reactivate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
