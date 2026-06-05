import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { BookOpen, Check } from "lucide-react";

const courses = [
  {
    title: "Cessna 172 Ground School",
    subtitle: "8 chapters · 40+ lessons",
    description:
      "Learn to fly the Cessna 172 from the ground up. From aerodynamics and cockpit systems to navigation, radio comms, and checkride prep — all inside a structured online course.",
    topics: [
      "Aerodynamics and how flight works",
      "Cockpit instruments and avionics",
      "Weather interpretation for VFR pilots",
      "Navigation and flight planning",
      "Radio communications and ATC",
      "Traffic patterns and airport operations",
      "Emergency procedures",
      "Checkride prep (Private Pilot ACS)",
    ],
    color: "from-[#3B7BF6]/20 to-[#3B7BF6]/5",
    borderColor: "border-[#3B7BF6]/30",
    icon: "📚",
  },
  {
    title: "VATSIM Mastery",
    subtitle: "6 modules · Beginner to advanced",
    description:
      "Go from never having spoken on a radio to flying IFR on the VATSIM network with confidence. Covers phraseology, procedures, software setup, oceanic operations, and more.",
    topics: [
      "What VATSIM is and how the network works",
      "Setting up vPilot and xPilot",
      "Standard radio phraseology",
      "Your first VATSIM VFR flight",
      "IFR SIDs, STARs, and clearances",
      "Advanced — oceanic, holds, approaches",
    ],
    color: "from-[#00D4FF]/20 to-[#00D4FF]/5",
    borderColor: "border-[#00D4FF]/30",
    icon: "🎙",
  },
];

export function CoursesPreview() {
  return (
    <section id="courses" className="py-24 bg-[#0D1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="cyan" className="mb-4">Online Courses</Badge>
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Learn at Your Own Pace
          </h2>
          <p className="text-[#A0AEC0] max-w-2xl mx-auto">
            Structured courses written for sim pilots. Real procedures, real knowledge — taught in a way that makes sense inside the cockpit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className={`bg-gradient-to-br ${course.color} border ${course.borderColor} rounded-2xl p-8 bg-[#111827]`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl" aria-hidden="true">{course.icon}</span>
                <Badge variant="premium">Premium</Badge>
              </div>

              <h3 className="font-heading text-2xl font-bold text-white mb-1">{course.title}</h3>
              <p className="text-[#A0AEC0] text-sm mb-4">{course.subtitle}</p>
              <p className="text-[#A0AEC0] mb-6 leading-relaxed">{course.description}</p>

              <ul className="space-y-2 mb-8">
                {course.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-3 text-sm text-[#A0AEC0]">
                    <Check size={15} className="text-[#00D4FF] shrink-0" aria-hidden="true" />
                    {topic}
                  </li>
                ))}
              </ul>

              <Link href="/pricing">
                <Button variant="outline" size="md" className="w-full border-[#3B7BF6]/50 text-[#3B7BF6] hover:bg-[#3B7BF6] hover:text-white hover:border-[#3B7BF6]">
                  <BookOpen size={16} className="mr-2" aria-hidden="true" />
                  Preview Course
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
