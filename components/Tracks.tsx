import Section from "./ui/Section";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { tracks } from "../lib/data";
import { formatCurrency } from "../lib/utils";

export default function Tracks() {
  return (
    <Section
      id="trilhas"
      title="Sistema de trilhas"
      subtitle="Roadmap de evolução para babás nota 10"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {tracks.map((track, index) => (
          <Card key={track.id} className="relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {track.title}
                </h3>
                <p className="text-sm text-slate-600">{track.description}</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              {track.modules.map((module) => (
                <li key={module} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                  {module}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-lg font-semibold text-slate-900">
                <span
                  className={
                    track.visiblePrice
                      ? ""
                      : "inline-block blur-[2px] select-none"
                  }
                >
                  {formatCurrency(track.price)}
                </span>
                {!track.visiblePrice && (
                  <span className="ml-2 rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500">
                    Desbloqueie na trilha
                  </span>
                )}
              </div>
              <Button href="https://wa.me/0000000000" variant="secondary">
                {track.cta}
              </Button>
            </div>
            {!track.visiblePrice && (
              <div className="pointer-events-none absolute inset-0 border-2 border-dashed border-slate-200/70" />
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
