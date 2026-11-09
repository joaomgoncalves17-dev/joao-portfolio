import { education, isTodo } from "../data/content";
import { pick, useT, type Lang } from "../i18n/ui";
import { Icon } from "./Icon";
import { MaybeLink } from "./MaybeLink";
import { Tile } from "./Tile";
import styles from "./Education.module.css";

const badge = {
  studying: "stamp-cobalt",
  "in-progress": "stamp-ochre",
  completed: "stamp-solid",
} as const;

export function Education({ lang }: { lang: Lang }) {
  const t = useT(lang);
  return (
    <section
      id="education"
      className={`section ${styles.edu}`}
      aria-labelledby="edu-title"
    >
      <div className={`wrap ${styles.grid}`}>
        <h2 id="edu-title" className={`h2 ${styles.title}`}>
          {t("edu.title")}
        </h2>
        <div className={styles.tl}>
          <div className={styles.spine} aria-hidden="true">
            {Array.from({ length: 40 }, (_, index) => (
              <Tile
                key={index}
                r={index % 2 ? 1 : 2}
                style={{
                  "--paint-o": (0.84 + ((index * 7) % 5) * 0.04).toFixed(2),
                }}
              />
            ))}
          </div>
          <ol className={styles.timeline}>
            {education.map((item) => (
              <li
                className={`${styles.entry} reveal`}
                key={`${item.title.en}-${item.institution}`}
              >
                <span
                  className={`${styles.node} ${styles[item.status]}`}
                  aria-hidden="true"
                />
                <div className={styles.top}>
                  <h3 className={styles.etitle}>{pick(item.title, lang)}</h3>
                  <span className={`stamp ${badge[item.status]}`}>
                    {t(`edu.status.${item.status}`)}
                  </span>
                </div>
                <p className={styles.meta}>
                  <span>{pick(item.kind, lang)}</span>
                  <span className={styles.sep} aria-hidden="true">
                    /
                  </span>
                  <span>{pick(item.institution, lang)}</span>
                  {item.period && (
                    <>
                      <span className={styles.sep} aria-hidden="true">
                        /
                      </span>
                      <span className="tabular">{pick(item.period, lang)}</span>
                    </>
                  )}
                </p>
                {item.note && (
                  <p className={styles.note}>{pick(item.note, lang)}</p>
                )}
                {item.courses && item.courses.length > 0 && (
                  <div className={styles.courses}>
                    <h4 className={styles["c-title"]}>{t("edu.courses")}</h4>
                    <ul>
                      {item.courses
                        .filter((course) => course.status === "completed")
                        .map((course) => (
                          <li key={course.name}>
                            <Icon
                              name="ph:check-circle"
                              size={18}
                              aria-hidden
                            />
                            <span>{course.name}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
                {item.credential !== undefined && (
                  <div className={styles["cred-row"]}>
                    <MaybeLink
                      href={item.credential}
                      className="btn btn-primary cred"
                      external
                    >
                      <Icon name="ph:certificate" size={20} aria-hidden />
                      {t("edu.credential")}
                      {!isTodo(item.credential) && (
                        <Icon
                          name="ph:arrow-up-right"
                          size={18}
                          aria-hidden
                          className="arrow"
                        />
                      )}
                    </MaybeLink>
                    {isTodo(item.credential) && (
                      <span className={styles["cred-note"]}>
                        {pick(item.credential.todo, lang)}
                      </span>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
