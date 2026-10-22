/* Carousel indicator dots used under some example cards. */
export default function Dots({ count = 2, active = 0 }: { count?: number; active?: number }) {
  return (
    <div className="mt-4 flex justify-center gap-1.5">
      {Array.from({ length: count }).map((_, i) => <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === active ? "bg-ink" : "bg-mid"}`} />)}
    </div>
  );
}
