import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`section-spacing ${className}`}>
      <div className="container-section">
        {title && (
          <div className="mb-10 space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              {title}
            </p>
            {subtitle && (
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                {subtitle}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
