"use client";

import { FormEvent, useState } from "react";
import Section from "./ui/Section";
import Button from "./ui/Button";

export default function FinalCTA() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !contact) {
      alert("Preencha seu nome e WhatsApp ou e-mail.");
      return;
    }
    const lead = { name, contact, date: new Date().toISOString() };
    const stored = JSON.parse(localStorage.getItem("tia-carol-leads") || "[]");
    stored.push(lead);
    localStorage.setItem("tia-carol-leads", JSON.stringify(stored));
    setName("");
    setContact("");
    alert("Obrigada! Em breve a equipe entra em contato.");
  };

  return (
    <Section
      title="Comece agora"
      subtitle="Comece pelo Inicial e evolua nas trilhas"
      className="bg-white"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-lg text-slate-600">
            Sua carreira pode ser valorizada com postura profissional e mentoria
            prática. Dê o primeiro passo e evolua com segurança.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#trilhas">Começar pelo Inicial</Button>
            <Button href="https://wa.me/0000000000" variant="secondary">
              Falar no WhatsApp
            </Button>
          </div>
          <div className="rounded-2xl border border-brand/20 bg-brand/10 p-5 text-sm text-slate-700">
            Atendimento acolhedor, direto e com orientação estratégica para você
            crescer.
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
          aria-label="Formulário de interesse"
        >
          <h3 className="text-lg font-semibold text-slate-900">
            Quero ser avisada
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Receba informações sobre turmas, vagas e bônus.
          </p>
          <div className="mt-5 space-y-4">
            <label className="block text-sm font-semibold text-slate-700">
              Nome completo
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                placeholder="Digite seu nome"
                required
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              WhatsApp ou e-mail
              <input
                type="text"
                name="contact"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                placeholder="(11) 99999-0000"
                required
              />
            </label>
            <Button type="submit" className="w-full">
              Quero ser avisada
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
}
