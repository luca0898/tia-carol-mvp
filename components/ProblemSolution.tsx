import Section from "./ui/Section";
import Card from "./ui/Card";

const beforeItems = [
  "Sem direção",
  "Baixa valorização",
  "Insegurança",
  "Dificuldade em cobrar",
];

const afterItems = [
  "Clareza",
  "Postura",
  "Rotina",
  "Confiança",
  "Renda melhor",
];

export default function ProblemSolution() {
  return (
    <Section
      title="Transformação"
      subtitle="Do improviso à profissionalização com respeito e segurança"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">Antes</h3>
          <p className="mt-2 text-sm text-slate-600">
            Situações comuns de quem trabalha sem orientação e sem mentoria.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {beforeItems.map((item) => (
              <Card key={item} className="border-rose-200 bg-rose-50/60">
                <p className="font-semibold text-rose-700">{item}</p>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">Depois</h3>
          <p className="mt-2 text-sm text-slate-600">
            Postura profissional, rotina e valorização para ser reconhecida.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {afterItems.map((item) => (
              <Card key={item} className="border-brand/30 bg-brand/10">
                <p className="font-semibold text-brand-700">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-slate-600">
        A Tia Carol te ajuda a profissionalizar sua atuação, garantir respeito
        com as famílias e trabalhar com segurança.
      </p>
    </Section>
  );
}
