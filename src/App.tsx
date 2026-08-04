import { useState } from "react";
import { AIChatBox } from "react-ai-chatkit";
import type { Message } from "react-ai-chatkit";
import Features from "./components/Features";
import Playground from "./components/Playground";

function getCurrentTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      timestamp: getCurrentTime(),
      text: `# Welcome 👋

I'm **React AI ChatKit**.

Try sending a message!

Or ask me for:

- Markdown
- Code
- Lists
- Tables`,
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  function handleSendMessage(message: string) {
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: message,
      timestamp: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-ai`,
          sender: "ai",
          timestamp: getCurrentTime(),
          text: `You said **${message}**

\`\`\`tsx
function Button() {
  return <button>Hello</button>;
}
\`\`\`

This code block is rendered by **React AI ChatKit**.`,
        },
      ]);

      setIsTyping(false);
    }, 900);
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1 text-sm">
              🚀 v1.0.2
            </span>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight">
              Build Beautiful
              <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                {" "}AI Chat Interfaces
              </span>
            </h1>

            <p className="mt-8 text-xl text-zinc-400">
              Modern React chat component with Markdown,
              syntax highlighting, typing indicator,
              responsive design and TypeScript support.
            </p>

            <div className="mt-10 flex gap-4">

<a
  href="#playground"
  className="rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500"
>
  Get Started
</a>

<a
  href="https://github.com/mdqasim786/react-ai-chatkit"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl border border-zinc-700 px-8 py-4 transition hover:border-violet-500"
>
  GitHub
</a>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <AIChatBox
              title="React AI ChatKit"
              width="430px"
              height="600px"
              theme="dark"
              primaryColor="#7c3aed"
              messages={messages}
              isTyping={isTyping}
              onSendMessage={handleSendMessage}
            />

          </div>

        </div>

      </section>
      <Features />
      <Playground />
    </main>
  );
}