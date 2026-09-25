import { cn } from "@/lib/cn";

interface MenuToggleButtonProps {
  readonly isOpen: boolean;
  readonly controls: string;
  readonly onClick: () => void;
}

const LINE_CLASS =
  "h-0.5 w-full rounded-[2px] bg-core-navy transition-all duration-300 ease-base";

/** Hamburger that morphs into a close icon. Hidden on large screens. */
export function MenuToggleButton({
  isOpen,
  controls,
  onClick,
}: MenuToggleButtonProps) {
  return (
    <button
      type="button"
      className="z-60 flex h-[18px] w-6 flex-col justify-between lg:hidden"
      aria-expanded={isOpen}
      aria-controls={controls}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      onClick={onClick}
    >
      <span
        className={cn(
          LINE_CLASS,
          isOpen && "[transform:rotate(45deg)_translate(5px,6px)]",
        )}
      />
      <span className={cn(LINE_CLASS, isOpen && "opacity-0")} />
      <span
        className={cn(
          LINE_CLASS,
          isOpen && "[transform:rotate(-45deg)_translate(5px,-6px)]",
        )}
      />
    </button>
  );
}
