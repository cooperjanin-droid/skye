import Link from "next/link";
import Button from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background orbs — pure CSS, no libraries */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="hero-orb-1 absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#3B7BF6]/20 blur-3xl" />
        <div className="hero-orb-2 absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#00D4FF]/15 blur-3xl" />
        <div className="hero-orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#3B7BF6]/10 blur-2xl" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#3B7BF6 1px, transparent 1px), linear-gradient(90deg, #3B7BF6 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pre-headline badge */}
        <div className="inline-flex items-center gap-2 bg-[#3B7BF6]/10 border border-[#3B7BF6]/30 text-[#3B7BF6] text-xs font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B7BF6] animate-pulse" />
          Now supporting MSFS 2020, MSFS 2024 & X-Plane 12
        </div>

        {/* Main headline */}
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Your AI Co-Pilot is{" "}
          <span className="bg-gradient-to-r from-[#3B7BF6] to-[#00D4FF] bg-clip-text text-transparent">
            Ready for Takeoff
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[#A0AEC0] max-w-2xl mx-auto mb-10 leading-relaxed">
          Skye is a live AI co-pilot plugin that runs inside Microsoft Flight Simulator and X-Plane, plus online ground school courses and a community for sim pilots of every level.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup">
            <Button variant="primary" size="lg">
              Start Free Trial
            </Button>
          </Link>
          <Link href="/features">
            <Button variant="outline" size="lg">
              See How It Works
            </Button>
          </Link>
        </div>

        {/* Social proof */}
        <p className="mt-8 text-sm text-[#A0AEC0]">
          No credit card required · Works inside your simulator · Cancel anytime
        </p>
      </div>
    </section>
  );
}
