import type { ButtonVariant } from "@/components/ui/Button";
import type { Href, LinkItem } from "@/types/links";

export interface NavLink extends LinkItem {
  readonly kind: "link";
}

export interface NavMenu {
  readonly kind: "menu";
  readonly id: string;
  readonly label: string;
  readonly items: readonly LinkItem[];
}

export type NavItem = NavLink | NavMenu;

export interface NavAction {
  readonly label: string;
  readonly href: Href;
  readonly variant: ButtonVariant;
}
