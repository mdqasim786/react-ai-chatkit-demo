// Demo-only content. No AI model is connected anywhere on this page: every reply
// below is canned Markdown chosen by keyword so the renderer can be shown off.

export const DEMO_NOTICE = "_Simulated reply — no AI model is connected._";

export const EXAMPLE_PROMPTS = [
  { id: "code", label: "Code block", prompt: "Show me a typed React hook" },
  { id: "table", label: "Markdown table", prompt: "Show me the core props table" },
  { id: "list", label: "Lists & quote", prompt: "Show me a release checklist" },
  { id: "json", label: "JSON", prompt: "Show me a config object" },
] as const;

const CANNED: Record<string, string> = {
  code: `### Syntax-highlighted code

Fenced blocks are themed by language and carry their own copy button.

\`\`\`tsx
export type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
};

export function useConversation() {
  const [messages, setMessages] = useState<Message[]>([]);
  return { messages, setMessages };
}
\`\`\`

> Hover an AI message to reveal **copy** and **regenerate**.`,

  table: `### GFM tables

Every core prop, straight from the shipped types:

| Prop | Type | Purpose |
| --- | --- | --- |
| \`messages\` | \`Message[]\` | Your conversation state |
| \`onSendMessage\` | \`(text: string) => void\` | Fires on submit |
| \`isTyping\` | \`boolean\` | Shows the typing dots |
| \`onRegenerate\` | \`() => void\` | Retries the last AI reply |
| \`emptyStateContent\` | \`ReactNode\` | Replaces the empty state |

Tables, task lists and ~~strikethrough~~ come from \`remark-gfm\`.`,

  list: `### Lists, quotes and inline code

**Release checklist**

1. Bump the version
2. Publish to npm
3. Tag the release

- [x] Type declarations shipped
- [x] Peer deps declared
- [ ] Write the changelog

> “Ship the boring, obvious version first.”

Inline \`code\`, **bold** and _italic_ all render out of the box.`,

  json: `### Fenced JSON

\`\`\`json
{
  "component": "AIChatBox",
  "version": "1.1.0",
  "props": {
    "theme": "dark",
    "primaryColor": "#7c3aed",
    "showCopyButton": true
  }
}
\`\`\`

Swap the fence to \`bash\`, \`python\` or anything Prism ships and the theme follows.`,
};

function keyFor(text: string): string | undefined {
  const t = text.toLowerCase();
  if (t.includes("hook") || t.includes("code")) return "code";
  if (t.includes("table") || t.includes("props")) return "table";
  if (t.includes("checklist") || t.includes("list")) return "list";
  if (t.includes("json") || t.includes("config")) return "json";
  return undefined;
}

function fallback(text: string): string {
  return `### You said

> ${text}

This conversation is a **simulated demo** — replies are canned Markdown, picked by
keyword, so you can see how \`AIChatBox\` renders formatting, code and message actions
without connecting a model.`;
}

function secondAttempt(text: string): string {
  return `### Second attempt

Regenerate re-ran the same prompt through this page's canned responder. In your app
this is just a callback, so you own the retry, the loading state and the result.

> **${text}**`;
}

export function buildReply(text: string, attempt: number): string {
  const body =
    attempt > 0
      ? secondAttempt(text)
      : (CANNED[keyFor(text) ?? ""] ?? fallback(text));
  return `${body}\n\n${DEMO_NOTICE}`;
}
