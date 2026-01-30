import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantClasses = {
  primary:
    "bg-brand text-white shadow-soft hover:bg-brand-600 focus-visible:outline-brand",
  secondary:
    "border border-brand text-brand hover:bg-brand/10 focus-visible:outline-brand",
  ghost:
    "text-slate-700 hover:text-brand focus-visible:outline-brand",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
