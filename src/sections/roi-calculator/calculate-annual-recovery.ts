import type { SliderValues } from "./roi-calculator.types";

const MONTHS_PER_YEAR = 12;

/** Revenue recovered per year = leads/month × deal value × recovered share × 12. */
export function calculateAnnualRecovery({
  leadsPerMonth,
  averageDealValue,
  recoveryRate,
}: SliderValues): number {
  return (
    leadsPerMonth * averageDealValue * (recoveryRate / 100) * MONTHS_PER_YEAR
  );
}
