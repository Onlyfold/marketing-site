"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId } from "react";
import { PlusIcon } from "@/components/icons/PlusIcon";
import { cn } from "@/lib/cn";
import {
  expandTransition,
  expandVariants,
  rotateTransition,
} from "@/lib/animations/motion-presets";
import type { FaqItemContent } from "./faq.content";

interface FaqAccordionItemProps extends FaqItemContent {
  readonly isOpen: boolean;
  readonly onToggle: () => void;
}

export function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <li
      className={cn(
        "overflow-hidden rounded-lg border border-light-grey bg-white transition-[border-color,box-shadow] duration-300 ease-base",
        isOpen && "border-electric-blue/20 shadow-faq-open",
      )}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex min-h-12 w-full items-center justify-between p-6 text-left text-lg font-semibold text-core-navy below-md:p-5 below-md:text-base"
        >
          {question}
          <motion.span
            className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-electric-blue/5 text-electric-blue"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={rotateTransition}
          >
            <PlusIcon />
          </motion.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            variants={expandVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            transition={expandTransition}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-base leading-[1.6] text-text-grey below-md:px-5 below-md:pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
