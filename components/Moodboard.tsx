import { Pin, Placeholder } from "./Polaroid";
import SectionMark from "./SectionMark";
import Reveal from "./Reveal";
import Image from "next/image";

const pinnedPhotos = [
  { img: "/images/9.jpeg", caption: "the celebrant", classes: "col-start-1 col-span-4 row-span-4 -rotate-[4deg]" },
  { img: "/images/10.jpeg", caption: undefined, classes: "col-start-5 col-span-3 row-span-3 rotate-[3deg]" },
  { img: "/images/7.jpeg", caption: "grace personified", classes: "col-start-8 col-span-4 row-span-4 -rotate-[2deg]" },
  { img: "/images/11.jpeg", caption: undefined, classes: "col-start-2 col-span-3 row-span-3 rotate-[5deg]" },
  { img: "/images/6.jpeg", caption: "family is everything", classes: "col-start-5 col-span-4 row-span-3 row-start-4 -rotate-[3deg]" },
  { img: "/images/8.jpeg", caption: undefined, classes: "col-start-9 col-span-3 row-span-3 rotate-[4deg]" },
];

const mobilePinnedClasses = [
  "col-start-1 col-span-7 row-span-4",
  "col-start-8 col-span-5 row-span-3",
  "col-start-1 col-span-6 row-span-4",
  "col-start-7 col-span-6 row-span-3",
  "col-start-1 col-span-6 row-span-3",
  "col-start-7 col-span-6 row-span-3",
];

export default function Moodboard() {
  return (
    <Reveal>
      <section className="py-[12vh] px-[6vw] text-center relative overflow-hidden bg-gradient-to-b from-ivory to-ivory-warm">
        <div className="mb-20">
          <SectionMark>The Moodboard</SectionMark>
          <h2 className="font-cormorant font-medium text-[clamp(2.4rem,5vw,3.5rem)] text-ink tracking-[0.02em] mt-4">
            A Life In Frames
          </h2>
          <p className="max-w-[650px] mx-auto mt-6 font-cormorant italic text-xl md:text-2xl text-ink-soft leading-[1.6]">
            Pinned memories from fifty radiant years — a glimpse of the woman we love.
          </p>
        </div>
 
        <div className="relative max-w-[1200px] mx-auto cork-board cork-noise px-6 py-10 md:px-12 md:py-16 min-h-[700px] rounded border-[12px] border-[#6b4f2e]">
          {/* Desktop board */}
          <div className="hidden md:grid relative z-[2] grid-cols-12 auto-rows-[80px] gap-6">
            {pinnedPhotos.map((p, i) => (
              <PinnedPhoto key={i} text={p.img} caption={p.caption} className={p.classes} />
            ))}
          </div>
 
          {/* Mobile board */}
          <div className="grid md:hidden relative z-[2] grid-cols-12 auto-rows-[60px] gap-3">
            {pinnedPhotos.map((p, i) => (
              <PinnedPhoto
                key={i}
                text={p.img}
                caption={p.caption}
                className={mobilePinnedClasses[i]}
              />
            ))}
          </div>
 
          {/* Handwritten note */}
          <div
            className="absolute bottom-[6%] right-[8%] bg-ivory px-6 py-4 -rotate-[6deg] shadow-[0_8px_16px_rgba(0,0,0,0.2)] font-caveat text-2xl md:text-3xl text-ink z-[5] max-w-[220px] leading-snug"
          >
            <span
              className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              style={{
                background: "radial-gradient(circle at 35% 35%, #d44, #800)",
              }}
            />
            fifty &amp;
            <br />
            still shining ✨
          </div>
        </div>
      </section>
    </Reveal>
  );
}

function PinnedPhoto({
  text,
  caption,
  className,
}: {
  text: string;
  caption?: string;
  className: string;
}) {
  return (
    <div
      className={`bg-white pt-2.5 px-2.5 pb-7 shadow-[0_12px_25px_-8px_rgba(0,0,0,0.4),0_3px_8px_rgba(0,0,0,0.2)] relative transition-all duration-500 cursor-pointer hover:!rotate-0 hover:scale-105 hover:z-20 ${className}`}
    >
      <Pin />
      <div className="relative w-full h-full">
          <Image src={text} alt="Mabel" fill className="object-cover object-top" />
       
      </div>
      {caption && (
        <div className="absolute bottom-1.5 left-0 right-0 text-center font-caveat text-base text-ink-soft">
          {caption}
        </div>
      )}
    </div>
  );
}