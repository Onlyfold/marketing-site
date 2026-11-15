export function VisualCallReminder() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] py-3 select-none">
      {/* Soft Ambient Radial Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-electric-blue/20 via-agentic-purple/15 to-onlyfold-teal/15 blur-3xl"
      />

      {/* Floating Top-Right Push Notification Pill (Overlapping phone) */}
      <div className="absolute -top-1.5 right-2 z-30 flex items-center gap-2.5 rounded-full border border-onlyfold-teal/40 bg-core-navy/95 px-3.5 py-1.5 shadow-[0_8px_25px_rgba(7,8,238,0.35)] backdrop-blur-md">
        <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-electric-blue text-white shadow-sm">
          <svg
            className="h-3.5 w-3.5 text-onlyfold-teal"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-smart-orange opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-smart-orange" />
          </span>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-xs font-bold text-white">Call with Rajesh</p>
          <span className="rounded-full bg-smart-orange/20 px-2 py-0.5 text-[9px] font-extrabold tracking-wider text-smart-orange uppercase">
            In 5m
          </span>
        </div>
      </div>

      {/* Main Smartphone Shell */}
      <div className="rounded-3xl overflow-hidden border border-onlyfold-teal/20 bg-core-navy/95 p-4 shadow-2xl backdrop-blur-xl">
        {/* Underlying Contact Header Card */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-onlyfold-teal/40 bg-gradient-to-br from-core-navy to-electric-blue text-xs font-black text-onlyfold-teal shadow-inner">
              RS
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-bold text-white">Rajesh Sharma</p>
                <span
                  className="text-[11px] text-onlyfold-teal"
                  title="WhatsApp Verified"
                >
                  ✓
                </span>
              </div>
              <p className="text-[11px] text-white/60">
                📞 +91 98*** 42109 • ₹1.5 Cr Deal
              </p>
            </div>
          </div>
          <span className="rounded-full border border-onlyfold-teal/30 bg-onlyfold-teal/15 px-2.5 py-0.5 text-[10px] font-bold text-onlyfold-teal">
            Pre-qualified
          </span>
        </div>

        {/* Floating Call Reminder Modal (The Central Feature) */}
        <div className="mt-3.5 rounded-2xl border border-white/10 bg-midnight/90 p-4 shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-md">
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-agentic-purple/20 text-xs text-agentic-purple">
                ⏰
              </span>
              <div>
                <p className="text-xs font-bold text-white">
                  Set new call reminder
                </p>
                <p className="text-[10px] text-white/50">With Rajesh Sharma</p>
              </div>
            </div>
            <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/70">
              Auto-Sync ⚡
            </span>
          </div>

          {/* Mini Calendar Header */}
          <div className="mt-3 flex items-center justify-between px-1">
            <p className="text-xs font-bold tracking-wide text-white">
              August 2026
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-white/60">
              <span className="cursor-pointer hover:text-white">‹</span>
              <span className="cursor-pointer hover:text-white">›</span>
            </div>
          </div>

          {/* Weekday Legend */}
          <div className="mt-2.5 grid grid-cols-7 text-center text-[10px] font-semibold text-white/40">
            <span>SUN</span>
            <span>MON</span>
            <span>TUE</span>
            <span>WED</span>
            <span>THU</span>
            <span>FRI</span>
            <span>SAT</span>
          </div>

          {/* Calendar Grid */}
          <div className="mt-1.5 grid grid-cols-7 gap-y-1 text-center text-xs">
            {/* Week 1 */}
            <span className="py-1 text-white/30">26</span>
            <span className="py-1 text-white/30">27</span>
            <span className="py-1 text-white/30">28</span>
            <span className="py-1 text-white/30">29</span>
            <span className="py-1 text-white/30">30</span>
            <span className="py-1 text-white/30">31</span>
            <span className="py-1 text-white/80">1</span>

            {/* Week 2 */}
            <span className="py-1 text-white/80">2</span>
            <span className="py-1 text-white/80">3</span>
            <span className="py-1 text-white/80">4</span>
            <span className="py-1 text-white/80">5</span>
            <span className="py-1 text-white/80">6</span>
            <span className="py-1 text-white/80">7</span>
            <span className="py-1 text-white/80">8</span>

            {/* Week 3 - Day 14 Selected */}
            <span className="py-1 text-white/80">9</span>
            <span className="py-1 text-white/80">10</span>
            <span className="py-1 text-white/80">11</span>
            <span className="py-1 text-white/80">12</span>
            <span className="py-1 text-white/80">13</span>
            <div className="flex items-center justify-center">
              <span className="ring-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-electric-blue to-agentic-purple text-xs font-bold text-white shadow-[0_0_12px_rgba(136,226,210,0.6)] ring-onlyfold-teal">
                14
              </span>
            </div>
            <span className="py-1 text-white/80">15</span>
          </div>

          {/* Time Picker Bar & Confirm */}
          <div className="mt-3.5 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-2">
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-white">
              <span className="rounded bg-black/40 px-2 py-1 text-onlyfold-teal">
                04
              </span>
              <span className="text-white/40">:</span>
              <span className="rounded bg-black/40 px-2 py-1 text-onlyfold-teal">
                00
              </span>
              <span className="rounded ml-1 bg-electric-blue/30 px-2 py-1 font-sans text-[11px] text-white">
                PM
              </span>
            </div>

            <button
              type="button"
              className="flex h-7 items-center gap-1.5 rounded-lg bg-onlyfold-teal px-3 text-xs font-bold text-core-navy shadow-md transition-transform hover:scale-105"
            >
              <span>Set</span>
              <span aria-hidden="true">✓</span>
            </button>
          </div>

          {/* Quick Preset Chips */}
          <div className="mt-2.5 flex items-center justify-between gap-1 text-[10px]">
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-white/70">
              ⚡ In 15m
            </span>
            <span className="rounded-md border border-onlyfold-teal/30 bg-onlyfold-teal/10 px-2 py-0.5 font-semibold text-onlyfold-teal">
              Today 4 PM
            </span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-white/70">
              Tomorrow 11 AM
            </span>
          </div>
        </div>

        {/* Bottom Helper Bar */}
        <p className="mt-3 text-center text-[10px] text-white/50">
          Auto-pings rep on WhatsApp 5 mins before scheduled call
        </p>
      </div>
    </div>
  );
}
