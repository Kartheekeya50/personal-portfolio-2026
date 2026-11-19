
"use client";

import { motion } from "motion/react";
import {
  Code2,
  Database,
  BrainCircuit,
  ChartNoAxesCombined,
} from "lucide-react";

const categories = [
  {
    title: "Programming & Development",
    icon: Code2,
    skills: ["JavaScript", "React.js", "Node.js", "Express.js", "HTML", "CSS"],
  },
  {
    title: "Data & Databases",
    icon: Database,
    skills: ["SQL", "MySQL", "Microsoft Excel", "Data Analysis"],
  },
  {
    title: "Analytics & Visualization",
    icon: ChartNoAxesCombined,
    skills: ["Power BI", "Tableau", "Statistical Analysis", "Data Visualization"],
  },
  {
    title: "AI & Business",
    icon: BrainCircuit,
    skills: ["Generative AI", "Prompt Engineering", "Policy Analysis", "Risk Assessment"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-20 py-28">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent text-sm tracking-[0.3em] mb-4">
          WHAT I BRING
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold mb-5">
          Skills & <span className="text-accent">Expertise.</span>
        </h2>

        <p className="text-muted max-w-xl leading-7 mb-16">
          A combination of technical knowledge, analytical capabilities and
          business-oriented thinking.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface border border-border rounded-2xl p-8 hover:border-accent/60 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full border border-border text-sm text-muted hover:text-accent hover:border-accent transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
