import type { IndustryContent } from "./industries.content";

export function IndustryCard({ name, icon }: IndustryContent) {
  return (
    <li className="flex flex-col items-center gap-4 rounded-xl border border-light-grey bg-white px-6 py-8 text-center shadow-card transition-all duration-300 ease-base hover:-translate-y-[5px] hover:border-electric-blue/10 hover:shadow-card-hover below-xs:px-4 below-xs:py-6">
      <span
        aria-hidden="true"
        className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-blue/5 text-2xl text-electric-blue"
      >
        {icon}
      </span>
      <h3 className="text-base font-semibold text-core-navy">{name}</h3>
    </li>
  );
}
