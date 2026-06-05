import type { Metadata } from "next";
import { LessonSidebar, type Lesson } from "@/components/course/LessonSidebar";
import { LessonLayout } from "@/components/course/LessonLayout";

export const metadata: Metadata = {
  title: "What is VATSIM? — Skye VATSIM Mastery",
};

const lessons: Lesson[] = [
  {
    number: 1,
    title: "What is VATSIM?",
    durationMinutes: 8,
    completed: false,
    locked: false,
    href: "/dashboard/vatsim/module-1/lesson-1",
  },
  {
    number: 2,
    title: "How the Network Works",
    durationMinutes: 8,
    completed: false,
    locked: false,
    href: "/dashboard/vatsim/module-1/lesson-2",
  },
  {
    number: 3,
    title: "Pilots vs. Controllers",
    durationMinutes: 7,
    completed: false,
    locked: false,
    href: "/dashboard/vatsim/module-1/lesson-3",
  },
  {
    number: 4,
    title: "VATSIM Rules and Code of Conduct",
    durationMinutes: 6,
    completed: false,
    locked: true,
    href: "/dashboard/vatsim/module-1/lesson-4",
  },
  {
    number: 5,
    title: "Creating Your VATSIM Account",
    durationMinutes: 5,
    completed: false,
    locked: true,
    href: "/dashboard/vatsim/module-1/lesson-5",
  },
];

export default function VatsimLesson1Page() {
  return (
    <div className="flex flex-1 h-full overflow-hidden">
      <LessonSidebar
        chapterTitle="Module 1: What is VATSIM and How It Works"
        lessons={lessons}
        currentLessonNumber={1}
      />
      <LessonLayout
        lessonTitle="What is VATSIM?"
        chapterTitle="Module 1: What is VATSIM and How It Works"
        nextHref="/dashboard/vatsim/module-1/lesson-2"
      >
        <h2>The Short Answer</h2>
        <p>
          VATSIM stands for the <strong>Virtual Air Traffic Simulation Network</strong>. It is a free, volunteer-run online network that connects flight simulator pilots around the world with volunteer air traffic controllers — all in real time. When you fly on VATSIM, you are not talking to a computer. You are talking to a real person sitting at a real keyboard somewhere in the world, providing ATC service using the same phraseology, procedures, and separation standards that govern real-world aviation.
        </p>

        <h2>Why Does VATSIM Exist?</h2>
        <p>
          Flight simulation, at its best, is an incredibly realistic recreation of aviation. Modern simulators model aircraft systems, weather, and aerodynamics with extraordinary fidelity. But one thing was always missing from solo sim flying: the human element. Real aviation is a collaborative system. Pilots and controllers communicate constantly. Clearances, handoffs, traffic advisories, approach sequences — all of this coordination is what makes the aviation system work.
        </p>
        <p>
          VATSIM fills that gap. Founded in 2001, the network now has over 200,000 registered members and routinely sees several thousand pilots and controllers connected simultaneously at any given time. Major international hubs like London Heathrow (EGLL), New York JFK (KJFK), Dubai (OMDB), and Frankfurt (EDDF) frequently have full controller coverage around the clock during peak hours.
        </p>

        <h2>How the Network Works</h2>
        <p>
          VATSIM runs on a distributed server network. When you connect to VATSIM using a pilot client (we will cover vPilot for MSFS and xPilot for X-Plane in Module 2), your simulator position, altitude, speed, and heading are broadcast to all other connected users within a certain range. You appear on their screens as a moving aircraft symbol, just as you would on a real radar scope or TCAS display.
        </p>
        <p>
          Controllers connect using their own software — typically Euroscope or VRC — which gives them a radar-like display of all traffic in their sector. They can see your callsign, altitude, and speed, and they talk to you over a simulated radio frequency. Your pilot client receives their transmissions and plays them through your speakers or headset. You key up your own microphone and respond, exactly as a real pilot would.
        </p>
        <p>
          If no controller is online for your area, you simply fly uncontrolled — just as you would in real life in uncontrolled airspace. VATSIM never requires a controller to be online. You can fly any route at any time; the network just adds ATC when controllers are available.
        </p>

        <h2>What Controllers Do</h2>
        <p>
          VATSIM controllers are divided into ratings and positions, mirroring the real-world ATC system. The main positions you will encounter as a pilot are:
        </p>
        <ul>
          <li><strong>Delivery (DEL)</strong> — Issues your IFR clearance before pushback. Your first radio call of any IFR flight.</li>
          <li><strong>Ground (GND)</strong> — Controls all aircraft movement on the airport surface: taxiways, aprons, and holding points.</li>
          <li><strong>Tower (TWR)</strong> — Controls the active runway and the airspace immediately around the airport.</li>
          <li><strong>Approach / Departure (APP / DEP)</strong> — Handles aircraft climbing out of or descending into the terminal area, typically within 30–50 nautical miles of the airport.</li>
          <li><strong>Centre / Radar (CTR)</strong> — Handles en-route traffic across large sectors, often covering entire countries or oceanic regions.</li>
        </ul>

        <h2>What Pilots Do</h2>
        <p>
          As a VATSIM pilot, your responsibilities are straightforward but important. You are expected to know basic radio phraseology, follow ATC instructions in a timely manner, and fly your aircraft competently. You do not need to be perfect — controllers on VATSIM are volunteers who genuinely want to help you learn. However, you should at minimum know how to communicate your callsign, position, and intentions.
        </p>
        <p>
          That is exactly what this course teaches. By the end of Module 3 (Basic Radio Phraseology), you will know what to say in every standard situation. By the end of Module 4, you will have made your first complete VATSIM flight from pushback to engine shutdown with full ATC coverage.
        </p>

        <h2>Why Sim Pilots Love VATSIM</h2>
        <p>
          Flying on VATSIM transforms flight simulation from a solo activity into a shared world. Hearing a controller sequence you into a busy approach with real traffic ahead of you, executing a missed approach because another aircraft is still on the runway, or listening to oceanic clearances over the North Atlantic — these moments create a level of immersion and satisfaction that solo flying simply cannot match.
        </p>
        <p>
          Many real-world pilots and student pilots also use VATSIM to practice procedures, stay current, and explore routes they have not yet flown in the real aircraft. The procedures are accurate, the phraseology is standard, and the scenarios are realistic.
        </p>

        <h2>Key Takeaways</h2>
        <ul>
          <li>VATSIM is a free online network connecting sim pilots with volunteer ATC in real time.</li>
          <li>Over 200,000 members worldwide, with thousands connected at any given moment.</li>
          <li>You connect using a pilot client (vPilot for MSFS, xPilot for X-Plane) that links your simulator to the network.</li>
          <li>Controllers use radar software and real phraseology — this is not a game AI.</li>
          <li>Flying on VATSIM requires basic radio skills — which this course will teach you completely.</li>
        </ul>
      </LessonLayout>
    </div>
  );
}
