export function VisualHotLeadAlert() {
  return (
    <div className="relative mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl border border-white/90 bg-wa-wallpaper text-wa-ink shadow-[0_20px_50px_rgba(0,0,0,0.28)] ring-1 ring-black/10 select-none">
      {/* Authentic WhatsApp Top Bar */}
      <div className="flex items-center gap-2.5 bg-wa-header px-3 py-2.5 text-white shadow-sm">
        {/* Back Arrow */}
        <svg
          className="h-4 w-4 shrink-0 text-white/90"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>

        {/* Business Avatar */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-core-navy ring-1 ring-white/30">
          OF
        </div>

        {/* Business Name + Inline Official Verified Badge */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <p className="truncate text-[13px] font-semibold text-white">
              Onlyfold AI Alerts
            </p>
            <svg
              className="h-3.5 w-3.5 shrink-0 text-wa-green"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2L14.59 4.26L18 3.9L19.04 7.16L22 8.95L21.2 12.27L22.6 15.38L20.13 17.73L20.13 21.15L16.77 21.75L14.43 24.22L11.32 22.82L8 23.62L6.21 20.66L2.95 19.62L3.31 16.21L1.05 13.62L2.95 10.77L2.59 7.36L5.85 6.32L7.64 3.36L10.96 4.16L12 2Z" />
              <path
                d="M10.5 15.5L7.5 12.5L8.91 11.09L10.5 12.67L15.09 8.09L16.5 9.5L10.5 15.5Z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <p className="text-[10px] text-white/75">Official Business Account</p>
        </div>

        {/* WhatsApp Top Action Icons */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-3 text-white/85"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </div>
      </div>

      {/* WhatsApp Chat Wallpaper & Native Template Message */}
      <div className="space-y-3 bg-whatsapp-wallpaper px-3.5 pt-3 pb-2.5">
        {/* Date Pill */}
        <div className="flex justify-center">
          <span className="rounded-md bg-white/95 px-2.5 py-0.5 text-[10px] font-medium text-wa-muted shadow-[0_1px_1px_rgba(17,27,33,0.1)]">
            Today
          </span>
        </div>

        {/* Incoming WhatsApp Business Template Bubble with Authentic Tail */}
        <div className="relative ml-2 max-w-[92%]">
          {/* Pointed Top-Left Speech Tail */}
          <svg
            aria-hidden="true"
            viewBox="0 0 8 13"
            width="8"
            height="13"
            className="absolute top-0 -left-[7px] text-white"
            fill="currentColor"
          >
            <path d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z" />
          </svg>

          <div className="overflow-hidden rounded-lg rounded-tl-none bg-white shadow-[0_1px_1.5px_rgba(17,27,33,0.16)]">
            {/* Native WhatsApp Formatted Text Body */}
            <div className="px-3 pt-2.5 pb-2 text-[12px] leading-[1.45] text-wa-ink">
              <p className="font-bold text-wa-ink">
                🔥 Hot Lead Alert — Ready to Buy
              </p>

              <div className="mt-2 space-y-0.5">
                <p>
                  <span className="font-semibold">Name:</span> Rajesh Sharma
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +91 98*** 42109
                </p>
                <p>
                  <span className="font-semibold">Requirement:</span> 3BHK
                  Luxury Corner Flat
                </p>
                <p>
                  <span className="font-semibold">Budget:</span> ₹1.50 Crore
                </p>
                <p>
                  <span className="font-semibold">Loan:</span> HDFC Pre-approved
                </p>
              </div>

              <p className="mt-2">
                <span className="font-semibold">💬 Buyer Note:</span>{" "}
                &quot;Please call me today at 4:00 PM for a quick
                walkthrough.&quot;
              </p>

              {/* Template Footer + Right-Aligned Timestamp */}
              <div className="mt-2 flex items-end justify-between gap-2">
                <span className="text-[10.5px] text-wa-muted">
                  Auto-qualified by Onlyfold AI
                </span>
                <span className="shrink-0 text-[10px] text-wa-muted">
                  11:21 AM
                </span>
              </div>
            </div>

            {/* Authentic Stacked WhatsApp Interactive CTA Buttons */}
            <div className="border-t border-wa-divider">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 py-2.5 text-[12px] font-semibold text-wa-action transition-colors hover:bg-surface"
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                <span>Call Rajesh Now</span>
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 border-t border-wa-divider py-2.5 text-[12px] font-semibold text-wa-action transition-colors hover:bg-surface"
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>Open Chat in WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Authentic WhatsApp Bottom Composer Bar */}
      <div
        aria-hidden="true"
        className="flex items-center gap-2 bg-whatsapp-wallpaper px-2.5 pt-0.5 pb-2.5"
      >
        <div className="flex flex-1 items-center gap-2 rounded-pill bg-white px-3 py-1.5 shadow-[0_1px_1.5px_rgba(17,27,33,0.12)]">
          {/* Emoji Icon */}
          <svg
            className="h-4 w-4 shrink-0 text-wa-muted"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
            <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
          </svg>
          <span className="flex-1 text-xs text-wa-muted">Message</span>
          {/* Paperclip Icon */}
          <svg
            className="h-4 w-4 shrink-0 text-wa-muted"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
          </svg>
          {/* Camera Icon */}
          <svg
            className="h-4 w-4 shrink-0 text-wa-muted"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
        {/* WhatsApp Green Voice Mic Button */}
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-wa-mic text-white shadow-sm">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a1 1 0 1 0-2 0 3 3 0 0 1-6 0 1 1 0 1 0-2 0 5 5 0 0 0 4 4.9V19H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-3.1A5 5 0 0 0 17 11z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
