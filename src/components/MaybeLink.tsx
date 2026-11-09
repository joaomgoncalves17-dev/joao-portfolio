import type { AnchorHTMLAttributes, ReactNode } from "react";
import { isTodo, type Todo } from "../data/content";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string | Todo | undefined;
  external?: boolean;
  children: ReactNode;
};

export function MaybeLink({ href, external, children, ...rest }: Props) {
  if (href === undefined || isTodo(href)) {
    const {
      download: _download,
      target: _target,
      rel: _rel,
      ...spanProps
    } = rest;
    return (
      <span {...spanProps} aria-disabled="true">
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}
