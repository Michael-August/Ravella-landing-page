"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const AUTO_PLAY_INTERVAL = 6000;

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };

  const next = () => {
    setDirection(1);
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };

  /* Auto-play */
  useEffect(() => {
    if (isPaused) return;

    const id = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(id);
  }, [isPaused]);

  /* Swipe */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) next();
    if (diff < -50) prev();

    touchStartX.current = null;
  };

  const testimonial = testimonials[index];

  return (
    <section className="relative mt-10 overflow-hidden rounded-[70px] bg-[#F6F0ED] px-4 py-16 lg:px-12 xl:py-20">
      <div className="mx-auto max-w-5xl text-center">
        {/* Header */}
        <div className="mb-14">
          <div className="mb-4 inline-flex rounded-full border bg-ravella-brown/20 px-4 py-1.5">
            <span className="font-semibold text-ravella-brown">
              Website Testimonials
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#32241B]">
            Seeing is{" "}
            <span className="bg-gradient-to-r from-[#653424] to-[#FF9801] bg-clip-text text-transparent">
              Believing
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real people. Measurable impact. Scalable outcomes across Africa.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-3xl bg-white p-8 lg:p-10 shadow-xl"
            >
              <p className="mb-8 text-lg lg:text-xl italic leading-relaxed text-gray-700">
                “{testimonial.quote}”
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#653424] to-[#814C31] flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                <img
                  src={`https://flagcdn.com/w40/${testimonial.countryCode.toLowerCase()}.png`}
                  alt={testimonial.location}
                  className="h-8 w-8 rounded-full border"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
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

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-14 top-1/2 -translate-y-1/2 hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg hover:scale-110 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute -right-14 top-1/2 -translate-y-1/2 hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg hover:scale-110 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
