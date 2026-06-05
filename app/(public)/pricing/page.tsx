"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Check, X, AlertTriangle, ChevronDown } from "lucide-react";

const features = [
  { label: "News & announcements", free: true, premium: true },
  { label: "Basic Knowledge Base", free: true, premium: true },
  { label: "Community account", free: true, premium: true },
  { label: "Email support", free: true, premium: true },
  { label: "Airliner Copilot plugin (MSFS)", free: false, premium: true },
  { label: "Airliner Copilot plugin (X-Plane)", free: false, premium: true },
  { label: "Cessna 172 Instructor plugin (MSFS)", free: false, premium: true },
  { label: "Cessna 172 Instructor plugin (X-Plane)", free: false, premium: true },
  { label: "Cessna 172 Ground School course", free: false, premium: true },
  { label: "VATSIM Mastery course", free: false, premium: true },
  { label: "AI Instructor chat", free: false, premium: true },
  { label: "Community forum access", free: false, premium: true },
  { label: "Priority support", free: false, premium: true },
  { label: "New aircraft updates", free: false, premium: true },
  { label: "All future courses", free: false, premium: true },
];

const faqs = [
  {
    q: "What simulators does the plugin support?",
    a: "The Skye plugin supports Microsoft Flight Simulator 2020, Microsoft Flight Simulator 2024, X-Plane 11, and X-Plane 12. Both the Airliner Copilot and Cessna 172 Instructor are available for each simulator.",
  },
  {
    q: "What happens to the plugin if I cancel my subscription?",
    a: "The plugin requires an active Premium subscription to function. If you cancel, the plugin will stop working at the end of your current billing period. Your account, course progress, and settings are all saved — simply resubscribe to reactivate everything.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. You can sign up for free and explore the News hub and Knowledge Base without entering a credit card. When you are ready to access the plugin and courses, upgrade to Premium.",
  },
  {
    q: "Can I switch between monthly and annual billing?",
    a: "Yes. You can switch from monthly to annual billing at any time. The change takes effect at your next renewal date, and you will immediately receive the discounted rate.",
  },
  {
    q: "Which aircraft are supported by the Airliner Copilot?",
    a: "Currently supported: Boeing 737 (Zibo 738 for X-Plane, PMDG 737-700/800/900 for MSFS), Airbus A320 family (FlyByWire A32NX and Fenix A320 for MSFS; ToLiss A319, A320, and A321 for X-Plane). More aircraft are added regularly.",
  },
  {
    q: "Do the courses lead to a real aviation qualification?",
    a: "No. Skye's courses are educational content for flight simulation enthusiasts. The Ground School covers the same topics as real PPL training and is accurate to FAA standards, but completing it does not substitute for an actual FAA ground school or certificate.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer a 7-day money-back guarantee on new Premium subscriptions. If you are not satisfied, contact support within 7 days of your first payment and we will refund you in full, no questions asked.",
  },
  {
    q: "Can I use Skye on more than one computer?",
    a: "Yes. Your licence key can be activated on up to two computers simultaneously — useful if you fly on a desktop and a laptop.",
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#1F2937] rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#111827] transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-white text-sm">{q}</span>
        <ChevronDown
          size={16}
          className={`text-[#A0AEC0] transition-transform duration-200 shrink-0 ml-4 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-[#A0AEC0] text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="py-20 text-center border-b border-[#1F2937]">
        <Badge variant="cyan" className="mb-4">Pricing</Badge>
        <h1 className="font-heading text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
        <p className="text-[#A0AEC0] max-w-xl mx-auto mb-8">
          One plan, everything included. Cancel any time.
        </p>

        {/* Monthly/Annual toggle */}
        <div className="inline-flex items-center gap-3 bg-[#111827] border border-[#1F2937] rounded-xl p-1">
          <button
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              !annual ? "bg-[#3B7BF6] text-white" : "text-[#A0AEC0] hover:text-white"
            }`}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              annual ? "bg-[#3B7BF6] text-white" : "text-[#A0AEC0] hover:text-white"
            }`}
            onClick={() => setAnnual(true)}
          >
            Annual
            <span className="ml-2 text-xs bg-green-900/50 text-green-400 px-1.5 py-0.5 rounded-full border border-green-800/50">
              Save 33%
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Plan cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Free */}
          <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-1">Free</h2>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-heading text-4xl font-bold text-white">$0</span>
              <span className="text-[#A0AEC0] text-sm">/ forever</span>
            </div>
            <p className="text-[#A0AEC0] text-sm mb-6">News, knowledge base, and a community account.</p>
            <Link href="/signup">
              <Button variant="secondary" size="lg" className="w-full">Get Started Free</Button>
            </Link>
          </div>

          {/* Premium */}
          <div className="relative bg-[#111827] border-2 border-[#3B7BF6] rounded-2xl p-8 shadow-2xl shadow-blue-900/30">
            <div className="absolute -top-4 left-6">
              <Badge variant="premium" className="px-4 py-1">Most Popular</Badge>
            </div>
            <h2 className="font-heading text-2xl font-bold text-white mb-1">Premium</h2>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="font-heading text-4xl font-bold text-white">
                {annual ? "$9.99" : "$14.99"}
              </span>
              <span className="text-[#A0AEC0] text-sm">/ month</span>
            </div>
            {annual && (
              <p className="text-green-400 text-xs mb-1">Billed as $119/year</p>
            )}
            <p className="text-[#A0AEC0] text-sm mb-6">Everything — plugin, courses, AI instructor, forum.</p>
            <Link href="/signup">
              <Button variant="primary" size="lg" className="w-full">Start Free Trial</Button>
            </Link>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-white mb-6 text-center">Full Feature Comparison</h2>
          <div className="bg-[#111827] border border-[#1F2937] rounded-2xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 border-b border-[#1F2937] px-6 py-4">
              <div className="text-sm font-semibold text-[#A0AEC0]">Feature</div>
              <div className="text-sm font-semibold text-[#A0AEC0] text-center">Free</div>
              <div className="text-sm font-semibold text-[#3B7BF6] text-center">Premium</div>
            </div>
            {features.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 px-6 py-3.5 items-center ${
                  i % 2 === 0 ? "bg-[#111827]" : "bg-[#0F1520]"
                }`}
              >
                <span className="text-sm text-[#A0AEC0]">{row.label}</span>
                <div className="flex justify-center">
                  {row.free ? (
                    <Check size={16} className="text-green-400" aria-label="Included" />
                  ) : (
                    <X size={16} className="text-[#1F2937]" aria-label="Not included" />
                  )}
                </div>
                <div className="flex justify-center">
                  {row.premium ? (
                    <Check size={16} className="text-[#3B7BF6]" aria-label="Included" />
                  ) : (
                    <X size={16} className="text-[#1F2937]" aria-label="Not included" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plugin deactivation notice */}
        <div className="mb-16 bg-yellow-900/10 border border-yellow-800/30 rounded-xl p-6 flex items-start gap-4">
          <AlertTriangle size={20} className="text-yellow-400 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h3 className="font-semibold text-yellow-400 mb-2">Plugin Deactivation on Cancellation</h3>
            <p className="text-[#A0AEC0] text-sm leading-relaxed">
              The Skye plugin requires an active Premium subscription to function inside MSFS and X-Plane. Cancelling your subscription will deactivate the plugin at the end of your current billing period. Your licence key, course progress, and account data are all retained — resubscribe at any time to restore full access.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQ key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
