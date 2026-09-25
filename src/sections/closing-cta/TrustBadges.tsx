import { Fragment } from "react";

/** Dot-separated reassurance labels under the CTA (stacked without dots on mobile). */
export function TrustBadges({
  badges,
}: {
  readonly badges: readonly string[];
}) {
  return (
    <ul className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm font-medium opacity-80 below-md:flex-col below-md:gap-2">
      {badges.map((badge, index) => (
        <Fragment key={badge}>
          {index > 0 && (
            <li aria-hidden="true" className="opacity-50 below-md:hidden">
              •
            </li>
          )}
          <li>{badge}</li>
        </Fragment>
      ))}
    </ul>
  );
}
