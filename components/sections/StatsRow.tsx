"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";
import { CountUp } from "@/components/primitives/CountUp";

export function StatsRow() {
  const { t } = useLocale();

  return (
    <div className="relative z-10 bg-[var(--charcoal-2)] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {t.stats.map((stat, i) => {
            const isNumeric = !isNaN(Number(stat.num));
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
                className="py-8 px-6 md:px-10 text-center"
              >
                <p className="font-display font-medium text-4xl md:text-5xl text-white italic mb-1">
                  {isNumeric ? (
                    <CountUp to={Number(stat.num)} suffix={stat.suffix} duration={1600} />
                  ) : (
                    <>{stat.num}{stat.suffix}</>
                  )}
                </p>
                <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
