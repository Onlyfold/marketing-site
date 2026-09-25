/** Two soft radial glows behind the industries grid. Decorative only. */
export function AmbientGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-[60%] left-1/2 z-[1] flex h-[600px] w-full max-w-[1000px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
    >
      <div className="absolute h-[600px] w-[600px] -translate-x-[150px] bg-[radial-gradient(circle,var(--color-glow-purple)_4%,rgb(255_255_255/0)_70%)] opacity-80 blur-[200px]" />
      <div className="absolute h-[600px] w-[600px] translate-x-[150px] bg-[radial-gradient(circle,var(--color-glow-blue)_4%,rgb(255_255_255/0)_70%)] opacity-80 blur-[200px]" />
    </div>
  );
}
