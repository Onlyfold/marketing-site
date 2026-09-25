"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  useId,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
} from "react";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";
import {
  fadeTransition,
  fadeVariants,
  rotateTransition,
} from "@/lib/animations/motion-presets";
import type { NavMenu } from "./site-header.types";
import { NAV_LINK_CLASS } from "./nav-link-styles";

/** Desktop menu that opens on hover, click or keyboard and closes on Escape or blur. */
export function NavDropdown({ label, items }: NavMenu) {
  const [isOpen, setIsOpen] = useState(false);
  const isHovering = useRef(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  const close = () => setIsOpen(false);

  const handleMouseEnter = () => {
    isHovering.current = true;
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    close();
  };

  /* A click while hovering keeps the menu open; a keyboard activation toggles it. */
  const handleClick = () =>
    setIsOpen((open) => (isHovering.current ? true : !open));

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) close();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape" && isOpen) {
      event.stopPropagation();
      close();
      triggerRef.current?.focus();
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <button
        ref={triggerRef}
        type="button"
        className={NAV_LINK_CLASS}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={handleClick}
      >
        {label}
        <motion.span
          className="mt-0.5 inline-flex"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={rotateTransition}
        >
          <ChevronDownIcon />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={menuId}
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={fadeTransition}
            className="absolute top-full left-1/2 min-w-60 -translate-x-1/2 rounded-lg border border-light-grey bg-white p-4 shadow-dropdown"
          >
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-4 py-3 text-sm font-medium text-text-grey transition-all duration-200 ease-base hover:bg-electric-blue/5 hover:text-electric-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
