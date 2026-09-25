import Link from "next/link";
import { NavDropdown } from "./NavDropdown";
import type { NavItem } from "./site-header.types";
import { NAV_LINK_CLASS } from "./nav-link-styles";

export function DesktopNav({ items }: { readonly items: readonly NavItem[] }) {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
      {items.map((item) =>
        item.kind === "menu" ? (
          <NavDropdown key={item.id} {...item} />
        ) : (
          <Link key={item.label} href={item.href} className={NAV_LINK_CLASS}>
            {item.label}
          </Link>
        ),
      )}
    </nav>
  );
}
