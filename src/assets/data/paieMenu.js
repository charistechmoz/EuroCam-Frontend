import {
  Building2,
  Briefcase,
  Rocket,
  Handshake,
  MessageCircleWarning,
  BookOpen,
} from "lucide-react";

// NOTA: esta estrutura alimenta a página principal do PAIE (cards de serviço)
// e o sub-nav usado em cada subpágina. Cada "subcampo" é uma acção/serviço
// que futuramente terá o seu próprio formulário/fluxo ligado ao backend.

export const paieMenu = [
  {
    slug: "balcao-do-investidor",
    icon: Building2,
    title: "Balcão do Investidor",
    description: "Ponto único de atendimento para investidores e empresas.",
    subcampos: [
      "Solicitar Assistência",
      "Abrir Pedido de Apoio",
      "Agendar Reunião",
      "Acompanhar Pedidos",
      "Contactar a Equipa PAIE",
    ],
  },
  {
    slug: "empresas",
    icon: Briefcase,
    title: "Empresas",
    description: "Base de dados de empresas europeias e moçambicanas.",
    subcampos: [
      "Registar Empresa",
      "Actualizar Perfil da Empresa",
      "Empresas Registadas",
      "Empresas Associadas (Área exclusiva EuroCam)",
      "Procurar Empresas e Parceiros",
    ],
  },
  {
    slug: "projectos-e-financiamento",
    icon: Rocket,
    title: "Projectos e Financiamento",
    description: "Espaço para apresentação de projectos e captação de investidores.",
    subcampos: [
      "Submeter Projecto",
      "Projectos à Procura de Financiamento",
      "Procurar Investidores",
      "Procurar Parceiros",
      "Oportunidades de Investimento",
    ],
  },
  {
    slug: "apoio-empresarial",
    icon: Handshake,
    title: "Apoio Empresarial",
    description: "Serviços de consultoria e facilitação de negócios.",
    subcampos: [
      "Constituição de Empresas",
      "Licenciamento",
      "Incentivos ao Investimento",
      "Questões Fiscais",
      "Comércio Internacional",
      "Estudos de Mercado",
      "Identificação de Parceiros",
      "Consultoria Empresarial",
    ],
  },
  {
    slug: "ambiente-de-negocios",
    icon: MessageCircleWarning,
    title: "Ambiente de Negócios",
    description: "Canal de comunicação entre os investidores e a EuroCam.",
    subcampos: [
      "Reportar Preocupações",
      "Reportar Barreiras ao Investimento",
      "Sugestões de Melhoria",
      "Dificuldades Administrativas",
      "Dificuldades Fiscais",
      "Dificuldades Logísticas",
      "Acompanhar Respostas da EuroCam",
    ],
  },
  {
    slug: "centro-de-recursos",
    icon: BookOpen,
    title: "Centro de Recursos",
    description: "Informação estratégica para apoiar o investimento.",
    subcampos: [
      "Guia do Investidor",
      "Estudos e Relatórios",
      "Mozambique Business Outlook",
      "Legislação",
      "Incentivos",
      "Notícias",
      "Eventos e Missões Empresariais",
    ],
  },
];
