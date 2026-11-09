export const languages = { en: "English", pt: "Português" } as const;
export type Lang = keyof typeof languages;

/** A string that exists in both languages. */
export type L = Record<Lang, string>;

export const ui = {
  en: {
    "meta.title": "João Gonçalves | Systems, networking and software",
    "meta.description":
      "Portfolio of João Gonçalves, a Computer Engineering student in Portugal focused on systems administration, networking, cloud and software development.",
    "nav.label": "Main",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Get in Touch",
    "nav.menu": "Menu",
    "nav.close": "Close menu",
    "nav.switch": "PT",
    "nav.switchLabel": "Ler em português",
    "nav.skip": "Skip to content",
    "hero.line1": "Building reliable systems.",
    "hero.line2": "Exploring better technology.",
    "hero.sub":
      "Computer Engineering student in Portugal, working across systems administration, networking, cloud and software.",
    "hero.focus": "Focus areas",
    "cta.projects": "Explore Projects",
    "cta.contact": "Get in Touch",
    "about.title": "About",
    "skills.title": "Skills",
    "skills.intro":
      "Technologies and tools across systems, virtualization and cloud, networking and development.",
    "skills.learning": "Learning",
    "skills.legend": "Some of these topics are still being learned.",
    "projects.title": "Featured projects",
    "projects.intro":
      "Infrastructure and software projects, documented as they grow.",
    "projects.status.in-progress": "In progress",
    "projects.status.under-construction": "Under construction",
    "projects.status.completed": "Completed",
    "projects.status.live": "Live",
    "projects.topics": "Topics",
    "projects.material": "Project material",
    "projects.asset.repo": "GitHub repository",
    "projects.asset.docs": "Technical documentation",
    "projects.asset.diagram": "Architecture diagram",
    "projects.asset.screenshots": "Screenshots",
    "projects.asset.demo": "Watch demo",
    "projects.pending": "Coming as the project develops:",
    "exp.title": "Experience",
    "exp.intro":
      "Work outside IT that built how I deal with people and problems.",
    "edu.title": "Education & certifications",
    "edu.status.studying": "Currently studying",
    "edu.status.in-progress": "In progress",
    "edu.status.completed": "Completed",
    "edu.courses": "Completed courses",
    "edu.credential": "View certificate",
    "contact.title": "Let’s connect",
    "contact.sub":
      "Recruiters, collaborators and people working in technology: I’d be glad to hear from you.",
    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.cv": "CV",
    "contact.cvButton": "Download CV",
    "footer.top": "Back to top",
    "footer.rights": "João Gonçalves",
  },
  pt: {
    "meta.title": "João Gonçalves | Sistemas, redes e software",
    "meta.description":
      "Portefólio de João Gonçalves, estudante de Engenharia Informática em Portugal, com foco em administração de sistemas, redes, cloud e desenvolvimento de software.",
    "nav.label": "Principal",
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.skills": "Competências",
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.education": "Formação",
    "nav.contact": "Falar comigo",
    "nav.menu": "Menu",
    "nav.close": "Fechar menu",
    "nav.switch": "EN",
    "nav.switchLabel": "Read in English",
    "nav.skip": "Saltar para o conteúdo",
    "hero.line1": "Construir sistemas fiáveis.",
    "hero.line2": "Explorar novas tecnologias.",
    "hero.sub":
      "Estudante de Engenharia Informática, a desenvolver competências em administração de sistemas, redes, cloud e software.",
    "hero.focus": "Áreas de interesse",
    "cta.projects": "Ver projetos",
    "cta.contact": "Falar comigo",
    "about.title": "Sobre mim",
    "skills.title": "Competências",
    "skills.intro":
      "Tecnologias e ferramentas de sistemas, virtualização e cloud, redes e desenvolvimento.",
    "skills.learning": "A aprender",
    "skills.legend": "Continuo a aprofundar alguns destes tópicos.",
    "projects.title": "Projetos em destaque",
    "projects.intro":
      "Projetos de infraestrutura e software, com documentação atualizada à medida que evoluem.",
    "projects.status.in-progress": "Em curso",
    "projects.status.under-construction": "Em construção",
    "projects.status.completed": "Concluído",
    "projects.status.live": "Online",
    "projects.topics": "Temas",
    "projects.material": "Material do projeto",
    "projects.asset.repo": "Repositório GitHub",
    "projects.asset.docs": "Documentação técnica",
    "projects.asset.diagram": "Diagrama de arquitetura",
    "projects.asset.screenshots": "Capturas de ecrã",
    "projects.asset.demo": "Ver demonstração",
    "projects.pending": "Conteúdos a adicionar à medida que o projeto evolui:",
    "exp.title": "Experiência",
    "exp.intro":
      "Experiência profissional fora da área tecnológica, onde desenvolvi competências de comunicação e resolução de problemas.",
    "edu.title": "Formação e certificações",
    "edu.status.studying": "A frequentar",
    "edu.status.in-progress": "Em curso",
    "edu.status.completed": "Concluído",
    "edu.courses": "Cursos concluídos",
    "edu.credential": "Ver certificado",
    "contact.title": "Vamos falar",
    "contact.sub":
      "Estou disponível para falar com recrutadores, colaboradores e profissionais da área tecnológica.",
    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.cv": "CV",
    "contact.cvButton": "Descarregar CV",
    "footer.top": "Voltar ao topo",
    "footer.rights": "João Gonçalves",
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
