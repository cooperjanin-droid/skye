import { Badge } from "@/components/ui/Badge";
import { Check } from "lucide-react";

const plugins = [
  {
    title: "Airliner Copilot",
    description:
      "A fully interactive AI first officer that handles real checklist flows, calls out system states, manages the MCDU/FMC with you, and responds to your commands during every phase of flight.",
    aircraft: ["Boeing 737 (Zibo, PMDG)", "Airbus A320 (FlyByWire A32NX)", "Fenix A320", "ToLiss A319, A320, A321", "Default MSFS airliners"],
    capabilities: [
      "Read and call checklists in real time",
      "Monitor aircraft systems and alert on abnormals",
      "First-officer radio calls on VATSIM and IVAO",
      "Step-by-step MCDU/FMC programming guidance",
      "Approach briefings and landing callouts",
    ],
    color: "accent" as const,
    icon: "✈",
  },
  {
    title: "Cessna 172 Instructor",
    description:
      "A virtual flight instructor riding along in the right seat. Perfect for student pilots building real-world skills inside the sim — from preflight to touchdown.",
    aircraft: ["Cessna 172 (default MSFS)", "Cessna 172 (default X-Plane 11/12)", "X-Plane Laminar C172"],
    capabilities: [
      "Real-time coaching on attitude and coordination",
      "Traffic pattern and approach guidance",
      "Emergency procedure walkthroughs",
      "Radio phraseology coaching",
      "Full VFR flight planning assistance",
    ],
    color: "cyan" as const,
    icon: "🛩",
  },
];

export function PluginShowcase() {
  return (
    <section id="plugins" className="py-24 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="accent" className="mb-4">In-Simulator Plugin</Badge>
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Your AI Co-Pilot Inside the Sim
          </h2>
          <p className="text-[#A0AEC0] max-w-2xl mx-auto">
            Skye runs as a native panel inside MSFS and X-Plane. No alt-tabbing. No second screen required.
          </p>
        </div>

        {/* Plugin cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {plugins.map((plugin) => (
            <div
              key={plugin.title}
              className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8 hover:border-[#3B7BF6]/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-3xl mb-3 block" aria-hidden="true">{plugin.icon}</span>
                  <h3 className="font-heading text-2xl font-bold text-white">{plugin.title}</h3>
                </div>
                <Badge variant={plugin.color} className="shrink-0">
                  Runs inside MSFS + X-Plane
                </Badge>
              </div>

              <p className="text-[#A0AEC0] mb-6 leading-relaxed">{plugin.description}</p>

              {/* Supported aircraft */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-[#A0AEC0] uppercase tracking-wider mb-3">
                  Supported Aircraft
                </p>
                <div className="flex flex-wrap gap-2">
                  {plugin.aircraft.map((ac) => (
                    <span
                      key={ac}
                      className="bg-[#1F2937] text-[#A0AEC0] text-xs px-2.5 py-1 rounded-md"
                    >
                      {ac}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capabilities */}
              <div>
                <p className="text-xs font-semibold text-[#A0AEC0] uppercase tracking-wider mb-3">
                  What It Does
                </p>
                <ul className="space-y-2.5">
                  {plugin.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3 text-sm text-[#A0AEC0]">
                      <Check size={16} className="text-[#3B7BF6] mt-0.5 shrink-0" aria-hidden="true" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
