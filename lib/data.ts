export const tracks = [
  {
    id: "inicial",
    title: "Treinamento Inicial",
    price: 197,
    description:
      "Porta de entrada para quem quer começar com postura e segurança desde o primeiro atendimento.",
    highlight: "Base profissional e confiança para iniciar",
    audience: "Iniciantes ou quem quer se reposicionar",
    results:
      "Clareza sobre rotina, limites e comunicação com famílias.",
    modules: [
      "Mentalidade profissional",
      "Postura e limites",
      "Rotina base e comunicação",
      "Noções de segurança",
    ],
    cta: "Quero começar",
    visiblePrice: true,
  },
  {
    id: "profissional",
    title: "Babá Profissional",
    price: 497,
    description:
      "Rotina estruturada, segurança e práticas que fazem você ser lembrada e indicada.",
    highlight: "Checklist de segurança e rotina estruturada",
    audience: "Quem já cuida de crianças e quer se profissionalizar",
    results:
      "Mais organização, confiança e valorização no serviço.",
    modules: [
      "Rotina estruturada",
      "Noções de desenvolvimento infantil",
      "Higiene e alimentação",
      "Primeiros socorros (orientação/parceria)",
    ],
    cta: "Quero desbloquear",
    visiblePrice: false,
  },
  {
    id: "empreendedora",
    title: "Babá Empreendedora",
    price: 697,
    description:
      "Aprenda a cobrar, negociar e se posicionar com segurança para aumentar sua renda.",
    highlight: "Precificação e negociação com firmeza",
    audience: "Quem quer autonomia financeira e agenda valorizada",
    results:
      "Melhor precificação e contratos claros.",
    modules: [
      "Precificação e combinados",
      "Contratos e negociação",
      "Posicionamento e indicações",
      "Finanças pessoais e reserva",
    ],
    cta: "Saiba como entrar",
    visiblePrice: false,
  },
  {
    id: "nota-10",
    title: "Babá Nota 10 (Avançado)",
    price: 997,
    description:
      "Diferenciais premium para atender famílias exigentes e construir reputação sólida.",
    highlight: "Atendimento impecável e reputação",
    audience: "Profissionais experientes buscando excelência",
    results:
      "Recorrência, indicações e carreira planejada.",
    modules: [
      "Diferenciais premium",
      "Reputação e recorrência",
      "Gestão de agenda",
      "Planejamento de carreira",
    ],
    cta: "Saiba como entrar",
    visiblePrice: false,
  },
];

export const trainings = tracks.map((track) => ({
  ...track,
  tag: track.visiblePrice ? "Porta de entrada" : "Trilha avançada",
}));

export const testimonials = [
  {
    name: "Camila R.",
    location: "Santos/SP",
    profile: "Iniciante",
    quote:
      "Entendi como me posicionar com os pais e perdi o medo de dizer não. Hoje tenho rotina e confiança.",
    tags: ["+confiança", "+postura"],
  },
  {
    name: "Juliana M.",
    location: "Recife/PE",
    profile: "Já atuava",
    quote:
      "A trilha profissional me deu organização e um checklist que mudou meu dia a dia.",
    tags: ["+organização", "+segurança"],
  },
  {
    name: "Paula S.",
    location: "Campinas/SP",
    profile: "Em transição",
    quote:
      "Aprendi a cobrar sem culpa e a explicar meu valor. Meu pacote mensal ficou mais justo.",
    tags: ["+renda", "+posicionamento"],
  },
  {
    name: "Larissa G.",
    location: "Curitiba/PR",
    profile: "Diarista",
    quote:
      "As orientações de primeiros socorros e segurança me deixaram muito mais segura nas casas.",
    tags: ["+segurança", "+confiança"],
  },
  {
    name: "Bruna C.",
    location: "Belo Horizonte/MG",
    profile: "Mensalista",
    quote:
      "Passei a ter combinados claros com a família. Evitei situações de abuso e desgaste.",
    tags: ["+respeito", "+postura"],
  },
  {
    name: "Fernanda L.",
    location: "Salvador/BA",
    profile: "Já atuava",
    quote:
      "A mentoria trouxe visão de carreira. Agora sei como crescer e escolher as melhores famílias.",
    tags: ["+carreira", "+valor"],
  },
  {
    name: "Tânia A.",
    location: "Porto Alegre/RS",
    profile: "Iniciante",
    quote:
      "Saí do zero com um passo a passo claro. Hoje tenho postura profissional e tranquilidade.",
    tags: ["+clareza", "+postura"],
  },
  {
    name: "Renata B.",
    location: "Goiânia/GO",
    profile: "Autônoma",
    quote:
      "Organizei minhas finanças e criei reserva. Me sinto mais segura para negociar.",
    tags: ["+finanças", "+renda"],
  },
];

export const faqs = [
  {
    question: "Isso é uma agência?",
    answer:
      "Não. A Tia Carol é escola de formação e mentoria. Não intermediamos vagas nem contratamos babás.",
  },
  {
    question: "Preciso ter experiência?",
    answer:
      "Não. O Treinamento Inicial foi pensado para quem está começando do zero.",
  },
  {
    question: "Tem certificado?",
    answer:
      "Sim, certificado digital para quem conclui a trilha com participação nas atividades.",
  },
  {
    question: "Primeiros socorros é incluso?",
    answer:
      "Temos orientação e parceria com profissionais da área para complementar a formação.",
  },
  {
    question: "Como funciona a mentoria?",
    answer:
      "Você recebe acompanhamento e direcionamento prático para aplicar o conteúdo no seu dia a dia.",
  },
  {
    question: "Posso pagar parcelado?",
    answer:
      "Sim, oferecemos opções parceladas no checkout. Consulte as condições no WhatsApp.",
  },
  {
    question: "Serve para babá mensalista e diarista?",
    answer:
      "Sim. As trilhas atendem quem trabalha mensalmente ou por diária e quer se valorizar.",
  },
];
