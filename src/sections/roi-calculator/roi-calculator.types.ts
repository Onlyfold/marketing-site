export type SliderId = "leadsPerMonth" | "averageDealValue" | "recoveryRate";

export type SliderUnit = "count" | "currency" | "percent";

export interface SliderDefinition {
  readonly id: SliderId;
  readonly label: string;
  readonly unit: SliderUnit;
  readonly min: number;
  readonly max: number;
  readonly step: number;
  readonly defaultValue: number;
}

export type SliderValues = Readonly<Record<SliderId, number>>;
