"use client";

import { useState } from "react";
import { RangeSlider } from "./RangeSlider";
import { RecoveryResult } from "./RecoveryResult";
import { calculateAnnualRecovery } from "./calculate-annual-recovery";
import type { roiCalculatorContent } from "./roi-calculator.content";
import type {
  SliderDefinition,
  SliderId,
  SliderValues,
} from "./roi-calculator.types";

interface RoiCalculatorFormProps {
  readonly sliders: readonly SliderDefinition[];
  readonly result: typeof roiCalculatorContent.result;
}

function defaultValues(sliders: readonly SliderDefinition[]): SliderValues {
  return Object.fromEntries(
    sliders.map((s) => [s.id, s.defaultValue]),
  ) as Record<SliderId, number>;
}

/** Dark card: sliders on the left, live result on the right (stacked on narrow screens). */
export function RoiCalculatorForm({ sliders, result }: RoiCalculatorFormProps) {
  const [values, setValues] = useState<SliderValues>(() =>
    defaultValues(sliders),
  );
  const annualRecovery = calculateAnnualRecovery(values);

  const update = (id: SliderId, value: number) =>
    setValues((current) => ({ ...current, [id]: value }));

  return (
    <div className="flex w-full max-w-[1000px] overflow-hidden rounded-2xl bg-midnight text-white shadow-calculator below-calc:flex-col">
      <div className="flex flex-1 flex-col gap-10 border-r border-white/10 p-12 below-calc:border-r-0 below-calc:border-b below-xs:px-6 below-xs:py-8">
        {sliders.map((slider) => (
          <RangeSlider
            key={slider.id}
            {...slider}
            value={values[slider.id]}
            onChange={(value) => update(slider.id, value)}
          />
        ))}
      </div>
      <RecoveryResult amount={annualRecovery} content={result} />
    </div>
  );
}
