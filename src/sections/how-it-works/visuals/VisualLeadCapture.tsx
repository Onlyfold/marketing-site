export function VisualLeadCapture() {
  return (
    <div className="relative mx-auto aspect-[433/393] w-full max-w-[440px] select-none">
      {/* Soft Ambient Glow behind the whole visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-electric-blue/12 via-onlyfold-teal/10 to-transparent blur-3xl"
      />

      {/* SVG Canvas — 100% Vector recreation of the reference graphic */}
      <svg
        className="h-full w-full select-none"
        viewBox="0 0 433 393"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Unified CRM lead capture visual: 7 lead sources connecting into Onlyfold CRM"
      >
        <defs>
          {/* Drop Shadows */}
          <filter id="nodeShadow" x="-30%" y="-30%" width="170%" height="170%">
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="7"
              floodColor="#0708EE"
              floodOpacity="0.14"
            />
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="3"
              floodColor="#000000"
              floodOpacity="0.08"
            />
          </filter>

          <filter
            id="squircleShadow"
            x="-30%"
            y="-20%"
            width="160%"
            height="160%"
          >
            <feDropShadow
              dx="0"
              dy="16"
              stdDeviation="16"
              floodColor="#000000"
              floodOpacity="0.32"
            />
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="8"
              floodColor="#0708EE"
              floodOpacity="0.25"
            />
          </filter>

          <filter id="pillShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="4"
              floodColor="#000000"
              floodOpacity="0.08"
            />
          </filter>

          {/* Line Gradients for each curve: Teal/Sky to Electric Blue */}
          <linearGradient
            id="lineGradInstagram"
            x1="248"
            y1="92"
            x2="304"
            y2="250"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#88E2D2" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0708EE" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient
            id="lineGradGoogle"
            x1="155"
            y1="74"
            x2="306"
            y2="255"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#88E2D2" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0708EE" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient
            id="lineGradSheets"
            x1="83"
            y1="80"
            x2="308"
            y2="260"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#88E2D2" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#3B82F6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0708EE" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient
            id="lineGradCode"
            x1="44"
            y1="160"
            x2="310"
            y2="265"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#2563EB" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0708EE" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient
            id="lineGradPhone"
            x1="58"
            y1="241"
            x2="312"
            y2="270"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#88E2D2" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0708EE" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient
            id="lineGradJustdial"
            x1="113"
            y1="304"
            x2="314"
            y2="275"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#88E2D2" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#38BDF8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0708EE" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient
            id="lineGradFacebook"
            x1="200"
            y1="319"
            x2="316"
            y2="279"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#88E2D2" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0708EE" stopOpacity="0.95" />
          </linearGradient>

          {/* Wire Soft Glow Filter */}
          <filter id="wireBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>

          {/* Photon Energy Halo Gradient */}
          <radialGradient id="photonHaloGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#88E2D2" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#38BDF8" stopOpacity="0.6" />
            <stop offset="85%" stopColor="#0708EE" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0708EE" stopOpacity="0" />
          </radialGradient>

          {/* Intake Vortex Aura at Squircle Entry */}
          <radialGradient id="intakeAuraGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#88E2D2" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0708EE" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#191841" stopOpacity="0" />
          </radialGradient>

          {/* Squircle Chassis: Deep Core Navy to Midnight Black */}
          <linearGradient
            id="squircleChassisGrad"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#23214A" />
            <stop offset="25%" stopColor="#1B193C" />
            <stop offset="65%" stopColor="#13112E" />
            <stop offset="100%" stopColor="#0C0A1C" />
          </linearGradient>

          {/* Squircle Border Rim */}
          <linearGradient
            id="squircleBorderGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#88E2D2" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#AF4FED" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0708EE" stopOpacity="0.5" />
          </linearGradient>

          {/* Squircle Top Specular Sheen */}
          <linearGradient
            id="squircleGlossGrad"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Ambient Squircle Aura */}
          <radialGradient id="squircleAuraGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0708EE" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#5741DC" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#88E2D2" stopOpacity="0" />
          </radialGradient>

          {/* Official Instagram Sunset Radial Gradient */}
          <radialGradient id="instaRadial" cx="30%" cy="105%" r="110%">
            <stop offset="0%" stopColor="#FEE411" />
            <stop offset="10%" stopColor="#FEDB16" />
            <stop offset="35%" stopColor="#F85641" />
            <stop offset="65%" stopColor="#D92E7F" />
            <stop offset="85%" stopColor="#8A3AB9" />
            <stop offset="100%" stopColor="#4C68D7" />
          </radialGradient>

          {/* Onlyfold Brand Fold Mark Gradients */}
          <linearGradient
            id="hub_paint0"
            x1="138.536"
            y1="0"
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

        {/* ======================================================== */}
        {/* LAYER 1A: Soft Conduit Ambient Underglow                 */}
        {/* ======================================================== */}
        <g
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.22"
          filter="url(#wireBlur)"
        >
          <path
            d="M 248 92 C 252 175, 275 230, 304 250"
            stroke="url(#lineGradInstagram)"
          />
          <path
            d="M 155 74 C 205 135, 260 215, 306 255"
            stroke="url(#lineGradGoogle)"
          />
          <path
            d="M 83 80 C 145 125, 230 215, 308 260"
            stroke="url(#lineGradSheets)"
          />
          <path
            d="M 44 160 C 120 165, 225 228, 310 265"
            stroke="url(#lineGradCode)"
          />
          <path
            d="M 58 241 C 135 232, 225 255, 312 270"
            stroke="url(#lineGradPhone)"
          />
          <path
            d="M 113 304 C 170 285, 240 275, 314 275"
            stroke="url(#lineGradJustdial)"
          />
          <path
            d="M 200 319 C 245 312, 280 292, 316 279"
            stroke="url(#lineGradFacebook)"
          />
        </g>

        {/* ======================================================== */}
        {/* LAYER 1B: Crisp Vector Connecting Conduits              */}
        {/* Converging into the lower-left flank of the Squircle     */}
        {/* ======================================================== */}
        <g strokeWidth="1.8" strokeLinecap="round" opacity="0.9">
          {/* 1. Instagram */}
          <path
            d="M 248 92 C 252 175, 275 230, 304 250"
            stroke="url(#lineGradInstagram)"
          />
          {/* 2. Google */}
          <path
            d="M 155 74 C 205 135, 260 215, 306 255"
            stroke="url(#lineGradGoogle)"
          />
          {/* 3. Google Sheets */}
          <path
            d="M 83 80 C 145 125, 230 215, 308 260"
            stroke="url(#lineGradSheets)"
          />
          {/* 4. Code / API */}
          <path
            d="M 44 160 C 120 165, 225 228, 310 265"
            stroke="url(#lineGradCode)"
          />
          {/* 5. Phone Call */}
          <path
            d="M 58 241 C 135 232, 225 255, 312 270"
            stroke="url(#lineGradPhone)"
          />
          {/* 6. Justdial */}
          <path
            d="M 113 304 C 170 285, 240 275, 314 275"
            stroke="url(#lineGradJustdial)"
          />
          {/* 7. Facebook */}
          <path
            d="M 200 319 C 245 312, 280 292, 316 279"
            stroke="url(#lineGradFacebook)"
          />
        </g>

        {/* ======================================================== */}
        {/* LAYER 2: Luminous Data Photons (Smooth Gliding Flow)     */}
        {/* Replaces white dashes with organic, glowing energy orbs  */}
        {/* ======================================================== */}
        <g className="data-photons">
          {/* Packet 1: Instagram */}
          <g>
            <circle r="6" fill="url(#photonHaloGrad)" />
            <circle r="2.2" fill="#FFFFFF" />
            <animateMotion
              path="M 248 92 C 252 175, 275 230, 304 250"
              dur="2.8s"
              begin="-0.4s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.4 0 0.2 1"
            />
            <animate
              attributeName="opacity"
              values="0; 1; 1; 0"
              keyTimes="0; 0.15; 0.85; 1"
              dur="2.8s"
              begin="-0.4s"
              repeatCount="indefinite"
            />
          </g>

          {/* Packet 2: Google */}
          <g>
            <circle r="6" fill="url(#photonHaloGrad)" />
            <circle r="2.2" fill="#FFFFFF" />
            <animateMotion
              path="M 155 74 C 205 135, 260 215, 306 255"
              dur="3.1s"
              begin="-1.3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.4 0 0.2 1"
            />
            <animate
              attributeName="opacity"
              values="0; 1; 1; 0"
              keyTimes="0; 0.15; 0.85; 1"
              dur="3.1s"
              begin="-1.3s"
              repeatCount="indefinite"
            />
          </g>

          {/* Packet 3A: Google Sheets (Stream A) */}
          <g>
            <circle r="6" fill="url(#photonHaloGrad)" />
            <circle r="2.2" fill="#FFFFFF" />
            <animateMotion
              path="M 83 80 C 145 125, 230 215, 308 260"
              dur="3.4s"
              begin="-0.6s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.4 0 0.2 1"
            />
            <animate
              attributeName="opacity"
              values="0; 1; 1; 0"
              keyTimes="0; 0.15; 0.85; 1"
              dur="3.4s"
              begin="-0.6s"
              repeatCount="indefinite"
            />
          </g>

          {/* Packet 3B: Google Sheets (Stream B) */}
          <g>
            <circle r="5" fill="url(#photonHaloGrad)" />
            <circle r="2" fill="#FFFFFF" />
            <animateMotion
              path="M 83 80 C 145 125, 230 215, 308 260"
              dur="3.4s"
              begin="-2.3s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.4 0 0.2 1"
            />
            <animate
              attributeName="opacity"
              values="0; 1; 1; 0"
              keyTimes="0; 0.15; 0.85; 1"
              dur="3.4s"
              begin="-2.3s"
              repeatCount="indefinite"
            />
          </g>

          {/* Packet 4A: Code / API (Stream A) */}
          <g>
            <circle r="6" fill="url(#photonHaloGrad)" />
            <circle r="2.2" fill="#FFFFFF" />
            <animateMotion
              path="M 44 160 C 120 165, 225 228, 310 265"
              dur="3.5s"
              begin="-1.0s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.4 0 0.2 1"
            />
            <animate
              attributeName="opacity"
              values="0; 1; 1; 0"
              keyTimes="0; 0.15; 0.85; 1"
              dur="3.5s"
              begin="-1.0s"
              repeatCount="indefinite"
            />
          </g>

          {/* Packet 4B: Code / API (Stream B) */}
          <g>
            <circle r="5" fill="url(#photonHaloGrad)" />
            <circle r="2" fill="#FFFFFF" />
            <animateMotion
              path="M 44 160 C 120 165, 225 228, 310 265"
              dur="3.5s"
              begin="-2.7s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.4 0 0.2 1"
            />
            <animate
              attributeName="opacity"
              values="0; 1; 1; 0"
              keyTimes="0; 0.15; 0.85; 1"
              dur="3.5s"
              begin="-2.7s"
              repeatCount="indefinite"
            />
          </g>

          {/* Packet 5: Phone Call */}
          <g>
            <circle r="6" fill="url(#photonHaloGrad)" />
            <circle r="2.2" fill="#FFFFFF" />
            <animateMotion
              path="M 58 241 C 135 232, 225 255, 312 270"
              dur="3.2s"
              begin="-1.8s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.4 0 0.2 1"
            />
            <animate
              attributeName="opacity"
              values="0; 1; 1; 0"
              keyTimes="0; 0.15; 0.85; 1"
              dur="3.2s"
              begin="-1.8s"
              repeatCount="indefinite"
            />
          </g>

          {/* Packet 6: Justdial */}
          <g>
            <circle r="6" fill="url(#photonHaloGrad)" />
            <circle r="2.2" fill="#FFFFFF" />
            <animateMotion
              path="M 113 304 C 170 285, 240 275, 314 275"
              dur="2.9s"
              begin="-2.2s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.4 0 0.2 1"
            />
            <animate
              attributeName="opacity"
              values="0; 1; 1; 0"
              keyTimes="0; 0.15; 0.85; 1"
              dur="2.9s"
              begin="-2.2s"
              repeatCount="indefinite"
            />
          </g>

          {/* Packet 7: Facebook */}
          <g>
            <circle r="6" fill="url(#photonHaloGrad)" />
            <circle r="2.2" fill="#FFFFFF" />
            <animateMotion
              path="M 200 319 C 245 312, 280 292, 316 279"
              dur="2.5s"
              begin="-1.1s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.4 0 0.2 1"
            />
            <animate
              attributeName="opacity"
              values="0; 1; 1; 0"
              keyTimes="0; 0.15; 0.85; 1"
              dur="2.5s"
              begin="-1.1s"
              repeatCount="indefinite"
            />
          </g>

          {/* Convergence Intake Aura at Squircle Entry */}
          <circle
            cx="308"
            cy="265"
            r="12"
            fill="url(#intakeAuraGrad)"
            opacity="0.5"
            className="animate-pulse"
          />
        </g>

        {/* ======================================================== */}
        {/* LAYER 3: 7 Lead Source Circular Badges                  */}
        {/* ======================================================== */}

        {/* 1. Google Sheets (cx=83, cy=80) */}
        <g
          className="cursor-pointer transition-transform duration-200 hover:scale-105"
          style={{ transformOrigin: "83px 80px" }}
        >
          <title>Google Sheets</title>
          <circle
            cx="83"
            cy="80"
            r="24.5"
            fill="#FFFFFF"
            filter="url(#nodeShadow)"
          />
          <g transform="translate(71, 68)">
            <path
              d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"
              fill="#0F9D58"
            />
            <path d="M14 3v6h7" fill="#87CEAC" />
            <path
              d="M7 13h10v2H7v-2Zm0-3h10v2H7v-2Zm0 6h7v2H7v-2Z"
              fill="#FFFFFF"
            />
          </g>
        </g>

        {/* 2. Google (cx=155, cy=74) */}
        <g
          className="cursor-pointer transition-transform duration-200 hover:scale-105"
          style={{ transformOrigin: "155px 74px" }}
        >
          <title>Google</title>
          <circle
            cx="155"
            cy="74"
            r="24.5"
            fill="#FFFFFF"
            filter="url(#nodeShadow)"
          />
          <g transform="translate(143, 62)">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </g>
        </g>

        {/* 3. Instagram (cx=248, cy=92) */}
        <g
          className="cursor-pointer transition-transform duration-200 hover:scale-105"
          style={{ transformOrigin: "248px 92px" }}
        >
          <title>Instagram</title>
          <circle
            cx="248"
            cy="92"
            r="24.5"
            fill="#FFFFFF"
            filter="url(#nodeShadow)"
          />
          {/* Authentic Circular Instagram Gradient Badge */}
          <circle cx="248" cy="92" r="14" fill="url(#instaRadial)" />
          {/* Centered Camera Outline */}
          <rect
            x="240.5"
            y="84.5"
            width="15"
            height="15"
            rx="4.2"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.6"
          />
          {/* Camera Lens */}
          <circle
            cx="248"
            cy="92"
            r="3.6"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.6"
          />
          {/* Flash Dot */}
          <circle cx="252" cy="88" r="0.9" fill="#FFFFFF" />
        </g>

        {/* 4. Code / API (cx=44, cy=160) */}
        <g
          className="cursor-pointer transition-transform duration-200 hover:scale-105"
          style={{ transformOrigin: "44px 160px" }}
        >
          <title>API &amp; Webhooks</title>
          <circle
            cx="44"
            cy="160"
            r="24.5"
            fill="#FFFFFF"
            filter="url(#nodeShadow)"
          />
          <g stroke="#9333EA" strokeWidth="2.5" strokeLinecap="round">
            {/* Left bracket < */}
            <path
              d="M 38 153 L 31 160 L 38 167"
              fill="none"
              strokeLinejoin="round"
            />
            {/* Slash / */}
            <line x1="46" y1="151" x2="42" y2="169" />
            {/* Right bracket > */}
            <path
              d="M 50 153 L 57 160 L 50 167"
              fill="none"
              strokeLinejoin="round"
            />
          </g>
        </g>

        {/* 5. Phone Call (cx=58, cy=241) */}
        <g
          className="cursor-pointer transition-transform duration-200 hover:scale-105"
          style={{ transformOrigin: "58px 241px" }}
        >
          <title>Phone Call</title>
          <circle
            cx="58"
            cy="241"
            r="24.5"
            fill="#FFFFFF"
            filter="url(#nodeShadow)"
          />
          <g transform="translate(45, 228) scale(0.85)">
            <path
              d="M2.6875 4.6145C2.6875 3.75213 3.38763 3.052 4.25 3.052H7.61406C8.37784 3.05235 9.02943 3.60482 9.15469 4.35825L10.3109 11.2879C10.4244 11.9655 10.0819 12.6376 9.46719 12.9442L7.04844 14.152C8.80096 18.495 12.2445 21.9385 16.5875 23.6911L17.7969 21.2723C18.1033 20.6582 18.7746 20.3159 19.4516 20.4286L26.3812 21.5848C27.1347 21.7101 27.6871 22.3617 27.6875 23.1254V26.4895C27.6875 27.3519 26.9874 28.052 26.125 28.052H23C11.7813 28.052 2.6875 18.9583 2.6875 6.177V4.6145V4.6145"
              fill="#3B82F6"
            />
          </g>
        </g>

        {/* 6. Justdial (cx=113, cy=304) */}
        <g
          className="cursor-pointer transition-transform duration-200 hover:scale-105"
          style={{ transformOrigin: "113px 304px" }}
        >
          <title>Justdial</title>
          <circle
            cx="113"
            cy="304"
            r="24.5"
            fill="#FFFFFF"
            filter="url(#nodeShadow)"
          />
          <image
            href="/images/lead-sources/justdial.png"
            x="97"
            y="291"
            width="32"
            height="26"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>

        {/* 7. Facebook (cx=200, cy=319) */}
        <g
          className="cursor-pointer transition-transform duration-200 hover:scale-105"
          style={{ transformOrigin: "200px 319px" }}
        >
          <title>Facebook</title>
          <circle
            cx="200"
            cy="319"
            r="24.5"
            fill="#FFFFFF"
            filter="url(#nodeShadow)"
          />
          {/* Official Facebook Circular Badge & 'f' Glyph */}
          <g transform="translate(186, 305)">
            <circle cx="14" cy="14" r="14" fill="#1877F2" />
            <path
              d="M15.42 28v-9.52h3.2l.48-3.72h-3.68V12.38c0-1.08.3-1.81 1.85-1.81h1.97V7.24c-.34-.05-1.52-.15-2.88-.15-2.85 0-4.81 1.74-4.81 4.94v2.73H9.28v3.72h3.25V28h3.89z"
              fill="#FFFFFF"
            />
          </g>
        </g>

        {/* ======================================================== */}
        {/* LAYER 4: Onlyfold CRM App Squircle                      */}
        {/* ======================================================== */}
        <g>
          {/* Ambient Aura behind Squircle */}
          <circle
            cx="354"
            cy="221"
            r="85"
            fill="url(#squircleAuraGrad)"
            className="animate-pulse"
            opacity="0.35"
          />

          {/* Squircle Chassis */}
          <rect
            x="296"
            y="163"
            width="116"
            height="116"
            rx="28"
            fill="url(#squircleChassisGrad)"
            stroke="url(#squircleBorderGrad)"
            strokeWidth="1.2"
            filter="url(#squircleShadow)"
          />

          {/* Top Gloss Sheen */}
          <path
            d="M 324 164 L 384 164 C 404 164, 411 171, 411 191 L 411 193 C 380 185, 327 185, 297 193 L 297 191 C 297 171, 304 164, 324 164 Z"
            fill="url(#squircleGlossGrad)"
            opacity="0.6"
          />

          {/* Centered Onlyfold Brand Fold Mark */}
          <g transform="translate(322, 189) scale(0.318)">
            <path
              d="M80.6302 2.90245C98.2799 2.90245 114.865 7.44935 129.29 15.4258C129.339 15.4508 129.389 15.474 129.439 15.4992C148.726 25.3866 161.574 44.4974 163.449 66.0905C165.45 89.1279 165.45 112.295 163.449 135.332C161.574 156.925 148.726 176.036 129.439 185.924C126.252 187.557 122.959 188.896 119.599 189.953C119.996 189.958 120.394 189.963 120.792 189.963C121.272 189.963 121.751 189.96 122.23 189.952C149.808 189.53 174.934 174.14 188.488 150.118C196.752 135.471 201.455 118.548 201.422 100.522C201.32 44.8713 156.362 -0.000301019 100.711 1.51453e-09C92.2725 1.51453e-09 84.0787 1.04393 76.2458 2.99876C77.6998 2.93675 79.1609 2.90245 80.6302 2.90245Z"
              fill="url(#hub_paint0)"
            />
            <path
              d="M120.792 198.528C103.082 198.528 86.4432 193.951 71.984 185.924C52.6964 176.037 39.8489 156.926 37.9735 135.333C35.9727 112.295 35.9727 89.128 37.9735 66.0909C39.8489 44.4981 52.6964 25.387 71.984 15.4996C75.1637 13.8696 78.449 12.5334 81.8 11.478C81.4105 11.4732 81.0213 11.4675 80.6305 11.4675C80.1486 11.4675 79.6673 11.4711 79.1871 11.4786C51.604 11.9025 26.4734 27.2969 12.9232 51.3262C4.67106 65.9603 -0.0272737 82.8644 0.000119116 100.869C0.0853079 156.525 45.0556 201.423 100.712 201.423C109.137 201.423 117.317 200.382 125.139 198.434C123.698 198.495 122.249 198.528 120.792 198.528Z"
              fill="url(#hub_paint1)"
            />
          </g>
        </g>

        {/* ======================================================== */}
        {/* LAYER 5: Status Pill Badge Below Squircle                */}
        {/* ======================================================== */}
        <g transform="translate(309, 298)">
          <rect
            width="90"
            height="20"
            rx="10"
            fill="#FFFFFF"
            stroke="#88E2D2"
            strokeWidth="1"
            filter="url(#pillShadow)"
          />
          {/* Status Indicator Dot */}
          <circle cx="12" cy="10" r="2.5" fill="#111827" />
          {/* Label */}
          <text
            x="49"
            y="13.2"
            textAnchor="middle"
            fill="#111827"
            fontSize="9"
            fontWeight="800"
            letterSpacing="0.8px"
          >
            UNIFIED CRM
          </text>
        </g>
      </svg>
    </div>
  );
}
