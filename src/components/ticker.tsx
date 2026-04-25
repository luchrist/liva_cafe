type TickerProps = {
  words: string[];
  separator?: string;
};

export function Ticker({ words, separator = "·" }: TickerProps) {
  const row = (
    <span className="flex items-center gap-10 whitespace-nowrap pr-10">
      {words.map((w, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="font-display italic text-[clamp(3rem,8vw,7rem)] leading-none tracking-[-0.03em]">
            {w}
          </span>
          <span
            aria-hidden
            className="text-[clamp(3rem,8vw,7rem)] leading-none text-[var(--color-matcha)]/55"
          >
            {separator}
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      className="overflow-hidden border-y border-[var(--color-hairline)] py-8"
      aria-hidden
    >
      <div className="flex w-max ticker">
        {row}
        {row}
      </div>
    </div>
  );
}
