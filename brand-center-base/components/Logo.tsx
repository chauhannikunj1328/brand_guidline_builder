import type { CSSProperties } from "react";
import { brand } from "@/content/brand.config";

/* Neutral placeholder mark — replace the path with the real symbol. Keep fill="currentColor". */
export function Mark({ className = "h-8 w-8", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true" fill="currentColor">
      <path fillRule="evenodd" d="M8 8h48v48H8V8zm12 12v24h24V20H20z" />
    </svg>
  );
}

/* Placeholder wordmark set in the display font. Swap for SVG lettering when available. */
export function Wordmark({ className = "text-3xl" }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-[-0.03em] leading-none ${className}`}>{brand.name}</span>
  );
}

/** Mark + brand name lockup for the header and footer. size = mark height in px. Swap for real artwork per brand. */
export function FullLogo({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center font-medium ${className}`} style={{ gap: size * 0.26, fontSize: size * 0.6 }}>
      <Mark className="shrink-0" style={{ width: size, height: size }} />
      {brand.name}
    </span>
  );
}
