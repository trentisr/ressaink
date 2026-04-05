"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/profile.png"
              alt="Reesa, the tattoo artist"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold mb-4">About Reesa</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in fine line, color tattoos, black and gray and
              various styles balancing delicacy with structure, softness with
              impact. Whether it’s a minimal, intricate design or a bold,
              expressive piece, my focus is always on clean execution,
              thoughtful placement, and creating work that feels elevated and
              timeless.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
