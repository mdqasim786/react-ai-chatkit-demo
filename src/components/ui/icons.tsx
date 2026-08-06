import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function FileTextIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
      <path d="M14 2v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </Svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <polyline points="16 7 21 12 16 17" />
      <polyline points="8 7 3 12 8 17" />
    </Svg>
  );
}

export function MessageDotsIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M21 12a8 8 0 0 1-8 8H4l2.5-3.5A8 8 0 1 1 21 12z" />
      <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="13" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="17" cy="12" r="1" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </Svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <polyline points="4 12 9 17 20 6" />
    </Svg>
  );
}

export function MonitorIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </Svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z" />
    </Svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </Svg>
  );
}

export function PaletteIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3a9 9 0 1 0 0 18c1.5 0 2.5-1 2.5-2.5 0-.7-.3-1.2-.7-1.7-.4-.5-.6-1-.6-1.5 0-1.2 1-2.3 2.3-2.3H17A5 5 0 0 0 12 3z" />
      <circle cx="8" cy="11" r="1" />
      <circle cx="15" cy="9" r="1" />
      <circle cx="16" cy="15" r="1" />
    </Svg>
  );
}

export function ResizeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 9V5a1 1 0 0 1 1-1h4" />
      <path d="M15 4h4a1 1 0 0 1 1 1v4" />
      <path d="M20 15v4a1 1 0 0 1-1 1h-4" />
      <path d="M9 20H5a1 1 0 0 1-1-1v-4" />
    </Svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z" />
      <path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z" />
    </Svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 6.7" />
      <path d="M18 14.5a6 6 0 0 1 3 5.5" />
    </Svg>
  );
}

export function SlidersIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7h16" />
      <circle cx="9.5" cy="7" r="2.3" />
      <path d="M4 17h16" />
      <circle cx="15.5" cy="17" r="2.3" />
    </Svg>
  );
}

export function ZapIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </Svg>
  );
}

export function FeatherIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" x2="22" y1="8" y2="8" />
      <line x1="18" x2="18" y1="5" y2="9" />
    </Svg>
  );
}

export function BracesIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1" />
      <path d="M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
    </Svg>
  );
}

export function TerminalIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </Svg>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
      <path d="M3.3 8.3L12 13l8.7-4.7" />
      <path d="M12 22V13" />
    </Svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 19V5" />
      <path d="M5 12l7-7 7 7" />
    </Svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <line x1="4" x2="20" y1="7" y2="7" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="17" y2="17" />
    </Svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </Svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.2.7.82.57A12 12 0 0 0 12 .3z" />
    </svg>
  );
}

export function NpmIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="1" y="8" width="22" height="10" rx="1.5" fill="#cb3837" />
      <text
        x="12"
        y="15.7"
        textAnchor="middle"
        fontSize="7"
        fontWeight="800"
        fill="#fff"
        fontFamily="Inter, ui-sans-serif, sans-serif"
      >
        npm
      </text>
    </svg>
  );
}
