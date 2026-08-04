const features = [
  "Markdown Rendering",
  "Syntax Highlighting",
  "Typing Indicator",
  "Copy Messages",
  "Responsive Design",
  "Dark & Light Themes",
  "TypeScript Support",
  "Custom Colors",
  "Auto-resizing Textarea",
  "Message Animations",
  "AI & User Avatars",
  "Highly Customizable",
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Everything you need for AI chat.
        </h2>

        <p className="mt-4 text-zinc-400">
          Build production-ready AI interfaces without reinventing the wheel.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-violet-500 hover:-translate-y-1"
          >
            <div className="mb-4 text-2xl">✨</div>

            <h3 className="font-semibold">{feature}</h3>

            <p className="mt-2 text-sm text-zinc-400">
              Included out of the box.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}