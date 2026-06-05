import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Features — Skye",
  description: "Every feature Skye offers: AI co-pilot plugin, ground school, VATSIM course, and more.",
};

const featureSections = [
  {
    tag: "In-Simulator Plugin",
    title: "A Real AI Co-Pilot — Inside the Sim",
    description:
      "Skye runs as a native panel inside Microsoft Flight Simulator and X-Plane. There is no alt-tabbing, no second screen, and no voice-recognition gimmick. It integrates directly with the simulator's data bus to read your aircraft state in real time.",
    features: [
      "Reads live aircraft data: airspeed, altitude, heading, engine state, flap/gear position",
      "Calls standard callouts: V1, rotate, positive rate, 1000 ft, minimums",
      "Interactive checklist system — call each item, Skye responds",
      "Abnormal procedure support — engine fire, hydraulic failure, pressurisation loss",
      "ATIS and weather briefing built into the panel",
      "Compatible with VATSIM and IVAO — handles radio comms for you",
    ],
    reversed: false,
    color: "accent" as const,
    emoji: "🛫",
  },
  {
    tag: "Airliner Copilot",
    title: "Master Complex Airliners",
    description:
      "Flying the PMDG 737 or Fenix A320 is incredibly rewarding — but the systems depth is steep. Skye's Airliner Copilot acts as your first officer, handling tasks you would normally need a real crew for, while teaching you the correct procedures as you go.",
    features: [
      "Full MCDU/FMC programming walkthrough for each supported aircraft",
      "Standard Operating Procedure (SOP) checklists for every phase of flight",
      "Takeoff performance callouts matched to your actual flap and thrust setting",
      "STAR and approach briefings read aloud from the loaded flight plan",
      "One-click automatic ATIS fetch for departure and destination",
      "Supports Boeing 737 (Zibo, PMDG), Airbus A320 family (FlyByWire, Fenix, ToLiss)",
    ],
    reversed: true,
    color: "cyan" as const,
    emoji: "✈",
  },
  {
    tag: "Cessna 172 Instructor",
    title: "Build Real Pilot Skills in the Sim",
    description:
      "The Cessna 172 Instructor is designed for student pilots and those who want to build genuine airmanship inside the simulator. It provides the kind of real-time feedback a CFI would give — without booking a lesson.",
    features: [
      "Bank angle, pitch, and coordination coaching in real time",
      "Traffic pattern guidance — crosswind, downwind, base, final",
      "Approach speed coaching: not-too-fast, not-too-slow callouts",
      "Full simulated engine failure and emergency procedures",
      "Radio phraseology drills matched to your current phase of flight",
      "VFR flight planning assistance and weather go/no-go decisions",
    ],
    reversed: false,
    color: "accent" as const,
    emoji: "🛩",
  },
  {
    tag: "Cessna 172 Ground School",
    title: "Structured Online Ground School",
    description:
      "Eight chapters covering everything from the basics of aerodynamics to checkride prep. Written for sim pilots but grounded in real-world FAA knowledge. Whether you are studying for a real PPL or just want to fly more realistically in the sim, this course gets you there.",
    features: [
      "8 chapters, 40+ lessons — structured and progressive",
      "Aerodynamics, cockpit systems, weather, navigation, and radio communications",
      "Traffic pattern and airport operations",
      "Emergency procedures and airspace awareness",
      "Checkride prep matched to the FAA Airman Certification Standards (ACS)",
      "All content accessible on any device, at your own pace",
    ],
    reversed: true,
    color: "cyan" as const,
    emoji: "📚",
  },
  {
    tag: "VATSIM Mastery Course",
    title: "Fly Online with Confidence",
    description:
      "VATSIM is one of the best experiences in flight simulation — but first flights online can be intimidating. Skye's VATSIM Mastery course takes you from never having pressed the PTT button to flying IFR in controlled airspace with professional-quality phraseology.",
    features: [
      "6 modules from beginner to advanced operations",
      "vPilot (MSFS) and xPilot (X-Plane) setup guides with screenshots",
      "Standard ICAO and FAA phraseology for every situation",
      "Full walkthroughs: pushback, taxi, takeoff, cruise, approach, landing",
      "IFR SIDs, STARs, clearances, and ATC coordination",
      "Advanced topics: oceanic tracks, holds, complex approaches",
    ],
    reversed: false,
    color: "accent" as const,
    emoji: "🎙",
  },
  {
    tag: "AI Instructor",
    title: "Ask Anything, Get a Real Answer",
    description:
      "Every lesson and every flight has questions. Skye's AI Instructor is available at the bottom of every course lesson and inside the plugin panel. Ask about a procedure, a system, an aviation regulation — and get a detailed, accurate answer in plain English.",
    features: [
      "Context-aware: knows which lesson or aircraft you are currently using",
      "Covers all supported aircraft systems in depth",
      "Explains FAA and EASA procedures and regulations",
      "Available inside the plugin during flight",
      "Available at the bottom of every course lesson",
      "Answers backed by real aviation references",
    ],
    reversed: true,
    color: "cyan" as const,
    emoji: "🤖",
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="py-20 text-center border-b border-[#1F2937] bg-[#0A0E1A]">
        <Badge variant="accent" className="mb-4">Features</Badge>
        <h1 className="font-heading text-5xl font-bold text-white mb-4">
          Everything Skye Offers
        </h1>
        <p className="text-[#A0AEC0] max-w-2xl mx-auto text-lg">
          One subscription. A live AI co-pilot plugin, structured ground school, VATSIM training, and an AI instructor — all built for sim pilots.
        </p>
      </div>

      {/* Feature sections — alternating layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {featureSections.map((section) => (
          <div
            key={section.title}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              section.reversed ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Text */}
            <div>
              <Badge variant={section.color} className="mb-4">{section.tag}</Badge>
              <h2 className="font-heading text-3xl font-bold text-white mb-4">{section.title}</h2>
              <p className="text-[#A0AEC0] leading-relaxed mb-6">{section.description}</p>
              <ul className="space-y-3">
                {section.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#A0AEC0]">
                    <Check size={15} className="text-[#3B7BF6] mt-0.5 shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual placeholder — cockpit-style panel */}
            <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-10 flex flex-col items-center justify-center min-h-64 gap-4">
              <span className="text-6xl" aria-hidden="true">{section.emoji}</span>
              <p className="font-heading font-semibold text-white text-center">{section.tag}</p>
              <p className="text-[#A0AEC0] text-sm text-center">{section.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
