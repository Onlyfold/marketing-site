export function VisualRepClose() {
  return (
    <div className="relative mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl border border-white/10 bg-core-navy/95 p-5 shadow-2xl backdrop-blur-md">
      {/* Top Header */}
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-aqua-mint text-xs font-bold text-core-navy">
            🏆
          </div>
          <div>
            <p className="text-xs font-bold text-white">
              Deal Stage: Closed Won
            </p>
            <p className="text-[10px] text-white/60">Rep: Vikram Malhotra</p>
          </div>
        </div>
        <span className="rounded-full bg-aqua-mint/20 px-2 py-0.5 text-[10px] font-bold text-aqua-mint">
          ₹1.5 Cr Closed
        </span>
      </div>

      {/* Deal Metrics Card */}
      <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-white/90">
        <div className="flex items-center justify-between">
          <span className="text-white/60">Prospect</span>
          <span className="font-bold text-white">Rajesh Sharma</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/60">Property Unit</span>
          <span className="font-medium text-white">Skyline Towers #14B</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/60">AI Qualification Score</span>
          <span className="font-bold text-aqua-mint">98% Match</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/60">Time to Close</span>
          <span className="font-medium text-white">1 Call (14 mins)</span>
        </div>

        <div className="border-t border-white/10 pt-3">
          <div className="flex items-center justify-between rounded-lg bg-aqua-mint/15 px-3 py-2 text-aqua-mint">
            <span className="font-bold">Booking Deposit Received</span>
            <span className="text-[11px] font-semibold">₹1,00,000 ✓</span>
          </div>
        </div>
      </div>

      {/* Bottom Summary Pill */}
      <p className="mt-3 text-center text-[11px] text-white/60">
        Zero CRM typing • Chat transcript &amp; receipt auto-archived
      </p>
    </div>
  );
}
