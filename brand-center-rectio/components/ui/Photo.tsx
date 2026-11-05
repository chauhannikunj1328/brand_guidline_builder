import Image from "next/image";
import type { CSSProperties } from "react";

/** Image from public/brand, filling its positioned parent. `crop` reproduces a Figma image crop (percent box). */
export default function Photo({ src, crop, sizes, alt = "" }: { src: string; crop?: CSSProperties; sizes: string; alt?: string }) {
  const img = <Image src={`/brand/${src}`} alt={alt} fill sizes={sizes} className="object-cover" />;
  return crop ? <div className="absolute" style={crop}>{img}</div> : img;
}
