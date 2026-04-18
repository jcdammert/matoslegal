import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  start?: string;
  accent: string;
  end?: string;
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "lg" | "md";
  light?: boolean;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  start,
  accent,
  end,
  as: Tag = "h2",
  size = "lg",
  light = false,
  className,
  centered = false,
}: SectionHeadingProps) {
  const sizeClasses = {
    xl: "text-[clamp(48px,7vw,104px)] leading-[1.02] tracking-[-0.015em]",
    lg: "text-[clamp(36px,5vw,72px)] leading-[1.05]",
    md: "text-[28px] md:text-[32px] leading-tight",
  };

  return (
    <Tag
      className={cn(
        "font-display font-medium",
        sizeClasses[size],
        light ? "text-white" : "text-[var(--charcoal)]",
        centered && "text-center",
        className
      )}
    >
      {start && <>{start} </>}
      <em className="not-italic text-[var(--burgundy)] italic">{accent}</em>
      {end && <> {end}</>}
    </Tag>
  );
}
