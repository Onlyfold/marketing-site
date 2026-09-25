import { useId } from "react";
import { cssVars } from "@/lib/css-vars";
import { formatNumber, formatPercent } from "@/lib/format-number";
import type { SliderDefinition, SliderUnit } from "./roi-calculator.types";

interface RangeSliderProps extends SliderDefinition {
  readonly value: number;
  readonly onChange: (value: number) => void;
}

const FORMATTERS: Record<SliderUnit, (value: number) => string> = {
  count: formatNumber,
  currency: formatNumber,
  percent: formatPercent,
};

/** Labelled range input showing its current value in a pill. */
export function RangeSlider({
  id,
  label,
  unit,
  min,
  max,
  step,
  value,
  onChange,
}: RangeSliderProps) {
  const inputId = useId();
  const display = FORMATTERS[unit](value);
  const progress = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <label htmlFor={inputId} className="text-sm font-medium text-white/80">
          {label}
        </label>
        <output
          htmlFor={inputId}
          className="rounded-sm bg-white/10 px-3 py-1 text-sm font-semibold"
        >
          {display}
        </output>
      </div>
      <input
        id={inputId}
        name={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={display}
        onChange={(event) => onChange(Number(event.target.value))}
        className="range-slider"
        style={cssVars({ "--progress": `${progress}%` })}
      />
    </div>
  );
}
