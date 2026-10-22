import { Mark, Wordmark } from "@/components/Logo";

/* Wordmark clearspace grid from Figma (node "Logo Grid", 1280 × 539 inside a 1400px frame with 60px
   side padding, shown through a 323px window).
   Line positions are the percentages from the design; logos are white at 70% opacity. */
const H = [25.23, 29.31, 41, 46.2, 59.74, 70.87, 74.95];
const VLONG = [17.19, 18.91, 81.09, 82.81];
const VSHORT = [27.11, 35.16, 39.84, 45.16, 46.25, 51.33, 52.42, 57.58, 58.12, 62.27, 63.36, 64.69, 65.86, 71.17, 72.19, 72.66, 77.03];
const CROSSES: [number, number][] = [[226, 141], [1044, 141], [226, 387], [1044, 387]];

export default function ClearspaceDiagram() {
  return (
    <div className="relative h-[200px] overflow-hidden lg:h-[323px]" role="img" aria-label="Clearspace grid around the Spark and wordmark">
      <div className="absolute left-1/2 top-1/2 h-[539px] w-[1280px] -translate-x-1/2 -translate-y-1/2 scale-[0.5] lg:scale-100">
        {H.map((t) => <span key={t} className="absolute h-px bg-white/20" style={{ top: `${t}%`, left: "7.3%", right: "7.3%" }} />)}
        {VLONG.map((l) => <span key={l} className="absolute w-px bg-white/20" style={{ left: `${l}%`, top: "6.86%", bottom: "6.68%" }} />)}
        {VSHORT.map((l) => <span key={l} className="absolute w-px bg-white/10" style={{ left: `${l}%`, top: "29.31%", bottom: "29.13%" }} />)}
        {CROSSES.map(([x, y]) => <span key={`${x}-${y}`} className="absolute size-[10px] text-center text-[14px] leading-[10px] text-white/40" style={{ left: x, top: y }}>×</span>)}
        <Mark className="absolute left-[calc(50%-291.5px)] top-[calc(50%-48px)] size-[100px] text-white/70" />
        <span className="absolute left-[510.5px] top-[223.5px] text-white/70"><Wordmark className="text-[7.35rem]" /></span>
      </div>
    </div>
  );
}
