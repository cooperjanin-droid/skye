import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Search, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Knowledge Base — Skye",
  description: "Guides, tutorials, and reference articles for sim pilots using Skye.",
};

const kbCategories = [
  { name: "Getting Started", icon: "🚀", count: 12, description: "New to Skye? Start here." },
  { name: "Aircraft Systems", icon: "⚙️", count: 24, description: "How the jets and props work." },
  { name: "FMC / MCDU", icon: "🖥️", count: 18, description: "Programming the flight computer." },
  { name: "Procedures", icon: "📋", count: 20, description: "SIDs, STARs, approaches, holds." },
  { name: "VATSIM Basics", icon: "🎙", count: 15, description: "Get started on the network." },
  { name: "Troubleshooting", icon: "🔧", count: 10, description: "Fix common issues fast." },
  { name: "Addons", icon: "🧩", count: 16, description: "Installing and configuring add-ons." },
];

const articles = [
  { title: "How to install the Skye plugin in MSFS", category: "Getting Started", readTime: 5 },
  { title: "How to install the Skye plugin in X-Plane 12", category: "Getting Started", readTime: 5 },
  { title: "Activating your licence key", category: "Getting Started", readTime: 3 },
  { title: "Understanding the Airbus ECAM", category: "Aircraft Systems", readTime: 10 },
  { title: "737 FMC: programming a route from scratch", category: "FMC / MCDU", readTime: 15 },
  { title: "How to fly a full ILS approach", category: "Procedures", readTime: 12 },
  { title: "VATSIM: what to say at pushback", category: "VATSIM Basics", readTime: 6 },
  { title: "Plugin not appearing in MSFS toolbar", category: "Troubleshooting", readTime: 4 },
];

const categoryColors: Record<string, "accent" | "cyan" | "success" | "warning" | "default"> = {
  "Getting Started": "success",
  "Aircraft Systems": "accent",
  "FMC / MCDU": "cyan",
  Procedures: "accent",
  "VATSIM Basics": "cyan",
  Troubleshooting: "warning",
  Addons: "default",
};

export default function KnowledgePage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="py-16 border-b border-[#1F2937] bg-[#0A0E1A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="accent" className="mb-4">Knowledge Base</Badge>
          <h1 className="font-heading text-4xl font-bold text-white mb-4">How Can We Help?</h1>
          <p className="text-[#A0AEC0] mb-8">
            Guides, tutorials, and reference articles for sim pilots using Skye.
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0AEC0]"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search the knowledge base…"
              className="w-full bg-[#111827] border border-[#1F2937] text-white placeholder:text-[#A0AEC0] rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7BF6] focus:border-[#3B7BF6]"
              aria-label="Search knowledge base"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category grid */}
        <h2 className="font-heading text-2xl font-bold text-white mb-6">Browse by Category</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {kbCategories.map((cat) => (
            <button
              key={cat.name}
              className="bg-[#111827] border border-[#1F2937] rounded-xl p-5 text-left hover:border-[#3B7BF6]/50 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-200 group"
            >
              <span className="text-2xl mb-3 block" aria-hidden="true">{cat.icon}</span>
              <h3 className="font-heading font-semibold text-white text-sm mb-1 group-hover:text-[#3B7BF6] transition-colors">
                {cat.name}
              </h3>
              <p className="text-[#A0AEC0] text-xs mb-2">{cat.description}</p>
              <p className="text-xs text-[#A0AEC0]">{cat.count} articles</p>
            </button>
          ))}
        </div>

        {/* Featured articles */}
        <h2 className="font-heading text-2xl font-bold text-white mb-6">Popular Articles</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {articles.map((article) => (
            <div
              key={article.title}
              className="bg-[#111827] border border-[#1F2937] rounded-xl p-5 flex items-center justify-between gap-4 hover:border-[#3B7BF6]/50 transition-all duration-200 hover:shadow-lg hover:shadow-blue-900/20 cursor-pointer group"
            >
              <div>
                <Badge variant={categoryColors[article.category] ?? "default"} className="mb-2">
                  {article.category}
                </Badge>
                <h3 className="font-medium text-white text-sm leading-snug group-hover:text-[#3B7BF6] transition-colors">
                  {article.title}
                </h3>
                <span className="flex items-center gap-1.5 text-xs text-[#A0AEC0] mt-1.5">
                  <Clock size={11} aria-hidden="true" />
                  {article.readTime} min read
                </span>
              </div>
              <ArrowRight size={16} className="text-[#A0AEC0] group-hover:text-[#3B7BF6] shrink-0 transition-colors" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Upgrade prompt */}
        <div className="bg-gradient-to-r from-[#3B7BF6]/10 to-[#00D4FF]/10 border border-[#3B7BF6]/20 rounded-2xl p-8 text-center">
          <p className="text-[#A0AEC0] text-sm mb-1">Want a full structured course instead of individual articles?</p>
          <p className="font-heading font-semibold text-white text-lg mb-4">
            Want the full course? Upgrade to Premium
          </p>
          <p className="text-[#A0AEC0] text-sm mb-6 max-w-md mx-auto">
            Get the complete Cessna 172 Ground School and VATSIM Mastery course — 8 chapters and 6 modules of structured, progressive learning.
          </p>
          <Link href="/pricing">
            <button className="bg-[#3B7BF6] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors">
              View Premium Plans
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
