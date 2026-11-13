export function VisualHotLeadAlert() {
  return (
    <div className="relative mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl border border-white/10 bg-core-navy/95 shadow-2xl backdrop-blur-md">
      {/* WhatsApp Rep Interface Bar */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-smart-orange to-agentic-purple text-xs font-bold text-white">
          OF
        </div>
        <div className="flex-1">
          <p className="flex items-center gap-1.5 text-xs font-bold text-white">
            Onlyfold AI Sales Bot
            <span className="rounded py-0.2 bg-smart-orange/20 px-1 text-[9px] font-semibold text-smart-orange">
              Verified
            </span>
          </p>
          <p className="text-[10px] text-white/60">
            Delivered to Rep&apos;s WhatsApp
          </p>
        </div>
        <span className="rounded-full bg-smart-orange/20 px-2 py-0.5 text-[10px] font-bold text-smart-orange">
          HOT LEAD 🔥
        </span>
      </div>

      {/* WhatsApp Incoming Alert Bubble */}
      <div className="p-4">
        <div className="rounded-2xl rounded-tl-sm border border-smart-orange/30 bg-white/10 p-4 text-xs text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="font-bold tracking-wider text-smart-orange uppercase">
              🔥 HOT BUYING INTENT
            </span>
            <span className="text-[10px] text-white/50">Just Now</span>
          </div>

          <div className="mt-3 space-y-1.5">
            <p className="text-sm font-bold text-white">Rajesh Sharma</p>
            <p className="text-[11px] text-white/70">📞 +91 98*** 42109</p>
            <div className="mt-2 space-y-1 rounded-lg bg-black/20 p-2.5 text-[11px] text-white/80">
              <p>
                <strong className="text-white">Requirement:</strong> 3BHK Luxury
                Corner Flat
              </p>
              <p>
                <strong className="text-white">Budget:</strong> ₹1.50 Crore
              </p>
              <p>
                <strong className="text-white">Status:</strong> Pre-qualified
                &amp; requested call at 4 PM
              </p>
              <p>
                <strong className="text-white">Loan:</strong> HDFC Pre-approved
              </p>
            </div>
          </div>

          {/* 1-Tap Action Buttons directly on WhatsApp */}
          <div className="mt-3.5 grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              className="flex items-center justify-center gap-1.5 rounded-lg bg-aqua-mint px-3 py-2 text-center text-xs font-bold text-core-navy shadow-md transition-transform hover:scale-[1.02]"
            >
              <span>📞 Call Now</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-white/20"
            >
              <span>💬 Open Chat</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
