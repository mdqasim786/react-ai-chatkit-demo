import { useState } from "react";
import type { ReactNode } from "react";
import { AIChatBox } from "react-ai-chatkit";
import { buildReply } from "../demo";
import { useChat } from "../hooks/useChat";
import DemoNotice from "./ui/DemoNotice";
import ExamplePrompts from "./ExamplePrompts";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import Slider from "./ui/Slider";
import Switch from "./ui/Switch";

const SWATCHES = [
  "#7c3aed",
  "#06b6d4",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#ec4899",
  "#3b82f6",
  "#14b8a6",
];

function ControlGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold tracking-wide text-zinc-500 uppercase">
        {title}
      </p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 transition focus:border-violet-500 focus:outline-none";

export default function Playground() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [primaryColor, setPrimaryColor] = useState("#7c3aed");
  const [width, setWidth] = useState(420);
  const [height, setHeight] = useState(620);
  const [showHeader, setShowHeader] = useState(true);
  const [showAvatars, setShowAvatars] = useState(true);
  const [messageActions, setMessageActions] = useState(true);
  const [showSendButton, setShowSendButton] = useState(true);
  const [showTimestamps, setShowTimestamps] = useState(true);
  const [showTyping, setShowTyping] = useState(true);
  const [title, setTitle] = useState("Chat with Assistant");
  const [subtitle, setSubtitle] = useState("Typically replies instantly");
  const [placeholder, setPlaceholder] = useState("Ask me anything…");

  const { messages, isTyping, send, regenerate, reset } = useChat({
    reply: buildReply,
  });

  return (
    <section id="playground" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Playground"
          title="Tune it live"
          description="Every prop updates the chat instantly. This is the same component you get from npm."
        />

        <Reveal className="mt-14">
          <div className="grid gap-8 lg:grid-cols-[340px_1fr]">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur lg:sticky lg:top-24 lg:self-start">
              <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold text-white">
                <span className="inline-flex h-2 w-2 rounded-full bg-violet-400" />
                Customize
              </h3>

              <div className="space-y-7">
                <ControlGroup title="Theme">
                  <div className="grid grid-cols-2 gap-1 rounded-lg border border-zinc-800 bg-zinc-950 p-1">
                    {(["dark", "light"] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setTheme(option)}
                        aria-pressed={theme === option}
                        className={`cursor-pointer rounded-md px-3 py-1.5 text-sm font-medium capitalize transition ${
                          theme === option
                            ? "bg-violet-600 text-white shadow"
                            : "text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </ControlGroup>

                <ControlGroup title="Primary Color">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {SWATCHES.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setPrimaryColor(color)}
                        aria-label={`Set primary color to ${color}`}
                        className={`h-7 w-7 cursor-pointer rounded-full border-2 transition-transform hover:scale-110 ${
                          primaryColor === color
                            ? "border-white scale-110"
                            : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    <label className="relative h-7 w-7 cursor-pointer rounded-full transition-transform hover:scale-110">
                      <span className="sr-only">Pick custom color</span>
                      <span className="absolute inset-0 flex items-center justify-center rounded-full border border-dashed border-zinc-500 text-xs text-zinc-400">
                        +
                      </span>
                      <input
                        type="color"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="h-7 w-7 opacity-0"
                      />
                    </label>
                  </div>
                </ControlGroup>

                <ControlGroup title="Layout">
                  <div className="divide-y divide-zinc-800/70">
                    <Switch
                      checked={showHeader}
                      onChange={setShowHeader}
                      label="Header"
                    />
                    <Switch
                      checked={showAvatars}
                      onChange={setShowAvatars}
                      label="Avatars"
                    />
                    <Switch
                      checked={showTimestamps}
                      onChange={setShowTimestamps}
                      label="Timestamps"
                    />
                  </div>
                </ControlGroup>

                <ControlGroup title="Behavior">
                  <div className="divide-y divide-zinc-800/70">
                    <Switch
                      checked={messageActions}
                      onChange={setMessageActions}
                      label="Copy & regenerate"
                      description="Needs onRegenerate — copy only appears with it"
                    />
                    <Switch
                      checked={showSendButton}
                      onChange={setShowSendButton}
                      label="Send button"
                    />
                    <Switch
                      checked={showTyping}
                      onChange={setShowTyping}
                      label="Typing indicator"
                      description="Shown while the AI is replying"
                    />
                  </div>
                </ControlGroup>

                <ControlGroup title="Sizing">
                  <Slider
                    label="Width"
                    value={width}
                    min={280}
                    max={560}
                    onChange={setWidth}
                  />
                  <Slider
                    label="Height"
                    value={height}
                    min={400}
                    max={720}
                    onChange={setHeight}
                  />
                </ControlGroup>

                <ControlGroup title="Content">
                  <label className="block">
                    <span className="sr-only">Chat title</span>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Chat title"
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className="sr-only">Chat subtitle</span>
                    <input
                      type="text"
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                      placeholder="Chat subtitle"
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className="sr-only">Placeholder</span>
                    <input
                      type="text"
                      value={placeholder}
                      onChange={(e) => setPlaceholder(e.target.value)}
                      placeholder="Placeholder"
                      className={inputClass}
                    />
                  </label>
                </ControlGroup>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/30 px-3 py-8 sm:px-6 sm:py-10">
              <div className="relative mb-6 flex flex-wrap items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  Live preview
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <DemoNotice />
                  <button
                    type="button"
                    onClick={reset}
                    className="cursor-pointer rounded-lg border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                  >
                    Reset chat
                  </button>
                </div>
              </div>

              <div
                className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-violet-600/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex justify-center overflow-x-auto pb-2">
                <AIChatBox
                  title={title}
                  subtitle={subtitle}
                  placeholder={placeholder}
                  width={width}
                  height={height}
                  theme={theme}
                  primaryColor={primaryColor}
                  messages={messages}
                  isTyping={showTyping && isTyping}
                  showHeader={showHeader}
                  showAvatars={showAvatars}
                  showSendButton={showSendButton}
                  showTimestamps={showTimestamps}
                  onSendMessage={send}
                  onRegenerate={messageActions ? regenerate : undefined}
                  emptyStateContent={
                    <ExamplePrompts
                      onPick={send}
                      disabled={isTyping}
                      align="center"
                      heading="Pick a prompt to begin"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
