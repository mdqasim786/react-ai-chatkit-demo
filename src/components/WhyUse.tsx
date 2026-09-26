import type { ReactNode } from "react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const WITHOUT = [
  "Build a Markdown renderer",
  "Add code highlighting and theming",
  "Add typing, copy and regenerate",
  "Add timestamps and avatars",
  "Hand-roll a responsive layout",
  "Maintain empty, header and theme states",
];

const WITH = [
  "One component, no config",
  "Markdown, GFM & syntax highlighting included",
  "Copy, regenerate and typing built in",
  "Timestamps and avatars out of the box",
  "Width and height props, fully fluid inside",
  "Dark, light, empty state and header included",
];

function Row({ children }: { children: ReactNode }) {
  return <li className="flex items-start gap-3">{children}</li>;
}

export default function WhyUse() {
  return (
    <section id="why" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why ChatKit?"
          title="Skip the busywork"
          description="Every hour spent wiring a chat UI is an hour not spent on your product."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
              <h3 className="text-lg font-semibold text-zinc-500">
                Without React AI ChatKit
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-zinc-500">
                {WITHOUT.map((item) => (
                  <Row key={item}>
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs text-zinc-500">
                      ✕
                    </span>
                    {item}
                  </Row>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-violet-500/40 bg-gradient-to-b from-violet-600/10 to-zinc-900/60 p-8 shadow-[0_12px_48px_-16px_rgba(139,92,246,0.5)]">
              <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent"
                aria-hidden="true"
              />
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                With React AI ChatKit
                <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-300">
                  v1.1.0
                </span>
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-zinc-200">
                {WITH.map((item) => (
                  <Row key={item}>
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-xs text-violet-300">
                      ✓
                    </span>
                    {item}
                  </Row>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
