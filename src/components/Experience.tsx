import { experience } from "../data/content";
import { pick, useT, type Lang } from "../i18n/ui";
import { Tile } from "./Tile";
import styles from "./Experience.module.css";

export function Experience({ lang }: { lang: Lang }) {
  const t = useT(lang);
  return (
    <section
      id="experience"
      className={`section ${styles.exp}`}
      aria-labelledby="exp-title"
    >
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.head}>
          <h2 id="exp-title" className="h2">
            {t("exp.title")}
          </h2>
          <p className="lede">{t("exp.intro")}</p>
        </div>
        <ol className={styles.jobs}>
          {experience.map((job, index) => (
            <li
              className={`${styles.job} reveal`}
              key={`${job.company}-${job.period.en}`}
            >
              <p className={`${styles.period} tabular`}>
                {pick(job.period, lang)}
              </p>
              <div className={styles.body}>
                <Tile r={index % 4} className="jt" />
                <div>
                  <h3 className={styles.role}>
                    {pick(job.role, lang)}{" "}
                    <span className={styles.company} translate="no">
                      {job.company}
                    </span>
                  </h3>
                  {job.place && (
                    <p className={styles.place}>{pick(job.place, lang)}</p>
                  )}
                  <p className={styles.summary}>{pick(job.summary, lang)}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
