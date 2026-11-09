import { about } from "../data/content";
import { pick, useT, type Lang } from "../i18n/ui";
import styles from "./About.module.css";

export function About({ lang }: { lang: Lang }) {
  const t = useT(lang);
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className={`wrap ${styles.grid}`}>
        <h2 id="about-title" className={`h2 ${styles.title}`}>
          {t("about.title")}
        </h2>
        <p className={styles.lead}>{pick(about.lead, lang)}</p>
        <div className={styles.body}>
          {about.body.map((paragraph) => (
            <p key={paragraph.en}>{pick(paragraph, lang)}</p>
          ))}
        </div>
        <dl className={styles.plaques}>
          {about.facts.map((fact) => (
            <div className={`${styles.plaque} reveal`} key={fact.label.en}>
              <dt>{pick(fact.label, lang)}</dt>
              <dd>{pick(fact.value, lang)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
