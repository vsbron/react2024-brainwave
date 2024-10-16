import { MouseEvent, ReactNode } from "react";

// Component Types
export type CompanyLogosProps = { className: string };
export type IconsProps = { className: string };
export type SectionProps = {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: boolean;
  children: ReactNode;
};
export type NotificationProps = { className: string; title: string };

// Design Types
export type BackgroundCirclesProps = {
  parallaxRef?: React.RefObject<HTMLDivElement>;
};

// UI Types
export type ButtonProps = {
  className?: string;
  href?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  children: ReactNode;
  px?: string;
  white?: boolean;
};
export type GeneratingProps = { className: string };
export type HeadingProps = {
  className?: string;
  title: string;
  text?: string;
  tag?: string;
};
export type TaglineProps = { className?: string; children: string };

// Utils Types
export type AnimationGSAPProps = {
  target: string;
  animationProps?: {
    scale?: number;
    opacity?: number;
    x?: number;
    y?: number;
    duration?: number;
    ease?: string;
    delay?: number;
  };
  scrollProps?: any;
};
