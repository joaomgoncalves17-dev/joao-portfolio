export const languages = { en: "English", pt: "Português" } as const;
export type Lang = keyof typeof languages;

/** A string that exists in both languages. */
export type L = Record<Lang, string>;

export const ui = {
  en: {
    "meta.title": "João Gonçalves, software and systems",
    "meta.description":
      "Portfolio of João Gonçalves, Engenharia Informática student with a Level 5 in Network and Computer Systems.",
    "nav.work": "Work",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.switch": "PT",
    "nav.switchLabel": "Ler em português",
    "nav.skip": "Skip to content",
    "hero.title": "I build software and set up the networks it runs on.",
    "hero.sub":
      "Engenharia Informática student with a Level 5 in Network and Computer Systems. Open to internships and first roles.",
    "cta.work": "View work",
    "cta.cv": "Download CV",
    "work.title": "Software and infrastructure",
    "work.status.progress": "In progress",
    "work.status.done": "Finished",
    "work.code": "Code",
    "work.more": "More projects will be added here as they are finished.",
    "skills.title": "Skills, with proof",
    "skills.proof": "Shown in",
    "edu.title": "Education and certifications",
    "edu.present": "now",
    "edu.credential": "Credential",
    "contact.title": "Looking for an intern, a freelancer or a student for your program?",
    "contact.sub": "Email is the fastest way to reach me.",
    "footer.rights": "João Gonçalves",
    "placeholder": "Placeholder",
  },
  pt: {
    "meta.title": "João Gonçalves, software e sistemas",
    "meta.description":
      "Portfólio de João Gonçalves, estudante de Engenharia Informática com nível 5 em Redes e Sistemas Computacionais.",
    "nav.work": "Trabalho",
    "nav.skills": "Competências",
    "nav.education": "Formação",
    "nav.contact": "Contacto",
    "nav.switch": "EN",
    "nav.switchLabel": "Read in English",
    "nav.skip": "Saltar para o conteúdo",
    "hero.title": "Desenvolvo software e configuro as redes onde ele corre.",
    "hero.sub":
      "Estudante de Engenharia Informática, com nível 5 em Redes e Sistemas Computacionais. Disponível para estágios e primeiro emprego.",
    "cta.work": "Ver trabalho",
    "cta.cv": "Descarregar CV",
    "work.title": "Software e infraestrutura",
    "work.status.progress": "Em curso",
    "work.status.done": "Concluído",
    "work.code": "Código",
    "work.more": "Novos projetos aparecem aqui à medida que forem concluídos.",
    "skills.title": "Competências, com provas",
    "skills.proof": "Visto em",
    "edu.title": "Formação e certificações",
    "edu.present": "atual",
    "edu.credential": "Credencial",
    "contact.title": "Procura um estagiário, um freelancer ou um estudante para o seu programa?",
    "contact.sub": "O email é a forma mais rápida de me contactar.",
    "footer.rights": "João Gonçalves",
    "placeholder": "Por preencher",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];

export function useT(lang: Lang) {
  return (key: UIKey) => ui[lang][key];
}

export function pick(value: L | string, lang: Lang) {
  return typeof value === "string" ? value : value[lang];
}

export function homeHref(lang: Lang) {
  return lang === "en" ? "/" : "/pt/";
}
