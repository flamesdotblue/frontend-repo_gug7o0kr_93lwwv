import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Let’s clean your data
          </h2>
          <p className="mt-3 text-gray-600">
            Get a free 15-minute consultation to see how we can help.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  placeholder="you@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  placeholder="Company or team"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">What data problem can we help with?</label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  placeholder="Briefly describe your dataset, source systems, and goals"
                />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center rounded-lg bg-sky-600 px-5 py-2.5 text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Request
              </button>
              <a
                href="mailto:hello@datacura.co"
                className="inline-flex items-center text-sky-700 hover:text-sky-800"
              >
                <Mail className="mr-2 h-4 w-4" />
                hello@datacura.co
              </a>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-sky-50 p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900">What to expect</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
              <li>We’ll review a sample of your data and your objectives.</li>
              <li>We propose a clear plan: rules, checks, and expected outputs.</li>
              <li>Fast turnaround with transparent status updates.</li>
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              Prefer email? Reach us directly at
              <a href="mailto:hello@datacura.co" className="ml-1 font-medium text-sky-700 hover:text-sky-800">hello@datacura.co</a>.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} DataCura. All rights reserved.
        </div>
      </div>
    </section>
  );
}
