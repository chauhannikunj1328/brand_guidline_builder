import type { ReactNode } from "react";
import { Asset } from "./Asset";

/* Grids section diagrams (Figma 40007016:29241 Margins, :29454 Columns, :29554 Gutters).
   Each is a 1024×550 frame (pampas-400 border) with 45px margin bands, a big Space Grotesk statement
   and an 18px note, followed (Margins/Columns) by a dimension line with a centred label. */

const sg = "font-[family-name:var(--font-secondary)]";

/** Sample document sizes table (Figma "Typography Scale": 354px, pampas-200 header, last column pampas-50). */
export function SpecTable({ last, rows }: { last: string; rows: [string, string, string][] }) {
  return (
    <table className="w-full max-w-[354px] shrink-0 table-fixed border-collapse text-[10px] leading-4">
      <colgroup><col /><col className="w-24" /><col className="w-[63px]" /></colgroup>
      <thead>
        <tr className={`bg-pampas-200 text-left font-medium text-pampas-950 ${sg}`}>
          <th className="px-3 py-2 font-medium">Document Type</th>
          <th className="whitespace-nowrap px-3 py-2 font-medium">Dimensions</th>
          <th className="px-3 py-2 font-medium">{last}</th>
        </tr>
      </thead>
      <tbody className="text-grey-700">
        {rows.map((r) => (
          <tr key={r[0]} className="border-b border-pampas-200">
            <td className="whitespace-nowrap px-3 py-1.5">{r[0]}</td>
            <td className="whitespace-nowrap px-3 py-1.5">{r[1]}</td>
            <td className="whitespace-nowrap bg-pampas-50 px-3 py-1.5">{r[2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Statement + note laid over a diagram (Figma: 48/58 Space Grotesk at x=85,y=73; 18/24 note at x=89,y=392). */
function Copy({ big, small }: { big: string[]; small: string[] }) {
  return (
    <>
      <p className={`absolute left-[60px] right-[60px] top-[60px] text-2xl leading-[1.2] text-black lg:right-auto lg:left-[85px] lg:top-[73px] lg:whitespace-nowrap lg:text-5xl lg:leading-[58px] ${sg}`}>
        {big.map((l, i) => <span key={i} className="lg:block">{l}{" "}</span>)}
      </p>
      <p className="absolute bottom-[60px] left-[60px] right-[60px] text-sm text-grey-950 lg:bottom-auto lg:left-[89px] lg:right-auto lg:top-[392px] lg:w-[380px] lg:text-lg lg:leading-6">
        {small.map((l, i) => <span key={i} className="lg:block">{l}{" "}</span>)}
      </p>
    </>
  );
}

const frame = "relative flex h-[440px] w-full items-start overflow-hidden border border-pampas-400 lg:h-[550px]";
const xMark = `absolute left-[17px] text-[15px] font-medium leading-6 text-pampas-950 ${sg}`;

/** "24 X" / "6 COLUMNS" dimension line under a diagram. */
export function Dimension({ label }: { label: string }) {
  return (
    <div className="flex w-full items-center gap-4">
      <Asset src="dimension-line.svg" className="h-1.5 flex-1" />
      <p className={`whitespace-nowrap text-sm font-medium leading-5 text-grey-950 ${sg}`}>{label}</p>
      <Asset src="dimension-line.svg" className="h-1.5 flex-1 rotate-180 -scale-y-100" />
    </div>
  );
}

/** Margins: 24 dashed columns, tinted 45px margin bands on all four sides with X markers in the corners. */
export function MarginsDiagram({ big, small }: { big: string[]; small: string[] }) {
  return (
    <div className={frame}>
      {Array.from({ length: 24 }).map((_, i) => <div key={i} className={`h-full min-w-px flex-1 ${i < 23 ? "border-r border-dashed border-pampas-200" : ""}`} />)}
      <div className="absolute inset-x-0 top-0 h-11 bg-pampas-600/15" />
      <div className="absolute inset-x-0 bottom-0 h-11 bg-pampas-600/15" />
      {["right-0", "left-0"].map((side) => (
        <div key={side} className={`absolute inset-y-0 ${side} w-11 bg-pampas-600/15`}>
          <p className={`${xMark} top-[10px]`}>X</p>
          <p className={`${xMark} bottom-[11px]`}>X</p>
        </div>
      ))}
      <Copy big={big} small={small} />
    </div>
  );
}

/** White margin frame drawn over the Columns/Gutters diagrams: top/bottom bars and side bars with X markers. */
function SideBar({ side, children }: { side: "left" | "right"; children?: ReactNode }) {
  return (
    <div className={`absolute inset-y-0 w-11 overflow-hidden bg-white ${side === "left" ? "left-0 border-r" : "right-0 border-l"} border-pampas-400`}>
      {children}
      <Asset src="guide-tick.svg" className="absolute -left-[15px] top-[43px] h-px w-[72px]" />
      <Asset src="guide-tick.svg" className="absolute -left-[15px] bottom-[43px] h-px w-[72px]" />
    </div>
  );
}

/** Columns: 6 tinted columns with 8px white gutters inside the white margin frame. */
export function ColumnsDiagram({ big, small }: { big: string[]; small: string[] }) {
  return (
    <div className={frame}>
      <div className="h-full w-[45px] shrink-0 border-r border-dashed border-pampas-200" />
      <div className="flex h-full min-w-px flex-1 items-center gap-2">
        {Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-full min-w-px flex-1 border-r border-dashed border-pampas-200 bg-pampas-600/15" />)}
      </div>
      <div className="h-full w-[45px] shrink-0" />
      <div className="absolute inset-x-0 top-0 h-11 border-b border-pampas-400 bg-white" />
      <div className="absolute inset-x-0 bottom-0 h-11 border-t border-pampas-400 bg-white" />
      {(["right", "left"] as const).map((side) => (
        <SideBar key={side} side={side}>
          <p className={`${xMark} top-[10px]`}>X</p>
          <p className={`${xMark} bottom-[11px]`}>X</p>
        </SideBar>
      ))}
      <Copy big={big} small={small} />
    </div>
  );
}

/** Gutters: 6 white columns separated by 16px tinted gutters, each gutter marked "X" in the bottom bar. */
export function GuttersDiagram({ big, small }: { big: string[]; small: string[] }) {
  const gx = `absolute left-[3px] top-[14px] text-xs font-medium leading-4 text-grey-500 ${sg}`;
  const sx = `absolute bottom-[14px] text-xs font-medium leading-4 text-pampas-950 ${sg}`;
  return (
    <div className={frame}>
      <div className="h-full w-[45px] shrink-0 border-r border-dashed border-pampas-200" />
      <div className="flex h-full min-w-px flex-1 items-center gap-4 bg-pampas-600/15">
        {Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-full min-w-px flex-1 bg-white" />)}
      </div>
      <div className="h-full w-[45px] shrink-0" />
      <div className="absolute inset-x-0 top-0 h-11 border-b border-pampas-400 bg-white" />
      <div className="absolute inset-x-0 bottom-0 flex h-11 border-t border-pampas-400 bg-white">
        <div className="w-[45px] shrink-0" />
        <div className="flex flex-1">
          {Array.from({ length: 11 }).map((_, i) => i % 2 === 0
            ? <div key={i} className="min-w-px flex-1" />
            : <div key={i} className="relative h-full w-4 shrink-0 border-x border-dashed border-pampas-200"><p className={gx}>X</p></div>)}
        </div>
        <div className="w-[45px] shrink-0" />
      </div>
      {(["right", "left"] as const).map((side) => (
        <SideBar key={side} side={side}>
          <Asset src="gutter-dashed-line.svg" className={`absolute inset-y-0 w-px ${side === "right" ? "left-[calc(50%-1px)]" : "left-1/2"}`} />
          <p className={`${sx} ${side === "right" ? "left-[28px]" : "left-[29px]"}`}>X</p>
          <p className={`${sx} ${side === "right" ? "left-[6px]" : "left-[7px]"}`}>X</p>
        </SideBar>
      ))}
      <Copy big={big} small={small} />
    </div>
  );
}
