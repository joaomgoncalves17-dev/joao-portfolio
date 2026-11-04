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
  /** Put the PDF in /public/cv/ and set the path, e.g. "/cv/joao-goncalves-cv.pdf". */
  cv: string | Todo;
} = {
  email: todo("Email address to be added", "Email a adicionar"),
  github: todo("GitHub profile to be added", "Perfil do GitHub a adicionar"),
  linkedin: todo("LinkedIn profile to be added", "Perfil do LinkedIn a adicionar"),
  cv: todo("CV to be added", "CV a adicionar"),
};

/* ------------------------------------------------------------------ */
/* Hero focus areas                                                    */
/* ------------------------------------------------------------------ */

export const focusAreas: { icon: string; name: L; short: L }[] = [
  { icon: "ph:hard-drives", name: { en: "Systems Administration", pt: "Administração de Sistemas" }, short: { en: "Systems", pt: "Sistemas" } },
  { icon: "ph:network", name: { en: "Networking", pt: "Redes" }, short: { en: "Networks", pt: "Redes" } },
  { icon: "ph:cloud", name: { en: "Cloud Infrastructure", pt: "Infraestrutura Cloud" }, short: { en: "Cloud", pt: "Cloud" } },
  { icon: "ph:code", name: { en: "Software Development", pt: "Desenvolvimento de Software" }, short: { en: "Software", pt: "Software" } },
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
    en: "I’m João, a Computer Engineering student in Portugal working towards a career in IT infrastructure.",
    pt: "Sou o João, estudante de Engenharia Informática em Portugal, a construir uma carreira em infraestrutura de TI.",
  },
  body: [
    {
      en: "I’m interested in how systems fit together: servers, networks, cloud platforms and the software that runs on them. Alongside my degree, I’m completing a Level 5 qualification in Computer Networks and Systems Management.",
      pt: "Interessa-me perceber como os sistemas encaixam: servidores, redes, plataformas cloud e o software que corre sobre eles. Em paralelo com a licenciatura, estou a concluir uma qualificação de nível 5 em Gestão de Redes e Sistemas Informáticos.",
    },
    {
      en: "I enjoy learning through hands-on technical projects, and I’m building practical experience in a personal homelab with Windows Server, Linux, Active Directory, DNS and DHCP.",
      pt: "Gosto de aprender através de projetos técnicos práticos e estou a ganhar experiência num homelab pessoal com Windows Server, Linux, Active Directory, DNS e DHCP.",
    },
  ],
  facts: [
    { label: { en: "Based in", pt: "Localização" }, value: { en: "Portugal", pt: "Portugal" } },
    { label: { en: "Studying", pt: "Licenciatura" }, value: { en: "Computer Engineering, IPVC", pt: "Engenharia Informática, IPVC" } },
    {
      label: { en: "Training", pt: "Formação" },
      value: { en: "Level 5, Computer Networks and Systems Management, IEFP", pt: "Nível 5, Gestão de Redes e Sistemas Informáticos, IEFP" },
    },
    { label: { en: "Practising", pt: "Prática" }, value: { en: "Personal homelab", pt: "Homelab pessoal" } },
  ],
};

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* "hands-on" = used in practice; "learning" = currently learning.     */
/* Only Azure was stated as learning; adjust the others if needed.     */
/* ------------------------------------------------------------------ */

export type SkillLevel = "hands-on" | "learning";
export type SkillGroup = { icon: string; name: L; items: { name: L | string; level: SkillLevel }[] };

export const skillGroups: SkillGroup[] = [
  {
    icon: "ph:hard-drives",
    name: { en: "Systems & Infrastructure", pt: "Sistemas e Infraestrutura" },
    items: [
      { name: "Windows Server", level: "hands-on" },
      { name: "Linux", level: "hands-on" },
      { name: "Active Directory", level: "hands-on" },
      { name: { en: "DNS and DHCP", pt: "DNS e DHCP" }, level: "hands-on" },
      { name: { en: "Virtualization", pt: "Virtualização" }, level: "hands-on" },
      { name: { en: "System Administration", pt: "Administração de Sistemas" }, level: "hands-on" },
    ],
  },
  {
    icon: "ph:network",
    name: { en: "Networking", pt: "Redes" },
    items: [
      { name: "TCP/IP", level: "hands-on" },
      { name: { en: "Network Troubleshooting", pt: "Resolução de problemas de rede" }, level: "hands-on" },
      { name: { en: "Network Configuration", pt: "Configuração de redes" }, level: "hands-on" },
      { name: { en: "Network Fundamentals", pt: "Fundamentos de redes" }, level: "hands-on" },
    ],
  },
  {
    icon: "ph:cloud",
    name: { en: "Cloud & Tools", pt: "Cloud e Ferramentas" },
    items: [
      { name: "Microsoft Azure", level: "learning" },
      { name: "VirtualBox", level: "hands-on" },
      { name: { en: "Git and GitHub", pt: "Git e GitHub" }, level: "hands-on" },
      { name: "VS Code", level: "hands-on" },
    ],
  },
  {
    icon: "ph:code",
    name: { en: "Development", pt: "Desenvolvimento" },
    items: [
      { name: "Python", level: "hands-on" },
      { name: "C#", level: "hands-on" },
      { name: "JavaScript", level: "hands-on" },
      { name: "TypeScript", level: "hands-on" },
      { name: { en: "HTML and CSS", pt: "HTML e CSS" }, level: "hands-on" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type ProjectStatus = "in-progress" | "under-construction" | "completed";
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
    id: "homelab",
    icon: "ph:hard-drives",
    title: { en: "Systems Administration Homelab", pt: "Homelab de Administração de Sistemas" },
    status: "in-progress",
    summary: {
      en: "A practical infrastructure environment built with virtual machines to develop skills in Windows Server, Linux, networking, Active Directory, DNS, DHCP and system administration.",
      pt: "Um ambiente de infraestrutura prático, construído com máquinas virtuais, para desenvolver competências em Windows Server, Linux, redes, Active Directory, DNS, DHCP e administração de sistemas.",
    },
    topics: ["Windows Server", "Linux", "Active Directory", "DNS", "DHCP", { en: "Virtualization", pt: "Virtualização" }],
    assets: [
      { kind: "repo", href: pending() },
      { kind: "docs", href: pending() },
      { kind: "diagram", href: pending() },
      { kind: "screenshots", href: pending() },
    ],
    image: null,
  },
  {
    id: "iefp-infrastructure",
    icon: "ph:network",
    title: { en: "IEFP+ Infrastructure Project", pt: "Projeto de Infraestrutura IEFP+" },
    status: "under-construction",
    summary: {
      en: "A comprehensive technical project developed as part of my Level 5 training in Computer Networks and Systems.",
      pt: "Um projeto técnico abrangente, desenvolvido no âmbito da minha formação de nível 5 em Redes e Sistemas Informáticos.",
    },
    topics: [
      { en: "Computer networks", pt: "Redes informáticas" },
      { en: "Systems management", pt: "Gestão de sistemas" },
    ],
    assets: [
      { kind: "repo", href: pending() },
      { kind: "docs", href: pending() },
      { kind: "diagram", href: pending() },
      { kind: "screenshots", href: pending() },
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
  },
  {
    kind: { en: "Level 5 professional qualification", pt: "Qualificação profissional de nível 5" },
    title: { en: "Computer Networks and Systems Management", pt: "Gestão de Redes e Sistemas Informáticos" },
    institution: "IEFP",
    status: "studying",
  },
  {
    kind: { en: "Professional certificate", pt: "Certificado profissional" },
    title: { en: "Google IT Support", pt: "Google IT Support" },
    institution: "Google",
    status: "in-progress",
    courses: [
      { name: "Technical Support Fundamentals", status: "completed" },
      { name: "The Bits and Bytes of Computer Networking", status: "completed" },
    ],
  },
];
