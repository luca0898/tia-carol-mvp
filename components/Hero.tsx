import Button from "./ui/Button";
import Badge from "./ui/Badge";

export default function Hero() {
  return (
    <section id="topo" className="section-spacing pt-24">
      <div className="container-section grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="flex flex-wrap gap-2">
            <Badge>Não é agência</Badge>
            <Badge>Trilhas completas</Badge>
            <Badge>Foco em valorização</Badge>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
              Se torne uma Babá Profissional Nota 10 com a Tia Carol
            </h1>
            <p className="text-lg text-slate-600">
              Mentoria e formação do zero ao avançado — com postura, segurança,
              finanças e valorização.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#trilhas" className="justify-center">
              Começar pelo Treinamento Inicial
            </Button>
            <Button
              href="https://wa.me/0000000000"
              variant="secondary"
              className="justify-center"
            >
              Falar no WhatsApp
            </Button>
          </div>
          <div className="rounded-2xl border border-brand/20 bg-brand/10 p-4 text-sm text-slate-700">
            Mentoria firme e acolhedora para elevar seu nível, sua postura e sua
            renda.
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-6 h-20 w-20 rounded-full bg-brand/20 blur-xl" />
          <div className="absolute -right-6 bottom-10 h-24 w-24 rounded-full bg-brand/20 blur-2xl" />
          <div className="grid gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-brand">
                Mentoria direta
              </p>
              <p className="mt-2 text-base font-semibold text-slate-900">
                Postura profissional com firmeza e empatia.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-brand">
                Segurança real
              </p>
              <p className="mt-2 text-base font-semibold text-slate-900">
                Checklist, rotina e orientações de primeiros socorros.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-brand">
                Valorização
              </p>
              <p className="mt-2 text-base font-semibold text-slate-900">
                Precificação e posicionamento para ser reconhecida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
