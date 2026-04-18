import { cn } from "@/lib/utils";

export function EyebrowLabel({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "eyebrow",
        light ? "text-red/80" : "text-[var(--red)]",
        className
      )}
    >
      {children}
    </p>
  );
}
