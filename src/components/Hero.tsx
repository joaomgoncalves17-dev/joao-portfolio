import type { CSSProperties, PointerEvent } from "react";
import { focusAreas } from "../data/content";
import { pick, useT, type Lang } from "../i18n/ui";
import { Icon } from "./Icon";
import { Tile } from "./Tile";
import styles from "./Hero.module.css";

type CustomStyle = CSSProperties & Record<`--${string}`, string | number>;

const rand = (index: number) => {
  const value = Math.sin(index * 12.9898 + 4.1414) * 43758.5453;
  return value - Math.floor(value);
};

const pattern = Array.from({ length: 28 }, (_, index) => ({
  r: Math.floor(rand(index) * 4),
  d: Math.round(rand(index + 97) * 520),
  o: (0.82 + rand(index + 211) * 0.18).toFixed(2),
}));

export function Hero({ lang }: { lang: Lang }) {
  const t = useT(lang);
  const turnTile = (event: PointerEvent<HTMLDivElement>) => {
    const tile = (event.target as Element).closest<HTMLElement>(".t.p");
    if (!tile) return;
    const rotation = Number(tile.style.getPropertyValue("--r")) || 0;
    tile.style.setProperty("--r", String(rotation + 1));
  };

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.bleed}>
        <div className={styles.panel} onPointerOver={turnTile}>
          {pattern.map((tile, index) => (
            <Tile
              key={index}
              r={tile.r}
              className="p"
              style={{ "--d": `${tile.d}ms`, "--paint-o": tile.o }}
            />
          ))}
          <div className={styles.cartouche}>
            <h1 id="hero-title" className={styles.headline}>
              <span className={styles.line}>
                <span style={{ "--i": 0 } as CustomStyle}>
                  {t("hero.line1")}
                </span>
              </span>
              <span className={`${styles.line} ${styles.accent}`}>
                <span style={{ "--i": 1 } as CustomStyle}>
                  {t("hero.line2")}
                </span>
              </span>
            </h1>
            <div className={styles.foot}>
              <div className={styles.intro}>
                <p className={styles.sub}>{t("hero.sub")}</p>
                <p className={styles.sig} translate="no">
                  João Gonçalves
                </p>
              </div>
              <div className={styles.ctas}>
                <a href="#projects" className="btn btn-primary">
                  {t("cta.projects")}
                  <Icon
                    name="ph:arrow-right"
                    size={18}
                    aria-hidden
                    className="arrow"
                  />
                </a>
                <a href="#contact" className="btn btn-frame">
                  {t("cta.contact")}
                </a>
              </div>
            </div>
          </div>
          <h2 className="sr-only">{t("hero.focus")}</h2>
          <ul className={styles.focus}>
            {focusAreas.map((area, index) => (
              <li
                className={styles.fig}
                style={{ "--d": `${560 + index * 90}ms` } as CustomStyle}
                key={area.name.en}
              >
                <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                  <use href="#tile-fig" />
                </svg>
                <span className={styles["fig-body"]}>
                  <Icon name={area.icon} size={28} aria-hidden />
                  <span
                    className={styles["fig-label"]}
                    title={pick(area.name, lang)}
                  >
                    {pick(area.short, lang)}
                  </span>
                  <span className="sr-only">: {pick(area.name, lang)}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
