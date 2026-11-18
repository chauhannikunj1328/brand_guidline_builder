import { Fragment, type ReactNode } from "react";
import { splitTemplate } from "@/lib/i18n/dictionaries";

/** Renders a translated sentence with {placeholders}. Each value is wrapped in <bdi> so names and email addresses
 *  (always Latin) don't scramble the order of words in a right-to-left sentence. */
export default function Fill({ template, values }: { template: string; values: Record<string, ReactNode> }) {
  return (
    <>
      {splitTemplate(template, Object.keys(values)).map((part, i) =>
        "key" in part ? <bdi key={i}>{values[part.key]}</bdi> : <Fragment key={i}>{part.text}</Fragment>
      )}
    </>
  );
}
