import Link from "next/link";
import type { ComponentType } from "react";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";
import { YouTubeIcon } from "@/components/icons/YouTubeIcon";
import type { SocialId, SocialLink } from "@/types/links";

const ICONS: Record<SocialId, ComponentType> = {
  linkedin: LinkedInIcon,
  x: XIcon,
  youtube: YouTubeIcon,
  facebook: FacebookIcon,
};

interface SocialLinksProps {
  readonly label: string;
  readonly links: readonly SocialLink[];
}

export function SocialLinks({ label, links }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="mr-2 text-sm text-white/50">{label}</span>
      {links.map(({ id, label: name, href }) => {
        const Icon = ICONS[id];
        const isExternal = href.startsWith("http");
        return (
          <Link
            key={id}
            href={href}
            aria-label={name}
            {...(isExternal ? { target: "_blank", rel: "noopener" } : {})}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-200 ease-base hover:border-white/40 hover:bg-white/10"
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
}
