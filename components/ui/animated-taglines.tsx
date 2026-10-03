"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const taglines = [
  {
    line1: "Art of",
    line2: "Minimalism",
  },
  {
    line1: "Designed for",
    line2: "Living",
  },
  {
    line1: "Form Meets",
    line2: "Function",
  },
  {
    line1: "Spaces That",
    line2: "Feel Like You",
  },
  {
    line1: "Less.",
    line2: "More. Yours.",
  },
];

export default function AnimatedTaglines() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#F0E9E3] py-28 md:py-36">
      <div className="flex flex-col items-center justify-center px-6">

        {/* Animated Tagline */}
        <div className="relative w-full max-w-4xl text-center">

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -35,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h2
                className="
                  font-[family-name:var(--font-manrope)]
                  text-[42px]
                  leading-[1.05]
                  tracking-[-0.05em]
                  text-black

                  md:text-[58px]
                  lg:text-[72px]
                "
              >
                <span className="block">
                  “{taglines[current].line1}
                </span>

                <span className="block">
                  {taglines[current].line2}”
                </span>
              </h2>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex items-center gap-2">
          {taglines.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to tagline ${index + 1}`}
              className={`
                h-[7px]
                rounded-full
                transition-all
                duration-300
                ${
                  current === index
                    ? "w-[7px] bg-black"
                    : "w-[7px] border border-black/50 bg-transparent"
                }
              `}
            />
          ))}
        </div>

      </div>
    </section>
  );
}