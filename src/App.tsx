import { useEffect } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { TileSprite } from "./components/TileSprite";
import { contact, isTodo } from "./data/content";
import { homeHref, useT, type Lang } from "./i18n/ui";
import styles from "./App.module.css";

const site = "https://joao-portfolio-virid.vercel.app";

function updateMeta(lang: Lang) {
  const t = useT(lang);
  document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";
  document.title = t("meta.title");
  document
    .querySelector<HTMLMetaElement>('meta[name="description"]')
    ?.setAttribute("content", t("meta.description"));
  document
    .querySelector<HTMLLinkElement>('link[rel="canonical"]')
    ?.setAttribute("href", new URL(homeHref(lang), site).href);
  document
    .querySelector<HTMLMetaElement>('meta[property="og:title"]')
    ?.setAttribute("content", t("meta.title"));
  document
    .querySelector<HTMLMetaElement>('meta[property="og:description"]')
    ?.setAttribute("content", t("meta.description"));
  document
    .querySelector<HTMLMetaElement>('meta[property="og:locale"]')
    ?.setAttribute("content", lang === "pt" ? "pt_PT" : "en_GB");
}

function Portfolio({ lang }: { lang: Lang }) {
  const t = useT(lang);
  useEffect(() => updateMeta(lang), [lang]);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "João Gonçalves",
    url: new URL(homeHref(lang), site).href,
    description: t("meta.description"),
    address: { "@type": "PostalAddress", addressCountry: "PT" },
    knowsAbout: [
      "Systems administration",
      "Networking",
      "Cloud infrastructure",
      "Software development",
    ],
    ...(isTodo(contact.email) ? {} : { email: `mailto:${contact.email}` }),
    sameAs: [contact.github, contact.linkedin].filter(
      (value): value is string => !isTodo(value),
    ),
  };

  return (
    <>
      <TileSprite />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <a href="#main" className={styles.skip}>
        {t("nav.skip")}
      </a>
      <Nav lang={lang} />
      <main id="main">
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Education lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

function NotFound() {
  useEffect(() => {
    document.title = "Page not found | João Gonçalves";
  }, []);
  return (
    <>
      <TileSprite />
      <main id="main" className={`wrap ${styles.nf}`}>
        <p className={`${styles.code} tabular`} aria-hidden="true">
          404
        </p>
        <h1 className="h2">This page doesn’t exist.</h1>
        <p className="lede">
          The link may be out of date. The portfolio is on the homepage.
        </p>
        <p className={styles.actions}>
          <a href="/" className="btn btn-primary">
            Go to the homepage
          </a>
          <a href="/pt/" className="btn btn-frame" lang="pt-PT">
            Versão portuguesa
          </a>
        </p>
      </main>
    </>
  );
}

export default function App() {
  if (window.location.pathname.endsWith("404.html")) return <NotFound />;
  return (
    <Portfolio
      lang={window.location.pathname.startsWith("/pt") ? "pt" : "en"}
    />
  );
}
