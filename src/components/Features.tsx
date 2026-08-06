import type { ComponentType, SVGProps } from "react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import {
  CodeIcon,
  CopyIcon,
  FileTextIcon,
  MessageDotsIcon,
  MonitorIcon,
  MoonIcon,
  PaletteIcon,
  ResizeIcon,
  ShieldIcon,
  SlidersIcon,
  SparklesIcon,
  UsersIcon,
} from "./ui/icons";

type Feature = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const FEATURES: Feature[] = [
  {
    title: "Markdown Rendering",
    description: "Render Markdown out of the box.",
    icon: FileTextIcon,
  },
  {
    title: "Syntax Highlighting",
    description: "Beautiful code blocks in seconds.",
    icon: CodeIcon,
  },
  {
    title: "Typing Indicator",
    description: "Show users when AI is responding.",
    icon: MessageDotsIcon,
  },
  {
    title: "Copy Messages",
    description: "One-click copy on every message.",
    icon: CopyIcon,
  },
  {
    title: "Responsive Design",
    description: "Adapts to any screen size.",
    icon: MonitorIcon,
  },
  {
    title: "Dark & Light Themes",
    description: "Themes that match your brand.",
    icon: MoonIcon,
  },
  {
    title: "TypeScript Support",
    description: "Fully typed props and autocomplete.",
    icon: ShieldIcon,
  },
  {
    title: "Custom Colors",
    description: "Tune the primary color in seconds.",
    icon: PaletteIcon,
  },
  {
    title: "Auto-resizing Textarea",
    description: "The input grows with your message.",
    icon: ResizeIcon,
  },
  {
    title: "Message Animations",
    description: "Smooth, subtle entrance motion.",
    icon: SparklesIcon,
  },
  {
    title: "AI & User Avatars",
    description: "Custom avatars for both sides.",
    icon: UsersIcon,
  },
  {
    title: "Highly Customizable",
    description: "Header, buttons, layout — your way.",
    icon: SlidersIcon,
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
