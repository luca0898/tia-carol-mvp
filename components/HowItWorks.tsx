import Section from "./ui/Section";
import Card from "./ui/Card";

const steps = [
  {
    title: "Comece pelo Inicial",
    description:
      "Aprenda a base profissional com rotina, limites e comunicação clara.",
  },
  {
    title: "Aplique com mentoria",
    description:
      "Receba direcionamento para aplicar o conteúdo no seu dia a dia.",
  },
  {
    title: "Evolua nas trilhas",
    description:
      "Aumente seu valor com precificação, posicionamento e diferenciais.",
  },
];

export default function HowItWorks() {
  return (
    <Section title="Como funciona" subtitle="Trilha clara para sua evolução">
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <Card key={step.title}>
            <p className="text-sm font-semibold text-brand">Passo {index + 1}</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
