
"use client";

import { motion } from "motion/react";
import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Technology",
    description:
      "A Computer Science foundation with hands-on experience in full-stack development, web technologies and database-driven applications.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business",
    description:
      "Professional experience at Wipro, working with digital advertising quality, policy compliance and decision-making.",
  },
  {
    icon: BrainCircuit,
    title: "Data & AI",
    description:
      "Currently pursuing an MBA in Data Science and Artificial Intelligence, developing an understanding of how data and AI support business decisions.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-20 py-28">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-sm tracking-[0.3em] mb-4">
            A LITTLE ABOUT ME
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold mb-12">
            Beyond the{" "}
            <span className="text-accent">Code.</span>
          </h2>
        </motion.div>

        {/* Main Introduction */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 mb-20">

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-medium leading-relaxed mb-7">
              I work at the intersection of{" "}
              <span className="text-accent">technology</span>,{" "}
              <span className="text-accent">business</span> and{" "}
              <span className="text-accent">data.</span>
            </h3>

            <div className="space-y-5 text-muted leading-8">
              <p>
                My journey began with a degree in Computer Science,
                where I developed an interest in building applications
                and understanding how technology works behind the scenes.
              </p>

              <p>
                My professional experience at Wipro introduced me to
                digital advertising operations, quality evaluation and
                policy compliance. It helped me understand the importance
                of accuracy, analytical thinking and responsible
                decision-making in a real business environment.
              </p>

              <p>
                Currently, I am pursuing an MBA in Data Science and
                Artificial Intelligence at Lovely Professional University.
                I am exploring how data, analytics and AI can be used
                to understand business problems and support better decisions.
              </p>

              <p>
                I enjoy connecting these different areas through projects,
                continuous learning and practical problem-solving.
                My goal is to build solutions that are not only technically
                sound but also meaningful from a business perspective.
              </p>
            </div>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="rounded-2xl border border-border bg-surface p-8">

              <p className="text-accent text-xs tracking-[0.25em] mb-8">
                QUICK OVERVIEW
              </p>

              <div className="space-y-7">

                <div>
                  <p className="text-muted text-sm mb-2">
                    Currently
                  </p>
                  <p className="text-lg font-medium">
                    MBA – Data Science & AI
                  </p>
                  <p className="text-muted text-sm mt-1">
                    Lovely Professional University
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-muted text-sm mb-2">
                    Academic Background
                  </p>
                  <p className="text-lg font-medium">
                    Computer Science
                  </p>
                  <p className="text-muted text-sm mt-1">
                    B.Tech Graduate · 2024
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-muted text-sm mb-2">
                    Professional Experience
                  </p>
                  <p className="text-lg font-medium">
                    Wipro · Associate
                  </p>
                  <p className="text-muted text-sm mt-1">
                    Digital Advertising Quality
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-muted text-sm mb-2">
                    Areas of Interest
                  </p>
                  <p className="text-lg font-medium">
                    Data · AI · Technology · Business
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-5">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="rounded-2xl border border-border bg-surface p-7 hover:border-accent/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <Icon size={23} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-muted leading-7 text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
