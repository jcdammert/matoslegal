"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function RevealOnScroll({
  children,
  delay = 0,
  className,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
