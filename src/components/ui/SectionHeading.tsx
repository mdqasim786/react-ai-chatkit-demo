import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium tracking-wide text-violet-300 uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-zinc-400 sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
