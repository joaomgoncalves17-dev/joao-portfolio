import { Tile } from "./Tile";
import styles from "./Frieze.module.css";

export function Frieze({
  count = 56,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`${styles.frieze} ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <Tile
          key={i}
          r={(i % 2) + (Math.floor(i / 2) % 2) * 2}
          style={{ "--paint-o": (0.84 + ((i * 37) % 17) / 100).toFixed(2) }}
        />
      ))}
    </div>
  );
}
