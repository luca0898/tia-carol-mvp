"use client";

import { useRef } from "react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { trainings } from "../lib/data";
import { formatCurrency } from "../lib/utils";

export default function TrainingsCarousel() {
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
      id="treinamentos"
      title="Treinamentos"
      subtitle="Escolha a trilha certa para o seu momento"
      className="bg-white"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-slate-600">
          Arraste para ver todas as trilhas e descubra o diferencial de cada uma.
        </p>
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            aria-label="Ver trilha anterior"
            className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-brand hover:text-brand"
            onClick={() => scrollByAmount("prev")}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Ver próxima trilha"
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
        {trainings.map((training) => (
          <Card
            key={training.id}
            className="min-w-[260px] snap-start sm:min-w-[320px]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {training.tag}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {training.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Destaque: </span>
              {training.highlight}
            </p>
            <p className="mt-3 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Para quem: </span>
              {training.audience}
            </p>
            <p className="mt-3 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Resultados: </span>
              {training.results}
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span
                className={
                  training.visiblePrice
                    ? "text-lg font-semibold text-slate-900"
                    : "text-lg font-semibold text-slate-900 blur-[2px]"
                }
              >
                {formatCurrency(training.price)}
              </span>
              <Button href="https://wa.me/0000000000" variant="secondary">
                {training.visiblePrice ? "Quero começar" : "Quero desbloquear"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
