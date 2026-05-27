"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const TARGET = new Date("2026-06-20T12:00:00+01:00").getTime();

function getTimeLeft() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    secs: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [
    { num: time.days, label: "Days" },
    { num: time.hours, label: "Hours" },
    { num: time.mins, label: "Minutes" },
    { num: time.secs, label: "Seconds" },
  ];

  return (
    <Reveal>
      <section className="py-[8vh] px-[6vw] bg-ink text-ivory text-center relative overflow-hidden">
        <div className="absolute inset-[2vh_2vw] border border-gold/40 pointer-events-none" />

        <div className="font-cormorant italic text-[clamp(1.4rem,2.5vw,2rem)] text-gold-light mb-2">
          The wait until we dance —
        </div>

        <h2 className="font-cormorant font-medium text-[clamp(2rem,4vw,3rem)] tracking-[0.02em] mb-12 text-ivory">
          Counting Down to June 20
        </h2>

        <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-[800px] mx-auto">
          {cells.map((c) => (
            <div
              key={c.label}
              className="py-5 md:py-8 px-1 md:px-2 border border-gold/30 relative transition-all duration-300 hover:border-gold hover:bg-gold/5"
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[30px] h-px bg-gold" />
              <span className="font-cormorant text-[clamp(2.5rem,6vw,4.5rem)] leading-none gold-gradient-text-light block">
                {pad(c.num)}
              </span>
              <div className="font-cormorant text-xs tracking-[0.2em] uppercase text-ivory/70 mt-3 font-medium">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}