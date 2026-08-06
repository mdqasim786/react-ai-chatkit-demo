interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  unit?: string;
  onChange: (value: number) => void;
}

export default function Slider({
  label,
  value,
  min,
  max,
  unit = "px",
  onChange,
}: SliderProps) {
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-200">{label}</span>
        <span className="font-mono text-xs text-zinc-500 tabular-nums">
          {value}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="w-full"
        style={{
          background: `linear-gradient(to right, #8b5cf6 ${percent}%, #27272a ${percent}%)`,
        }}
      />
    </div>
  );
}
