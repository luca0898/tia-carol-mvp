import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tia Carol | Formação e Mentoria para Babás Profissionais",
  description:
    "Trilhas de formação e mentoria para babás do zero ao avançado. Postura profissional, segurança, finanças e valorização com a Tia Carol.",
  openGraph: {
    title: "Tia Carol | Formação e Mentoria para Babás Profissionais",
    description:
      "Formação e mentoria para babás profissionais, com trilhas completas e foco em valorização.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
