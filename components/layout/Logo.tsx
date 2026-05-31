import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  inverted?: boolean; // white text version for dark backgrounds
}

export function Logo({ href, size = "md", className, inverted = false }: LogoProps) {
  const sizes = {
    sm: { circle: "w-7 h-7", icon: 14, text: "text-sm",     gap: "gap-2"   },
    md: { circle: "w-9 h-9", icon: 18, text: "text-[17px]", gap: "gap-2.5" },
    lg: { circle: "w-11 h-11", icon: 22, text: "text-xl",   gap: "gap-3"   },
  };

  const s = sizes[size];
  // Circle stays red on both light and dark backgrounds
  const circleColor = "bg-[var(--red)]";
  const iconColor   = "#ffffff";
  // Text: dark gray on light backgrounds (matches the actual logo), white when inverted
  const textColor   = inverted ? "text-white" : "text-[#555555]";

  const inner = (
    <div className={cn("flex items-center select-none", s.gap, className)}>
      {/* Red circle with scales icon */}
      <div
        className={cn(
          "rounded-full flex items-center justify-center flex-shrink-0",
          circleColor,
          s.circle
        )}
      >
        {/*
          Scales SVG — matches the actual logo:
          geometric flat-bottomed pans, V-chain from beam ends, post + base
        */}
        <svg
          width={s.icon}
          height={s.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke={iconColor}
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          {/* Vertical post */}
          <line x1="12" y1="4" x2="12" y2="20" />
          {/* Horizontal beam */}
          <line x1="3" y1="6.5" x2="21" y2="6.5" />

          {/* Left V-chain from beam end down to pan top-corners */}
          <line x1="4"  y1="6.5" x2="2.5" y2="11" />
          <line x1="4"  y1="6.5" x2="5.5" y2="11" />
          {/* Left pan — flat trapezoid */}
          <line x1="2.5" y1="11" x2="5.5" y2="11" />
          <path d="M2.5 11 L3 14 H5 L5.5 11" />

          {/* Right V-chain */}
          <line x1="20" y1="6.5" x2="18.5" y2="11" />
          <line x1="20" y1="6.5" x2="21.5" y2="11" />
          {/* Right pan — flat trapezoid */}
          <line x1="18.5" y1="11" x2="21.5" y2="11" />
          <path d="M18.5 11 L19 14 H21 L21.5 11" />

          {/* Base foot */}
          <line x1="9" y1="20" x2="15" y2="20" />
        </svg>
      </div>

      {/* Wordmark — bold MATOS + regular LEGAL + small PLLC, all same gray */}
      <span className={cn("font-body leading-none tracking-tight", s.text, textColor)}>
        <span className="font-bold">MATOS</span>
        <span className="font-light"> LEGAL</span>
        <span className="font-light text-[0.72em] opacity-75">, PLLC</span>
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex" aria-label="Matos Legal PLLC — Home">
        {inner}
      </Link>
    );
  }

  return inner;
}
