import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { Href } from "@/types/links";

export type ButtonVariant =
  "primary" | "outline" | "outlineWhite" | "white" | "indigo";
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
    "bg-aqua-mint text-core-navy hover:-translate-y-0.5 hover:shadow-btn-primary",
  outline:
    "border-[1.5px] border-core-navy bg-transparent text-core-navy hover:bg-core-navy hover:text-white",
  outlineWhite:
    "border-[1.5px] border-white bg-transparent text-white hover:bg-white hover:text-core-navy",
  white:
    "bg-white text-core-navy hover:-translate-y-0.5 hover:shadow-btn-white",
  indigo:
    "bg-indigo-cta text-white shadow-btn-indigo hover:-translate-y-0.5 hover:shadow-btn-indigo-hover",
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
