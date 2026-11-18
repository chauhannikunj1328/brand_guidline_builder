import { Fragment } from "react";

/** Renders a translated string that marks bold phrases with <b>…</b>, so word order can differ between languages. */
export default function Rich({ text, boldClassName = "" }: { text: string; boldClassName?: string }) {
  return (
    <>
      {text.split(/(<b>.*?<\/b>)/g).map((part, i) =>
        part.startsWith("<b>") ? <strong key={i} className={boldClassName}>{part.slice(3, -4)}</strong> : <Fragment key={i}>{part}</Fragment>
      )}
    </>
  );
}
