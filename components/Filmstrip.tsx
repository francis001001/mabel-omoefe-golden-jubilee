import Image from "next/image";
import React from "react";

function seededShuffle(arr: number[], seed: number) {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const all = Array.from({ length: 27 }, (_, i) => i + 1);
const shuffled = seededShuffle(all, 42).map((n) => `/images/${n}.jpeg`);

// Mobile: 10 images, 130px cards, 12px gap → scroll = 10 × (130+12) = 1420px
const mobilePhotos = shuffled.slice(0, 10);
const mobileLoop = [...mobilePhotos, ...mobilePhotos];

// Desktop: all 27 images, 220px cards, 16px gap → scroll = 27 × (220+16) = 6372px
const desktopLoop = [...shuffled, ...shuffled];

export default function Filmstrip() {
  return (
    <section className="py-12 bg-ink overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-[30px] filmstrip-edge" />

      {/* Mobile strip */}
<div className="flex md:hidden gap-3 px-3 py-8 animate-filmstrip w-max">
  {mobileLoop.map((src, i) => (
    <div
      key={i}
      className="flex-shrink-0 w-[200px] h-[250px] border-[3px] border-ivory shadow-[0_4px_12px_rgba(0,0,0,0.3)] overflow-hidden"
    >
      <Image src={src} alt="Mabel" width={200} height={250} loading="eager" className="w-full h-full object-cover" />
    </div>
  ))}
</div>

{/* Desktop strip */}
<div className="hidden md:flex gap-4 px-4 py-12 animate-filmstrip-lg w-max">
  {desktopLoop.map((src, i) => (
    <div
      key={i}
      className="flex-shrink-0 w-[280px] h-[340px] border-4 border-ivory shadow-[0_4px_12px_rgba(0,0,0,0.3)] overflow-hidden"
    >
      <Image src={src} alt="Mabel" width={280} height={340} loading="eager" className="w-full h-full object-cover" />
    </div>
  ))}
</div>

      <div className="absolute bottom-0 left-0 right-0 h-[30px] filmstrip-edge" />
    </section>
  );
}