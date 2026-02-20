"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment by filling out the booking form on our website. Please provide as much detail as possible about your tattoo idea.",
  },
  {
    question: "What are your rates?",
    answer: "Our rates vary depending on the size, complexity, and placement of the tattoo. We recommend providing your budget in the booking form for an accurate estimate.",
  },
  {
    question: "Do you do custom designs?",
    answer: "Yes, Ressa specializes in custom fine line and blackwork designs. She will work with you to create a unique piece.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require at least 48 hours notice for cancellations or rescheduling. Deposits are non-refundable for cancellations made within 48 hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-6 bg-gray-800 hover:bg-gray-700 focus:outline-none transition-colors duration-200 flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold">{item.question}</span>
                <motion.span
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  &#9660; {/* Down arrow */}
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="p-6 text-gray-300 bg-gray-900">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
