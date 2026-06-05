import type { Metadata } from "next";
import { LessonSidebar, type Lesson } from "@/components/course/LessonSidebar";
import { LessonLayout } from "@/components/course/LessonLayout";

export const metadata: Metadata = {
  title: "How Wings Generate Lift — Skye Ground School",
};

const lessons: Lesson[] = [
  {
    number: 1,
    title: "How Wings Generate Lift",
    durationMinutes: 12,
    completed: false,
    locked: false,
    href: "/dashboard/ground-school/chapter-1/lesson-1",
  },
  {
    number: 2,
    title: "The Four Forces of Flight",
    durationMinutes: 10,
    completed: false,
    locked: false,
    href: "/dashboard/ground-school/chapter-1/lesson-2",
  },
  {
    number: 3,
    title: "Angle of Attack Explained",
    durationMinutes: 10,
    completed: false,
    locked: false,
    href: "/dashboard/ground-school/chapter-1/lesson-3",
  },
  {
    number: 4,
    title: "What Causes a Stall",
    durationMinutes: 8,
    completed: false,
    locked: true,
    href: "/dashboard/ground-school/chapter-1/lesson-4",
  },
  {
    number: 5,
    title: "Load Factor and Turns",
    durationMinutes: 10,
    completed: false,
    locked: true,
    href: "/dashboard/ground-school/chapter-1/lesson-5",
  },
  {
    number: 6,
    title: "Stability and Control",
    durationMinutes: 12,
    completed: false,
    locked: true,
    href: "/dashboard/ground-school/chapter-1/lesson-6",
  },
];

export default function Lesson1Page() {
  return (
    <div className="flex flex-1 h-full overflow-hidden">
      <LessonSidebar
        chapterTitle="Chapter 1: Aerodynamics and How Flight Works"
        lessons={lessons}
        currentLessonNumber={1}
      />
      <LessonLayout
        lessonTitle="How Wings Generate Lift"
        chapterTitle="Chapter 1: Aerodynamics and How Flight Works"
        nextHref="/dashboard/ground-school/chapter-1/lesson-2"
      >
        <h2>What Is Lift?</h2>
        <p>
          Lift is the aerodynamic force that acts perpendicular to the direction of airflow and opposes gravity. Without lift, an aircraft stays on the ground. With enough lift — specifically, more than the weight of the aircraft — it climbs. Understanding how a wing generates this force is the foundation of everything else in aviation.
        </p>

        <h2>The Shape of the Wing</h2>
        <p>
          A wing is not flat. Look at the cross-section of a Cessna 172 wing and you will see an asymmetrical shape called an <strong>airfoil</strong>. The top surface of the wing is curved — it is longer than the bottom surface. This curvature is called <strong>camber</strong>, and it is the key to how the wing creates lift.
        </p>
        <p>
          When air approaches the leading edge of the wing, it splits into two streams. One stream travels over the curved top surface. The other travels under the relatively flat bottom surface. Because the top surface is longer, the air moving over it must travel a greater distance to reach the trailing edge at roughly the same time as the air moving underneath.
        </p>

        <h2>Bernoulli&apos;s Principle</h2>
        <p>
          Here is where physics comes in. Daniel Bernoulli, an 18th-century Swiss mathematician, demonstrated that in a moving fluid (and air is a fluid), an increase in velocity corresponds to a decrease in pressure. This relationship is described by <strong>Bernoulli&apos;s principle</strong>.
        </p>
        <p>
          Because air over the top of the wing is moving faster — it has more distance to cover — its pressure drops. The air under the wing is moving slower and maintains higher pressure. The result is a pressure differential: high pressure below pushing up, low pressure above pulling up. That net upward force is lift.
        </p>
        <p>
          This is not the whole story. Bernoulli explains part of lift, but Newton&apos;s third law of motion also plays a role. A wing deflects airflow downward as it passes. By pushing air down, the wing generates an equal and opposite reaction — the air pushes the wing up. Modern aerodynamicists understand lift as a combination of both effects.
        </p>

        <h2>Angle of Attack</h2>
        <p>
          The <strong>angle of attack</strong> (AoA) is the angle between the wing&apos;s chord line (an imaginary straight line from the leading edge to the trailing edge) and the oncoming airflow. It is one of the most important concepts in aviation.
        </p>
        <p>
          As angle of attack increases, lift increases — up to a point. The wing generates more lift because it is deflecting more air downward and increasing the pressure difference between upper and lower surfaces. This is why pulling back on the controls during a climb increases lift.
        </p>
        <p>
          However, there is a limit. If the angle of attack gets too high — typically around 15 to 20 degrees on a Cessna 172 — the smooth airflow over the top of the wing can no longer follow the wing surface. It breaks away and becomes turbulent. This is called <strong>flow separation</strong>, and when it happens, lift collapses dramatically. The result is a <strong>stall</strong>. We will cover stalls in detail in Lesson 4.
        </p>

        <h2>What Actually Generates More Lift?</h2>
        <p>
          Three variables directly control how much lift a wing produces: <strong>airspeed</strong>, <strong>angle of attack</strong>, and <strong>air density</strong>. Lift increases with the square of airspeed — double your speed, and you get four times as much lift potential. This is why aircraft have minimum flying speeds; below that speed, the wing cannot generate enough lift to support the aircraft&apos;s weight even at maximum angle of attack.
        </p>
        <p>
          Air density matters because thinner air means fewer air molecules striking the wing surface. At high altitudes, where air is less dense, a wing must fly faster or at a higher angle of attack to generate the same lift it would at sea level. This is why aircraft performance decreases on hot days (warm air is less dense) and at high-altitude airports.
        </p>

        <h2>Applying This in the Sim</h2>
        <p>
          Next time you fly the Cessna 172 in MSFS or X-Plane, watch the airspeed indicator on your takeoff roll. Notice that the aircraft does not lift off at a random speed — it lifts off when the wing is generating exactly enough lift to match the aircraft&apos;s weight. For the C172, that rotation speed is typically around 55 knots indicated airspeed (KIAS). Below that, there is not enough lift. At that speed, a gentle back-pressure on the yoke increases angle of attack just enough to fly.
        </p>
        <p>
          Skye&apos;s Cessna 172 Instructor plugin monitors your angle of attack in real time. If your approach angle of attack becomes excessive — a sign you are flying too slow — it will coach you to increase airspeed before a stall develops.
        </p>

        <h2>Key Takeaways</h2>
        <ul>
          <li>Lift is generated by pressure differential between the upper and lower wing surfaces, combined with downward deflection of airflow.</li>
          <li>Bernoulli&apos;s principle explains why faster airflow over the curved upper surface creates lower pressure.</li>
          <li>Angle of attack is the angle between the wing chord and the oncoming air — increasing it increases lift, up to the stall angle.</li>
          <li>Lift depends on airspeed (squared), angle of attack, and air density.</li>
          <li>A stall is caused by exceeding the critical angle of attack, not by low airspeed alone — though low airspeed is usually what forces a high angle of attack.</li>
        </ul>
      </LessonLayout>
    </div>
  );
}
