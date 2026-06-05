import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0E1A] flex flex-col items-center justify-center px-4 text-center">
      {/* Decorative background */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#3B7BF6]/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <p className="font-heading text-8xl font-bold text-[#3B7BF6] mb-4">404</p>
        <span className="text-5xl mb-6 block" aria-hidden="true">✈</span>
        <h1 className="font-heading text-3xl font-bold text-white mb-3">
          You&apos;ve flown off the chart
        </h1>
        <p className="text-[#A0AEC0] max-w-md mb-10">
          This page doesn&apos;t exist. Maybe you took the wrong SID — let&apos;s get you back on course.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">Return to Home</Button>
        </Link>
      </div>
    </div>
  );
}
