import { cn } from "../lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => (
  <svg
    viewBox="0 0 260 56"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-auto", className)}
    role="img"
    aria-label="Laura Consoni"
    fill="currentColor"
  >
    <rect x="0" y="14" width="6" height="6" transform="rotate(45 3 17)" />
    <text
      x="18"
      y="38"
      style={{
        fontFamily: "var(--font-cormorant), serif",
        fontWeight: 300,
        fontSize: "34px",
        letterSpacing: "-0.02em",
      }}
    >
      laura{" "}
      <tspan fontStyle="italic" fontWeight={300}>
        consoni
      </tspan>
    </text>
    <line
      x1="0"
      y1="52"
      x2="260"
      y2="52"
      stroke="currentColor"
      strokeWidth="0.6"
      opacity="0.35"
    />
  </svg>
);

export default Logo;
