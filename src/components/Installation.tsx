import { useState } from "react";
import CopyButton from "./ui/CopyButton";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { TerminalIcon } from "./ui/icons";

const MANAGERS = [
  {
    id: "npm",
    label: "npm",
    command: "npm install react-ai-chatkit",
  },
  {
    id: "pnpm",
    label: "pnpm",
    command: "pnpm add react-ai-chatkit",
  },
  {
    id: "yarn",
    label: "yarn",
    command: "yarn add react-ai-chatkit",
  },
] as const;

export default function Installation() {
  const [active, setActive] = useState<(typeof MANAGERS)[number]["id"]>("npm");
  const manager = MANAGERS.find((m) => m.id === active) ?? MANAGERS[0];

  return (
    <section id="install" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Installation"
          title="One command to start"
          description="Requires React 18 or newer. Fully typed with TypeScript."
        />

        <Reveal className="mx-auto mt-12 max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/60 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
                <span className="ml-3 inline-flex items-center gap-1.5 text-xs text-zinc-500">
                  <TerminalIcon className="h-3.5 w-3.5" />
                  terminal
                </span>
              </div>
              <CopyButton text={manager.command} label="Copy command" />
            </div>

            <div className="flex gap-1 border-b border-zinc-800/70 px-4 pt-3">
              {MANAGERS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActive(m.id)}
                  aria-pressed={active === m.id}
                  className={`cursor-pointer rounded-t-lg border-b-2 px-4 py-2 text-sm font-medium transition ${
                    active === m.id
                      ? "border-violet-500 text-white"
                      : "border-transparent text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto px-5 py-5">
              <code className="font-mono text-sm whitespace-nowrap text-zinc-300">
                <span className="text-violet-400 select-none">$ </span>
                <span className="text-zinc-500 select-none">
                  {manager.command.split(" ").slice(0, -1).join(" ")}{" "}
                </span>
                <span className="text-emerald-300">
                  {manager.command.split(" ").at(-1)}
                </span>
              </code>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
