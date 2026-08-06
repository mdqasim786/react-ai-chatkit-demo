import { useId } from "react";

export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.5c-5.25 0-9.5 3.9-9.5 8.7 0 2.7 1.4 5.1 3.6 6.7-.2 1-.6 2.4-1.6 3.3 2.2-.3 3.9-1.4 4.8-2.4.9.2 1.8.3 2.7.3 5.25 0 9.5-3.9 9.5-8.7S17.25 2.5 12 2.5z"
        fill={`url(#${id})`}
      />
      <path
        d="M13.5 6.5L9 12.5h2.8L10.5 16l4.8-6.4h-2.8l1-3.1z"
        fill="#fff"
      />
    </svg>
  );
}
