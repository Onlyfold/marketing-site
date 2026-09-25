"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { slideInTransition } from "@/lib/animations/motion-presets";
import type { NavAction, NavItem } from "./site-header.types";

interface MobileNavProps {
  readonly id: string;
  readonly isOpen: boolean;
  readonly items: readonly NavItem[];
  readonly actions: readonly NavAction[];
  readonly onNavigate: () => void;
}

const GROUP_CLASS =
  "border-b border-light-grey pb-4 text-xl font-semibold text-core-navy";

/** Full-screen panel that slides in from the right. Inert while closed. */
export function MobileNav({
  id,
  isOpen,
  items,
  actions,
  onNavigate,
}: MobileNavProps) {
  return (
    <motion.div
      id={id}
      className="fixed top-0 right-0 z-40 flex h-screen w-full flex-col gap-8 overflow-y-auto bg-white px-8 pt-24 pb-8"
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={slideInTransition}
      inert={!isOpen}
      aria-hidden={!isOpen}
    >
      <nav aria-label="Mobile" className="flex flex-col gap-6">
        {items.map((item) =>
          item.kind === "menu" ? (
            <div key={item.id} className={GROUP_CLASS}>
              <span>{item.label}</span>
              <ul className="mt-4 flex flex-col gap-3">
                {item.items.map((link) => (
                  <li
                    key={link.label}
                    className="text-base font-normal text-text-grey"
                  >
                    <Link href={link.href} onClick={onNavigate}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className={GROUP_CLASS}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          ),
        )}
      </nav>

      <div className="mt-auto flex flex-col gap-4">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant={action.variant}
            href={action.href}
            onClick={onNavigate}
          >
            {action.label}
          </Button>
        ))}
      </div>
    </motion.div>
  );
}
