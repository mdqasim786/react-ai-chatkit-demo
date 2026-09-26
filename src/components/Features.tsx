import type { ComponentType, SVGProps } from "react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import {
  ClockIcon,
  CodeIcon,
  CopyIcon,
  FileTextIcon,
  LayersIcon,
  LayoutIcon,
  MessageDotsIcon,
  MoonIcon,
  PaletteIcon,
  RefreshIcon,
  ShieldIcon,
  SlidersIcon,
} from "./ui/icons";

type Feature = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

// Every entry below is a prop or behaviour present in the published v1.1.0 types.
const FEATURES: Feature[] = [
  {
    title: "Markdown & GFM",
    description: "Headings, lists, tables and task lists, rendered for you.",
    icon: FileTextIcon,
  },
  {
    title: "Syntax Highlighting",
    description: "Fenced code blocks themed for light and dark.",
    icon: CodeIcon,
  },
  {
    title: "Message Copy",
    description: "One-click copy on any message or code block.",
    icon: CopyIcon,
  },
  {
    title: "Regenerate",
    description: "Retry the last AI reply with onRegenerate.",
    icon: RefreshIcon,
  },
  {
    title: "Typing Indicator",
    description: "Animated dots while your model is replying.",
    icon: MessageDotsIcon,
  },
  {
    title: "Timestamps",
    description: "Built-in times, or format them with your own function.",
    icon: ClockIcon,
  },
  {
    title: "Dark & Light Themes",
    description: "Switch themes with a single prop.",
    icon: MoonIcon,
  },
  {
    title: "Custom Colors",
    description: "Match your brand with one prop.",
    icon: PaletteIcon,
  },
  {
    title: "Custom Header",
    description: "Your own header, subtitle and header actions.",
    icon: LayersIcon,
  },
  {
    title: "Empty State",
    description: "Replace what shows before the first message.",
    icon: LayoutIcon,
  },
  {
    title: "Style Hooks",
    description: "Class and style props on every part of the box.",
    icon: SlidersIcon,
  },
  {
    title: "TypeScript Types",
    description: "Every prop ships with type declarations.",
    icon: ShieldIcon,
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need for AI chat"
          description="Build production-ready AI interfaces without reinventing the wheel."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_12px_40px_-12px_rgba(139,92,246,0.4)]">
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-violet-300 transition-colors duration-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/10 group-hover:text-violet-200">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="mt-1.5 text-sm text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
