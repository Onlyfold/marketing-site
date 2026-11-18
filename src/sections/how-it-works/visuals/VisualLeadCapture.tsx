import Image from "next/image";

export function VisualLeadCapture() {
  return (
    <div className="relative mx-auto aspect-[460/380] w-full max-w-[460px] select-none">
      {/* Soft Ambient Glow — brand teal + electric blue */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-electric-blue/15 via-onlyfold-teal/12 to-transparent blur-3xl"
      />

      {/* SVG Canvas — Rays, Convergence Point, and Onlyfold Hub */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 460 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Brand Flow Gradient: Secondary Gradient 1 (Electric Blue → Agentic Purple → Onlyfold Teal) */}
          <linearGradient
            id="brandFlowGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#0708EE" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#AF4FED" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#88E2D2" stopOpacity="0.95" />
          </linearGradient>

          {/* Pulse Gradient: White → Onlyfold Teal → Electric Blue */}
          <linearGradient
            id="brandPulseGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#88E2D2" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0708EE" stopOpacity="0.9" />
          </linearGradient>

          {/* Hub Squircle — Core Navy chassis */}
          <linearGradient
            id="hubChassisGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#191841" />
            <stop offset="60%" stopColor="#141235" />
            <stop offset="100%" stopColor="#0a081a" />
          </linearGradient>

          {/* Hub Border — Teal → Agentic Purple → Electric Blue */}
          <linearGradient
            id="hubBorderGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#88E2D2" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#AF4FED" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0708EE" stopOpacity="0.8" />
          </linearGradient>

          {/* Glossy top sheen */}
          <linearGradient id="hubGlossGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Ambient Hub Aura — Electric Blue base with teal edge */}
          <radialGradient id="hubAuraGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0708EE" stopOpacity="0.3" />
            <stop offset="55%" stopColor="#5741DC" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#88E2D2" stopOpacity="0" />
          </radialGradient>

          {/* Convergence Intake Glow — Onlyfold Teal aura */}
          <radialGradient id="vortexGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#88E2D2" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#0708EE" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#191841" stopOpacity="0" />
          </radialGradient>

          {/* Intake Funnel Gradient */}
          <linearGradient
            id="intakeFunnelGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#88E2D2" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#AF4FED" stopOpacity="0.2" />
          </linearGradient>

          {/* Arrow Marker — Crisp Teal */}
          <marker
            id="leadArrow"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 1 2 L 8 5 L 1 8 z" fill="#88E2D2" />
          </marker>

          {/* Onlyfold Brand Fold Mark Gradients */}
          <linearGradient
            id="hub_paint0"
            x1="138.536"
            y1="1.44237e-08"
            x2="138.536"
            y2="189.575"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#87E0D1" />
            <stop offset="0.4839" stopColor="#AD4FED" />
            <stop offset="1" stopColor="#0707ED" />
          </linearGradient>
          <linearGradient
            id="hub_paint1"
            x1="51.9508"
            y1="11.8484"
            x2="57.8751"
            y2="201.423"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DC3EB6" />
            <stop offset="1" stopColor="#F8A35D" />
          </linearGradient>
        </defs>

        {/* Layer 1: Static Guide Rays — flowing directly onto squircle intake port (326, 161) */}
        <g stroke="url(#brandFlowGrad)" strokeWidth="1.6" opacity="0.85">
          <path d="M 310 73 C 312 105, 318 135, 326 161" />
          <path d="M 240 67 C 260 100, 295 135, 326 161" />
          <path d="M 159 77 C 200 105, 265 138, 326 161" />
          <path d="M 85 93 C 150 118, 245 145, 326 161" />
          <path d="M 70 160 C 150 162, 245 162, 326 161" />
          <path d="M 83 233 C 150 218, 245 185, 326 161" />
          <path d="M 135 290 C 190 265, 265 205, 326 161" />
          <path d="M 215 310 C 255 280, 298 220, 326 161" />
        </g>

        {/* Layer 2: Animated Pulse Beams */}
        <g
          stroke="url(#brandPulseGrad)"
          strokeWidth="2"
          strokeDasharray="8 22"
          className="animate-lead-dash"
        >
          <path d="M 310 73 C 312 105, 318 135, 326 161" />
          <path d="M 240 67 C 260 100, 295 135, 326 161" />
          <path d="M 159 77 C 200 105, 265 138, 326 161" />
          <path d="M 85 93 C 150 118, 245 145, 326 161" />
          <path d="M 70 160 C 150 162, 245 162, 326 161" />
          <path d="M 83 233 C 150 218, 245 185, 326 161" />
          <path d="M 135 290 C 190 265, 265 205, 326 161" />
          <path d="M 215 310 C 255 280, 298 220, 326 161" />
        </g>

        {/* ===== ONLYFOLD CRM HUB ===== */}
        <g>
          {/* Ambient Aura */}
          <circle
            cx="368"
            cy="203"
            r="80"
            fill="url(#vortexGlow)"
            className="animate-pulse"
            opacity="0.4"
          />

          {/* Outer concentric rim */}
          <rect
            x="305"
            y="140"
            width="126"
            height="126"
            rx="33"
            ry="33"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Hub Squircle Body */}
          <rect
            x="310"
            y="145"
            width="116"
            height="116"
            rx="28"
            ry="28"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="1.5"
            filter="drop-shadow(0 20px 45px rgba(0,0,0,0.25))"
          />

          {/* Onlyfold Fold Mark (Centered inside squircle) */}
          <g transform="translate(336, 171) scale(0.318)">
            <path
              d="M80.6302 2.90245C98.2799 2.90245 114.865 7.44935 129.29 15.4258C129.339 15.4508 129.389 15.474 129.439 15.4992C148.726 25.3866 161.574 44.4974 163.449 66.0905C165.45 89.1279 165.45 112.295 163.449 135.332C161.574 156.925 148.726 176.036 129.439 185.924C126.252 187.557 122.959 188.896 119.599 189.953C119.996 189.958 120.394 189.963 120.792 189.963C121.272 189.963 121.751 189.96 122.23 189.952C149.808 189.53 174.934 174.14 188.488 150.118C196.752 135.471 201.455 118.548 201.422 100.522C201.32 44.8713 156.362 -0.000301019 100.711 1.51453e-09C92.2725 1.51453e-09 84.0787 1.04393 76.2458 2.99876C77.6998 2.93675 79.1609 2.90245 80.6302 2.90245Z"
              fill="url(#hub_paint0)"
            />
            <path
              d="M120.792 198.528C103.082 198.528 86.4432 193.951 71.984 185.924C52.6964 176.037 39.8489 156.926 37.9735 135.333C35.9727 112.295 35.9727 89.128 37.9735 66.0909C39.8489 44.4981 52.6964 25.387 71.984 15.4996C75.1637 13.8696 78.449 12.5334 81.8 11.478C81.4105 11.4732 81.0213 11.4675 80.6305 11.4675C80.1486 11.4675 79.6673 11.4711 79.1871 11.4786C51.604 11.9025 26.4734 27.2969 12.9232 51.3262C4.67106 65.9603 -0.0272737 82.8644 0.000119116 100.869C0.0853079 156.525 45.0556 201.423 100.712 201.423C109.137 201.423 117.317 200.382 125.139 198.434C123.698 198.495 122.249 198.528 120.792 198.528Z"
              fill="url(#hub_paint1)"
            />
          </g>

          {/* Integrated Convergence Intake Port & Diode on Squircle at (326, 161) */}
          <circle
            cx="326"
            cy="161"
            r="14"
            fill="url(#vortexGlow)"
            className="animate-pulse"
          />
          <circle
            cx="326"
            cy="161"
            r="7"
            fill="none"
            stroke="#0708EE"
            strokeWidth="1.5"
            opacity="0.8"
          />
          <circle
            cx="326"
            cy="161"
            r="3.5"
            fill="#0708EE"
            className="drop-shadow-[0_0_8px_rgba(136,226,210,0.95)]"
          />
          <circle cx="326" cy="161" r="1.4" fill="#ffffff" />

          {/* Directional Inflow Arrow entering into the hub */}
          <path
            d="M 322 157 L 332 167 M 332 167 L 328 167 M 332 167 L 332 163"
            stroke="#0708EE"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />

          {/* Hub Label */}
          <text
            x="368"
            y="282"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="12"
            fontWeight="800"
            letterSpacing="-0.2px"
          >
            Onlyfold CRM
          </text>

          {/* Hub Status Pill */}
          <g transform="translate(323, 292)">
            <rect
              width="90"
              height="20"
              rx="10"
              fill="#FFFFFF"
              fillOpacity="0.95"
              stroke="#E2E8F0"
              strokeWidth="1"
            />
            <circle cx="12" cy="10" r="2.5" fill="#0708EE" />
            <text
              x="50"
              y="13.5"
              textAnchor="middle"
              fill="#191841"
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.6px"
            >
              UNIFIED HUB
            </text>
          </g>
        </g>
      </svg>

      {/* ===== LEAD SOURCE TILES ===== */}

      {/* 1. Instagram */}
      <div
        title="Instagram"
        aria-label="Instagram"
        style={{ left: "61.95%", top: "6.05%" }}
        className="absolute z-10 flex h-[50px] w-[50px] items-center justify-center rounded-2xl border border-white/90 bg-white shadow-[0_6px_20px_rgba(7,8,238,0.2)] transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_28px_rgba(136,226,210,0.35)]"
      >
        <Image
          src="/images/lead-sources/instagram.png"
          alt="Instagram"
          width={30}
          height={30}
          className="rounded h-[30px] w-[30px] object-contain"
        />
      </div>

      {/* 2. Meta Ads */}
      <div
        title="Meta Ads"
        aria-label="Meta Ads"
        style={{ left: "44.56%", top: "4.47%" }}
        className="absolute z-10 flex h-[50px] w-[50px] items-center justify-center rounded-2xl border border-white/90 bg-white shadow-[0_6px_20px_rgba(7,8,238,0.2)] transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_28px_rgba(136,226,210,0.35)]"
      >
        <Image
          src="/images/lead-sources/facebook.svg"
          alt="Meta"
          width={30}
          height={30}
          className="h-[30px] w-[30px] shrink-0"
        />
      </div>

      {/* 3. Google Ads */}
      <div
        title="Google Ads"
        aria-label="Google Ads"
        style={{ left: "25.43%", top: "7.10%" }}
        className="absolute z-10 flex h-[50px] w-[50px] items-center justify-center rounded-2xl border border-white/90 bg-white shadow-[0_6px_20px_rgba(7,8,238,0.2)] transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_28px_rgba(136,226,210,0.35)]"
      >
        <Image
          src="/images/lead-sources/google.svg"
          alt="Google"
          width={30}
          height={30}
          className="h-[30px] w-[30px] shrink-0"
        />
      </div>

      {/* 4. Web Forms */}
      <div
        title="Web Forms"
        aria-label="Web Forms"
        style={{ left: "7.60%", top: "14.47%" }}
        className="absolute z-10 flex h-[50px] w-[50px] items-center justify-center rounded-2xl border border-white/90 bg-white shadow-[0_6px_20px_rgba(7,8,238,0.2)] transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_28px_rgba(136,226,210,0.35)]"
      >
        <Image
          src="/images/lead-sources/web-form.svg"
          alt="Forms"
          width={30}
          height={30}
          className="h-[30px] w-[30px] shrink-0"
        />
      </div>

      {/* 5. Websites */}
      <div
        title="Websites"
        aria-label="Websites"
        style={{ left: "4.34%", top: "35.52%" }}
        className="absolute z-10 flex h-[50px] w-[50px] items-center justify-center rounded-2xl border border-white/90 bg-white shadow-[0_6px_20px_rgba(7,8,238,0.2)] transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_28px_rgba(136,226,210,0.35)]"
      >
        <Image
          src="/images/lead-sources/website.svg"
          alt="Website"
          width={30}
          height={30}
          className="h-[30px] w-[30px] shrink-0"
        />
      </div>

      {/* 6. Missed Calls */}
      <div
        title="Missed Calls"
        aria-label="Missed Calls"
        style={{ left: "7.17%", top: "56.57%" }}
        className="absolute z-10 flex h-[50px] w-[50px] items-center justify-center rounded-2xl border border-white/90 bg-white shadow-[0_6px_20px_rgba(7,8,238,0.2)] transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_28px_rgba(136,226,210,0.35)]"
      >
        <Image
          src="/images/lead-sources/phone-call.svg"
          alt="Phone"
          width={30}
          height={30}
          className="h-[30px] w-[30px] shrink-0"
        />
      </div>

      {/* 7. Lead Portals */}
      <div
        title="Lead Portals"
        aria-label="Lead Portals"
        style={{ left: "19.56%", top: "73.68%" }}
        className="absolute z-10 flex h-[50px] w-[50px] items-center justify-center rounded-2xl border border-white/90 bg-white shadow-[0_6px_20px_rgba(7,8,238,0.2)] transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_28px_rgba(136,226,210,0.35)]"
      >
        <Image
          src="/images/lead-sources/justdial.png"
          alt="Justdial"
          width={36}
          height={30}
          className="h-[28px] w-[34px] object-contain"
        />
      </div>

      {/* 8. Google Sheets */}
      <div
        title="Google Sheets"
        aria-label="Google Sheets"
        style={{ left: "38.04%", top: "80.26%" }}
        className="absolute z-10 flex h-[50px] w-[50px] items-center justify-center rounded-2xl border border-white/90 bg-white shadow-[0_6px_20px_rgba(7,8,238,0.2)] transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_28px_rgba(136,226,210,0.35)]"
      >
        <svg
          width={30}
          height={30}
          viewBox="0 0 24 24"
          fill="none"
          className="h-[30px] w-[30px] shrink-0"
          aria-hidden="true"
        >
          <path
            d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"
            fill="#0F9D58"
          />
          <path d="M14 3v6h7" fill="#87CEAC" />
          <path
            d="M7 13h10v2H7v-2Zm0-3h10v2H7v-2Zm0 6h7v2H7v-2Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
}
