import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { Href } from "@/types/links";

export type ButtonVariant =
  | "primary"
  | "outline"
  | "outlineWhite"
  | "secondaryBlue"
  | "white"
  | "indigo"
  | "gradientPremium"
  | "gradientAction";
export type ButtonSize = "sm" | "md" | "lg";

const BASE =
  "inline-flex cursor-pointer items-center justify-center rounded-pill font-semibold whitespace-nowrap transition-all duration-200 ease-base";

const SIZES: Record<ButtonSize, string> = {
  sm: "px-6 py-3 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-10 py-4 text-lg",
};

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-onlyfold-teal text-core-navy hover:-translate-y-0.5 hover:shadow-btn-primary",
  outline:
    "border-[1.5px] border-core-navy bg-transparent text-core-navy hover:bg-core-navy hover:text-white",
  outlineWhite:
    "border-[1.5px] border-white bg-transparent text-white hover:bg-white hover:text-core-navy",
  secondaryBlue:
    "border-2 border-electric-blue bg-transparent text-electric-blue hover:bg-electric-blue hover:text-white",
  white:
    "bg-white text-core-navy hover:-translate-y-0.5 hover:shadow-btn-white",
  indigo:
    "bg-indigo-cta text-white shadow-btn-indigo hover:-translate-y-0.5 hover:shadow-btn-indigo-hover",
  gradientPremium:
    "bg-gradient-cta-premium text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg",
  gradientAction:
    "bg-gradient-cta-action text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg",
};

interface CommonProps {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly className?: string;
  readonly children: ReactNode;
}

type LinkButtonProps = CommonProps & { readonly href: Href } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >;

type NativeButtonProps = CommonProps & { readonly href?: undefined } & Omit<
    ComponentProps<"button">,
    "className" | "children"
  >;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

/** Pill button. Renders a Link when `href` is given, otherwise a native button. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(BASE, SIZES[size], VARIANTS[variant], className);

  if (props.href !== undefined) {
    return <Link className={classes} {...props} />;
  }

  const { href: _href, type = "button", ...buttonProps } = props;
  return <button type={type} className={classes} {...buttonProps} />;
}
