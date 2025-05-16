'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Section = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="h-screen flex items-center justify-center">
      <motion.div style={{ y }} className="w-full max-w-4xl p-8 rounded-2xl shadow-lg bg-white">
        {children}
      </motion.div>
    </section>
  );
};

export default function Home() {
  return (
    <main>
      <Section><h1 className="text-4xl">Landing</h1></Section>
      <Section><h2 className="text-3xl">Work Experience</h2></Section>
      <Section><h2 className="text-3xl">Portfolio</h2></Section>
      <Section><h2 className="text-3xl">Contact</h2></Section>
    </main>
  );
}

