"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import { DesktopNav } from "./DesktopNav";
import { MenuToggleButton } from "./MenuToggleButton";
import { MobileNav } from "./MobileNav";
import { brandLogo, navActions, navItems } from "./site-header.content";

const SCROLLED_AFTER_PX = 20;

/** Fixed header: transparent at the top of the page, frosted white once scrolled. */
export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > SCROLLED_AFTER_PX);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape" && isMenuOpen) {
      closeMenu();
      headerRef.current
        ?.querySelector<HTMLButtonElement>("[aria-controls]")
        ?.focus();
    }
  };

  return (
    <header
      ref={headerRef}
      onKeyDown={handleKeyDown}
      className={cn(
        "fixed top-0 left-0 z-50 w-full py-5 transition-[background-color,box-shadow] duration-300 ease-base",
        isScrolled
          ? "bg-white/90 py-4 shadow-nav backdrop-blur-[10px]"
          : "bg-white/0",
      )}
    >
      <Container className="flex items-center justify-between">
        <Link
          href={siteConfig.links.home}
          aria-label={`${siteConfig.name} home`}
        >
          <Image {...brandLogo} alt={brandLogo.alt} className="h-8 w-auto" />
        </Link>

        <DesktopNav items={navItems} />

        <div className="hidden items-center gap-4 md:flex">
          {navActions.map((action) => (
            <Button
              key={action.label}
              variant={action.variant}
              href={action.href}
            >
              {action.label}
            </Button>
          ))}
        </div>

        <MenuToggleButton
          isOpen={isMenuOpen}
          controls={menuId}
          onClick={() => setIsMenuOpen((open) => !open)}
        />
      </Container>

      <MobileNav
        id={menuId}
        isOpen={isMenuOpen}
        items={navItems}
        actions={navActions}
        onNavigate={closeMenu}
      />
    </header>
  );
}
