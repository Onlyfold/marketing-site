interface StatHighlightProps {
  readonly value: string;
  readonly label: string;
}

export function StatHighlight({ value, label }: StatHighlightProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <strong className="text-xl font-extrabold">{value}</strong>
      <span className="text-xs text-text-grey">{label}</span>
    </div>
  );
}
