"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionBadge } from "./ui/SectionBadge";

const testimonials = [
  {
    quote:
      "Ravella has completely changed my life... now I pay my children’s school fees directly from my Ravella wallet.",
    name: "Chinwe A",
    role: "Distributor",
    country: "NG",
    avatar: "C",
  },
  {
    quote:
      "What stood out for me was transparency. I can track earnings in real time and withdraw without stress.",
    name: "Ibrahim S",
    role: "Independent Partner",
    country: "NG",
    avatar: "I",
  },
  {
    quote:
      "This platform gave me financial structure. Ravella isn’t hype — it’s execution.",
    name: "Blessing O",
    role: "Community Leader",
    country: "NG",
    avatar: "B",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="relative mt-8 rounded-[70px] bg-[#F6F0ED] px-6 pt-16 pb-20 lg:mt-12 overflow-hidden">
      {/* Decorative accents */}
      <img
        src="/group-how-it-works.png"
        alt=""
        className="pointer-events-none absolute left-0 top-0 hidden w-16 opacity-80 md:block"
      />
      <img
        src="/group-how-it-works.png"
        alt=""
        className="pointer-events-none absolute right-0 bottom-0 hidden w-16 opacity-80 md:block"
      />

      <div className="mx-auto max-w-4xl text-center">
        <SectionBadge>Testimonials</SectionBadge>

        <h2 className="mb-4 text-4xl font-bold text-[#32241B] lg:text-5xl">
          Seeing is <span className="text-[#FF9801]">Believing!</span>
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-xl text-muted-foreground">
          Our claims are backed by a proven track record of satisfied users
          across Nigeria and the world at large.
        </p>

        {/* Slider */}
        <div className="relative">
          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 backdrop-blur shadow-lg transition hover:bg-white lg:-translate-x-12"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 backdrop-blur shadow-lg transition hover:bg-white lg:translate-x-12"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          {/* Card */}
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur-lg lg:p-12">
            <p className="mb-8 text-xl font-semibold leading-relaxed text-[#1F1F1F]">
              “{testimonial.quote}”
            </p>

            <div className="flex items-center justify-between">
              {/* User */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-lg font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Flag (Nigeria) */}
              <div className="h-8 w-8 overflow-hidden rounded-full border border-gray-200">
                <div className="flex h-full">
                  <div className="w-1/3 bg-green-600" />
                  <div className="w-1/3 bg-white" />
                  <div className="w-1/3 bg-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-[#FF9801]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
