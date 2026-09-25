import type { Transition, Variants } from "motion/react";

/** Shared `motion/react` presets so every overlay and disclosure animates alike. */

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeTransition: Transition = { duration: 0.2, ease: "easeOut" };

export const backdropTransition: Transition = { duration: 0.3 };

export const popVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const popTransition: Transition = {
  duration: 0.3,
  type: "spring",
  bounce: 0.2,
};

export const expandVariants: Variants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: "auto", opacity: 1 },
};

export const expandTransition: Transition = {
  duration: 0.3,
  ease: "easeInOut",
};

export const slideInTransition: Transition = {
  duration: 0.3,
  ease: "easeInOut",
};

export const rotateTransition: Transition = { duration: 0.2 };
