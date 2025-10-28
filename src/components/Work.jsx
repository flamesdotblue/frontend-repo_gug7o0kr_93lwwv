import { motion } from "framer-motion";
import { FolderOpen, Users } from "lucide-react";

export default function Work() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Recent Work
          </h2>
          <p className="mt-3 text-gray-600">
            A snapshot of how we restore trust in data across teams and tools.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[{
            title: "Survey data cleanup (35,000 records)",
            desc: "Deduplicated respondents, standardized multi-select fields, and validated logic across skip patterns.",
          }, {
            title: "Marketing data normalization",
            desc: "Unified CRM exports from 4 sources, normalized country/state fields, and flagged anomalies for review.",
          }].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <FolderOpen className="h-6 w-6 text-sky-700" />
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <Users className="mt-1 h-6 w-6 flex-none text-sky-700" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">About DataCura</h3>
              <p className="mt-2 text-gray-700">
                I’m Shesh, the founder of DataCura. After leading data engineering teams for years,
                I saw how unreliable data crippled decisions. Now I help companies clean, validate,
                and restore trust in their data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
