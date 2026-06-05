import { Badge } from "@/components/ui/Badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    role: "Private Pilot & MSFS enthusiast",
    location: "Denver, CO",
    avatar: "MT",
    rating: 5,
    text: "I've been using MSFS for two years but always struggled with the FMC on the PMDG 737. Skye's Airliner Copilot walked me through a full IFR flight from KDEN to KLAX, programming every waypoint, calling the checklists, and even handling the ATIS. It's like having a real first officer in the jump seat.",
  },
  {
    name: "Sarah L.",
    role: "Student pilot · working toward PPL",
    location: "Manchester, UK",
    avatar: "SL",
    rating: 5,
    text: "The Cessna 172 Instructor plugin is genuinely impressive. It corrects my aileron coordination in real time, calls out when I'm too fast on final, and talked me through a simulated engine failure last week. The Ground School course is equally brilliant — clear, structured, and directly applicable to my real-world training.",
  },
  {
    name: "James K.",
    role: "X-Plane 12 pilot · VATSIM Controller",
    location: "Sydney, Australia",
    avatar: "JK",
    rating: 5,
    text: "As someone who controls on VATSIM, I recommended Skye to every pilot in my flying club who wants to start flying online. The VATSIM Mastery course covers phraseology and procedures in a way I haven't seen anywhere else. The pilots who complete it are noticeably better prepared on the network.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="accent" className="mb-4">Testimonials</Badge>
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            What Pilots Are Saying
          </h2>
          <p className="text-[#A0AEC0] max-w-xl mx-auto">
            From student pilots to seasoned sim veterans — Skye works for every level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8 hover:border-[#3B7BF6]/40 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#3B7BF6] text-[#3B7BF6]" aria-hidden="true" />
                ))}
              </div>

              <p className="text-[#A0AEC0] text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B7BF6] to-[#00D4FF] flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-[#A0AEC0] text-xs">{t.role}</p>
                  <p className="text-[#A0AEC0] text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
