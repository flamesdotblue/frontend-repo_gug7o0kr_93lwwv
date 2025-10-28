import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-white/60 px-4 py-2 text-sm text-sky-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            <span>DataCura — Data you can trust</span>
          </div>
          <h1 className="mx-auto max-w-4xl font-semibold leading-tight text-gray-900 text-4xl sm:text-5xl md:text-6xl">
            We make messy data clean, accurate, and ready for insights.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Because better data means better decisions.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            >
              Book a Free Data Audit
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-800 shadow-sm transition hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            >
              <span className="mr-2">See Our Work</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
