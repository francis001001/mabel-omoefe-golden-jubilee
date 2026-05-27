"use client";

import { useState } from "react";
import Polaroid from "./Polaroid";
import SectionMark from "./SectionMark";
import Reveal from "./Reveal";

const ACCOUNT_NUMBER = "8038225525";

export default function Gift() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ACCOUNT_NUMBER);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <Reveal>
      <section className="py-[10vh] px-[6vw] text-center max-w-[700px] mx-auto relative">
        <Polaroid
          src="/images/12.jpeg"
          placeholder="img 9"
          caption="with love"
          className="hidden md:block absolute top-[10%] -left-[2vw] w-[110px] h-[140px] -rotate-[10deg]"
        />

        <SectionMark>A Token of Love</SectionMark>
        <h2 className="font-cormorant font-medium text-[clamp(2.4rem,5vw,3.5rem)] text-ink tracking-[0.02em] mt-4">
          Gift The Celebrant
        </h2>

        <div className="mt-12 py-12 px-8 border border-gold/25 bg-ivory-warm relative">
          {/* Corner accents */}
          <div className="absolute -top-px -left-px w-[30px] h-[30px] border-2 border-gold border-r-0 border-b-0" />
          <div className="absolute -bottom-px -right-px w-[30px] h-[30px] border-2 border-gold border-l-0 border-t-0" />

          <p className="font-cormorant text-xl md:text-2xl text-ink mb-6 leading-[1.6]">
            Your presence is the greatest gift.
            <br />
            Should you wish to bless mama further —
          </p>

          <div className="font-cormorant font-medium text-[clamp(1.4rem,2.5vw,1.8rem)] text-ink mb-4 tracking-[0.03em]">
            OMOEFE MABEL OHWODIAME
          </div>

          <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
            <span
              className="font-cormorant font-medium text-[clamp(2rem,4vw,2.8rem)] text-gold-deep tracking-[0.08em]"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {ACCOUNT_NUMBER}
            </span>
            <button
              onClick={handleCopy}
              className={`font-cormorant text-xs tracking-[0.2em] uppercase py-3 px-6 border transition-all duration-300 font-medium ${
                copied
                  ? "bg-emerald border-emerald text-ivory"
                  : "border-gold bg-transparent text-gold-deep hover:bg-gold hover:text-ivory"
              }`}
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>

          <div className="font-cormorant italic text-xl text-ink-soft">OPay</div>
        </div>
      </section>
    </Reveal>
  );
}