import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./ui/icons";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed right-6 bottom-6 z-40 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/80 text-zinc-300 shadow-lg shadow-black/40 backdrop-blur transition-all duration-300 hover:border-violet-500 hover:text-white ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}
