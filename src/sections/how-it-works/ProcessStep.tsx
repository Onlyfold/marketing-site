import { StepConnector } from "./StepConnector";
import type { ProcessStepContent } from "./how-it-works.content";

interface ProcessStepProps extends ProcessStepContent {
  readonly hasNext: boolean;
  /** Later cards sit under earlier ones so the connector arrow overlaps the next card. */
  readonly stackOrder: number;
}

export function ProcessStep({
  icon,
  title,
  description,
  hasNext,
  stackOrder,
}: ProcessStepProps) {
  return (
    <li
      data-reveal="step"
      style={{ zIndex: stackOrder }}
      className="relative flex min-w-[200px] flex-1 flex-col items-center rounded-xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-[10px] transition-[transform,background] duration-300 ease-base hover:-translate-y-[5px] hover:bg-white/10 md:max-w-60 below-md:w-full below-md:max-w-[400px]"
    >
      <span
        aria-hidden="true"
        className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-2xl text-core-navy shadow-icon-tile"
      >
        {icon}
      </span>
      <h3 className="mb-4 text-lg leading-[1.3] font-bold">{title}</h3>
      <p className="text-sm leading-normal opacity-80">{description}</p>
      {hasNext && <StepConnector />}
    </li>
  );
}
