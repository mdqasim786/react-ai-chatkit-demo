import Logo from "./ui/Logo";
import { GitHubIcon, NpmIcon } from "./ui/icons";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="text-sm font-semibold text-white">
                React AI ChatKit
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              A customizable React and TypeScript chat UI component for AI
              assistants, SaaS applications and chatbot interfaces.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
                Explore
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href="#features"
                    className="text-zinc-400 transition hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#playground"
                    className="text-zinc-400 transition hover:text-white"
                  >
                    Playground
                  </a>
                </li>
                <li>
                  <a
                    href="#install"
                    className="text-zinc-400 transition hover:text-white"
                  >
                    Installation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
                Links
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://github.com/mdqasim786/react-ai-chatkit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/react-ai-chatkit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
                  >
                    <NpmIcon className="h-4 w-4" />
                    npm
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/mdqasim786/react-ai-chatkit/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 transition hover:text-white"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/70 pt-8 text-sm text-zinc-500 sm:flex-row">
          <p>
            Made with <span className="text-violet-400">♥</span> by{" "}
            <a
              href="https://github.com/mdqasim786"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 transition hover:text-white"
            >
              Muhammad Qasim
            </a>
          </p>
          <p>© {new Date().getFullYear()} React AI ChatKit. MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
