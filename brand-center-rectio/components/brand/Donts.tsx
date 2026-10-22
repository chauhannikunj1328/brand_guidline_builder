import Image from "next/image";
import type { ReactNode } from "react";
import { DontCard } from "@/components/ui";

/* Don't tiles for the Spark, Wordmark and Color pages. Every visual is an SVG exported from Figma
   (public/brand/donts/), placed with the offsets from the design so each tile matches the file. */

const D = "/brand/donts/";

/** An exported SVG centred in the tile, nudged by (dx, dy) px. Box sizes follow the Figma frames. */
function Piece({ src, w, h = w, dx = 0, dy = 0, rotate = 0, opacity = 1 }: { src: string; w: number; h?: number; dx?: number; dy?: number; rotate?: number; opacity?: number }) {
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ width: w, height: h, opacity, transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${rotate}deg)` }}
    >
      <Image src={D + src} alt="" fill sizes={`${Math.ceil(w)}px`} />
    </div>
  );
}

/** Spark instance: a Figma "Brand Logo" frame of size s, artwork inset 7.14%. */
const Spark = ({ src, s, ...rest }: { src: string; s: number; dx?: number; dy?: number; rotate?: number; opacity?: number }) => <Piece src={src} w={s * 0.857} {...rest} />;

/** Wordmark instance: 199.9 × 48 frame. */
const Wm = ({ src, w = 199.884, h = 47.999, ...rest }: { src: string; w?: number; h?: number; dx?: number; dy?: number; rotate?: number }) => <Piece src={src} w={w} h={h} {...rest} />;

/** Absolutely placed SVG inside a fixed lockup box. */
function At({ src, x, y, w, h }: { src: string; x: number; y: number; w: number; h: number }) {
  return <div className="absolute" style={{ left: x, top: y, width: w, height: h }}><Image src={D + src} alt="" fill sizes={`${Math.ceil(w)}px`} /></div>;
}
function Box({ w, h, children }: { w: number; h: number; children: ReactNode }) {
  return <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden" style={{ width: w, height: h }}>{children}</div>;
}

const pattern: [number, number, number, string][] = [
  [-35.33, 96.99, 82, "1041d"], [57.67, 11.99, 82, "1041d"], [-36.33, -25.01, 82, "1041d"], [127.67, 54.99, 36, "06f85"],
  [-5.33, 37.99, 30, "51ee0"], [75.67, 93.99, 82, "1041d"], [-83.33, -99.01, 42, "bf236"], [-134.33, 86.99, 70, "d8f96"],
  [-159.33, -41.01, 42, "0c9b6"], [-116.33, 13.99, 56, "eddee"], [127.67, -87.01, 70, "b857c"], [23.67, -91.01, 70, "b857c"],
  [129.67, -19.01, 34, "1cf47"],
];
const waterfall = (
  <>
    {[-115.67, -37.67, 40.33, 118.33].map((dx, i) => <Spark key={dx} src={`spark-waterfall-${i + 1}.svg`} s={74} dx={dx} />)}
  </>
);

type Tile = { caption: ReactNode; body: ReactNode; bg?: string };

export const sparkDonts: Tile[] = [
  { caption: "Don’t use the Spark in unapproved colors.", body: <Spark src="spark-unapproved.svg" s={130} /> },
  { caption: "Don’t use multiple colors on the Spark.", body: <Spark src="spark-multicolor.svg" s={130} /> },
  { caption: "Don’t tilt, rotate or skew the Spark.", body: <Spark src="spark-rotated.svg" s={130} rotate={30} /> },
  { caption: "Don’t crop off the edges of the Spark.", body: <Spark src="spark-cropped.svg" s={295.34} /> },
  { caption: "Don’t use individual sparklets for any purpose.", body: <Piece src="spark-sparklets.svg" w={115.687} h={115.698} /> },
  { caption: "Don’t create a pattern out of the Spark.", body: <>{pattern.map(([dx, dy, s, f], i) => <Spark key={i} src={`spark-pattern-${f}.svg`} s={s} dx={dx} dy={dy} />)}</> },
  { caption: "Don’t apply our waterfall to the Spark.", body: waterfall },
  { caption: "Don’t use a partially transparent Spark.", body: <Spark src="spark-transparent.svg" s={130} opacity={0.9} /> },
  { caption: "Don’t separate or remove pieces of the Spark.", body: <Piece src="spark-separated.svg" w={111.4} h={131.4} dy={-10} /> },
];

export const wordmarkDonts: Tile[] = [
  { caption: "Don’t use the wordmark in unapproved colors.", body: <Wm src="wm-unapproved.svg" /> },
  { caption: "Don’t use multiple colors on the wordmark.", body: <Wm src="wm-multicolor.svg" /> },
  { caption: "Don’t tilt, rotate or skew the wordmark.", body: <Wm src="wm-rotated.svg" rotate={30} /> },
  { caption: "Don’t crop off pieces of the wordmark.", body: <Wm src="wm-cropped.svg" w={363.716} h={87.341} dy={67.67} /> },
  { caption: "Don’t rotate our wordmark.", body: <Wm src="wm-vertical.svg" rotate={90} /> },
  { caption: "Don’t outline the wordmark.", body: <Wm src="wm-outline.svg" w={203.88} h={51.12} /> },
  {
    caption: "Don’t lock up the Spark to the left of the wordmark.",
    body: <Box w={201.3} h={66}><At src="lockup-left-mark.svg" x={3.54} y={3.54} w={58.72} h={58.93} /><At src="lockup-left-text.svg" x={77.63} y={19} w={116.81} h={28.05} /></Box>,
  },
  {
    caption: "Don’t lock up the Spark above the wordmark.",
    body: <Box w={120} h={109}><At src="lockup-above-mark.svg" x={28} y={0} w={58.72} h={58.93} /><At src="lockup-above-text.svg" x={0.31} y={65.35} w={116.81} h={28.05} /></Box>,
  },
  {
    caption: "Don’t lock up the Spark to the right of the wordmark.",
    body: <Box w={201.3} h={66}><At src="lockup-right-text.svg" x={3.54} y={19} w={116.81} h={28.05} /><At src="lockup-right-mark.svg" x={135.3} y={3.54} w={58.72} h={58.93} /></Box>,
  },
];

const aa = "absolute inset-0 flex items-center justify-center font-[family-name:var(--font-secondary)] text-5xl leading-[57px]";
export const colorDonts: Tile[] = [
  { caption: "Don’t use the wordmark in unapproved colors.", body: <Wm src="wm-unapproved.svg" /> },
  { caption: "Don’t use the wordmark at partial opacity.", bg: "bg-primary", body: <Wm src="wm-partial-opacity.svg" /> },
  { caption: "Don’t use low-contrast colors for the wordmark.", bg: "bg-pampas-300", body: <Wm src="wm-low-contrast.svg" /> },
  { caption: "Don’t use text colors that inhibit legibility.", bg: "bg-primary", body: <p className={`${aa} text-black`}>Aa Bb Cc</p> },
  { caption: "Don’t use text colors that cause visual discomfort.", bg: "bg-pampas-300", body: <p className={`${aa} text-primary`}>Aa Bb Cc</p> },
  { caption: "Don’t combine too many type colors in a layout.", bg: "bg-pampas-700", body: <p className={aa}><span className="text-green-400">Aa</span>&nbsp;<span className="text-pampas-400">Bb</span>&nbsp;<span className="text-white">Cc</span></p> },
  { caption: "Don’t use multiple colors on the Spark.", body: <Spark src="spark-multicolor.svg" s={130} /> },
  { caption: "Don’t apply our waterfall to the Spark.", body: waterfall },
  { caption: "Don’t tilt, rotate or skew the Spark.", body: <Spark src="spark-rotated.svg" s={130} rotate={30} /> },
];

/** Section with a 48px Space Grotesk heading and a 3-column grid of don't tiles. */
export function DontsSection({ id, title, tiles }: { id: string; title: string; tiles: Tile[] }) {
  return (
    <section id={id} className="scroll-mt-6 bg-white px-5 py-16 lg:p-[70px]">
      <h2 className="t-section text-black">{title}</h2>
      <div className="mt-10 grid gap-x-6 gap-y-[30px] sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((t, i) => <DontCard key={i} bg={t.bg ?? "bg-white"} caption={t.caption}>{t.body}</DontCard>)}
      </div>
    </section>
  );
}
