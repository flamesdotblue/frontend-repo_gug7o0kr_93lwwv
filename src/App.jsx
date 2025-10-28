import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Rocket, Menu } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 text-white">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">DataCura</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm text-gray-700 hover:text-gray-900">Services</a>
            <a href="#work" className="text-sm text-gray-700 hover:text-gray-900">Work</a>
            <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900">Contact</a>
            <a href="#contact" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700">Book a Free Data Audit</a>
          </nav>

          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            <Menu className="h-6 w-6 text-gray-800" />
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-200 md:hidden">
            <div className="mx-auto max-w-7xl px-6 py-3 space-y-2">
              <a onClick={() => setOpen(false)} href="#services" className="block text-sm text-gray-700">Services</a>
              <a onClick={() => setOpen(false)} href="#work" className="block text-sm text-gray-700">Work</a>
              <a onClick={() => setOpen(false)} href="#contact" className="block text-sm text-gray-700">Contact</a>
              <a onClick={() => setOpen(false)} href="#contact" className="block rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm">Book a Free Data Audit</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <Expertise />
        <Work />
        <Contact />
      </main>
    </div>
  );
}
