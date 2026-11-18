export function VisualRepClose() {
  return (
    <div className="relative mx-auto w-full max-w-[480px] overflow-hidden rounded-2xl border border-white/90 bg-white text-core-navy shadow-[0_20px_50px_rgba(0,0,0,0.28)] ring-1 ring-black/5 select-none">
      {/* CRM Window Header Bar */}
      <div className="flex items-center justify-between border-b border-light-grey bg-surface px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-electric-blue text-[10px] font-black text-white">
            O
          </span>
          <p className="text-xs font-bold text-core-navy">
            Onlyfold CRM{" "}
            <span className="font-normal text-text-grey">/ Active Leads</span>
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-onlyfold-teal/60 bg-onlyfold-teal/25 px-2.5 py-0.5 text-[10px] font-bold text-core-navy">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-wa-header"
          />
          3 Qualified Today
        </span>
      </div>

      {/* Part 1: CRM Pipeline Table */}
      <div className="border-b border-light-grey">
        {/* Table Column Headers */}
        <div className="grid grid-cols-[1.4fr_0.75fr_0.85fr_0.85fr] gap-2 border-b border-light-grey bg-surface/60 px-4 py-2 text-[9.5px] font-bold tracking-wider text-text-grey uppercase">
          <span>Lead</span>
          <span>Budget</span>
          <span>Stage</span>
          <span className="text-right">Next Step</span>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-light-grey text-[11px]">
          {/* Active Selected Row: Rajesh Sharma */}
          <div className="grid grid-cols-[1.4fr_0.75fr_0.85fr_0.85fr] items-center gap-2 border-l-[3px] border-l-electric-blue bg-electric-blue/[0.06] px-3.5 py-2.5">
            <div className="min-w-0">
              <p className="truncate font-bold text-core-navy">Rajesh Sharma</p>
              <p className="truncate text-[9.5px] text-text-grey">
                Meta Ad • 3BHK
              </p>
            </div>
            <span className="font-bold text-core-navy">₹1.50 Cr</span>
            <span>
              <span className="inline-flex rounded-full border border-electric-blue/25 bg-electric-blue/10 px-2 py-0.5 text-[9.5px] font-bold text-electric-blue">
                Hot 98%
              </span>
            </span>
            <span className="text-right text-[10px] font-semibold text-electric-blue">
              4:00 PM Call
            </span>
          </div>

          {/* Row 2: Ananya Iyer */}
          <div className="grid grid-cols-[1.4fr_0.75fr_0.85fr_0.85fr] items-center gap-2 px-4 py-2 text-core-navy/85">
            <div className="min-w-0">
              <p className="truncate font-semibold text-core-navy">
                Ananya Iyer
              </p>
              <p className="truncate text-[9.5px] text-text-grey">
                Google Ad • 2BHK
              </p>
            </div>
            <span className="font-medium text-text-grey">₹95 L</span>
            <span>
              <span className="inline-flex rounded-full border border-agentic-purple/25 bg-agentic-purple/10 px-2 py-0.5 text-[9.5px] font-semibold text-agentic-purple">
                Qualified
              </span>
            </span>
            <span className="text-right text-[10px] text-text-grey">
              Tour Sent
            </span>
          </div>

          {/* Row 3: Karan Mehta */}
          <div className="grid grid-cols-[1.4fr_0.75fr_0.85fr_0.85fr] items-center gap-2 px-4 py-2 text-core-navy/85">
            <div className="min-w-0">
              <p className="truncate font-semibold text-core-navy">
                Karan Mehta
              </p>
              <p className="truncate text-[9.5px] text-text-grey">
                Website • Villa
              </p>
            </div>
            <span className="font-medium text-text-grey">₹2.40 Cr</span>
            <span>
              <span className="inline-flex rounded-full border border-wa-green/40 bg-wa-bubble-out px-2 py-0.5 text-[9.5px] font-bold text-wa-header">
                Won ✓
              </span>
            </span>
            <span className="text-right text-[10px] font-medium text-wa-header">
              Token Paid
            </span>
          </div>
        </div>
      </div>

      {/* Part 2: Selected Customer Details Drawer */}
      <div className="bg-surface/70 p-4">
        {/* Customer Profile Header + Direct Action */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-electric-blue text-xs font-black text-white shadow-sm">
              RS
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-xs font-extrabold text-core-navy">
                  Rajesh Sharma
                </p>
                <span className="rounded bg-wa-bubble-out px-1.5 py-0.5 text-[9px] font-bold text-wa-header">
                  WhatsApp Synced ✓
                </span>
              </div>
              <p className="text-[10.5px] text-text-grey">
                +91 98*** 42109 • Rep: Vikram M.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg bg-onlyfold-teal px-3 py-1.5 text-[11px] font-extrabold text-core-navy shadow-sm transition-transform hover:scale-[1.03]"
          >
            <span aria-hidden="true">📞</span>
            <span>Call Informed</span>
          </button>
        </div>

        {/* Customer Key Attributes Strip */}
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-light-grey bg-white px-2.5 py-2">
            <p className="text-[9px] font-semibold tracking-wide text-text-grey uppercase">
              Unit Interest
            </p>
            <p className="mt-0.5 truncate text-[11px] font-bold text-core-navy">
              3BHK #14B
            </p>
          </div>
          <div className="rounded-lg border border-light-grey bg-white px-2.5 py-2">
            <p className="text-[9px] font-semibold tracking-wide text-text-grey uppercase">
              Financing
            </p>
            <p className="mt-0.5 truncate text-[11px] font-bold text-core-navy">
              HDFC Approved
            </p>
          </div>
          <div className="rounded-lg border border-light-grey bg-white px-2.5 py-2">
            <p className="text-[9px] font-semibold tracking-wide text-text-grey uppercase">
              Timeline
            </p>
            <p className="mt-0.5 truncate text-[11px] font-bold text-wa-header">
              Book This Month
            </p>
          </div>
        </div>

        {/* Attached AI Pre-Call Brief (Full Conversation Context) */}
        <div className="mt-2.5 rounded-xl border border-electric-blue/15 bg-white p-3 shadow-xs">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-bold tracking-wide text-electric-blue uppercase">
              ✨ AI Pre-Call Brief (14 WhatsApp msgs)
            </span>
            <span className="text-[10px] font-semibold text-wa-action">
              View Transcript ↗
            </span>
          </div>
          <p className="mt-1.5 text-[11px] leading-relaxed text-text-grey">
            Self-use buyer confirmed{" "}
            <strong className="text-core-navy">₹1.50 Cr budget</strong>, viewed
            floorplan &amp; sample flat video. Ready to discuss corner unit
            pricing on the <strong className="text-core-navy">4 PM call</strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
