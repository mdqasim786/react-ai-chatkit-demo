// Runnable self-check for the demo reply logic: node src/demo.check.ts
import { buildReply, DEMO_NOTICE, EXAMPLE_PROMPTS } from "./demo.ts";

function check(ok: unknown, label: string) {
  if (!ok) throw new Error(`FAIL: ${label}`);
  console.log(`ok  - ${label}`);
}

const replies = EXAMPLE_PROMPTS.map((p) => buildReply(p.prompt, 0));
check(
  new Set(replies).size === EXAMPLE_PROMPTS.length,
  "each example prompt gets a distinct reply"
);
for (const r of replies) check(r.includes(DEMO_NOTICE), "reply carries demo notice");
check(replies[0].includes("```tsx"), "hook prompt returns a fenced tsx block");
check(replies[1].includes("| --- |"), "table prompt returns a GFM table");
check(replies[3].includes("```json"), "config prompt returns a fenced json block");

const fallback = buildReply("hello there", 0);
check(fallback.includes("> hello there"), "fallback quotes the user text");
check(fallback.includes(DEMO_NOTICE), "fallback carries demo notice");

const first = buildReply(EXAMPLE_PROMPTS[0].prompt, 0);
const second = buildReply(EXAMPLE_PROMPTS[0].prompt, 1);
check(second !== first, "regenerate returns a different reply");
check(second.includes("Second attempt"), "regenerate is attempt aware");
check(
  second.includes(EXAMPLE_PROMPTS[0].prompt),
  "regenerate echoes the original prompt"
);
