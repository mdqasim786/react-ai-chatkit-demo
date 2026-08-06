import { useCallback, useEffect, useRef, useState } from "react";
import type { Message } from "react-ai-chatkit";

function getCurrentTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function useChat(welcome: string) {
  const [messages, setMessages] = useState<Message[]>(() => [
    { id: "welcome", sender: "ai", timestamp: getCurrentTime(), text: welcome },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    },
    []
  );

  const send = useCallback((message: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${Date.now()}-user`,
        sender: "user",
        timestamp: getCurrentTime(),
        text: message,
      },
    ]);

    setIsTyping(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-ai`,
          sender: "ai",
          timestamp: getCurrentTime(),
          text: `You said **${message}**\n\n\`\`\`tsx\nfunction Button() {\n  return <button>Hello</button>;\n}\n\`\`\`\n\nThis code block is rendered by **React AI ChatKit**.`,
        },
      ]);
      setIsTyping(false);
    }, 900);
  }, []);

  return { messages, isTyping, send };
}
