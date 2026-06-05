import Link from "next/link";

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/dashboard/plugins", label: "Plugin Download" },
    { href: "/pricing/success", label: "Getting Started" },
  ],
  Courses: [
    { href: "/dashboard/ground-school", label: "Cessna 172 Ground School" },
    { href: "/dashboard/vatsim", label: "VATSIM Mastery" },
    { href: "/knowledge", label: "Knowledge Base" },
    { href: "/news", label: "News" },
  ],
  Company: [
    { href: "/features", label: "About" },
    { href: "/pricing", label: "Plans" },
    { href: "/knowledge", label: "Support" },
    { href: "/login", label: "Sign In" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#1F2937] bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-white">
              <span aria-hidden="true">✈</span>
              <span>Skye</span>
            </Link>
            <p className="text-[#A0AEC0] text-sm leading-relaxed">
              Your AI-powered flight simulation co-pilot. Master the skies with real-time guidance inside MSFS and X-Plane.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-heading font-semibold text-white text-sm mb-4">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#A0AEC0] text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#1F2937] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#A0AEC0] text-sm">
            © {new Date().getFullYear()} Skye. All rights reserved.
          </p>
          <p className="text-[#A0AEC0] text-xs">
            Not affiliated with Microsoft, Laminar Research, or any aircraft manufacturer.
          </p>
        </div>
      </div>
    </footer>
  );
}
