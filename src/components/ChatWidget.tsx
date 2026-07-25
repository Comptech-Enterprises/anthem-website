"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Message = { id: number; from: "bot" | "user"; text: string };

const initialMessages: Message[] = [
  {
    id: 1,
    from: "bot",
    text: "Hi 👋 I'm Anthem's assistant. How can I help you today?",
  },
];

const quickReplies = [
  "Plan an event",
  "Our services",
  "Get a quote",
  "Talk to the team",
];

// dummy canned responses — no real AI/backend
const botReply = (input: string): string => {
  const q = input.toLowerCase();
  if (q.includes("service"))
    return "We work across Digital (social, content, films, performance) and Events (live IPs, activations, launches). What are you exploring?";
  if (q.includes("quote") || q.includes("price"))
    return "Happy to help with a quote! Share your event type, date and rough guest count and the team will revert with a tailored proposal.";
  if (q.includes("event") || q.includes("plan"))
    return "Love that. Tell me a little about the occasion — brand activation, launch, festival? You can also use the enquiry form and we'll take it from there.";
  if (q.includes("team") || q.includes("talk") || q.includes("contact"))
    return "You can reach us at info@theanthem.in or +91 90000 00000. Want me to point you to the enquiry form?";
  return "Thanks for the message! This is a demo assistant — the team will get back to you shortly. 🙌";
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing, open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Message = { id: Date.now(), from: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    // simulate the bot "thinking"
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        { id: Date.now() + 1, from: "bot", text: botReply(trimmed) },
      ]);
    }, 1000);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {/* chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-[30rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
          >
            {/* header */}
            <div className="flex items-center gap-3 border-b border-border bg-surface-2 p-4">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-accent text-black">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                </svg>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-surface-2 bg-green-400" />
              </div>
              <div className="flex-1">
                <p className="font-display text-sm font-semibold text-foreground">
                  Anthem Assistant
                </p>
                <p className="font-body text-xs text-green-400">Online</p>
              </div>
              <button
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-3 hover:text-foreground"
              >
                ✕
              </button>
            </div>

            {/* messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto p-4"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 font-body text-sm leading-relaxed ${
                      m.from === "user"
                        ? "rounded-br-sm bg-accent text-black"
                        : "rounded-bl-sm bg-surface-3 text-foreground"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-surface-3 px-3.5 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-muted"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* quick replies (only before any user message) */}
              {messages.length === 1 && !typing && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {quickReplies.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="rounded-full border border-border px-3 py-1.5 font-body text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* input */}
            <form
              onSubmit={onSubmit}
              className="flex items-center gap-2 border-t border-border bg-surface-2 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-accent"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-black transition-all hover:shadow-[0_0_20px_var(--accent-glow)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                </svg>
              </button>
            </form>
            <p className="bg-surface-2 pb-2 text-center font-body text-[10px] text-muted-2">
              Demo assistant — responses are simulated
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* launcher button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.9 }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-black shadow-[0_8px_30px_var(--accent-glow)] transition-all hover:scale-105"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="text-2xl"
            >
              ✕
            </motion.span>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
