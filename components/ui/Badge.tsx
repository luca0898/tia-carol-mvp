import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand ${className}`}
    >
      {children}
    </span>
  );
}
