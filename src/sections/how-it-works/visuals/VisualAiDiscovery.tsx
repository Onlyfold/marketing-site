export function VisualAiDiscovery() {
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

        {/* Contact Info + Inline Official Verified Badge */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <p className="truncate text-[13px] font-semibold text-white">
              Skyline Towers AI
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
          <p className="text-[10px] text-white/75">online</p>
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

      {/* WhatsApp Chat Wallpaper & Messages */}
      <div className="space-y-2.5 bg-whatsapp-wallpaper px-4 py-3 text-[12px] leading-[1.45]">
        {/* Date Pill */}
        <div className="flex justify-center">
          <span className="rounded-md bg-white/95 px-2.5 py-0.5 text-[10px] font-medium text-wa-muted shadow-[0_1px_1px_rgba(17,27,33,0.1)]">
            Today
          </span>
        </div>

        {/* Incoming AI Assistant Bubble (White + Left Tail) */}
        <div className="relative ml-1 max-w-[85%]">
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
          <div className="rounded-lg rounded-tl-none bg-white px-3 py-2 text-wa-ink shadow-[0_1px_1.5px_rgba(17,27,33,0.15)]">
            <p>
              Hi Rajesh! Thanks for your interest in Skyline Towers. Are you
              looking for a 2BHK or 3BHK?
            </p>
            <span className="mt-1 block text-right text-[9.5px] text-wa-muted">
              10:14 AM
            </span>
          </div>
        </div>

        {/* Outgoing Lead Reply Bubble (WhatsApp Green + Right Tail + Blue Ticks) */}
        <div className="relative mr-1 ml-auto max-w-[85%]">
          <svg
            aria-hidden="true"
            viewBox="0 0 8 13"
            width="8"
            height="13"
            className="absolute top-0 -right-[7px] text-wa-bubble-out"
            fill="currentColor"
          >
            <path d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z" />
          </svg>
          <div className="rounded-lg rounded-tr-none bg-wa-bubble-out px-3 py-2 text-wa-ink shadow-[0_1px_1.5px_rgba(17,27,33,0.15)]">
            <p>
              Looking for 3BHK for self-use. Budget around 1.5 Cr, ready to book
              this month.
            </p>
            <span className="mt-1 flex items-center justify-end gap-1 text-[9.5px] text-wa-muted">
              <span>10:15 AM</span>
              <span
                aria-hidden="true"
                className="text-[11px] font-bold tracking-tighter text-wa-tick"
              >
                ✓✓
              </span>
            </span>
          </div>
        </div>

        {/* Incoming AI Assistant Bubble (White + Left Tail) */}
        <div className="relative ml-1 max-w-[85%]">
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
          <div className="rounded-lg rounded-tl-none bg-white px-3 py-2 text-wa-ink shadow-[0_1px_1.5px_rgba(17,27,33,0.15)]">
            <p>
              Perfect! We have 2 prime corner units on the 14th floor in that
              range. Can our advisor call you at 4 PM today for a quick
              walkthrough?
            </p>
            <span className="mt-1 block text-right text-[9.5px] text-wa-muted">
              10:15 AM
            </span>
          </div>
        </div>
      </div>

      {/* Authentic WhatsApp Bottom Composer Bar */}
      <div
        aria-hidden="true"
        className="flex items-center gap-2 bg-whatsapp-wallpaper px-2.5 pt-0.5 pb-2.5"
      >
        <div className="flex flex-1 items-center gap-2 rounded-pill bg-white px-3 py-1.5 shadow-[0_1px_1.5px_rgba(17,27,33,0.12)]">
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
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-wa-mic text-white shadow-sm">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a1 1 0 1 0-2 0 3 3 0 0 1-6 0 1 1 0 1 0-2 0 5 5 0 0 0 4 4.9V19H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-3.1A5 5 0 0 0 17 11z" />
          </svg>
        </div>
      </div>

      {/* Auto-Qualification Strip (Synced to CRM) */}
      <div className="border-t border-wa-divider bg-white px-3.5 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-1.5 text-[11px]">
          <span className="rounded-md border border-agentic-purple/25 bg-agentic-purple/10 px-2 py-0.5 font-semibold text-agentic-purple">
            Intent: High 🔥
          </span>
          <span className="rounded-md border border-light-grey bg-surface px-2 py-0.5 font-medium text-text-grey">
            Budget: ₹1.5 Cr
          </span>
          <span className="rounded-md border border-wa-green/40 bg-wa-bubble-out px-2 py-0.5 font-bold text-wa-header">
            Ready to Close ✓
          </span>
        </div>
      </div>
    </div>
  );
}
