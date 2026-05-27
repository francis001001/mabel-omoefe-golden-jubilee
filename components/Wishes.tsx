"use client";

import { useEffect, useState } from "react";
import SectionMark from "./SectionMark";
import Reveal from "./Reveal";

type Wish = {
  _id: string;
  name: string;
  message: string;
  _createdAt: string;
};

const PAGE_SIZE = 6;

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    fetch("/api/wishes")
      .then((r) => r.json())
      .then(setWishes)
      .catch(() => {});
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      if (!res.ok) throw new Error();

      const wish = await res.json();
      setWishes((prev) => [wish, ...prev]);
      setName("");
      setMessage("");
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <Reveal>
      <section className="py-[12vh] px-[6vw] bg-ivory-warm text-center relative">
        <div className="absolute inset-[2vh_2vw] border border-gold/20 pointer-events-none" />

        <SectionMark>Birthday Wishes</SectionMark>
        <h2 className="font-cormorant font-medium text-[clamp(2.4rem,5vw,3.5rem)] text-ink tracking-[0.02em] mt-4">
          Leave a Wish for Mabel
        </h2>
        <p className="font-cormorant text-xl md:text-2xl text-ink max-w-[650px] mx-auto mt-4 mb-14 leading-[1.6]">
          Share your love, prayers, and kind words for the celebrant.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-[600px] mx-auto mb-20 text-left"
        >
          <div className="mb-5">
            <label className="font-inter text-xs tracking-[0.3em] uppercase text-gold-deep block mb-2 font-medium">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Aunty Grace"
              maxLength={80}
              className="w-full bg-white border border-gold/30 font-cormorant text-lg text-ink px-4 py-3 outline-none focus:border-gold transition-colors placeholder:text-ink/30"
            />
          </div>
          <div className="mb-8">
            <label className="font-inter text-xs tracking-[0.3em] uppercase text-gold-deep block mb-2 font-medium">
              Your Wish
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your birthday message here…"
              rows={4}
              maxLength={500}
              className="w-full bg-white border border-gold/30 font-cormorant text-lg text-ink px-4 py-3 outline-none focus:border-gold transition-colors placeholder:text-ink/30 resize-none leading-[1.6]"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="font-inter text-xs tracking-[0.2em] uppercase py-3.5 px-10 border border-gold bg-transparent text-gold-deep hover:bg-gold hover:text-ivory transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {status === "submitting" ? "Sending…" : "Send Wish"}
            </button>
            {status === "success" && (
              <p className="font-cormorant italic text-emerald mt-4 text-xl">
                Your wish has been sent — thank you! ✦
              </p>
            )}
            {status === "error" && (
              <p className="font-cormorant italic text-red-600 mt-4 text-xl">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>

        {/* Wishes display */}
        {wishes.length > 0 && (
          <div className="max-w-[900px] mx-auto">
            <div className="font-inter text-xs tracking-[0.3em] uppercase text-gold/80 mb-10 font-medium">
              ✦ {wishes.length} {wishes.length === 1 ? "wish" : "wishes"} received ✦
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {wishes.slice(0, visible).map((wish) => (
                <div
                  key={wish._id}
                  className="py-8 px-7 border border-gold/20 bg-ivory relative hover:border-gold/40 transition-colors"
                >
                  <span className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gold/50" />
                  <p className="font-cormorant text-lg md:text-xl text-ink leading-[1.6] mb-5">
                    &ldquo;{wish.message}&rdquo;
                  </p>
                  <div className="font-inter text-xs font-medium tracking-[0.2em] uppercase text-gold-deep">
                    — {wish.name}
                  </div>
                </div>
              ))}
            </div>

            {visible < wishes.length && (
              <div className="mt-12">
                <button
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="font-inter text-xs tracking-[0.2em] uppercase py-3 px-9 border border-gold/50 text-gold-deep hover:bg-gold hover:text-ivory hover:border-gold transition-all duration-300 font-medium"
                >
                  Load more · {wishes.length - visible} remaining
                </button>
              </div>
            )}
          </div>
        )}
      </section>
    </Reveal>
  );
}