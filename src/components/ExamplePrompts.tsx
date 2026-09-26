import { EXAMPLE_PROMPTS } from "../demo";

type Props = {
  onPick: (prompt: string) => void;
  disabled?: boolean;
  align?: "start" | "center";
  heading?: string;
};

/** Clickable starter prompts. Each one pre-fills the composer with canned text. */
export default function ExamplePrompts({
  onPick,
  disabled = false,
  align = "start",
  heading = "Try one of these",
}: Props) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="mb-3 text-xs font-semibold tracking-wide text-zinc-500 uppercase">
        {heading}
      </p>
      <ul
        className={`flex flex-wrap gap-2 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {EXAMPLE_PROMPTS.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              disabled={disabled}
              onClick={() => onPick(p.prompt)}
              className="cursor-pointer rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-violet-500/60 hover:bg-violet-500/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              {p.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
