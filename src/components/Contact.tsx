import { contact, isTodo, type Todo } from "../data/content";
import { pick, useT, type Lang, type UIKey } from "../i18n/ui";
import { Frieze } from "./Frieze";
import { Icon } from "./Icon";
import { MaybeLink } from "./MaybeLink";
import styles from "./Contact.module.css";

const rows: {
  key: UIKey;
  icon: string;
  value: string | Todo;
  href: (value: string) => string;
  external: boolean;
}[] = [
  {
    key: "contact.email",
    icon: "ph:envelope-simple",
    value: contact.email,
    href: (value) => `mailto:${value}`,
    external: false,
  },
  {
    key: "contact.github",
    icon: "ph:github-logo",
    value: contact.github,
    href: (value) => value,
    external: true,
  },
  {
    key: "contact.linkedin",
    icon: "ph:linkedin-logo",
    value: contact.linkedin,
    href: (value) => value,
    external: true,
  },
];

const display = (value: string) =>
  decodeURI(value)
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "");

export function Contact({ lang }: { lang: Lang }) {
  const t = useT(lang);
  return (
    <section
      id="contact"
      className={`${styles.contact} glaze-invert`}
      aria-labelledby="contact-title"
    >
      <Frieze className="cfrieze" />
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.head}>
          <h2 id="contact-title" className={styles.title}>
            {t("contact.title")}
          </h2>
          <p className={styles.sub}>{t("contact.sub")}</p>
          <MaybeLink href={contact.cv} className="btn btn-glaze cv" download>
            <Icon name="ph:download-simple" size={18} aria-hidden />
            {t("contact.cvButton")}
          </MaybeLink>
          {isTodo(contact.cv) && (
            <p className={styles.note}>{pick(contact.cv.todo, lang)}</p>
          )}
        </div>
        <ul className={styles.rows}>
          {rows.map((row) => (
            <li key={row.key}>
              <MaybeLink
                href={isTodo(row.value) ? row.value : row.href(row.value)}
                className="row"
                external={row.external}
              >
                <Icon
                  name={row.icon}
                  size={22}
                  aria-hidden
                  className="r-icon"
                />
                <span className={styles["r-label"]}>{t(row.key)}</span>
                <span className={`${styles["r-value"]} r-value`}>
                  {isTodo(row.value)
                    ? pick(row.value.todo, lang)
                    : display(row.value)}
                </span>
                {!isTodo(row.value) && (
                  <Icon
                    name="ph:arrow-up-right"
                    size={20}
                    aria-hidden
                    className="r-go"
                  />
                )}
              </MaybeLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
