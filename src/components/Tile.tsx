import type { CSSProperties } from "react";

type TileStyle = CSSProperties & Record<`--${string}`, string | number>;

type Props = { r?: number; className?: string; style?: TileStyle };

export function Tile({ r = 0, className = "", style }: Props) {
  return (
    <span
      className={`t ${className}`}
      style={{ "--r": r, ...style } as TileStyle}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" focusable="false">
        <use href="#tile-net" />
      </svg>
    </span>
  );
}
