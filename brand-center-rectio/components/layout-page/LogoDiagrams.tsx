import type { ReactNode } from "react";
import { brand } from "@/content/brand.config";
import { Mark } from "@/components/Logo";
import { Asset, Verdict, WordmarkArt } from "./Asset";

/* Applying Logos diagrams (Figma 40007016:8006 Proportions, 40007018:29968 Scale / Placement / Don'ts). */

const M = brand.markShort;
const sg = "font-[family-name:var(--font-secondary)]";

/** Proportions: the Spark and wordmark at 1.7 : 1 between 20%-black rules, on a 30% white panel. */
export function ProportionsDiagram() {
  return (
    <div className="relative aspect-[1024/307] w-full overflow-hidden">
      {/* Logo box 896×273 at x=61.7 (Figma Full Logo 933×306 centred, logo inset 16.4px) */}
      <div role="img" aria-label={`${M} and wordmark proportions`} className="absolute left-[6.03%] top-[5.34%] h-[89%] w-[87.51%]">
        <Mark className="absolute inset-y-0 left-0 h-full w-[30.38%] text-black/60" />
        <Asset src="proportions-wordmark.svg" className="absolute inset-[26.25%_1.24%_26.15%_38.33%]" sizes="545px" />
      </div>
      <div className="absolute inset-0 bg-white/30" />
      <Asset src="proportions-line.svg" className="absolute left-[-2px] top-0 h-px w-[calc(100%+2px)]" sizes="1026px" />
      <Asset src="proportions-line.svg" className="absolute bottom-0 left-[-2px] h-px w-[calc(100%+2px)]" sizes="1026px" />
      <Asset src="proportions-guides.svg" className="absolute left-0 top-[28.66%] h-[42.67%] w-full" sizes="1026px" />
    </div>
  );
}

/** Scale: a 437×293 Pampas-100 layout with tinted 16px margins, dotted rules, Spark top-right, wordmark bottom-left. */
export function ScaleDiagram() {
  return (
    <div className="relative flex h-[293.5px] w-full max-w-[437px] shrink-0 overflow-hidden bg-pampas-100 p-[15.654px]">
      <div className="relative flex flex-1 flex-col gap-[6.5px]">
        <div className="flex flex-1 flex-col items-end">
          <Mark className="size-[23.3px] text-pampas-800" />
        </div>
        <WordmarkArt tone="grey-950" className="h-[16.96px] w-[70.62px]" />
        <p className="absolute left-[27.35px] right-4 top-[44.1px] text-base leading-6 text-grey-700 sm:right-auto sm:w-[351px] sm:text-xl sm:leading-7">
          Our standard wordmark height <br className="hidden sm:inline" />is equal to our margin. Our {M} <br className="hidden sm:inline" />height is 1.7x this measurement.
        </p>
      </div>
      <div className="absolute inset-y-0 left-0 w-[15.654px] bg-white/5" />
      <div className="absolute inset-y-0 right-0 w-4 bg-pampas-600/10" />
      <div className="absolute inset-y-0 left-0 w-4 bg-pampas-600/10" />
      <div className="absolute inset-x-0 top-0 h-4 bg-pampas-600/10" />
      <div className="absolute inset-x-0 bottom-0 h-4 bg-pampas-600/10" />
      <div className="absolute inset-x-0 bottom-0 h-[15.654px] bg-white/5" />
      <Asset src="scale-dotted-line.svg" className="absolute inset-x-0 top-[39.25px] h-px" sizes="437px" />
      <Asset src="scale-dotted-line.svg" className="absolute inset-x-0 top-[260.25px] h-px" sizes="437px" />
    </div>
  );
}

/* ---- Placement / Don'ts tiles: 229×330, 14px padding, 4-column guide, 1px rules at 14px from each edge ---- */

const spark = "size-[23.3px] shrink-0";
const wm = "h-[16.96px] w-[70.62px]";

/** Four white columns on Pampas-100 (199×300) behind the placement diagrams. */
function Columns({ children }: { children?: ReactNode }) {
  return (
    <div className="absolute left-1/2 top-1/2 flex h-[300px] w-[199px] -translate-x-1/2 -translate-y-1/2 gap-2 overflow-hidden bg-pampas-100">
      <div className="relative h-full flex-1 overflow-hidden bg-white">{children}</div>
      <div className="h-full flex-1 bg-white" /><div className="h-full flex-1 bg-white" /><div className="h-full flex-1 bg-white" />
    </div>
  );
}

function Rules({ dark }: { dark?: boolean }) {
  const v = dark ? "donts-line-v.svg" : "placement-line-v.svg";
  const h = dark ? "donts-line-h.svg" : "placement-line-h.svg";
  const y = dark ? "top-0" : "-top-px";
  return (
    <>
      <Asset src={v} className={`absolute ${y} left-[213.5px] h-[330px] w-px`} sizes="1px" />
      <Asset src={v} className={`absolute ${y} left-[13.5px] h-[330px] w-px`} sizes="1px" />
      <Asset src={h} className="absolute -left-px top-[13.5px] h-px w-[251px]" sizes="251px" />
      <Asset src={h} className={`absolute -left-px h-px w-[229px] ${dark ? "top-[315.5px]" : "top-[313.5px]"}`} sizes="229px" />
    </>
  );
}

/** A labelled tile column: optional "Primary"/"Secondary" label (kept invisible to hold alignment), tile, caption. */
function TileColumn({ label, children, caption }: { label?: string; children: ReactNode; caption: ReactNode }) {
  return (
    <figure className="flex w-[229px] shrink-0 flex-col gap-3">
      <p aria-hidden={!label} className={`text-sm font-medium leading-5 text-grey-700 ${label ? "" : "opacity-0"}`}>{label ?? "Primary"}</p>
      {children}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function Numbered({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`flex size-6 shrink-0 items-center justify-center rounded-[60px] border-[0.5px] border-pampas-600 text-xs font-medium leading-4 text-grey-950 ${sg}`}>{n}</span>
      <p className="flex-1 text-[10px] leading-4 text-grey-700">{children}</p>
    </div>
  );
}

const lightTile = "relative flex h-[330px] w-full items-start overflow-hidden border border-grey-400 p-[14px]";

export function PlacementTiles() {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
      <TileColumn label="Primary" caption={<Numbered n={1}>Left-aligned Diagonal</Numbered>}>
        <div className={lightTile}>
          <div className="relative flex h-full flex-1 flex-col items-end justify-between overflow-hidden">
            <Columns />
            <Mark className={`relative ${spark} text-pampas-800`} />
            <div className="relative w-full"><WordmarkArt tone="grey-950" className={wm} /></div>
            <Asset src="placement-arrow-diagonal.svg" className="absolute left-[37.4px] top-[32.4px] h-[235px] w-[159.2px]" sizes="160px" />
          </div>
          <Rules />
        </div>
      </TileColumn>

      <TileColumn label="Secondary" caption={<Numbered n={2}>Left-aligned Vertical</Numbered>}>
        <div className={lightTile}>
          <div className="relative flex h-full flex-1 flex-col items-start justify-between overflow-hidden">
            <Columns>
              <div className="absolute left-[-85.58px] top-[41.01px] flex h-[229.308px] w-[214.254px] items-center justify-center">
                <div className="relative h-[190.468px] w-[127.803px] shrink-0 rotate-[-35.22deg]">
                  <Asset src="placement-arrow-vertical.svg" className="absolute inset-[-1.89%_-2.81%_-0.22%_-0.49%]" sizes="132px" />
                </div>
              </div>
            </Columns>
            <Mark className={`relative ${spark} text-pampas-800`} />
            <WordmarkArt tone="grey-950" className={wm} />
          </div>
          <Rules />
        </div>
      </TileColumn>

      <TileColumn caption={<Numbered n={3}>Baseline horizontal</Numbered>}>
        <div className={lightTile}>
          <div className="relative flex h-full flex-1 items-end justify-between overflow-hidden">
            <Columns />
            <WordmarkArt tone="grey-950" className={wm} />
            <Mark className={`relative ${spark} text-pampas-800`} />
            <div className="absolute left-[78.42px] top-[251.32px] flex h-[76.361px] w-[82.161px] items-center justify-center">
              <div className="relative h-[68.23px] w-[45.782px] shrink-0 rotate-[55.53deg]">
                <Asset src="placement-arrow-horizontal.svg" className="absolute inset-[-5.27%_-7.85%_-0.61%_-1.36%]" sizes="50px" />
              </div>
            </div>
          </div>
          <Rules />
        </div>
      </TileColumn>

      <TileColumn caption={<Numbered n={4}>Centered vertical</Numbered>}>
        <div className={lightTile}>
          <div className="relative flex h-full flex-1 flex-col items-center justify-between overflow-hidden py-12">
            <Asset src="placement-centered-frame.svg" className="absolute left-1/2 top-1/2 h-[300px] w-[199px] -translate-x-1/2 -translate-y-1/2" sizes="199px" />
            <Mark className={`relative ${spark} text-pampas-800`} />
            <WordmarkArt tone="grey-950" className={wm} />
          </div>
          <Rules />
        </div>
      </TileColumn>
    </div>
  );
}

const darkTile = "relative flex h-[330px] w-full items-start overflow-hidden bg-pampas-600 p-[14px]";
const dontCaption = "text-[10px] leading-3";

export function DontTiles() {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
      <TileColumn label="Primary" caption={<Verdict ok={false} className={dontCaption}>Don&apos;t align our wordmark to the right edge of a layout.</Verdict>}>
        <div className={darkTile}>
          <div className="flex h-full flex-1 flex-col items-end justify-between overflow-hidden">
            <Mark className={`${spark} text-white`} />
            <WordmarkArt tone="white" className={wm} />
          </div>
          <Rules dark />
        </div>
      </TileColumn>

      <TileColumn label="Secondary" caption={<Verdict ok={false} className={dontCaption}>Don&apos;t align our wordmark to the top margin.</Verdict>}>
        <div className={darkTile}>
          <div className="flex h-full flex-1 flex-col items-end justify-between overflow-hidden">
            <div className="w-full"><WordmarkArt tone="white" className={wm} /></div>
            <Mark className={`${spark} text-white`} />
          </div>
          <Rules dark />
        </div>
      </TileColumn>

      <TileColumn caption={<Verdict ok={false} className={dontCaption}>Don&apos;t alter the size relationship between our wordmark and {M}.</Verdict>}>
        <div className={darkTile}>
          <div className="flex h-full flex-1 flex-col items-end justify-between overflow-hidden">
            <Mark className="size-[39.7px] shrink-0 text-white" />
            <div className="w-full"><WordmarkArt tone="white" className={wm} /></div>
          </div>
          <Rules dark />
        </div>
      </TileColumn>

      <TileColumn caption={<Verdict ok={false} className={dontCaption}>Don&apos;t create a lockup with our wordmark and {M}.</Verdict>}>
        <div className={darkTile}>
          <div className="flex h-full flex-1 flex-col items-start justify-end overflow-hidden">
            <div role="img" aria-label={`${brand.name} lockup`} className="relative h-[26px] w-[79.3px] shrink-0">
              <div className="absolute left-[1.39px] top-1/2 h-[23.214px] w-[76.143px] -translate-y-1/2">
                <Mark className="absolute inset-y-0 left-0 h-full w-[30.38%] text-white" />
                <WordmarkArt tone="white" className="!absolute inset-[26.25%_1.24%_26.15%_38.33%]" />
              </div>
            </div>
          </div>
          <Rules dark />
        </div>
      </TileColumn>
    </div>
  );
}
