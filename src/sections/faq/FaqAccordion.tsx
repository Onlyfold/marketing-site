"use client";

import { useState } from "react";
import { FaqAccordionItem } from "./FaqAccordionItem";
import type { FaqItemContent } from "./faq.content";

const NONE_OPEN = -1;

/** Single-open accordion; the first question starts expanded. */
export function FaqAccordion({
  items,
}: {
  readonly items: readonly FaqItemContent[];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <ul className="mx-auto flex max-w-[800px] flex-col gap-4">
      {items.map((item, index) => (
        <FaqAccordionItem
          key={item.question}
          {...item}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex((current) => (current === index ? NONE_OPEN : index))
          }
        />
      ))}
    </ul>
  );
}
