
"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Product Demand Forecasting",
    category: "MACHINE LEARNING",
    description:
      "A machine learning project focused on predicting future product demand using historical data to support better inventory and stock-planning decisions.",
    technologies: [
      "Machine Learning",
      "Python",
      "Data Analysis",
      "Demand Forecasting",
    ],
    github: "",
    demo: "",
  },
  {
    number: "02",
    title: "Varahi Milks – E-Commerce Platform",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "A full-stack e-commerce platform for milk and dairy products, featuring product management, stock updates and an admin panel.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
    ],
    github: "",
    demo: "",
  },
  {
    number: "03",
    title: "Hospital Management System",
    category: "SOFTWARE DEVELOPMENT",
    description:
      "A hospital management application covering patient registration, appointment booking and medical record management, with integrated doctor, diagnostic centre and pharmacy modules.",
    technologies: [
      "Application Development",
      "Database Management",
      "HighQ Labs",
    ],
    github: "",
    demo: "",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-20 py-28"
    >
      <div className="max-w-7xl mx-auto">

        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent text-sm tracking-[0.3em] mb-4">
            SELECTED WORK
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold mb-5">
            Projects &{" "}
            <span className="text-accent">
              Experiments.
            </span>
          </h2>

          <p className="text-muted max-w-xl mb-16 leading-7">
            A collection of projects exploring machine learning,
            software development and practical problem-solving.
          </p>
        </motion.div>

        {/* Staggered Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.number}
              variants={cardVariants}
              whileHover={{
                y: -9,
                scale: 1.015,
                transition: { duration: 0.25 },
              }}
              className="group relative overflow-hidden border border-border rounded-2xl p-8 bg-surface hover:border-accent/70 transition-colors duration-300"
            >

              {/* Hover Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-accent/0 blur-3xl group-hover:bg-accent/10 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">

                {/* Number and Category */}
                <div className="flex justify-between items-center mb-12">
                  <span className="text-muted text-sm">
                    {project.number}
                  </span>

                  <span className="text-accent text-xs tracking-widest">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted leading-7 mb-8">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs border border-border rounded-full px-3 py-2 text-muted group-hover:border-accent/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-5 pt-5 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
                    >
                      GitHub <ArrowUpRight size={16} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
                    >
                      Live Demo <ArrowUpRight size={16} />
                    </a>
                  )}

                  {!project.github && !project.demo && (
                    <span className="text-xs text-muted">
                      Project details
                    </span>
                  )}
                </div>

              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
