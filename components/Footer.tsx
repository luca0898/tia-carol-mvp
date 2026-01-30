import Button from "./ui/Button";

const links = [
  { label: "Trilhas", href: "#trilhas" },
  { label: "Treinamentos", href: "#treinamentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container-section flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-slate-900">Tia Carol</p>
          <p className="text-sm text-slate-600">
            Tia Carol não é agência. É formação e mentoria para babás.
          </p>
          <p className="text-xs text-slate-500">
            Conteúdo educacional. Resultados variam conforme dedicação e
            aplicação.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-slate-600">
          <div className="flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium transition hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button href="https://wa.me/0000000000" className="w-fit">
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </footer>
  );
}
