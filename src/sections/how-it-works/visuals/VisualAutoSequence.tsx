export function VisualAutoSequence() {
  return (
    <div className="relative mx-auto flex w-full max-w-[440px] flex-col items-center py-4 select-none">
      {/* Soft Overlapping Ambient Circles (Editorial Depth) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-xs"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-2 bottom-4 -z-10 h-36 w-36 rounded-full bg-onlyfold-teal/15 blur-xs"
      />

      {/* ===== STEP 1: TRIGGER NODE (New lead inquires) ===== */}
      <div className="relative z-10 flex w-full max-w-[340px] items-center justify-center gap-3 rounded-2xl border-2 border-onlyfold-teal/85 bg-white px-5 py-3 text-core-navy shadow-[0_12px_28px_rgba(25,24,65,0.22)]">
        <svg
          className="h-5 w-5 shrink-0 text-onlyfold-teal"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
        <span className="text-[13px] font-bold tracking-tight text-core-navy sm:text-sm">
          New lead inquires
        </span>
      </div>

      {/* Dashed Vertical Connector 1 */}
      <svg
        aria-hidden="true"
        className="h-6 w-4 shrink-0 text-onlyfold-teal"
        viewBox="0 0 16 24"
        fill="none"
      >
        <line
          x1="8"
          y1="0"
          x2="8"
          y2="24"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>

      {/* ===== STEP 2: AI ANALYSIS NODE (AI analyze query) ===== */}
      <div className="relative z-10 flex items-center justify-center gap-2.5 rounded-xl border-2 border-onlyfold-teal/85 bg-white px-5 py-2 text-core-navy shadow-sm">
        <svg
          className="h-4.5 w-4.5 shrink-0 text-onlyfold-teal"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
        </svg>
        <span className="text-xs font-bold tracking-tight text-core-navy sm:text-[13px]">
          AI analyze query
        </span>
      </div>

      {/* Dashed Vertical Connector 2 */}
      <svg
        aria-hidden="true"
        className="h-6 w-4 shrink-0 text-onlyfold-teal"
        viewBox="0 0 16 24"
        fill="none"
      >
        <line
          x1="8"
          y1="0"
          x2="8"
          y2="24"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>

      {/* ===== STEP 3: ACTION NODE (Send WhatsApp) ===== */}
      <div className="relative z-10 flex w-full max-w-[400px] items-center justify-center gap-2.5 rounded-2xl border-2 border-onlyfold-teal bg-white px-4 py-3 text-core-navy shadow-[0_14px_32px_rgba(25,24,65,0.24)] sm:gap-3 sm:px-5">
        <svg
          className="h-5 w-5 shrink-0 text-wa-mic"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.25.7-1.45 1.34-2.01 1.42-.51.08-1.16.11-1.88-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5-4.38-5.15-4.58-.15-.2-1.23-1.64-1.23-3.13 0-1.49.78-2.22 1.06-2.52.28-.3.61-.38.81-.38.2 0 .41 0 .59.01.19.01.44-.07.69.53.25.6.86 2.1.94 2.25.08.15.13.33.03.53-.1.2-.15.33-.3.51-.15.18-.32.4-.45.54-.15.15-.31.31-.13.61.18.3.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.48 1.53.3.15.48.13.66-.08.18-.2.76-.88.96-1.18.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.23.58.35.07.13.07.73-.18 1.43z" />
        </svg>
        <span className="truncate text-xs font-bold tracking-tight text-core-navy sm:text-[13px]">
          Send WhatsApp: Interested in learning more?
        </span>
      </div>

      {/* ===== TREE BRANCH SPLIT ===== */}
      <div className="relative h-[80px] w-full max-w-[400px]">
        <svg
          aria-hidden="true"
          className="h-full w-full"
          viewBox="0 0 400 80"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Central Stem */}
          <line
            x1="200"
            y1="0"
            x2="200"
            y2="20"
            className="text-onlyfold-teal"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Left Branch (Grey Path with Arrow) */}
          <path
            d="M 200 20 C 190 42, 114 36, 88 72"
            className="text-white/60"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 82 66 L 88 74 L 95 68"
            className="text-white/60"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Branch (Teal Path with Arrow) */}
          <path
            d="M 200 20 C 210 42, 286 36, 312 72"
            className="text-onlyfold-teal"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M 305 68 L 312 74 L 318 66"
            className="text-onlyfold-teal"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Branch Pill: NOT QUALIFIED */}
        <span className="absolute top-[38%] left-[26%] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-light-grey bg-white/95 px-2.5 py-0.5 text-[9px] font-bold tracking-wider text-text-grey uppercase shadow-sm">
          NOT QUALIFIED
        </span>

        {/* Branch Pill: LEAD QUALIFIED */}
        <span className="absolute top-[38%] left-[74%] -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-onlyfold-teal bg-white px-2.5 py-0.5 text-[9.5px] font-extrabold tracking-wider text-core-navy uppercase shadow-md">
          LEAD QUALIFIED
        </span>
      </div>

      {/* ===== BOTTOM OUTCOME NODES ===== */}
      <div className="grid w-full max-w-[420px] grid-cols-2 items-center gap-3">
        {/* Left Outcome: Continue auto-nurture */}
        <div className="flex items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/95 px-3 py-3 text-center shadow-md backdrop-blur-xs">
          <svg
            className="h-4 w-4 shrink-0 text-text-grey"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
          </svg>
          <span className="text-[11.5px] font-bold text-core-navy/85 sm:text-xs">
            Continue auto-nurture
          </span>
        </div>

        {/* Right Outcome: Notify sales team */}
        <div className="flex items-center justify-center gap-2 rounded-xl bg-onlyfold-teal px-3 py-3 text-center shadow-[0_12px_28px_rgba(136,226,210,0.4)] ring-2 ring-white/90">
          <svg
            className="h-4.5 w-4.5 shrink-0 text-core-navy"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-[11.5px] font-black text-core-navy sm:text-xs">
            Notify sales team
          </span>
        </div>
      </div>
    </div>
  );
}
