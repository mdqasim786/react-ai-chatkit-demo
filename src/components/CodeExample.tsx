import type { ReactNode } from "react";
import CopyButton from "./ui/CopyButton";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const RAW_CODE = `import { useState } from "react";
import { AIChatBox } from "react-ai-chatkit";
import type { Message } from "react-ai-chatkit";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <AIChatBox
      title="My Assistant"
      theme="dark"
      primaryColor="#8b5cf6"
      messages={messages}
      isTyping={false}
      onSendMessage={(text) => console.log(text)}
    />
  );
}`;

const KEY = "text-fuchsia-400";
const COMP = "text-violet-300";
const TYPE = "text-cyan-300";
const STRING = "text-emerald-300";
const ATTR = "text-sky-300";
const PLAIN = "text-zinc-300";

function k(children: ReactNode) {
  return <span className={KEY}>{children}</span>;
}
function c(children: ReactNode) {
  return <span className={COMP}>{children}</span>;
}
function t(children: ReactNode) {
  return <span className={TYPE}>{children}</span>;
}
function s(children: ReactNode) {
  return <span className={STRING}>{children}</span>;
}
function a(children: ReactNode) {
  return <span className={ATTR}>{children}</span>;
}
function p(children: ReactNode) {
  return <span className={PLAIN}>{children}</span>;
}

function CodeLine({
  n,
  children,
}: {
  n: number;
  children: ReactNode;
}) {
  return (
    <div className="px-5 leading-7 whitespace-pre">
      <span className="mr-4 inline-block w-6 text-right text-zinc-700 select-none">
        {n}
      </span>
      {children}
    </div>
  );
}

export default function CodeExample() {
  return (
    <section className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Usage"
          title="Drop-in component"
          description="Pass your messages and a send handler. Everything else is optional."
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0c0c0f] shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/60 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 font-mono text-xs text-zinc-500">
                  Chat.tsx
                </span>
              </div>
              <CopyButton text={RAW_CODE} label="Copy code" />
            </div>

            <div className="overflow-x-auto py-4 font-mono text-[13px]">
              <CodeLine n={1}>
                {k("import")} {p("{ ")}
                <span className={PLAIN}>useState</span>
                {p(" } ")}
                {k("from")} {s('"react"')}
                {p(";")}
              </CodeLine>
              <CodeLine n={2}>
                {k("import")} {p("{ ")}
                {c("AIChatBox")}
                {p(" } ")}
                {k("from")} {s('"react-ai-chatkit"')}
                {p(";")}
              </CodeLine>
              <CodeLine n={3}>
                {k("import")} {k("type")} {p("{ ")}
                {t("Message")}
                {p(" } ")}
                {k("from")} {s('"react-ai-chatkit"')}
                {p(";")}
              </CodeLine>
              <CodeLine n={4}>
                <span className="opacity-0">{""}</span>
              </CodeLine>
              <CodeLine n={5}>
                {k("export")} {k("default")} {k("function")} {p("Chat")}
                {p("() {")}
              </CodeLine>
              <CodeLine n={6}>
                {p("  ")}
                {k("const")} {p("[messages, setMessages]")} {p("=")}{" "}
                {p("useState")}
                {p("<")}
                {t("Message")}
                {p("[]>([]);")}
              </CodeLine>
              <CodeLine n={7}>
                <span className="opacity-0">{""}</span>
              </CodeLine>
              <CodeLine n={8}>
                {p("  ")}
                {k("return")} {p("(")}
              </CodeLine>
              <CodeLine n={9}>
                {p("    ")}
                {p("<")}
                {c("AIChatBox")}
              </CodeLine>
              <CodeLine n={10}>
                {p("      ")}
                {a("title")}
                {p('="')}
                {s("My Assistant")}
                {p('"')}
              </CodeLine>
              <CodeLine n={11}>
                {p("      ")}
                {a("theme")}
                {p('="')}
                {s("dark")}
                {p('"')}
              </CodeLine>
              <CodeLine n={12}>
                {p("      ")}
                {a("primaryColor")}
                {p('="')}
                {s("#8b5cf6")}
                {p('"')}
              </CodeLine>
              <CodeLine n={13}>
                {p("      ")}
                {a("messages")}
                {p("={messages}")}
              </CodeLine>
              <CodeLine n={14}>
                {p("      ")}
                {a("isTyping")}
                {p("={")}
                <span className="text-zinc-400">false</span>
                {p("}")}
              </CodeLine>
              <CodeLine n={15}>
                {p("      ")}
                {a("onSendMessage")}
                {p("={(")}
                <span className="text-zinc-400">text</span>
                {p(") => ")}
                <span className="text-zinc-400">console</span>
                {p(".")}
                <span className="text-zinc-400">log</span>
                {p("(text)}")}
              </CodeLine>
              <CodeLine n={16}>
                {p("    ")}
                {p("/>")}
              </CodeLine>
              <CodeLine n={17}>
                {p("  ")}
                {p(");")}
              </CodeLine>
              <CodeLine n={18}>{p("}")}</CodeLine>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
