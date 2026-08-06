import type { ComponentType, SVGProps } from "react";
import Reveal from "./ui/Reveal";
import {
  BracesIcon,
  FeatherIcon,
  ShieldIcon,
  ZapIcon,
} from "./ui/icons";

type Stat = {
  value: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const STATS: Stat[] = [
  { value: "v1.0.2", label: "Latest stable release", icon: ZapIcon },
  { value: "MIT", label: "Open source, free forever", icon: ShieldIcon },
  { value: "18+", label: "Supports React 18 and 19", icon: FeatherIcon },
  { value: "100%", label: "Written in TypeScript", icon: BracesIcon },
];

export default function Stats() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-violet-500/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-violet-300">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-sm text-zinc-500">{stat.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
