import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary: "bg-primary text-white hover:bg-primary-light border-2 border-primary",
  secondary: "bg-accent text-white hover:bg-accent-light border-2 border-accent",
  outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
};
const sizes = { sm: "px-5 py-2 text-sm", md: "px-7 py-3 text-sm", lg: "px-9 py-4 text-base" };

export default function Button({
  children, href, variant = "primary", size = "md", type = "button",
  disabled = false, loading = false, className = "", onClick,
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return (
    <button type={type} disabled={disabled || loading} onClick={onClick} className={cls}>
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Sending...
        </span>
      ) : children}
    </button>
  );
}
