import { MouseEvent, ReactNode } from "react";

// Design Types
export type BackgroundCirclesProps = {
  parallaxRef: React.RefObject<HTMLDivElement>;
};

// UI Types
export type ButtonProps = {
  className: string;
  href: string;
  onClick: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  children: ReactNode;
  px: string;
  white: boolean;
};
export type GeneratingProps = { className: string };
export type HeadingProps = {
  className: string;
  title: string;
  text: string;
  tag: string;
};
export type TaglineProps = { className: string; children: string };
