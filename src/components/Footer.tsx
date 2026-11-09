import { homeHref, useT, type Lang } from "../i18n/ui";
import { Icon } from "./Icon";
import styles from "./Footer.module.css";

export function Footer({ lang }: { lang: Lang }) {
  const t = useT(lang);
  const other: Lang = lang === "en" ? "pt" : "en";
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.foot}`}>
        <p>
          © {new Date().getFullYear()} {t("footer.rights")}
        </p>
        <div className={styles["foot-links"]}>
          <a
            href={homeHref(other)}
            hrefLang={other}
            aria-label={t("nav.switchLabel")}
          >
            {t("nav.switch")}
          </a>
          <a href="#home">
            {t("footer.top")} <Icon name="ph:arrow-up" size={16} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
