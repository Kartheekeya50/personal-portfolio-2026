
"use client";

import { motion } from "motion/react";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20 py-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 md:p-16"
        >
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-accent/10 blur-[100px] rounded-full" />

          <div className="relative max-w-3xl">
            <p className="text-accent text-sm tracking-[0.3em] mb-5">
              LET'S CONNECT
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-7">
              Have an idea?
              <br />
              <span className="text-accent">Let's talk.</span>
            </h2>

            <p className="text-muted text-lg leading-8 mb-10 max-w-xl">
              I'm always interested in meaningful conversations,
              collaborations and opportunities involving technology,
              data and business.
            </p>

            <a
              href="mailto:kartheekeya50@gmail.com"
              className="inline-flex items-center gap-3 bg-accent text-black font-semibold px-7 py-4 rounded-full hover:scale-105 transition-transform"
            >
              <Mail size={19} />
              Get in Touch
              <ArrowUpRight size={19} />
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10 text-sm text-muted">
          © 2026 — Built with curiosity.
          <p className="flex items-center gap-2">
            <MessageCircle size={16} />
            Open to meaningful connections
          </p>
        </div>
      </div>
    </section>
  );
}
