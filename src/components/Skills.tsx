import { skillGroups } from "../data/content";
import { pick, useT, type Lang } from "../i18n/ui";
import { Frieze } from "./Frieze";
import { Icon } from "./Icon";
import styles from "./Skills.module.css";

export function Skills({ lang }: { lang: Lang }) {
  const t = useT(lang);
  const anyLearning = skillGroups.some((group) =>
    group.items.some((skill) => skill.level === "learning"),
  );
  return (
    <section
      id="skills"
      className={styles.skills}
      aria-labelledby="skills-title"
    >
      <Frieze />
      <div className={`wrap section ${styles.inner}`}>
        <div className={styles.head}>
          <h2 id="skills-title" className="h2">
            {t("skills.title")}
          </h2>
          <p className="lede">{t("skills.intro")}</p>
          {anyLearning && (
            <p className={styles.legend}>
              <span className="stamp stamp-ochre">{t("skills.learning")}</span>
              <span>{t("skills.legend")}</span>
            </p>
          )}
        </div>
        <div className={styles.groups}>
          {skillGroups.map((group, index) => (
            <section
              className={`${styles.group} reveal`}
              aria-labelledby={`sg-${index}`}
              key={group.name.en}
            >
              <span className={styles.gtile} aria-hidden="true">
                <svg viewBox="0 0 100 100" focusable="false">
                  <use href="#tile-fig" />
                </svg>
                <Icon name={group.icon} size={26} />
              </span>
              <h3 id={`sg-${index}`} className={styles.gname}>
                {pick(group.name, lang)}
              </h3>
              <ul>
                {group.items.map((skill) => (
                  <li
                    key={
                      typeof skill.name === "string"
                        ? skill.name
                        : skill.name.en
                    }
                  >
                    <span
                      translate={
                        typeof skill.name === "string" ? "no" : undefined
                      }
                    >
                      {pick(skill.name, lang)}
                    </span>
                    {skill.level === "learning" && (
                      <span className="stamp stamp-ochre">
                        {t("skills.learning")}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <Frieze />
    </section>
  );
}
