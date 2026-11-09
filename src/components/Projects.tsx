import { isTodo, projects, type AssetKind } from "../data/content";
import { pick, useT, type Lang } from "../i18n/ui";
import { Icon } from "./Icon";
import { Tile } from "./Tile";
import styles from "./Projects.module.css";

const assetIcon: Record<AssetKind, string> = {
  repo: "ph:github-logo",
  docs: "ph:file-text",
  diagram: "ph:tree-structure",
  screenshots: "ph:image",
  demo: "ph:play-circle",
};
const statusClass = {
  "in-progress": "stamp-ochre",
  "under-construction": "stamp-ochre",
  completed: "stamp-cobalt",
  live: "stamp-solid",
} as const;
const field = (seed: number) =>
  Array.from({ length: 8 }, (_, index) =>
    Math.floor(Math.abs(Math.sin((index + 1) * 7.31 + seed * 3.7)) * 4),
  );

export function Projects({ lang }: { lang: Lang }) {
  const t = useT(lang);
  const list = (items: string[]) =>
    new Intl.ListFormat(lang === "pt" ? "pt-PT" : "en-GB", {
      type: "conjunction",
    }).format(
      items.map((item, index) =>
        index === 0 ? item : item.charAt(0).toLowerCase() + item.slice(1),
      ),
    );
  const cases = projects.map((project, index) => ({
    project,
    ready: project.assets.filter(
      (asset): asset is { kind: AssetKind; href: string } =>
        !isTodo(asset.href),
    ),
    pending: project.assets
      .filter((asset) => isTodo(asset.href))
      .map((asset) => t(`projects.asset.${asset.kind}`)),
    rotations: field(index + 1),
  }));

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="wrap">
        <div className={styles.head}>
          <h2 id="projects-title" className="h2">
            {t("projects.title")}
          </h2>
          <p className="lede">{t("projects.intro")}</p>
        </div>
        <div className={styles.list}>
          {cases.map(({ project, ready, pending, rotations }) => (
            <article
              className={styles.project}
              aria-labelledby={`p-${project.id}`}
              key={project.id}
            >
              <div
                className={styles.field}
                aria-hidden={project.image ? undefined : true}
              >
                {project.image ? (
                  <img
                    src={project.image.src}
                    alt={pick(project.image.alt, lang)}
                    width="1600"
                    height="1000"
                    loading="lazy"
                    decoding="async"
                    className={styles.shot}
                  />
                ) : (
                  <>
                    {rotations.slice(0, 4).map((rotation, index) => (
                      <Tile
                        key={`a-${index}`}
                        r={rotation}
                        className="ft"
                        style={{
                          "--paint-o":
                            0.84 + ((index * 5 + rotation) % 5) * 0.04,
                        }}
                      />
                    ))}
                    <span className={styles.fcenter}>
                      <svg viewBox="0 0 100 100" focusable="false">
                        <use href="#tile-fig" />
                      </svg>
                      <Icon name={project.icon} size={40} />
                    </span>
                    {rotations.slice(4).map((rotation, index) => (
                      <Tile
                        key={`b-${index}`}
                        r={rotation}
                        className="ft"
                        style={{
                          "--paint-o":
                            0.84 + ((index * 3 + rotation) % 5) * 0.04,
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
              <div className={styles.info}>
                <span className={`stamp ${statusClass[project.status]}`}>
                  {t(`projects.status.${project.status}`)}
                </span>
                <h3 id={`p-${project.id}`} className={styles.title}>
                  {pick(project.title, lang)}
                </h3>
                <p className={styles.summary}>{pick(project.summary, lang)}</p>
                <ul className={styles.topics} aria-label={t("projects.topics")}>
                  {project.topics.map((topic) => (
                    <li
                      key={typeof topic === "string" ? topic : topic.en}
                      translate={typeof topic === "string" ? "no" : undefined}
                    >
                      {pick(topic, lang)}
                    </li>
                  ))}
                </ul>
                {ready.length > 0 && (
                  <ul
                    className={styles.ready}
                    aria-label={t("projects.material")}
                  >
                    {ready.map((asset) => (
                      <li key={asset.kind}>
                        <a
                          href={asset.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.asset}
                        >
                          <Icon
                            name={assetIcon[asset.kind]}
                            size={18}
                            aria-hidden
                          />
                          <span>{t(`projects.asset.${asset.kind}`)}</span>
                          <Icon
                            name="ph:arrow-up-right"
                            size={18}
                            aria-hidden
                            className={styles.go}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {pending.length > 0 && (
                  <p className={styles.pending}>
                    <Icon name="ph:clock" size={18} aria-hidden />
                    <span>
                      {t("projects.pending")} {list(pending)}.
                    </span>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
