
"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Award, GraduationCap } from "lucide-react";

const certifications = [
  {
    number: "01",
    title: "AI Immersion Program",
    issuer: "EY in collaboration with Lovely Professional University",
    year: "2026",
    category: "ARTIFICIAL INTELLIGENCE",
    description:
      "AI-focused learning program completed through LPU Future Skills in collaboration with Ernst & Young.",
    link: "",
  },
  {
    number: "02",
    title: "Introduction to Data Visualization",
    issuer: "Simplilearn SkillUp",
    year: "2026",
    category: "DATA ANALYTICS",
    description:
      "Certification covering the fundamentals of data visualization and presenting information through visual formats.",
    link: "",
  },
  {
    number: "03",
    title: "Internship Completion Certificate",
    issuer: "INV Technologies",
    year: "2023",
    category: "PROFESSIONAL EXPERIENCE",
    description:
      "Certificate recognizing internship experience involving technical and non-technical activities.",
    link: "",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="px-6 md:px-12 lg:px-20 py-28"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent text-sm tracking-[0.3em] mb-4">
            LEARNING & DEVELOPMENT
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold mb-5">
            Certifications &{" "}
            <span className="text-accent">Credentials.</span>
          </h2>

          <p className="text-muted max-w-xl leading-7 mb-16">
            A reflection of continuous learning and my efforts
            to strengthen technical knowledge and professional skills.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {certifications.map((cert, index) => (
            <motion.article
              key={cert.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 hover:border-accent/60 transition-colors duration-300"
            >
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-accent/0 blur-3xl group-hover:bg-accent/10 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">

                {/* Top Row */}
                <div className="flex justify-between items-center mb-10">

                  <div className="p-3 rounded-xl bg-accent/10 text-accent">
                    <Award size={25} />
                  </div>

                  <span className="text-muted text-sm">
                    {cert.number}
                  </span>

                </div>

                {/* Category */}
                <p className="text-accent text-xs tracking-widest mb-3">
                  {cert.category}
                </p>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-muted leading-7 mb-7">
                  {cert.description}
                </p>

                {/* Issuer */}
                <div className="flex items-start gap-3 pt-5 border-t border-border">

                  <GraduationCap
                    size={19}
                    className="text-accent mt-1 shrink-0"
                  />

                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {cert.issuer}
                    </p>

                    <p className="text-xs text-muted mt-2">
                      Issued in {cert.year}
                    </p>
                  </div>

                  {/* Certificate Link */}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${cert.title}`}
                      className="text-muted hover:text-accent transition-colors"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  )}

                </div>
              </div>
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
}
