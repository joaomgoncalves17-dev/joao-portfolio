import { useEffect, useRef } from "react";
import { homeHref, useT, type Lang, type UIKey } from "../i18n/ui";
import { Icon } from "./Icon";
import styles from "./Nav.module.css";

const links: { id: string; key: UIKey }[] = [
  { id: "home", key: "nav.home" },
  { id: "about", key: "nav.about" },
  { id: "skills", key: "nav.skills" },
  { id: "projects", key: "nav.projects" },
  { id: "experience", key: "nav.experience" },
  { id: "education", key: "nav.education" },
];

type PopoverElement = HTMLDivElement & { hidePopover: () => void };

export function Nav({ lang }: { lang: Lang }) {
  const t = useT(lang);
  const other: Lang = lang === "en" ? "pt" : "en";
  const menuRef = useRef<PopoverElement>(null);

  useEffect(() => {
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(
      `.${styles.desktop} [data-section]`,
    );
    const sections = [...navLinks]
      .map((link) => document.getElementById(link.dataset.section ?? ""))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          navLinks.forEach((link) =>
            link.dataset.section === entry.target.id
              ? link.setAttribute("aria-current", "true")
              : link.removeAttribute("aria-current"),
          );
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => menuRef.current?.hidePopover();

  return (
    <header className={styles.nav}>
      <div className={`wrap ${styles.bar}`}>
        <a
          href="#home"
          className={styles.brand}
          aria-label="João Gonçalves, home"
        >
          <span className={`${styles.mark} glaze-invert`} aria-hidden="true">
            <svg viewBox="0 0 100 100" focusable="false">
              <use href="#tile-net" />
            </svg>
          </span>
          <span className={styles["brand-name"]} translate="no">
            João Gonçalves
          </span>
        </a>
        <nav aria-label={t("nav.label")} className={styles.desktop}>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={styles.link}
                  data-section={link.id}
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
            <li>
              <a
                href={homeHref(other)}
                hrefLang={other}
                lang={other === "pt" ? "pt-PT" : "en"}
                aria-label={t("nav.switchLabel")}
                className={styles.lang}
              >
                {t("nav.switch")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`btn btn-primary ${styles.contact}`}
                data-section="contact"
              >
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className={styles["menu-btn"]}
          popoverTarget="menu"
          aria-controls="menu"
        >
          <Icon
            name="ph:list"
            size={22}
            aria-hidden
            className={styles["i-open"]}
          />
          <Icon
            name="ph:x"
            size={22}
            aria-hidden
            className={styles["i-close"]}
          />
          <span>{t("nav.menu")}</span>
        </button>
      </div>
      <div id="menu" popover="auto" className={styles.menu} ref={menuRef}>
        <nav aria-label={t("nav.label")}>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={styles["m-link"]}
                  onClick={closeMenu}
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className={styles["m-link"]}
                onClick={closeMenu}
              >
                {t("nav.contact")}
              </a>
            </li>
          </ul>
          <a
            href={homeHref(other)}
            hrefLang={other}
            lang={other === "pt" ? "pt-PT" : "en"}
            className={styles["m-lang"]}
          >
            <Icon name="ph:translate" size={18} aria-hidden />
            {t("nav.switchLabel")}
          </a>
        </nav>
      </div>
    </header>
  );
}
