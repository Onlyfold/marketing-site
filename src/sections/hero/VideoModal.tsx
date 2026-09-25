"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";
import { CloseIcon } from "@/components/icons/CloseIcon";
import {
  backdropTransition,
  fadeVariants,
  popTransition,
  popVariants,
} from "@/lib/animations/motion-presets";

interface VideoModalProps {
  readonly isOpen: boolean;
  readonly youtubeId: string;
  readonly title: string;
  readonly onClose: () => void;
}

/** Accessible YouTube lightbox: Escape closes, focus moves to the close button and back. */
export function VideoModal({
  isOpen,
  youtubeId,
  title,
  onClose,
}: VideoModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={backdropTransition}
            className="absolute inset-0 bg-black/80 backdrop-blur-[5px]"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            variants={popVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={popTransition}
            className="relative z-101 w-full max-w-[1000px] overflow-hidden rounded-lg bg-black shadow-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close video"
              className="absolute top-4 right-4 z-102 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors duration-200 ease-base hover:bg-white/20"
            >
              <CloseIcon />
            </button>
            <div className="relative h-0 pb-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 h-full w-full"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
