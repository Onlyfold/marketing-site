export function VisualAiDiscovery() {
  return (
    <div className="relative mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl border border-white/10 bg-core-navy/95 shadow-2xl backdrop-blur-md">
      {/* WhatsApp Header */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-aqua-mint to-electric-blue text-xs font-bold text-white">
          OF
          <span className="absolute -right-0.5 -bottom-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white text-[9px] text-aqua-mint">
            ✓
          </span>
        </div>
        <div className="flex-1">
          <p className="flex items-center gap-1.5 text-xs font-bold text-white">
            Onlyfold Assistant
            <span className="rounded py-0.2 bg-aqua-mint/20 px-1 text-[9px] font-medium text-aqua-mint">
              AI Bot
            </span>
          </p>
          <p className="text-[10px] text-aqua-mint">Online • Instant reply</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="space-y-3 p-4 text-xs">
        {/* Outgoing AI Bubble */}
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 p-3 text-white/90">
          <p>
            Hi Rajesh! Thanks for your interest in Skyline Towers. Are you
            looking for a 2BHK or 3BHK?
          </p>
          <span className="mt-1 block text-right text-[9px] text-white/40">
            10:14 AM
          </span>
        </div>

        {/* Incoming User Bubble */}
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-aqua-mint/20 p-3 text-white">
          <p>
            Looking for 3BHK for self-use. Budget around 1.5 Cr, ready to book
            this month.
          </p>
          <span className="mt-1 flex items-center justify-end gap-1 text-[9px] text-aqua-mint">
            10:15 AM ✓✓
          </span>
        </div>

        {/* Outgoing AI Bubble */}
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 p-3 text-white/90">
          <p>
            Perfect! We have 2 prime corner units on the 14th floor in that
            range. Can our advisor call you at 4 PM today for a quick
            walkthrough?
          </p>
          <span className="mt-1 block text-right text-[9px] text-white/40">
            10:15 AM
          </span>
        </div>
      </div>

      {/* Auto-Qualification Badge Bar */}
      <div className="border-t border-white/10 bg-white/5 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-1.5 text-[11px]">
          <span className="rounded-md bg-agentic-purple/20 px-2 py-0.5 font-semibold text-agentic-purple">
            Intent: High 🔥
          </span>
          <span className="rounded-md bg-white/10 px-2 py-0.5 font-medium text-white/80">
            Budget: ₹1.5 Cr
          </span>
          <span className="rounded-md bg-aqua-mint/20 px-2 py-0.5 font-semibold text-aqua-mint">
            Ready to Close ✓
          </span>
        </div>
      </div>
    </div>
  );
}
