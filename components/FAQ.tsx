import Section from "./ui/Section";
import { faqs } from "../lib/data";

export default function FAQ() {
  return (
    <Section id="faq" title="FAQ" subtitle="Dúvidas frequentes">
      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-slate-200 bg-white p-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-900">
              {faq.question}
              <span className="text-brand transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
