"use client";

import { Badge } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useState } from "react";
import {
  Download,
  Key,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const plugins = [
  {
    id: "airliner",
    name: "Airliner Copilot",
    version: "1.0.0-beta",
    description:
      "Your AI first officer for complex airliners. Covers Boeing 737, Airbus A320 family (FlyByWire, Fenix, ToLiss), with checklists, MCDU guidance, callouts, and VATSIM radio support.",
    status: "Active",
    simulators: ["MSFS 2020 / 2024", "X-Plane 11 / 12"],
    licenceKey: "SKYE-AIR-XXXX-XXXX-XXXX",
    msfsDownload: "#",
    xplaneDownload: "#",
    msfsInstructions: [
      "Download the MSFS version of the Skye Airliner Copilot above.",
      "Extract the downloaded ZIP file. You will find a folder called `skye-airliner-copilot`.",
      "Copy the entire `skye-airliner-copilot` folder into your MSFS Community folder. On most systems this is located at: `C:\\Users\\YourName\\AppData\\Roaming\\Microsoft Flight Simulator\\Packages\\Community\\` — or, if you installed MSFS via the Microsoft Store: `C:\\Users\\YourName\\AppData\\Local\\Packages\\Microsoft.FlightSimulator_8wekyb3d8bbwe\\LocalCache\\Packages\\Community\\`",
      "Launch MSFS. On the main menu or during a flight, open the toolbar (the icons at the top of the screen).",
      "Click the Skye icon in the toolbar to open the panel.",
      "On first launch, the panel will ask for your licence key. Copy the key shown above and paste it into the field.",
      "Select your aircraft from the dropdown and click Activate. The copilot is now live.",
    ],
    xplaneInstructions: [
      "Download the X-Plane version of the Skye Airliner Copilot above.",
      "Extract the downloaded ZIP file. You will find a folder called `skye-airliner-copilot`.",
      "Copy the entire `skye-airliner-copilot` folder into X-Plane's plugins directory: `X-Plane 12\\Resources\\plugins\\` (or `X-Plane 11\\Resources\\plugins\\`).",
      "Launch X-Plane and load any supported aircraft.",
      "Open the Plugins menu at the top of the screen and select Skye → Open Panel.",
      "Enter your licence key when prompted and click Activate.",
      "The panel will appear as a floating window. You can dock it to the side or leave it floating.",
    ],
  },
  {
    id: "cessna",
    name: "Cessna 172 Instructor",
    version: "1.0.0-beta",
    description:
      "A virtual flight instructor for the Cessna 172. Provides real-time coaching on attitude, coordination, radio calls, and emergency procedures — for both MSFS and X-Plane versions of the C172.",
    status: "Active",
    simulators: ["MSFS 2020 / 2024", "X-Plane 11 / 12"],
    licenceKey: "SKYE-C72-XXXX-XXXX-XXXX",
    msfsDownload: "#",
    xplaneDownload: "#",
    msfsInstructions: [
      "Download the MSFS version of the Skye Cessna 172 Instructor above.",
      "Extract the downloaded ZIP file. You will find a folder called `skye-cessna-instructor`.",
      "Copy the `skye-cessna-instructor` folder into your MSFS Community folder: `C:\\Users\\YourName\\AppData\\Roaming\\Microsoft Flight Simulator\\Packages\\Community\\`",
      "Launch MSFS and load the Cessna 172 (any livery).",
      "Open the toolbar and click the Skye icon.",
      "Enter your licence key and click Activate.",
      "The instructor panel will open in the bottom-right corner of the screen. Coaching begins automatically once you start the engine.",
    ],
    xplaneInstructions: [
      "Download the X-Plane version of the Skye Cessna 172 Instructor above.",
      "Extract the ZIP to find the `skye-cessna-instructor` folder.",
      "Copy this folder to `X-Plane 12\\Resources\\plugins\\` (or X-Plane 11 equivalent).",
      "Launch X-Plane and load the Cessna 172 (Laminar default or compatible add-on).",
      "Go to Plugins → Skye → Open Instructor Panel.",
      "Enter your licence key and activate.",
      "Coaching begins as soon as the simulation is unpaused. Watch for callouts in the panel.",
    ],
  },
];

function SetupAccordion({
  msfsInstructions,
  xplaneInstructions,
}: {
  msfsInstructions: string[];
  xplaneInstructions: string[];
}) {
  const [openSim, setOpenSim] = useState<"msfs" | "xplane" | null>(null);

  return (
    <div className="mt-6 space-y-2">
      <p className="text-xs font-semibold text-[#A0AEC0] uppercase tracking-wider mb-3">
        Setup Instructions
      </p>

      {/* MSFS */}
      <div className="border border-[#1F2937] rounded-lg overflow-hidden">
        <button
          className="w-full flex items-center justify-between px-5 py-3.5 text-left hover:bg-[#1F2937] transition-colors"
          onClick={() => setOpenSim(openSim === "msfs" ? null : "msfs")}
          aria-expanded={openSim === "msfs"}
        >
          <span className="text-sm font-medium text-white">Microsoft Flight Simulator (2020 / 2024)</span>
          {openSim === "msfs" ? (
            <ChevronUp size={16} className="text-[#A0AEC0]" aria-hidden="true" />
          ) : (
            <ChevronDown size={16} className="text-[#A0AEC0]" aria-hidden="true" />
          )}
        </button>
        {openSim === "msfs" && (
          <div className="px-5 pb-5">
            <ol className="space-y-3 mt-2">
              {msfsInstructions.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#A0AEC0]">
                  <span className="text-[#3B7BF6] font-bold shrink-0">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      {/* X-Plane */}
      <div className="border border-[#1F2937] rounded-lg overflow-hidden">
        <button
          className="w-full flex items-center justify-between px-5 py-3.5 text-left hover:bg-[#1F2937] transition-colors"
          onClick={() => setOpenSim(openSim === "xplane" ? null : "xplane")}
          aria-expanded={openSim === "xplane"}
        >
          <span className="text-sm font-medium text-white">X-Plane 11 / X-Plane 12</span>
          {openSim === "xplane" ? (
            <ChevronUp size={16} className="text-[#A0AEC0]" aria-hidden="true" />
          ) : (
            <ChevronDown size={16} className="text-[#A0AEC0]" aria-hidden="true" />
          )}
        </button>
        {openSim === "xplane" && (
          <div className="px-5 pb-5">
            <ol className="space-y-3 mt-2">
              {xplaneInstructions.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#A0AEC0]">
                  <span className="text-[#00D4FF] font-bold shrink-0">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PluginsPage() {
  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-8">
        <Badge variant="accent" className="mb-3">My Plugins</Badge>
        <h1 className="font-heading text-3xl font-bold text-white mb-2">Your Skye Plugins</h1>
        <p className="text-[#A0AEC0]">
          Download the plugins for your simulator and activate them with your licence key. Both plugins are included with Premium.
        </p>
      </div>

      <div className="space-y-8">
        {plugins.map((plugin) => (
          <div key={plugin.id} className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8">
            {/* Plugin header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="font-heading text-xl font-bold text-white">{plugin.name}</h2>
                  <Badge variant="success">
                    <CheckCircle2 size={11} className="mr-1" aria-hidden="true" />
                    {plugin.status}
                  </Badge>
                </div>
                <p className="text-xs text-[#A0AEC0]">Version {plugin.version} (beta)</p>
              </div>
              <div className="flex gap-2 shrink-0">
                {plugin.simulators.map((sim) => (
                  <Badge key={sim} variant="default">{sim}</Badge>
                ))}
              </div>
            </div>

            <p className="text-[#A0AEC0] text-sm mb-6">{plugin.description}</p>

            {/* Licence key */}
            <div className="bg-[#0A0E1A] border border-[#1F2937] rounded-xl p-4 flex items-center gap-4 mb-6">
              <Key size={18} className="text-[#3B7BF6] shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-xs text-[#A0AEC0] mb-0.5">Your Licence Key</p>
                <code className="text-sm text-white font-mono tracking-wider">{plugin.licenceKey}</code>
              </div>
              <button className="text-xs text-[#3B7BF6] hover:text-[#00D4FF] transition-colors shrink-0">
                Copy
              </button>
            </div>

            {/* Download buttons */}
            <div className="flex flex-wrap gap-3 mb-4">
              <a href={plugin.msfsDownload}>
                <Button variant="primary" size="md">
                  <Download size={15} className="mr-2" aria-hidden="true" />
                  Download for MSFS
                </Button>
              </a>
              <a href={plugin.xplaneDownload}>
                <Button variant="secondary" size="md">
                  <Download size={15} className="mr-2" aria-hidden="true" />
                  Download for X-Plane
                </Button>
              </a>
            </div>

            <div className="flex items-start gap-2 text-xs text-yellow-400 mb-4">
              <AlertCircle size={13} className="shrink-0 mt-0.5" aria-hidden="true" />
              <span>Plugin files will be available at launch. The download buttons above link to placeholder files during beta.</span>
            </div>

            {/* Setup accordion */}
            <SetupAccordion
              msfsInstructions={plugin.msfsInstructions}
              xplaneInstructions={plugin.xplaneInstructions}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
