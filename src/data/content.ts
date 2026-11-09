/**
 * All site content lives here, in English and Portuguese.
 * Anything wrapped in todo() renders as a visibly marked placeholder; replace it
 * with the real value when you have it. Never replace a todo() with an invented fact.
 */
import type { L } from "../i18n/ui";

export type Todo = { todo: L };
export const todo = (en: string, pt: string): Todo => ({ todo: { en, pt } });
export const isTodo = (v: unknown): v is Todo =>
  typeof v === "object" && v !== null && "todo" in v;

export type Val = string | L | Todo;

/* ------------------------------------------------------------------ */
/* Contact: replace each todo() with the real value                    */
/* ------------------------------------------------------------------ */

export const contact: {
  email: string | Todo;
  github: string | Todo;
  linkedin: string | Todo;
  /** Path to the PDF in /public/cv/. */
  cv: string | Todo;
} = {
  email: "joaomgoncalves17@gmail.com",
  github: "https://github.com/joaomgoncalves17-dev",
  linkedin: "https://www.linkedin.com/in/jo%C3%A3o-gon%C3%A7alves-b8337b2a8/",
  cv: "/cv/CV_Joao_Goncalves.pdf",
};

/* ------------------------------------------------------------------ */
/* Hero focus areas                                                    */
/* ------------------------------------------------------------------ */

export const focusAreas: { icon: string; name: L; short: L }[] = [
  {
    icon: "ph:hard-drives",
    name: { en: "Systems Administration", pt: "Administração de Sistemas" },
    short: { en: "Systems", pt: "Sistemas" },
  },
  {
    icon: "ph:network",
    name: { en: "Networking", pt: "Redes" },
    short: { en: "Networks", pt: "Redes" },
  },
  {
    icon: "ph:cloud",
    name: { en: "Cloud Infrastructure", pt: "Infraestrutura Cloud" },
    short: { en: "Cloud", pt: "Cloud" },
  },
  {
    icon: "ph:code",
    name: { en: "Software Development", pt: "Desenvolvimento de Software" },
    short: { en: "Software", pt: "Software" },
  },
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about: {
  lead: L;
  body: L[];
  facts: { label: L; value: L }[];
} = {
  lead: {
    en: "I’m João, a Computer Engineering student in Portugal looking for an internship or first role in systems or software.",
    pt: "Sou o João, estudante de Engenharia Informática em Portugal, à procura de estágio ou primeira posição em sistemas ou software.",
  },
  body: [
    {
      en: "I focus on Windows and Linux systems administration and on web development, with a growing interest in cloud and cybersecurity. I’m taking a Level 5 Computer Networks and Systems Technician course at IEFP alongside my degree at IPVC.",
      pt: "Foco-me em administração de sistemas Windows e Linux e em desenvolvimento web, com interesse crescente em cloud e cibersegurança. Frequento o curso de Técnico de Redes e Sistemas Informáticos (nível 5) no IEFP em paralelo com a licenciatura no IPVC.",
    },
    {
      en: "I also bring more than two years of customer-facing work. It taught me to solve problems calmly and to explain technical solutions in plain terms.",
      pt: "Trago também mais de dois anos de experiência em atendimento ao cliente. Habituei-me a resolver problemas com calma e a explicar soluções técnicas de forma simples.",
    },
  ],
  facts: [
    {
      label: { en: "Based in", pt: "Localização" },
      value: {
        en: "Viana do Castelo, Portugal",
        pt: "Viana do Castelo, Portugal",
      },
    },
    {
      label: { en: "Studying", pt: "Licenciatura" },
      value: {
        en: "Computer Engineering, IPVC",
        pt: "Engenharia Informática, IPVC",
      },
    },
    {
      label: { en: "Training", pt: "Formação" },
      value: {
        en: "Networks and Systems Technician, IEFP",
        pt: "Técnico de Redes e Sistemas, IEFP",
      },
    },
    {
      label: { en: "Languages", pt: "Línguas" },
      value: {
        en: "Portuguese, English (C1–C2), Spanish (A2)",
        pt: "Português, Inglês (C1–C2), Espanhol (A2)",
      },
    },
    {
      label: { en: "Driving licence", pt: "Carta de condução" },
      value: { en: "Category B, own car", pt: "Categoria B, viatura própria" },
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* Mirrors the technical skills on the CV.                              */
/* ------------------------------------------------------------------ */

export type SkillGroup = {
  icon: string;
  name: L;
  items: { name: L | string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    icon: "ph:hard-drives",
    name: { en: "Systems", pt: "Sistemas" },
    items: [
      { name: "Windows Server" },
      { name: "Active Directory" },
      { name: "Windows 11" },
      { name: "Linux" },
      { name: "Ubuntu Server" },
      { name: "Fedora" },
    ],
  },
  {
    icon: "ph:stack",
    name: { en: "Virtualization & cloud", pt: "Virtualização e cloud" },
    items: [
      { name: "KVM / virt-manager" },
      { name: "Proxmox VE" },
      { name: "Amazon Web Services (AWS)" },
    ],
  },
  {
    icon: "ph:network",
    name: { en: "Networking", pt: "Redes" },
    items: [
      { name: "TCP/IP" },
      { name: { en: "IP addressing", pt: "Endereçamento IP" } },
      { name: "PowerShell" },
      { name: "WinRM" },
      { name: "Troubleshooting" },
    ],
  },
  {
    icon: "ph:code",
    name: { en: "Development", pt: "Desenvolvimento" },
    items: [
      { name: "HTML / CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Node.js / Express" },
      { name: "React" },
      { name: "SQL" },
      { name: "MySQL" },
      { name: "Git / GitHub" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type ProjectStatus =
  "in-progress" | "under-construction" | "completed" | "live";
export type AssetKind = "repo" | "docs" | "diagram" | "screenshots";

export type Project = {
  id: string;
  icon: string;
  title: L;
  status: ProjectStatus;
  summary: L;
  topics: (L | string)[];
  /** Links to supporting material. A todo() renders as "coming soon". */
  assets: { kind: AssetKind; href: string | Todo }[];
  /** Lead image (architecture diagram or screenshot) in /public/projects/, 16:10. */
  image: { src: string; alt: L } | null;
};

const pending = () => todo("Coming soon", "Em breve");

export const projects: Project[] = [
  {
    id: "limatech",
    icon: "ph:cloud",
    title: {
      en: "Hybrid Linux + cloud infrastructure: LimaTech",
      pt: "Infraestrutura híbrida Linux + cloud: LimaTech",
    },
    status: "in-progress",
    summary: {
      en: "IT infrastructure for a simulated company, built for the IEFP Networks and Systems course: Linux servers connected to the cloud, with routine tasks automated in Python.",
      pt: "Infraestrutura de TI para uma empresa simulada, desenvolvida no curso de Redes e Sistemas do IEFP: servidores Linux ligados à cloud e automação de tarefas em Python.",
    },
    topics: ["Linux", "Cloud", "Python", { en: "Automation", pt: "Automação" }],
    assets: [
      { kind: "repo", href: pending() },
      { kind: "docs", href: pending() },
      {
        kind: "diagram",
        href: "/projects/limatech-architecture.drawio",
      },
    ],
    image: {
      src: "/projects/limatech-architecture.png",
      alt: {
        en: "LimaTech hybrid Linux and cloud infrastructure architecture diagram",
        pt: "Diagrama da arquitetura da infraestrutura híbrida Linux e cloud da LimaTech",
      },
    },
  },
  {
    id: "iefp-plus",
    icon: "ph:calendar-dots",
    title: {
      en: "IEFP+: web app for trainees",
      pt: "IEFP+: web app para formandos",
    },
    status: "in-progress",
    summary: {
      en: "A team project of four: class timetables, lunch options and a noticeboard where trainees from different courses can post practical-work requests.",
      pt: "Projeto de equipa de quatro pessoas: horários das turmas, opções de almoço e um quadro de anúncios para trabalhos práticos entre cursos.",
    },
    topics: [
      { en: "Web development", pt: "Desenvolvimento web" },
      { en: "Team of 4", pt: "Equipa de 4" },
    ],
    assets: [
      { kind: "repo", href: pending() },
      { kind: "screenshots", href: pending() },
    ],
    image: null,
  },
  {
    id: "portfolio",
    icon: "ph:browser",
    title: { en: "Personal portfolio", pt: "Site pessoal / portefólio" },
    status: "live",
    summary: {
      en: "This site: a bilingual static portfolio, hosted on Vercel and deployed on every push.",
      pt: "Este site: um portefólio estático bilingue, alojado na Vercel e publicado a cada push.",
    },
    topics: ["React", "TypeScript", "Vite", "CSS", "Vercel"],
    assets: [
      {
        kind: "repo",
        href: "https://github.com/joaomgoncalves17-dev/joao-portfolio",
      },
    ],
    image: null,
  },
];

/* ------------------------------------------------------------------ */
/* Education and certifications, most relevant first                   */
/* ------------------------------------------------------------------ */

export type EducationStatus = "studying" | "in-progress" | "completed";

export type EducationItem = {
  kind: L;
  title: L;
  institution: L | string;
  status: EducationStatus;
  /** Optional dates or year, shown after the institution. */
  period?: L;
  /** Optional one-line note. */
  note?: L;
  /** Optional: individual courses (for multi-course certificates). */
  courses?: { name: string; status: "completed" | "in-progress" }[];
  credential?: string | Todo;
};

export const education: EducationItem[] = [
  {
    kind: { en: "Bachelor’s degree", pt: "Licenciatura" },
    title: { en: "Computer Engineering", pt: "Engenharia Informática" },
    institution: "Instituto Politécnico de Viana do Castelo (IPVC)",
    status: "studying",
    period: { en: "1st year, 2026/27", pt: "1.º ano, 2026/27" },
  },
  {
    kind: { en: "CET, Level 5", pt: "CET, nível 5" },
    title: {
      en: "Computer Networks and Systems Technician",
      pt: "Técnico de Redes e Sistemas Informáticos",
    },
    institution: "IEFP",
    status: "studying",
    period: { en: "Sep 2026 – Sep 2027", pt: "set 2026 – set 2027" },
    note: {
      en: "Includes an internship from January 2027.",
      pt: "Inclui estágio a partir de janeiro de 2027.",
    },
  },
  {
    kind: { en: "Professional certificate", pt: "Certificado profissional" },
    title: { en: "Google IT Support", pt: "Google IT Support" },
    institution: "Google · Coursera",
    status: "completed",
    courses: [
      { name: "Technical Support Fundamentals", status: "completed" },
      {
        name: "The Bits and Bytes of Computer Networking",
        status: "completed",
      },
      {
        name: "Operating Systems and You: Becoming a Power User",
        status: "completed",
      },
      {
        name: "System Administration and IT Infrastructure Services",
        status: "completed",
      },
      {
        name: "IT Security: Defense against the digital dark arts",
        status: "completed",
      },
    ],
    credential: "https://coursera.org/share/517fa94d746518f4708e589c5a3eeab3",
  },
  {
    kind: { en: "Secondary education", pt: "Ensino secundário" },
    title: { en: "12th grade", pt: "12.º ano" },
    institution: { en: "Completed", pt: "Concluído" },
    status: "completed",
  },
];

/* ------------------------------------------------------------------ */
/* Work experience, most recent first                                  */
/* ------------------------------------------------------------------ */

export type Job = {
  role: L;
  company: string;
  period: L;
  place?: L;
  summary: L;
};

export const experience: Job[] = [
  {
    role: { en: "Sales Assistant", pt: "Assistente de Vendas" },
    company: "Rádio Popular",
    period: { en: "Jul 2026 – Sep 2026", pt: "jul 2026 – set 2026" },
    place: {
      en: "Viana do Castelo · full-time",
      pt: "Viana do Castelo · tempo inteiro",
    },
    summary: {
      en: "Advised customers on electronics and computer equipment, and gave informal IT help beyond the role.",
      pt: "Aconselhamento de clientes em equipamentos de eletrónica e informática, e apoio informático informal para além das funções.",
    },
  },
  {
    role: {
      en: "Customer Service Assistant",
      pt: "Customer Service Assistant",
    },
    company: "McDonald’s",
    period: { en: "Mar 2025 – Jul 2026", pt: "mar 2025 – jul 2026" },
    place: {
      en: "Viana do Castelo · part-time",
      pt: "Viana do Castelo · part-time",
    },
    summary: {
      en: "Front-line service in a high-pressure environment: teamwork and handling complaints.",
      pt: "Atendimento ao público em ambiente de alta pressão, trabalho em equipa e resolução de reclamações.",
    },
  },
  {
    role: { en: "Activities Monitor", pt: "Monitor de Atividades" },
    company: "EB1 Ponte de Lima",
    period: { en: "Apr 2022 – Sep 2024", pt: "abr 2022 – set 2024" },
    summary: {
      en: "Looked after and supervised children during school activities.",
      pt: "Acompanhamento e supervisão de crianças em atividades escolares.",
    },
  },
];
