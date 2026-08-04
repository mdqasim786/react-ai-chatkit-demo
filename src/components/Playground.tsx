import { useState } from "react";
import { AIChatBox } from "react-ai-chatkit";
import type { Message } from "react-ai-chatkit";

function getCurrentTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function Playground() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [primaryColor, setPrimaryColor] = useState("#7c3aed");
  const [showHeader, setShowHeader] = useState(true);
  const [showAvatars, setShowAvatars] = useState(true);
  const [showCopyButton, setShowCopyButton] = useState(true);

  const messages: Message[] = [
    {
      id: "1",
      sender: "ai",
      timestamp: getCurrentTime(),
      text: "Welcome to **React AI ChatKit** 👋",
    },
  ];

  return (
<section
  id="playground"
  className="mx-auto max-w-7xl px-6 py-24"
>
      <h2 className="mb-12 text-center text-4xl font-bold">
        Interactive Playground
      </h2>

      <div className="grid gap-12 lg:grid-cols-[320px_1fr]">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

          <h3 className="mb-6 text-xl font-semibold">
            Customize
          </h3>

          <div className="space-y-6">

            <div>
              <label className="mb-2 block font-medium">
                Theme
              </label>

              <select
                value={theme}
                onChange={(e) =>
                  setTheme(e.target.value as "light" | "dark")
                }
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3"
              >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Primary Color
              </label>

              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="h-12 w-full"
              />
            </div>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={showHeader}
                onChange={() => setShowHeader(!showHeader)}
              />
              Header
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={showAvatars}
                onChange={() => setShowAvatars(!showAvatars)}
              />
              Avatars
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={showCopyButton}
                onChange={() =>
                  setShowCopyButton(!showCopyButton)
                }
              />
              Copy Button
            </label>

          </div>

        </div>

        <div className="flex justify-center">

          <AIChatBox
            title="Playground"
            width="420px"
            height="600px"
            messages={messages}
            theme={theme}
            primaryColor={primaryColor}
            showHeader={showHeader}
            showAvatars={showAvatars}
            showCopyButton={showCopyButton}
            onSendMessage={(msg) => console.log(msg)}
          />

        </div>

      </div>
    </section>
  );
}