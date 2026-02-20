"use client";

import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Ressa brought my vision to life perfectly! The detail in her fine line work is incredible. I couldn't be happier.",
      author: "Client A",
    },
    {
      quote: "Professional, clean, and a true artist. My blackwork piece is stunning and healed beautifully. Highly recommend!",
      author: "Client B",
    },
    {
      quote: "A fantastic experience from start to finish. Ressa's talent speaks for itself, and her studio is super welcoming.",
      author: "Client C",
    },
  ];

  return (
    <motion.section
      id="testimonials"
      className="py-24 bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <p className="text-white font-bold">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
