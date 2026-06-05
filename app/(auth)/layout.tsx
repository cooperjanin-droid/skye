import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A0E1A] flex flex-col">
      {/* Minimal header */}
      <header className="px-6 py-5 border-b border-[#1F2937]">
        <Link href="/" className="inline-flex items-center gap-2 font-heading font-bold text-lg text-white hover:text-[#3B7BF6] transition-colors">
          <span aria-hidden="true">✈</span>
          <span>Skye</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        {children}
      </main>
    </div>
  );
}
