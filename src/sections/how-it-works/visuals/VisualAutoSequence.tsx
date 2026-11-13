export function VisualAutoSequence() {
  return (
    <div className="relative mx-auto w-full max-w-[400px] rounded-2xl border border-white/10 bg-core-navy/95 p-5 shadow-2xl backdrop-blur-md">
      {/* Sequence Header */}
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <p className="text-xs font-bold text-white">
            Smart Follow-up Cadence
          </p>
          <p className="text-[10px] text-white/60">
            Lead: Rajesh Sharma (Unresponsive)
          </p>
        </div>
        <span className="rounded-full bg-agentic-purple/20 px-2 py-0.5 text-[10px] font-semibold text-agentic-purple">
          Cadence: Active
        </span>
      </div>

      {/* Timeline Steps */}
      <div className="relative space-y-3.5 before:absolute before:top-2 before:bottom-2 before:left-[15px] before:w-0.5 before:bg-white/10">
        {/* Step 1 */}
        <div className="relative flex items-start gap-3">
          <div className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-aqua-mint/50 bg-aqua-mint/20 text-[10px] font-bold text-aqua-mint">
            D1
          </div>
          <div className="flex-1 rounded-xl border border-white/5 bg-white/5 p-2.5 text-xs text-white/80">
            <div className="flex items-center justify-between font-semibold text-white">
              <span>Brochure & Floorplans</span>
              <span className="text-[10px] text-aqua-mint">Read ✓✓</span>
            </div>
            <p className="mt-1 text-[11px] text-white/60">
              Sent 5 mins post-enquiry with payment options.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative flex items-start gap-3">
          <div className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-agentic-purple/50 bg-agentic-purple/20 text-[10px] font-bold text-agentic-purple">
            D2
          </div>
          <div className="flex-1 rounded-xl border border-white/5 bg-white/5 p-2.5 text-xs text-white/80">
            <div className="flex items-center justify-between font-semibold text-white">
              <span>Sample Flat Video Tour</span>
              <span className="text-[10px] text-aqua-mint">Delivered ✓✓</span>
            </div>
            <p className="mt-1 text-[11px] text-white/60">
              &quot;Take a look at how unit 14B looks inside...&quot;
            </p>
          </div>
        </div>

        {/* Step 3 (The Trigger) */}
        <div className="relative flex items-start gap-3">
          <div className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-fusion-gold/50 bg-fusion-gold/20 text-[10px] font-bold text-fusion-gold">
            D4
          </div>
          <div className="flex-1 rounded-xl border border-fusion-gold/30 bg-fusion-gold/10 p-2.5 text-xs text-white">
            <div className="flex items-center justify-between font-bold text-fusion-gold">
              <span>Customer Replied!</span>
              <span className="text-[10px]">11:20 AM</span>
            </div>
            <p className="mt-1 text-[11px] text-white/90">
              &quot;Yes, please call me today at 4:00 PM.&quot;
            </p>
            <div className="mt-2 flex items-center gap-1.5 text-[10px] font-medium text-aqua-mint">
              <span>⚡ Cadence Paused Automatically</span>
              <span>•</span>
              <span>Sales Alert Fired</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
