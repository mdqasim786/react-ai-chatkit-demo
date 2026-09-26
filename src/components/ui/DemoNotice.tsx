export default function DemoNotice({ className = "" }: { className?: string }) {
  return (
    <p
      className={`flex items-center gap-2 text-xs text-zinc-500 ${className}`}
    >
      <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-wide text-amber-300 uppercase">
        Demo
      </span>
      <span>
        Simulated replies — no AI model is connected to this page.
      </span>
    </p>
  );
}
