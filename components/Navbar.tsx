"use client";

import { useState } from "react";
import Button from "./ui/Button";
import { scrollToId } from "../lib/utils";

const navItems = [
  { label: "Trilhas", id: "trilhas" },
  { label: "Treinamentos", id: "treinamentos" },
  { label: "Depoimentos", id: "depoimentos" },
  { label: "FAQ", id: "faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToId(id);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="container-section flex h-16 items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => handleNav("topo")}
          className="text-lg font-semibold text-slate-900"
          aria-label="Ir para o topo"
        >
          Tia Carol
        </button>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNav(item.id)}
              className="transition hover:text-brand"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="https://wa.me/0000000000" className="px-5 py-2">
            Falar no WhatsApp
          </Button>
        </div>
        <button
          type="button"
          className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-brand hover:text-brand md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-section flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className="text-left text-sm font-medium text-slate-700"
              >
                {item.label}
              </button>
            ))}
            <Button href="https://wa.me/0000000000" className="w-full">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
