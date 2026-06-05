import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skye — Your AI-Powered Flight Simulation Co-Pilot",
  description:
    "Skye is a live AI co-pilot plugin for MSFS and X-Plane, plus online ground school and VATSIM courses for sim pilots of every level.",
  keywords: ["flight simulator", "MSFS", "X-Plane", "AI copilot", "ground school", "VATSIM"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0A0E1A] text-white antialiased font-body">
        {children}
      </body>
    </html>
  );
}
