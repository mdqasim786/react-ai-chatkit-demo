import type { ReactNode } from "react";
import CopyButton from "./ui/CopyButton";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const RAW_CODE = `import { useState } from "react";
import { AIChatBox } from "react-ai-chatkit";
import type { Message } from "react-ai-chatkit";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  async function send(text: string) {
    setIsTyping(true);
    setMessages((m) => [...m, { id: crypto.randomUUID(), sender: "user", text }]);

    const { reply } = await postToYourApi(text);
    setMessages((m) => [...m, { id: crypto.randomUUID(), sender: "ai", text: reply }]);
    setIsTyping(false);
  }

  return (
    <AIChatBox
      title="Support assistant"
      messages={messages}
      isTyping={isTyping}
      onSendMessage={send}
    />
  );
}`;

const KEY = "text-fuchsia-400";
const COMP = "text-violet-300";
const TYPE = "text-cyan-300";
const STRING = "text-emerald-300";
const ATTR = "text-sky-300";
const PLAIN = "text-zinc-300";
const FN = "text-zinc-400";

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
function f(children: ReactNode) {
  return <span className={FN}>{children}</span>;
}
function blank() {
  return (
    <div className="px-5 leading-7">
      <span className="mr-4 inline-block w-6" />
    </div>
  );
}

function CodeLine({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="px-5 leading-7 whitespace-pre">
      <span className="mr-4 inline-block w-6 text-right text-zinc-700 select-none">
        {n}
      </span>
      {children}
    </div>
  );
}

function Uuid() {
  return (
    <>
      {a("id")} {p(": ")}
      {f("crypto")}
      {p(".")}
      {f("randomUUID")} {p("(), ")}
    </>
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
                {f("useState")}
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
              {blank()}
              <CodeLine n={5}>
                {k("export")} {k("default")} {k("function")} {f("Chat")} {p("() {")}
              </CodeLine>
              <CodeLine n={6}>
                {p("  ")}
                {k("const")} {p("[messages, setMessages] = ")}
                {f("useState")}
                {p("<")}
                {t("Message")}
                {p("[]>([]);")}
              </CodeLine>
              <CodeLine n={7}>
                {p("  ")}
                {k("const")} {p("[isTyping, setIsTyping] = ")}
                {f("useState")}
                {p("(")}
                {f("false")}
                {p(");")}
              </CodeLine>
              {blank()}
              <CodeLine n={9}>
                {p("  ")}
                {k("async")} {k("function")} {f("send")} {p("(")}
                {f("text")}
                {p(": ")}
                {t("string")}
                {p(") {")}
              </CodeLine>
              <CodeLine n={10}>
                {p("    ")}
                {f("setIsTyping")}
                {p("(")}
                {f("true")}
                {p(");")}
              </CodeLine>
              <CodeLine n={11}>
                {p("    ")}
                {f("setMessages")}
                {p("((")}
                {f("m")}
                {p(") => [...m, { ")}
                <Uuid />
                {a("sender")}
                {p(": ")}
                {s('"user"')}
                {p(", ")}
                {a("text")}
                {p(" }]);")}
              </CodeLine>
              {blank()}
              <CodeLine n={13}>
                {p("    ")}
                {k("const")} {p("{ ")}
                {f("reply")}
                {p(" } = ")}
                {k("await")} {f("postToYourApi")}
                {p("(")}
                {f("text")}
                {p(");")}
              </CodeLine>
              <CodeLine n={14}>
                {p("    ")}
                {f("setMessages")}
                {p("((")}
                {f("m")}
                {p(") => [...m, { ")}
                <Uuid />
                {a("sender")}
                {p(": ")}
                {s('"ai"')}
                {p(", ")}
                {a("text")}
                {p(": ")}
                {f("reply")}
                {p(" }]);")}
              </CodeLine>
              <CodeLine n={15}>
                {p("    ")}
                {f("setIsTyping")}
                {p("(")}
                {f("false")}
                {p(");")}
              </CodeLine>
              <CodeLine n={16}>{p("  }")}</CodeLine>
              {blank()}
              <CodeLine n={18}>
                {p("  ")}
                {k("return")} {p("(")}
              </CodeLine>
              <CodeLine n={19}>
                {p("    <")}
                {c("AIChatBox")}
              </CodeLine>
              <CodeLine n={20}>
                {p("      ")}
                {a("title")}
                {p('="')}
                {s("Support assistant")}
                {p('"')}
              </CodeLine>
              <CodeLine n={21}>
                {p("      ")}
                {a("messages")}
                {p("={messages}")}
              </CodeLine>
              <CodeLine n={22}>
                {p("      ")}
                {a("isTyping")}
                {p("={isTyping}")}
              </CodeLine>
              <CodeLine n={23}>
                {p("      ")}
                {a("onSendMessage")}
                {p("={send}")}
              </CodeLine>
              <CodeLine n={24}>{p("    />")}</CodeLine>
              <CodeLine n={25}>
                {p("  );")}
              </CodeLine>
              <CodeLine n={26}>{p("}")}</CodeLine>
            </div>

            <p className="border-t border-zinc-800 bg-zinc-900/40 px-5 py-4 text-sm text-zinc-400">
              The component is fully controlled: you own the message list, the
              typing state and the model call.{" "}
              <code className="rounded bg-zinc-950 px-1.5 py-0.5 font-mono text-xs text-emerald-300">
                postToYourApi
              </code>{" "}
              is the only seam — point it at your own endpoint. Add{" "}
              <code className="rounded bg-zinc-950 px-1.5 py-0.5 font-mono text-xs text-emerald-300">
                onRegenerate
              </code>{" "}
              and copy buttons come with it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
