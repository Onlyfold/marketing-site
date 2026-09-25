import Image from "next/image";
import { OrbitRing } from "./OrbitRing";
import type { integrationsContent } from "./integrations.content";

type OrbitContent = typeof integrationsContent.orbit;

/** Brand mark at the centre of three slowly rotating rings of lead-source icons. */
export function LeadSourceOrbit({ centerLogo, rings }: OrbitContent) {
  return (
    <div
      role="img"
      aria-label="Lead sources orbiting Onlyfold: Google, phone calls, web forms, Instagram, Justdial, Facebook and websites"
      className="relative flex h-[440px] w-[440px] items-center justify-center below-md:h-[300px] below-md:w-[300px]"
    >
      <div className="z-10 flex h-[120px] w-[120px] items-center justify-center rounded-full bg-white shadow-orbit-center below-md:h-[100px] below-md:w-[100px]">
        <Image
          {...centerLogo}
          alt={centerLogo.alt}
          className="below-md:h-auto below-md:w-[70px]"
        />
      </div>
      {rings.map((ring) => (
        <OrbitRing key={ring.id} {...ring} />
      ))}
    </div>
  );
}
