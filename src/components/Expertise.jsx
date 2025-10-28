import { motion } from "framer-motion";
import { Database, ShieldCheck, BarChart3, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Cleanup",
    desc: "Fix formatting, remove duplicates, standardize columns.",
  },
  {
    icon: ShieldCheck,
    title: "Data Validation",
    desc: "Apply rules, detect logic errors, automate consistency checks.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    desc: "Summarize, visualize, and prepare data for reporting.",
  },
];

export default function Expertise() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Our Expertise
          </h2>
          <p className="mt-3 text-gray-600">
            Practical, battle-tested workflows that turn unreliable datasets into
            decision-ready assets.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-sky-50 p-8">
          <h3 className="text-xl font-semibold text-gray-900">
            We combine engineering precision with data intuition.
          </h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 text-sky-600" />
              <span>Rule-based validation logic built with Python.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 text-sky-600" />
              <span>Proven methods from enterprise-scale data projects.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 text-sky-600" />
              <span>Fast turnaround and clear documentation.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
