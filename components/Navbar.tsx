"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 50) {
        setVisible(true);
      } else if (current > lastScroll) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Design Ideas", href: "/design-ideas" },
    { name: "Magazine", href: "/magazine" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <>
      {/* ================================================= */}
      {/* DESKTOP NAVBAR */}
      {/* ================================================= */}

      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="
              hidden md:block
              fixed
              top-6
              left-1/2
              z-50
              -translate-x-1/2
            "
          >
            <div
              className="
                flex
                items-center
                gap-8
                rounded-full
                border
                border-white/15
                bg-white/5
                px-8
                py-4
                backdrop-blur-2xl
                shadow-[0_8px_24px_rgba(0,0,0,0.12)]
              "
            >
              {/* NAV ITEMS */}

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    group
                    relative
                    font-[family-name:var(--font-dm-sans)]
                    text-sm
                    font-medium
                    tracking-wide
                    text-white
                    whitespace-nowrap
                  "
                >
                  {item.name}

                  {/* Hover underline */}
                  <span
                    className="
                      absolute
                      -bottom-1
                      left-0
                      h-[1px]
                      w-0
                      bg-white
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}

              {/* MORE */}

              <div
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <button
                  className="
                    group
                    flex
                    items-center
                    gap-1
                    font-[family-name:var(--font-dm-sans)]
                    text-sm
                    font-medium
                    tracking-wide
                    text-white
                  "
                >
                  More

                  <ChevronDown
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:rotate-180
                    "
                  />

                  {/* More underline */}
                  <span
                    className="
                      absolute
                      -bottom-1
                      left-0
                      h-[1px]
                      w-0
                      bg-white
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </button>

                {/* MORE DROPDOWN */}

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 16,
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="
                        absolute
                        right-0
                        w-48
                        rounded-2xl
                        border
                        border-white/15
                        bg-white/10
                        p-2
                        backdrop-blur-2xl
                        shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                      "
                    >
                      {["About", "Services", "Contact"].map(
                        (item) => (
                          <Link
                            key={item}
                            href="#"
                            className="
                              block
                              rounded-xl
                              px-4
                              py-3
                              font-[family-name:var(--font-dm-sans)]
                              text-sm
                              text-white
                              transition
                              hover:bg-white/10
                            "
                          >
                            {item}
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ================================================= */}
      {/* MOBILE NAVBAR */}
      {/* ================================================= */}

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="
              md:hidden
              fixed
              top-5
              right-5
              z-[60]
            "
          >
            {/* HAMBURGER BUTTON */}

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="
                relative
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/10
                backdrop-blur-2xl
                shadow-[0_8px_24px_rgba(0,0,0,0.15)]
              "
            >
              <div className="relative h-5 w-6">

                {/* TOP LINE */}

                <motion.span
                  animate={
                    open
                      ? {
                          rotate: 45,
                          y: 8,
                        }
                      : {
                          rotate: 0,
                          y: 0,
                        }
                  }
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    h-[1.5px]
                    w-6
                    bg-white
                  "
                />

                {/* MIDDLE LINE */}

                <motion.span
                  animate={
                    open
                      ? {
                          opacity: 0,
                        }
                      : {
                          opacity: 1,
                        }
                  }
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    absolute
                    left-0
                    top-[8px]
                    h-[1.5px]
                    w-6
                    bg-white
                  "
                />

                {/* BOTTOM LINE */}

                <motion.span
                  animate={
                    open
                      ? {
                          rotate: -45,
                          y: -8,
                        }
                      : {
                          rotate: 0,
                          y: 0,
                        }
                  }
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    absolute
                    left-0
                    top-[16px]
                    h-[1.5px]
                    w-6
                    bg-white
                  "
                />

              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================================= */}
      {/* MOBILE MENU */}
      {/* ================================================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              md:hidden
              fixed
              inset-0
              z-50
              flex
              flex-col
              items-center
              justify-center
              bg-black/80
              backdrop-blur-2xl
            "
          >
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
                delay: 0.05,
              }}
              className="
                flex
                flex-col
                items-center
                gap-8
              "
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{
                    y: 15,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="
                      font-[family-name:var(--font-dm-sans)]
                      text-3xl
                      font-medium
                      tracking-tight
                      text-white
                    "
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* MORE */}

              <motion.div
                initial={{
                  y: 15,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                }}
              >
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="
                    font-[family-name:var(--font-dm-sans)]
                    text-3xl
                    font-medium
                    tracking-tight
                    text-white
                  "
                >
                  More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}