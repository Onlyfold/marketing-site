export function VisualAutoSequence() {
  return (
    <div className="relative mx-auto flex w-full max-w-[480px] flex-col items-center py-3 select-none">
      {/* Soft Overlapping Ambient Circles (Editorial Depth) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-6 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-xs"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-2 bottom-4 -z-10 h-32 w-32 rounded-full bg-onlyfold-teal/15 blur-xs"
      />

      {/* Top Context Pill: Lead & Active Cadence Status */}
      <div className="relative z-10 mb-3 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/30 bg-white/15 px-3.5 py-1 text-[10.5px] font-semibold text-white backdrop-blur-md">
        <span>Lead: Rajesh Sharma (Unresponsive)</span>
        <span aria-hidden="true" className="text-white/40">
          •
        </span>
        <span className="inline-flex items-center gap-1 font-bold text-onlyfold-teal">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-onlyfold-teal"
          />
          Cadence: Active
        </span>
      </div>

      {/* ===== NODE 1: D1 — BROCHURE & FLOORPLANS ===== */}
      <div className="relative z-10 flex w-full max-w-[390px] items-center gap-3 rounded-xl border-2 border-onlyfold-teal/80 bg-white px-4 py-2.5 text-core-navy shadow-[0_14px_34px_rgba(25,24,65,0.22)]">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-onlyfold-teal/70 bg-onlyfold-teal/25 text-[10px] font-extrabold text-core-navy">
          D1
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-xs font-extrabold text-core-navy">
              Brochure &amp; Floorplans
            </p>
            <span className="shrink-0 text-[10px] font-bold text-wa-header">
              Read ✓✓
            </span>
          </div>
          <p className="mt-0.5 truncate text-[10.5px] text-text-grey">
            Sent 5 mins post-enquiry with payment options.
          </p>
        </div>
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

      {/* ===== NODE 2: D2 — SAMPLE FLAT VIDEO TOUR (WhatsApp Action) ===== */}
      <div className="relative z-10 flex w-full max-w-[430px] items-center gap-3 rounded-xl border-2 border-onlyfold-teal bg-white px-4 py-3 text-core-navy shadow-[0_16px_38px_rgba(25,24,65,0.25)]">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-electric-blue/30 bg-electric-blue/10 text-[10px] font-extrabold text-electric-blue">
          D2
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-1.5 truncate text-xs font-extrabold text-core-navy">
              <svg
                className="h-3.5 w-3.5 shrink-0 text-wa-mic"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.12c-.25.7-1.45 1.34-2.01 1.42-.51.08-1.16.11-1.88-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5-4.38-5.15-4.58-.15-.2-1.23-1.64-1.23-3.13 0-1.49.78-2.22 1.06-2.52.28-.3.61-.38.81-.38.2 0 .41 0 .59.01.19.01.44-.07.69.53.25.6.86 2.1.94 2.25.08.15.13.33.03.53-.1.2-.15.33-.3.51-.15.18-.32.4-.45.54-.15.15-.31.31-.13.61.18.3.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.48 1.53.3.15.48.13.66-.08.18-.2.76-.88.96-1.18.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.23.58.35.07.13.07.73-.18 1.43z" />
              </svg>
              <span className="truncate">Sample Flat Video Tour</span>
            </p>
            <span className="shrink-0 text-[10px] font-bold text-wa-header">
              Delivered ✓✓
            </span>
          </div>
          <p className="mt-0.5 truncate text-[10.5px] text-text-grey">
            &quot;Take a look at how unit 14B looks inside...&quot;
          </p>
        </div>
      </div>

      {/* ===== TREE BRANCH SPLIT (Curved Left & Right Paths + Pills) ===== */}
      <div className="relative h-[86px] w-full">
        <svg
          aria-hidden="true"
          className="h-full w-full"
          viewBox="0 0 400 86"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Central Vertical Dashed Stem */}
          <line
            x1="200"
            y1="0"
            x2="200"
            y2="22"
            className="text-onlyfold-teal"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Left Curved Branch (NO REPLY -> Keep Nurturing) */}
          <path
            d="M 200 22 C 194 46, 114 36, 84 78"
            className="text-white/55"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 78 71 L 84 80 L 91 73"
            className="text-white/55"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Curved Branch (D4 REPLIED -> Pause Cadence & Fire Sales Alert) */}
          <path
            d="M 200 22 C 206 46, 260 36, 286 78"
            className="text-onlyfold-teal"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M 279 73 L 286 80 L 292 71"
            className="text-onlyfold-teal"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Branch Pill: NO REPLY */}
        <span className="absolute top-[40%] left-[25%] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-light-grey bg-white/95 px-2.5 py-0.5 text-[9.5px] font-bold tracking-wider text-text-grey uppercase shadow-sm">
          NO REPLY
        </span>

        {/* Branch Pill: D4 REPLIED */}
        <span className="absolute top-[40%] left-[70%] -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-onlyfold-teal bg-white px-2.5 py-0.5 text-[9.5px] font-extrabold tracking-wider text-core-navy uppercase shadow-md">
          D4 • REPLIED
        </span>
      </div>

      {/* ===== BOTTOM OUTCOME BRANCHES ===== */}
      <div className="grid w-full grid-cols-[0.82fr_1.18fr] items-stretch gap-3">
        {/* Left Outcome: Automated Multi-Day Nurture Continues */}
        <div className="flex flex-col justify-center rounded-xl border border-white/75 bg-white/90 px-3 py-3 text-left shadow-lg backdrop-blur-xs">
          <div className="flex items-center gap-1.5">
            <svg
              className="h-3.5 w-3.5 shrink-0 text-text-grey"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="17 1 21 5 17 9" />
              <path d="M3 11V9a4 4 0 0 1 4-4h14" />
              <polyline points="7 23 3 19 7 15" />
              <path d="M21 13v2a4 4 0 0 1-4 4H3" />
            </svg>
            <p className="text-[11px] font-extrabold text-core-navy/85">
              Auto Nurture
            </p>
          </div>
          <p className="mt-1 text-[10px] leading-snug text-text-grey">
            Sends Day 3–5 PDFs, offers &amp; reminders automatically.
          </p>
        </div>

        {/* Right Outcome: Highlighted Customer Reply + Auto-Pause & Alert */}
        <div className="flex flex-col justify-between rounded-xl bg-onlyfold-teal p-3 text-core-navy shadow-[0_16px_36px_rgba(136,226,210,0.4)] ring-2 ring-white/85">
          <div>
            <div className="flex items-center justify-between gap-1.5">
              <p className="text-xs font-black text-core-navy">
                Customer Replied!
              </p>
              <span className="shrink-0 text-[9.5px] font-bold text-core-navy/75">
                11:20 AM
              </span>
            </div>
            <p className="mt-1 text-[11px] leading-snug font-semibold text-core-navy">
              &quot;Yes, please call me today at 4:00 PM.&quot;
            </p>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 border-t border-core-navy/15 pt-1.5 text-[9.5px] font-extrabold text-core-navy">
            <span>⚡ Cadence Paused</span>
            <span aria-hidden="true">•</span>
            <span>Sales Alert Fired</span>
          </div>
        </div>
      </div>
    </div>
  );
}
