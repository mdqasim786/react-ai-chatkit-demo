import { useCallback, useEffect, useRef, useState } from "react";
import type { Message } from "react-ai-chatkit";

type Options = {
  initial?: Message[];
  reply: (text: string, attempt: number) => string;
  delay?: number;
};

function time() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

let seq = 0;

export function useChat({ initial, reply, delay = 900 }: Options) {
  const initialRef = useRef(initial ?? []);
  const [messages, setMessages] = useState<Message[]>(() => initial ?? []);
  const [isTyping, setIsTyping] = useState(false);
  const attemptRef = useRef(0);
  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    },
    []
  );

  const push = useCallback(
    (text: string, attempt: number) => {
      setIsTyping(true);
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `ai-${Date.now()}-${seq++}`,
            sender: "ai",
            timestamp: time(),
            text: reply(text, attempt),
          },
        ]);
        setIsTyping(false);
      }, delay);
    },
    [reply, delay]
  );

  const send = useCallback(
    (message: string) => {
      const text = message.trim();
      if (!text) return;
      setMessages((prev) => [
        ...prev,
        {
          id: `user-${Date.now()}-${seq++}`,
          sender: "user",
          timestamp: time(),
          text,
        },
      ]);
      attemptRef.current = 0;
      push(text, 0);
    },
    [push]
  );

  const regenerate = useCallback(() => {
    if (isTyping) return;
    const lastUser = [...messages].reverse().find((m) => m.sender === "user");
    if (!lastUser) return;
    attemptRef.current += 1;
    setMessages(messages.slice(0, messages.indexOf(lastUser) + 1));
    push(lastUser.text, attemptRef.current);
  }, [isTyping, messages, push]);

  const reset = useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    attemptRef.current = 0;
    setIsTyping(false);
    setMessages(initialRef.current);
  }, []);

  return { messages, isTyping, send, regenerate, reset };
}
