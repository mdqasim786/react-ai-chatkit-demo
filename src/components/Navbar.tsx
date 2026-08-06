import { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import { CloseIcon, GitHubIcon, MenuIcon, NpmIcon } from "./ui/icons";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#playground", label: "Playground" },
  { href: "#install", label: "Install" },
  { href: "#why", label: "Why ChatKit?" },
];

const SECTION_IDS = ["features", "playground", "install", "why"];

function useActiveSection() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const pos = window.scrollY + 120;
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { active, scrolled };
}

export default function Navbar() {
  const { active, scrolled } = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
        aria-label="Main"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-lg text-zinc-100 transition hover:text-white"
        >
          <Logo className="h-7 w-7" />
          <span className="text-sm font-semibold tracking-tight">
            React AI ChatKit
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm transition ${
                active === link.href.slice(1)
                  ? "text-white"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://github.com/mdqasim786/react-ai-chatkit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/60 px-3 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.npmjs.com/package/react-ai-chatkit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="npm package"
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/60 px-3.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            <NpmIcon className="h-4 w-4" />
            npm
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/60 text-zinc-300 transition hover:text-white md:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-800/60 bg-zinc-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm transition ${
                  active === link.href.slice(1)
                    ? "bg-violet-500/10 text-violet-300"
                    : "text-zinc-300 hover:bg-zinc-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
