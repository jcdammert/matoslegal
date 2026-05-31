import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  inverted?: boolean; // white version for dark backgrounds
}

const sizes = {
  sm: { width: 120, height: 32 },
  md: { width: 160, height: 42 },
  lg: { width: 200, height: 53 },
};

export function Logo({ href, size = "md", className, inverted = false }: LogoProps) {
  const { width, height } = sizes[size];

  const inner = (
    <Image
      src="/images/logo.png"
      alt="Matos Legal, PLLC"
      width={width}
      height={height}
      className={cn(
        "select-none",
        // On dark backgrounds invert to white so it stays readable
        inverted && "brightness-0 invert",
        className
      )}
      priority
    />
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
