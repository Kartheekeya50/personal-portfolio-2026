
"use client";

import { motion } from "motion/react";
import { BriefcaseBusiness, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Associate",
    company: "Wipro",
    period: "May 2025 – July 2026",
    type: "Professional Experience",
    description:
      "Worked in digital advertising quality and policy compliance, reviewing advertisements, identifying policy violations, and making approval, rejection or escalation decisions.",
    skills: ["Ad Quality", "Policy Compliance", "Risk Assessment", "Analytical Thinking"],
  },
  {
    role: "Intern",
    company: "INV Technologies",
    period: "3 Months",
    type: "Internship",
    description:
      "Gained exposure to technical and non-technical activities, including client management, handling client queries, professional communication and teamwork.",
    skills: ["Client Management", "Communication", "Teamwork", "Problem Solving"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-20 py-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-sm tracking-[0.3em] mb-4">
            MY PROFESSIONAL JOURNEY
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold mb-5">
            Experience & <span className="text-accent">Growth.</span>
          </h2>

          <p className="text-muted max-w-xl mb-16 leading-7">
            Every experience has contributed to how I approach technology,
            collaboration and problem-solving.
          </p>
        </motion.div>

        <div className="relative border-l border-border ml-3 md:ml-5 space-y-12">
          {experiences.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>

              <div className="rounded-2xl border border-border bg-surface p-7 md:p-9 hover:border-accent/60 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div className="flex gap-4 items-center">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent">
                      {index === 0 ? (
                        <BriefcaseBusiness size={25} />
                      ) : (
                        <Building2 size={25} />
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold">
                        {item.role}
                      </h3>
                      <p className="text-accent">{item.company}</p>
                    </div>
                  </div>

                  <div className="md:text-right">
                    <p className="text-sm text-muted">{item.period}</p>
                    <p className="text-xs text-muted mt-1">{item.type}</p>
                  </div>
                </div>

                <p className="text-muted leading-7 mb-7">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-muted border border-border rounded-full px-3 py-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
