import { Badge } from "@/components/ui/Badge";

const simulators = [
  { name: "Microsoft Flight Simulator 2020", short: "MSFS 2020" },
  { name: "Microsoft Flight Simulator 2024", short: "MSFS 2024" },
  { name: "X-Plane 11", short: "XP11" },
  { name: "X-Plane 12", short: "XP12" },
];

const aircraft = [
  {
    name: "Zibo 737-800",
    sims: ["XP11", "XP12"],
    category: "Narrowbody",
  },
  {
    name: "PMDG 737-700/800/900",
    sims: ["MSFS 2020", "MSFS 2024"],
    category: "Narrowbody",
  },
  {
    name: "Fenix A320",
    sims: ["MSFS 2020", "MSFS 2024"],
    category: "Narrowbody",
  },
  {
    name: "FlyByWire A32NX",
    sims: ["MSFS 2020", "MSFS 2024"],
    category: "Narrowbody",
  },
  {
    name: "ToLiss A319",
    sims: ["XP11", "XP12"],
    category: "Narrowbody",
  },
  {
    name: "ToLiss A320",
    sims: ["XP11", "XP12"],
    category: "Narrowbody",
  },
  {
    name: "ToLiss A321",
    sims: ["XP11", "XP12"],
    category: "Narrowbody",
  },
];

const simColors: Record<string, string> = {
  "MSFS 2020": "bg-blue-900/30 text-blue-400 border-blue-800/50",
  "MSFS 2024": "bg-blue-900/30 text-blue-400 border-blue-800/50",
  XP11: "bg-orange-900/30 text-orange-400 border-orange-800/50",
  XP12: "bg-orange-900/30 text-orange-400 border-orange-800/50",
};

export function AircraftGrid() {
  return (
    <section id="aircraft" className="py-24 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simulator compatibility */}
        <div className="text-center mb-16">
          <Badge variant="accent" className="mb-4">Compatibility</Badge>
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Works Where You Fly
          </h2>
          <p className="text-[#A0AEC0] max-w-2xl mx-auto mb-10">
            Skye runs natively inside both major simulators across all supported versions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {simulators.map((sim) => (
              <div
                key={sim.name}
                className="bg-[#111827] border border-[#1F2937] rounded-xl px-6 py-4 text-center hover:border-[#3B7BF6]/50 transition-colors"
              >
                <p className="font-heading font-semibold text-white text-sm">{sim.name}</p>
                <p className="text-[#A0AEC0] text-xs mt-1">Fully supported</p>
              </div>
            ))}
          </div>
        </div>

        {/* Aircraft grid */}
        <div className="text-center mb-10">
          <h3 className="font-heading text-2xl font-bold text-white mb-2">Supported Aircraft</h3>
          <p className="text-[#A0AEC0] text-sm">More aircraft added regularly</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {aircraft.map((ac) => (
            <div
              key={ac.name}
              className="bg-[#111827] border border-[#1F2937] rounded-xl p-5 hover:border-[#3B7BF6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20"
            >
              <p className="font-heading font-semibold text-white text-sm mb-3">{ac.name}</p>
              <div className="flex flex-wrap gap-1.5">
                {ac.sims.map((sim) => (
                  <span
                    key={sim}
                    className={`text-xs px-2 py-0.5 rounded border ${simColors[sim]}`}
                  >
                    {sim}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
