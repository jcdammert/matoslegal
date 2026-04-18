"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Scale,
  Users,
  Gavel,
  Clock,
  Languages,
  Target,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  scale: Scale,
  users: Users,
  gavel: Gavel,
  clock: Clock,
  languages: Languages,
  target: Target,
  phone: Phone,
};

interface IconCardProps {
  icon: string;
  title: string;
  desc: string;
  num?: string;
  href?: string;
  learnMore?: string;
  dark?: boolean;
  index?: number;
}

export function IconCard({
  icon,
  title,
  desc,
  num,
  href,
  learnMore,
  dark = false,
  index = 0,
}: IconCardProps) {
  const Icon = iconMap[icon] ?? Shield;

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      whileHover={{ scale: 1.01, boxShadow: dark ? "0 8px 32px rgba(0,0,0,0.4)" : "0 8px 32px rgba(0,0,0,0.08)" }}
      className={cn(
        "relative overflow-hidden p-8 rounded-lg transition-shadow duration-300",
        dark
          ? "bg-white/[0.03] border border-white/10"
          : "bg-white border border-[var(--hairline)]"
      )}
    >
      {/* Ghost numeral */}
      {num && (
        <span
          aria-hidden
          className={cn(
            "absolute top-4 right-4 font-display italic font-medium select-none pointer-events-none text-[120px] leading-none",
            dark ? "text-white/[0.04]" : "text-[var(--burgundy)]/10"
          )}
        >
          {num}
        </span>
      )}

      {/* Red icon square */}
      <div className="w-12 h-12 rounded-md bg-[var(--red)] flex items-center justify-center mb-6">
        <Icon className="w-5 h-5 text-white" />
      </div>

      {/* Title */}
      <h3
        className={cn(
          "font-display text-2xl font-medium mb-3",
          dark ? "text-white" : "text-[var(--charcoal)]"
        )}
      >
        {title}
      </h3>

      {/* Desc */}
      <p
        className={cn(
          "text-sm leading-relaxed",
          dark ? "text-white/60" : "text-[var(--text-muted)]"
        )}
      >
        {desc}
      </p>

      {/* Learn More */}
      {learnMore && href && (
        <p className="mt-4 text-xs tracking-[0.15em] uppercase font-medium text-[var(--red)] group-hover:underline">
          {learnMore} →
        </p>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="group block">
        {card}
      </Link>
    );
  }

  return card;
}
