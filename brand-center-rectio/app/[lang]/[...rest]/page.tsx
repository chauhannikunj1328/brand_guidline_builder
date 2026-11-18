import { notFound } from "next/navigation";

/* Any address that matches no page lands here, so the 404 is drawn inside the language layout (header, footer, fonts). */
export default function CatchAll() {
  notFound();
}
