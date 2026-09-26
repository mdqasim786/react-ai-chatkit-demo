import CodeExample from "./components/CodeExample";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Installation from "./components/Installation";
import Navbar from "./components/Navbar";
import Playground from "./components/Playground";
import ScrollToTop from "./components/ScrollToTop";
import Stats from "./components/Stats";
import WhyUse from "./components/WhyUse";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Playground />
        <Installation />
        <CodeExample />
        <WhyUse />
        <Stats />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
