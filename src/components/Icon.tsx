import type { ComponentType } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Browser,
  CalendarDots,
  Certificate,
  CheckCircle,
  Clock,
  Cloud,
  Code,
  DownloadSimple,
  EnvelopeSimple,
  FileText,
  GithubLogo,
  HardDrives,
  Image,
  LinkedinLogo,
  List,
  Network,
  Stack,
  Translate,
  TreeStructure,
  X,
} from "@phosphor-icons/react";

type IconComponent = ComponentType<{
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
}>;

const icons: Record<string, IconComponent> = {
  "ph:arrow-right": ArrowRight,
  "ph:arrow-up": ArrowUp,
  "ph:arrow-up-right": ArrowUpRight,
  "ph:browser": Browser,
  "ph:calendar-dots": CalendarDots,
  "ph:certificate": Certificate,
  "ph:check-circle": CheckCircle,
  "ph:clock": Clock,
  "ph:cloud": Cloud,
  "ph:code": Code,
  "ph:download-simple": DownloadSimple,
  "ph:envelope-simple": EnvelopeSimple,
  "ph:file-text": FileText,
  "ph:github-logo": GithubLogo,
  "ph:hard-drives": HardDrives,
  "ph:image": Image,
  "ph:linkedin-logo": LinkedinLogo,
  "ph:list": List,
  "ph:network": Network,
  "ph:stack": Stack,
  "ph:translate": Translate,
  "ph:tree-structure": TreeStructure,
  "ph:x": X,
};

type Props = {
  name: string;
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
};

export function Icon({ name, ...props }: Props) {
  const Component = icons[name];
  if (!Component) return null;
  return <Component {...props} />;
}
