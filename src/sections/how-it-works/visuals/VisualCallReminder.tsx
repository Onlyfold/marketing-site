export function VisualCallReminder() {
  return (
    <div className="relative mx-auto flex w-full max-w-[440px] flex-col items-center py-6 select-none">
      {/* Soft Layered Ambient Glow Behind Phone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-onlyfold-teal/25 via-white/20 to-agentic-purple/25 blur-3xl"
      />

      {/* Decorative Soft Translucent Rings (Depth Cue) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-6 right-8 -z-10 h-44 w-44 rounded-full bg-white/10 blur-xs"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-6 -z-10 h-32 w-32 rounded-full bg-onlyfold-teal/15 blur-xs"
      />

      {/* ===== FLOATING TOP PUSH NOTIFICATION PILL (Overlapping Phone Top) ===== */}
      <div className="relative z-30 -mb-5 flex items-center pl-4">
        <div className="flex items-center gap-3 rounded-2xl border border-white/95 bg-white py-2.5 pr-11 pl-4 shadow-[0_18px_40px_rgba(25,24,65,0.22)] ring-1 ring-black/5">
          <div>
            <p className="text-xs font-extrabold tracking-tight text-core-navy">
              Call with Ranjana{" "}
              <span className="text-electric-blue">in 5m</span>
            </p>
            <p className="mt-0.5 text-[10px] font-medium text-text-grey">
              Scheduled follow-up • Tap to dial
            </p>
          </div>
        </div>

        {/* Oversized Circular Bell Badge Popping Out on Right Edge */}
        <div className="relative -ml-8 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-electric-blue to-agentic-purple text-white shadow-[0_10px_25px_rgba(7,8,238,0.4)] ring-4 ring-white">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-onlyfold-teal opacity-80" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-onlyfold-teal ring-2 ring-white" />
          </span>
        </div>
      </div>

      {/* ===== REALISTIC SMARTPHONE FRAME ===== */}
      <div className="relative z-10 w-[272px] rounded-[36px] border-[6px] border-core-navy bg-surface pt-3 pb-3.5 shadow-[0_28px_65px_rgba(25,24,65,0.4)] ring-1 ring-white/30 sm:w-[296px]">
        {/* Top Phone Speaker Notch & Status Bar */}
        <div
          aria-hidden="true"
          className="flex items-center justify-between px-5 pt-2.5 pb-2 text-[9px] font-bold text-core-navy/70"
        >
          <span>9:41</span>
          <span className="h-3.5 w-16 rounded-full bg-core-navy" />
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-core-navy/60" />
            <span className="h-2 w-3.5 rounded-[3px] border border-core-navy/60 bg-core-navy/70" />
          </div>
        </div>

        {/* Underlying Contact Screen Header Inside Phone */}
        <div className="mx-3 mt-1 rounded-2xl border border-light-grey bg-white px-3.5 py-3 shadow-xs">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-electric-blue/15 to-agentic-purple/20 text-[11px] font-black text-electric-blue ring-1 ring-electric-blue/15">
                SA
              </div>
              <div>
                <p className="text-[13px] font-extrabold text-core-navy">
                  Sk Arian Ali
                </p>
                <p className="text-[10.5px] font-medium text-text-grey">
                  9****** 254
                </p>
              </div>
            </div>
            <span className="rounded-full bg-wa-bubble-out px-2 py-0.5 text-[9px] font-bold text-wa-header">
              Warm Lead
            </span>
          </div>
        </div>

        {/* ===== OVERLAPPING FLOATING CALL REMINDER MODAL (Wider Than Phone) ===== */}
        <div className="relative z-20 -mx-5 mt-3 rounded-2xl border border-white/95 bg-white p-4 shadow-[0_24px_60px_rgba(25,24,65,0.22)] ring-1 ring-black/5 sm:-mx-8">
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-light-grey pb-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric-blue/15 to-agentic-purple/20 text-electric-blue">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="13" r="8" />
                  <path d="M12 9v4l2.5 1.5" />
                  <path d="M5 3L2 6" />
                  <path d="M22 6l-3-3" />
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-extrabold text-electric-blue">
                  Set new call reminder
                </p>
                <p className="text-[10.5px] font-medium text-text-grey">
                  With Sk Arian Ali
                </p>
              </div>
            </div>
            <span className="rounded-full border border-onlyfold-teal/60 bg-onlyfold-teal/25 px-2 py-0.5 text-[9px] font-bold text-core-navy">
              Auto-Sync
            </span>
          </div>

          {/* Calendar Month Navigation */}
          <div className="mt-3 flex items-center justify-between px-1">
            <p className="flex items-center gap-1 text-xs font-extrabold text-core-navy">
              <span>August 2026</span>
              <span aria-hidden="true" className="text-text-grey">
                ›
              </span>
            </p>
            <div className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-surface text-xs font-bold text-text-grey ring-1 ring-light-grey">
                ‹
              </span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-surface text-xs font-bold text-electric-blue ring-1 ring-light-grey">
                ›
              </span>
            </div>
          </div>

          {/* Weekday Labels */}
          <div className="mt-2.5 grid grid-cols-7 text-center text-[9px] font-bold tracking-wider text-text-grey/60">
            <span>SUN</span>
            <span>MON</span>
            <span>TUE</span>
            <span>WED</span>
            <span>THU</span>
            <span>FRI</span>
            <span>SAT</span>
          </div>

          {/* Clean Full-Month Calendar Grid (Day 2 Highlighted) */}
          <div className="mt-1.5 grid grid-cols-7 gap-y-1 text-center text-[11px] font-semibold">
            {/* Row 1 */}
            <span className="py-1 text-text-grey/30">31</span>
            <span className="py-1 text-core-navy/85">1</span>
            <div className="flex items-center justify-center">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-electric-blue to-agentic-purple text-[11px] font-extrabold text-white shadow-[0_4px_12px_rgba(7,8,238,0.4)]">
                2
              </span>
            </div>
            <span className="py-1 text-core-navy/85">3</span>
            <span className="py-1 text-core-navy/85">4</span>
            <span className="py-1 text-core-navy/85">5</span>
            <span className="py-1 text-core-navy/85">6</span>

            {/* Row 2 */}
            <span className="py-1 text-core-navy/85">7</span>
            <span className="py-1 text-core-navy/85">8</span>
            <span className="py-1 text-core-navy/85">9</span>
            <span className="py-1 text-core-navy/85">10</span>
            <span className="py-1 text-core-navy/85">11</span>
            <span className="py-1 text-core-navy/85">12</span>
            <span className="py-1 text-core-navy/85">13</span>

            {/* Row 3 */}
            <span className="py-1 text-core-navy/85">14</span>
            <span className="py-1 text-core-navy/85">15</span>
            <span className="py-1 text-core-navy/85">16</span>
            <span className="py-1 text-core-navy/85">17</span>
            <span className="py-1 text-core-navy/85">18</span>
            <span className="py-1 text-core-navy/85">19</span>
            <span className="py-1 text-core-navy/85">20</span>

            {/* Row 4 */}
            <span className="py-1 text-core-navy/85">21</span>
            <span className="py-1 text-core-navy/85">22</span>
            <span className="py-1 text-core-navy/85">23</span>
            <span className="py-1 text-core-navy/85">24</span>
            <span className="py-1 text-core-navy/85">25</span>
            <span className="py-1 text-core-navy/85">26</span>
            <span className="py-1 text-core-navy/85">27</span>

            {/* Row 5 */}
            <span className="py-1 text-core-navy/85">28</span>
            <span className="py-1 text-core-navy/85">29</span>
            <span className="py-1 text-core-navy/85">30</span>
            <span className="py-1 text-core-navy/85">31</span>
            <span className="py-1 text-text-grey/30">1</span>
            <span className="py-1 text-text-grey/30">2</span>
            <span className="py-1 text-text-grey/30">3</span>
          </div>

          {/* Time Picker & Confirm Bar (12 : 28 PM [✓]) */}
          <div className="mt-3.5 flex items-center justify-between gap-2 rounded-xl border border-light-grey bg-surface px-2.5 py-2">
            <div className="flex items-center gap-1.5 font-mono text-xs font-extrabold text-core-navy">
              <span className="rounded-md border border-light-grey bg-white px-2.5 py-1 shadow-xs">
                12
              </span>
              <span className="text-text-grey/60">:</span>
              <span className="rounded-md border border-light-grey bg-white px-2.5 py-1 shadow-xs">
                28
              </span>
              <span className="ml-1 rounded-md border border-light-grey bg-white px-2 py-1 font-sans text-[11px] font-bold text-core-navy shadow-xs">
                PM
              </span>
            </div>

            <button
              type="button"
              className="flex h-8 items-center gap-1.5 rounded-lg bg-onlyfold-teal px-3.5 text-xs font-extrabold text-core-navy shadow-sm transition-transform hover:scale-105"
            >
              <span>Save</span>
              <span aria-hidden="true">✓</span>
            </button>
          </div>
        </div>

        {/* Phone Bottom Home Indicator */}
        <div aria-hidden="true" className="mt-4 flex justify-center">
          <span className="h-1 w-24 rounded-full bg-core-navy/20" />
        </div>
      </div>
    </div>
  );
}
