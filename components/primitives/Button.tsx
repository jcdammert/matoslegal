"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline-white";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const base =
  "inline-flex items-center gap-2 px-7 py-4 text-xs tracking-[0.2em] uppercase font-medium font-body transition-all duration-200 rounded-none cursor-pointer";

const variants = {
  primary:
    "bg-[var(--red)] text-white hover:bg-[var(--red-hover)] group",
  secondary:
    "bg-white text-[var(--charcoal)] border border-[var(--charcoal)] hover:bg-[var(--cream)] group",
  "outline-white":
    "bg-transparent text-white border border-white hover:bg-white hover:text-[var(--charcoal)] group",
  ghost:
    "underline text-[var(--burgundy)] p-0 tracking-normal text-sm hover:text-[var(--red)]",
};

export function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className,
  showArrow = true,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  const inner = (
    <>
      {children}
      {showArrow && variant !== "ghost" && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, disabled && "opacity-60 cursor-not-allowed")}
    >
      {inner}
    </button>
  );
}
