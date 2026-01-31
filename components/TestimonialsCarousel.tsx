"use client";

import { useRef } from "react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { testimonials } from "../lib/data";

export default function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Section
      id="depoimentos"
      title="Depoimentos"
      subtitle="Relatos reais de quem evoluiu com a Tia Carol"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-slate-600">
          Histórias de profissionais que buscaram confiança, organização e
          valorização.
        </p>
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            aria-label="Ver depoimento anterior"
            className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-brand hover:text-brand"
            onClick={() => scrollByAmount("prev")}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Ver próximo depoimento"
            className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-brand hover:text-brand"
            onClick={() => scrollByAmount("next")}
          >
            →
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
      >
        {testimonials.map((testimonial) => (
          <Card
            key={`${testimonial.name}-${testimonial.location}`}
            className="min-w-[260px] snap-start sm:min-w-[320px]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {testimonial.name}
                </p>
                <p className="text-xs text-slate-500">
                  {testimonial.location} · {testimonial.profile}
                </p>
              </div>
              <div className="text-brand">★★★★★</div>
            </div>
            <p className="mt-4 text-sm text-slate-600">“{testimonial.quote}”</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {testimonial.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
