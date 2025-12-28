"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionBadge } from "./ui/SectionBadge";

const testimonials = [
  {
    quote:
      "Ravella has completely changed my life… now I pay my children’s school fees directly from my Ravella platform earnings.",
    name: "Chinwe A.",
    location: "Lagos, Nigeria",
    countryCode: "NG",
    avatar: "C",
  },
  {
    quote:
      "The Ravella system is so simple & transparent. I can track earnings in real time and withdraw without stress. I now help other women in Accra build income while staying healthy.",
    name: "Kwame O.",
    location: "Accra, Ghana",
    countryCode: "GH",
    avatar: "K",
  },
  {
    quote:
      "Before Ravella, I struggled with health issues. Now I have energy, confidence, and income from sharing my story.",
    name: "Sarah N.",
    location: "Nairobi, Kenya",
    countryCode: "KE",
    avatar: "S",
  },
  {
    quote:
      "The dashboard is clear, the bonuses transparent, and the income steady. Ravella gave me financial freedom.",
    name: "Thabo M.",
    location: "Johannesburg, South Africa",
    countryCode: "ZA",
    avatar: "T",
  },
  {
    quote:
      "With Ravella, I know exactly what it takes to rise in rank. I’m no longer just surviving—I’m planning my future.",
    name: "Aïssata K.",
    location: "Abidjan, Ivory Coast",
    countryCode: "CI",
    avatar: "A",
  },
  {
    quote:
      "This herbal remedy cleansed me of hypertension and restored my wellness. Ravella is both health and wealth in a bottle.",
    name: "Daniel S.",
    location: "Kampala, Uganda",
    countryCode: "UG",
    avatar: "D",
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
    <section className="relative mt-8 sm:mt-10 lg:mt-12 overflow-hidden rounded-[40px] sm:rounded-[50px] lg:rounded-[70px] bg-[#F6F0ED] px-4 sm:px-6 py-12 sm:py-14 lg:px-12 lg:py-16 xl:py-20">
      {/* Decorative accents */}
      <img
        src="/group-how-it-works.png"
        alt=""
        className="pointer-events-none absolute right-0 top-0 hidden w-12 sm:w-14 lg:w-16 opacity-80 md:block"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 sm:mb-12 lg:mb-14 text-center">
          <div className="mb-4 sm:mb-6 inline-flex items-center rounded-full border border-border bg-ravella-brown/20 px-3 sm:px-4 py-1.5">
            <span className="text-sm sm:text-base font-semibold text-ravella-brown">
              Testimonials
            </span>
          </div>

          <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32241B]">
            Seeing is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#653424] to-[#FF9801]">
              Believing!
            </span>
          </h2>

          <p className="mx-auto mb-10 sm:mb-12 lg:mb-14 max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground px-4">
            Real people. Real stories. Real income and wellness results across
            Africa.
          </p>

          {/* Slider */}
          <div className="relative mx-auto max-w-3xl">
            {/* Card */}
            <div className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-lg">
              {/* Quote */}
              <div className="mb-6 sm:mb-8">
                <svg
                  className="mb-3 sm:mb-4 h-8 w-8 sm:h-10 sm:w-10 text-[#FF9801]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* User info */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                {/* User */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#653424] to-[#814C31] text-base sm:text-lg font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <div className="text-sm sm:text-base font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Country Flag */}
                <img
                  src={`https://flagcdn.com/w40/${testimonial.countryCode.toLowerCase()}.png`}
                  alt={testimonial.location}
                  className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border border-gray-200 object-cover"
                />
              </div>
            </div>

            {/* Dots */}
            <div className="mt-6 sm:mt-8 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition ${i === index ? "bg-[#FF9801]" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-0 sm:-left-4 lg:-left-12 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={next}
              className="absolute right-0 sm:-right-4 lg:-right-12 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
