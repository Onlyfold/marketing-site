import Link from "next/link";
import type { LinkGroup } from "@/types/links";

export function FooterLinkColumn({ heading, links }: LinkGroup) {
  return (
    <div className="flex min-w-[140px] flex-col gap-6">
      <h4 className="text-xs font-bold tracking-footer-heading text-white/50 uppercase">
        {heading}
      </h4>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/80 transition-colors duration-200 ease-base hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
