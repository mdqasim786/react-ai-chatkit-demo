import { AIChatBox } from "react-ai-chatkit";
import { buildReply } from "../demo";
import { useChat } from "../hooks/useChat";
import DemoNotice from "./ui/DemoNotice";
import ExamplePrompts from "./ExamplePrompts";
import Reveal from "./ui/Reveal";
import { GitHubIcon, NpmIcon } from "./ui/icons";

const WELCOME = `# Welcome 👋

I'm **React AI ChatKit** v1.1.0.

Ask for a code block, a table or a checklist — or send any message and watch
Markdown, syntax highlighting, copy and regenerate work.

_Send a message to start._`;

export default function Hero() {
  const { messages, isTyping, send, regenerate } = useChat({
    initial: [
      { id: "welcome", sender: "ai", timestamp: "now", text: WELCOME },
    ],
    reply: buildReply,
  });

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-3 py-1.5 text-sm text-zinc-300 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="rounded-md bg-violet-600 px-1.5 py-0.5 text-xs font-semibold text-white">
                  v1.1.0
                </span>
                now on npm
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Build beautiful{" "}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  AI chat interfaces
                </span>{" "}
                in minutes
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg text-zinc-400">
                A customizable React and TypeScript chat UI component with
                Markdown, syntax highlighting, per-message copy, regenerate,
                themes and timestamps — out of the box. No boilerplate, no
                config, no trade-offs.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#playground"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-violet-500 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:shadow-xl hover:shadow-violet-500/40 hover:brightness-110 active:scale-[0.98]"
                >
                  Get Started
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14" />
                    <path d="M19 12l-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href="https://github.com/mdqasim786/react-ai-chatkit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-6 py-3.5 font-semibold text-zinc-200 backdrop-blur transition hover:border-zinc-500 hover:bg-zinc-800 hover:text-white active:scale-[0.98]"
                >
                  <GitHubIcon className="h-5 w-5" />
                  GitHub
                </a>
                <a
                  href="https://www.npmjs.com/package/react-ai-chatkit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-6 py-3.5 font-semibold text-zinc-200 backdrop-blur transition hover:border-zinc-500 hover:bg-zinc-800 hover:text-white active:scale-[0.98]"
                >
                  <NpmIcon className="h-5 w-5" />
                  npm
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-violet-400" />
                  MIT licensed
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-fuchsia-400" />
                  React 18+
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-cyan-400" />
                  Fully typed
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div
                className="absolute -inset-5 rounded-3xl bg-gradient-to-tr from-violet-600/25 via-transparent to-cyan-500/25 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl">
                <AIChatBox
                  title="React AI ChatKit"
                  width="100%"
                  height="520px"
                  theme="dark"
                  primaryColor="#7c3aed"
                  messages={messages}
                  isTyping={isTyping}
                  onSendMessage={send}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
