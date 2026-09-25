/** Animated arrow pointing to the next step. Decorative only. */
export function StepConnector() {
  return (
    <span
      aria-hidden="true"
      className="absolute top-1/2 -right-6 z-10 animate-connector-x text-2xl text-white/50 below-md:top-auto below-md:right-auto below-md:-bottom-7 below-md:left-1/2 below-md:animate-connector-y"
    >
      →
    </span>
  );
}
