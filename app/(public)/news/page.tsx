import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Search, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "News — Skye",
  description: "Latest news from the flight simulation world: MSFS, X-Plane, add-ons, VATSIM, and community.",
};

const categories = ["All", "MSFS", "X-Plane", "Addons", "VATSIM", "Community"];

const badgeVariants: Record<string, "accent" | "cyan" | "premium" | "success" | "warning" | "default"> = {
  MSFS: "accent",
  "X-Plane": "warning",
  Addons: "default",
  VATSIM: "cyan",
  Community: "success",
};

const articles = [
  {
    category: "MSFS",
    title: "Microsoft Flight Simulator 2024 Sim Update 3: What's New for Add-On Developers",
    summary:
      "Asobo Studio released Sim Update 3 with significant changes to the WASM module system and new avionics APIs. Third-party developers now have access to improved weather data injection and a revised autopilot interface that benefits AI co-pilot integrations.",
    date: "2026-05-28",
    readTime: "4 min read",
  },
  {
    category: "X-Plane",
    title: "X-Plane 12.2 Released: New ATC System and Performance Improvements",
    summary:
      "Laminar Research pushed X-Plane 12.2 with a rewritten ATC system and significant VR performance gains. The new ATC dataref structure opens the door to better third-party voice assistant integration and brings X-Plane closer to parity with MSFS in this area.",
    date: "2026-05-22",
    readTime: "3 min read",
  },
  {
    category: "Addons",
    title: "FlyByWire A32NX Experimental Branch Adds Hydraulic Simulation Overhaul",
    summary:
      "The FlyByWire team's experimental branch now includes a full hydraulic system simulation for the A32NX, covering all three hydraulic circuits with accurate failure modes. Skye's Airliner Copilot has been updated to support the new system state readings.",
    date: "2026-05-18",
    readTime: "5 min read",
  },
  {
    category: "VATSIM",
    title: "VATSIM Network Crosses 200,000 Registered Pilots Milestone",
    summary:
      "The VATSIM network celebrated a record-breaking milestone with over 200,000 registered pilot accounts. Peak concurrent connections have also hit new highs, with busy hubs like EGLL and KLAX regularly serviced by multiple controllers around the clock.",
    date: "2026-05-14",
    readTime: "2 min read",
  },
  {
    category: "Addons",
    title: "PMDG 737-900ER for MSFS 2024 Enters Public Beta",
    summary:
      "PMDG has opened the 737-900ER public beta for Microsoft Flight Simulator 2024. The aircraft includes the full NG3 systems simulation ported from the earlier -700 and -800, with improved fuel burn modelling and an updated FMC database.",
    date: "2026-05-10",
    readTime: "3 min read",
  },
  {
    category: "Community",
    title: "Skye Community Flight: Cross-Atlantic EGLL–KJFK on VATSIM",
    summary:
      "Over 40 Skye members joined last weekend's organised cross-Atlantic event on VATSIM, flying the classic London Heathrow to New York JFK route. The event featured full oceanic clearance procedures and NAT track selection — a first for the Skye community.",
    date: "2026-05-06",
    readTime: "3 min read",
  },
  {
    category: "X-Plane",
    title: "ToLiss A321XLR for X-Plane 12 Release Date Confirmed",
    summary:
      "ToLiss confirmed the A321XLR will release for X-Plane 12 in Q3 2026, featuring ACT (Additional Centre Tank) management, the new Leap-1A engine model, and full XLR-specific FMGS modifications. Skye support is planned for day-one release.",
    date: "2026-04-30",
    readTime: "2 min read",
  },
  {
    category: "MSFS",
    title: "World Update 18 Adds Central Europe with Photogrammetry Cities",
    summary:
      "Microsoft's World Update 18 brings photogrammetry coverage to Vienna, Prague, Budapest, and Warsaw, along with hundreds of hand-crafted landmarks and improved airport data across the region. Ground textures and terrain elevation data have also been refreshed.",
    date: "2026-04-24",
    readTime: "3 min read",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="py-16 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-4">News Hub</Badge>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="font-heading text-4xl font-bold text-white mb-2">Flight Sim News</h1>
              <p className="text-[#A0AEC0]">The latest from MSFS, X-Plane, add-on developers, and VATSIM.</p>
            </div>

            {/* Search bar */}
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search articles…"
                className="bg-[#111827] border border-[#1F2937] text-white placeholder:text-[#A0AEC0] rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7BF6] w-64"
                aria-label="Search news articles"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={cat === "All"}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                cat === "All"
                  ? "bg-[#3B7BF6] text-white"
                  : "bg-[#111827] border border-[#1F2937] text-[#A0AEC0] hover:text-white hover:border-[#3B7BF6]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 flex flex-col hover:border-[#3B7BF6]/50 transition-all duration-200 hover:shadow-lg hover:shadow-blue-900/20"
            >
              <div className="flex items-center justify-between mb-3">
                <Badge variant={badgeVariants[article.category] ?? "default"}>
                  {article.category}
                </Badge>
                <span className="text-xs text-[#A0AEC0]">{article.readTime}</span>
              </div>

              <h2 className="font-heading font-semibold text-white text-sm mb-3 leading-snug flex-1">
                {article.title}
              </h2>

              <p className="text-[#A0AEC0] text-xs leading-relaxed mb-4">{article.summary}</p>

              <div className="flex items-center justify-between mt-auto">
                <span className="flex items-center gap-1.5 text-xs text-[#A0AEC0]">
                  <Calendar size={11} aria-hidden="true" />
                  {formatDate(article.date)}
                </span>
                <button className="text-xs text-[#3B7BF6] hover:text-[#00D4FF] transition-colors font-medium">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
