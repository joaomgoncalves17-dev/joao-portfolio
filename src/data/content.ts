/**
 * All site content lives here. Anything wrapped in todo() renders as a
 * visibly marked placeholder on the page; replace it with the real value.
 * Never replace a todo() with an invented fact.
 */
import type { L } from "../i18n/ui";

export type Todo = { todo: string };
export const todo = (what: string): Todo => ({ todo: what });
export const isTodo = (v: unknown): v is Todo =>
  typeof v === "object" && v !== null && "todo" in v;

export type Val = string | L | Todo;

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact = {
  email: todo("your email") as string | Todo,
  linkedin: todo("LinkedIn URL") as string | Todo,
  github: todo("GitHub profile URL") as string | Todo,
  /** Put the PDF in /public/cv/ and set the path, e.g. "/cv/joao-goncalves-cv.pdf". */
  cv: todo("CV PDF") as string | Todo,
};

/* ------------------------------------------------------------------ */
/* Projects: one per track for now                                     */
/* ------------------------------------------------------------------ */

export type Project = {
  track: "software" | "infrastructure";
  trackName: L;
  name: Val;
  summary: Val;
  stack: Val[];
  status: "progress" | "done";
  /** OSI layers (1-7) the work actually touches. Drives the stack highlight. */
  layers: number[];
  link?: string | Todo;
  /** Image in /public/images/, or a todo() describing the image needed. */
  image: { src: string; alt: L } | Todo;
};

export const projects: Project[] = [
  {
    track: "software",
    trackName: { en: "Software", pt: "Software" },
    name: todo("project name"),
    summary: todo("one sentence: what it does and who it is for"),
    stack: [todo("language"), todo("framework / tools")],
    status: "progress",
    layers: [7],
    link: todo("GitHub repo URL"),
    image: todo("screenshot of the app, 16:10, at least 1600×1000"),
  },
  {
    track: "infrastructure",
    trackName: { en: "Infrastructure", pt: "Infraestrutura" },
    name: todo("lab name"),
    summary: todo("one sentence: what the lab sets up (VLANs, servers, services…)"),
    stack: [todo("tool, e.g. Packet Tracer / GNS3"), todo("OS / services")],
    status: "progress",
    // Provisional: switching + routing labs usually live on L2-L3. Confirm once the lab is described.
    layers: [2, 3],
    link: todo("repo or write-up URL (optional)"),
    image: todo("topology diagram export, 16:10, at least 1600×1000"),
  },
];

/* ------------------------------------------------------------------ */
/* Skills: only list a skill when something on the site proves it      */
/* ------------------------------------------------------------------ */

export type SkillGroup = {
  name: L;
  skills: { name: Val; proof: Val }[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: { en: "Programming", pt: "Programação" },
    skills: [
      { name: todo("skill"), proof: todo("project / course") },
      { name: todo("skill"), proof: todo("project / course") },
    ],
  },
  {
    name: { en: "Systems", pt: "Sistemas" },
    skills: [
      { name: todo("skill"), proof: todo("lab / course") },
      { name: todo("skill"), proof: todo("lab / course") },
    ],
  },
  {
    name: { en: "Networking", pt: "Redes" },
    skills: [
      { name: todo("skill"), proof: todo("lab / certification") },
      { name: todo("skill"), proof: todo("lab / certification") },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Education and certifications, newest first                          */
/* ------------------------------------------------------------------ */

export type EducationItem = {
  title: Val;
  place: Val;
  start: string | Todo;
  /** null = ongoing */
  end: string | Todo | null;
  credential?: string | Todo;
};

export const education: EducationItem[] = [
  {
    title: { en: "Degree in Engenharia Informática", pt: "Licenciatura em Engenharia Informática" },
    place: todo("university"),
    start: todo("year"),
    end: null,
  },
  {
    title: {
      en: "Level 5: Técnico de Redes e Sistemas Computacionais",
      pt: "Nível 5: Técnico de Redes e Sistemas Computacionais",
    },
    place: todo("school"),
    start: todo("year"),
    end: todo("year"),
  },
  {
    title: todo("certification name"),
    place: todo("issuer"),
    start: todo("year"),
    end: todo("year"),
    credential: todo("credential URL (optional)"),
  },
];

/* ------------------------------------------------------------------ */
/* Portrait                                                            */
/* ------------------------------------------------------------------ */

export const portrait: { src: string; alt: L } | Todo = todo(
  "portrait photo, 4:5, at least 1200×1500",
);

/* ------------------------------------------------------------------ */
/* The OSI model: the page's structure                                 */
/* ------------------------------------------------------------------ */

export const osi: { n: number; name: L }[] = [
  { n: 7, name: { en: "Application", pt: "Aplicação" } },
  { n: 6, name: { en: "Presentation", pt: "Apresentação" } },
  { n: 5, name: { en: "Session", pt: "Sessão" } },
  { n: 4, name: { en: "Transport", pt: "Transporte" } },
  { n: 3, name: { en: "Network", pt: "Rede" } },
  { n: 2, name: { en: "Data link", pt: "Ligação de dados" } },
  { n: 1, name: { en: "Physical", pt: "Física" } },
];
