import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  inverted?: boolean; // white version for dark bg
}

export function Logo({ href, size = "md", className, inverted = false }: LogoProps) {
  const sizes = {
    sm: { circle: "w-7 h-7", icon: 14, text: "text-sm", gap: "gap-2" },
    md: { circle: "w-9 h-9", icon: 18, text: "text-[17px]", gap: "gap-2.5" },
    lg: { circle: "w-11 h-11", icon: 22, text: "text-xl", gap: "gap-3" },
  };

  const s = sizes[size];
  const textColor = inverted ? "text-white" : "text-[var(--red)]";
  const circleColor = inverted ? "bg-white" : "bg-[var(--red)]";
  const iconColor = inverted ? "var(--red)" : "#ffffff";

  const inner = (
    <div className={cn("flex items-center select-none", s.gap, className)}>
      {/* Circle with scales icon */}
      <div
        className={cn(
          "rounded-full flex items-center justify-center flex-shrink-0",
          circleColor,
          s.circle
        )}
      >
        {/* Scales of justice SVG — custom to match logo exactly */}
        <svg
          width={s.icon}
          height={s.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          {/* Balance beam */}
          <line x1="12" y1="3" x2="12" y2="20" />
          <line x1="4" y1="6" x2="20" y2="6" />
          {/* Left pan chain */}
          <line x1="4" y1="6" x2="4" y2="11" />
          {/* Right pan chain */}
          <line x1="20" y1="6" x2="20" y2="11" />
          {/* Left pan arc */}
          <path d="M2 11 Q4 14 6 11" />
          {/* Right pan arc */}
          <path d="M18 11 Q20 14 22 11" />
          {/* Base */}
          <path d="M9 20 h6" />
        </svg>
      </div>

      {/* Wordmark */}
      <span className={cn("font-body leading-none tracking-tight", s.text, textColor)}>
        <span className="font-extrabold">MATOS</span>
        <span className="font-light"> LEGAL</span>
        <span className="font-light text-[0.75em] opacity-80">, PLLC</span>
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
