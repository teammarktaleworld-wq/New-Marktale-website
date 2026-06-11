"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ValentineFeatures() {
  const [loading, setLoading] = useState(true);
  const [showFallingHearts, setShowFallingHearts] = useState(false);

  useEffect(() => {
    // Total duration of the loading animation
    const totalDuration = 6000;

    const timer = setTimeout(() => {
      setLoading(false);
      setShowFallingHearts(true);

      // Stop rendering falling hearts after they fall off screen
      setTimeout(() => setShowFallingHearts(false), 8000);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <ValentineLoader />}
      </AnimatePresence>

      <AnimatePresence>
        {showFallingHearts && <FallingHearts />}
      </AnimatePresence>

      <HeartCursor />
    </>
  );
}

// --- Sub-components ---

function ValentineLoader() {
  const [textIndex, setTextIndex] = useState(0);

  const textSteps = [
    "Fall in love with results.",
    "Fall in love with MarkTale ❤️",
  ];

  useEffect(() => {
    const stepDuration = 2500;

    const interval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < textSteps.length - 1) return prev + 1;
        return prev;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, []); // Removed dependency on textSteps.length as it's constant

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-pink-50 text-center px-4"
    >
      <div className="max-w-4xl w-full">
        <AnimatePresence mode="wait">
          {textSteps.map(
            (text, index) =>
              index === textIndex && (
                <motion.h1
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-bold text-red-600 font-serif leading-tight drop-shadow-sm absolute inset-0 flex items-center justify-center"
                  style={{ position: "relative" }}
                >
                  {text}
                </motion.h1>
              ),
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function FallingHearts() {
  const hearts = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // %
      delay: Math.random() * 2, // s
      duration: 3 + Math.random() * 2, // s
      scale: 0.5 + Math.random() * 1,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
      {hearts.map((heart) => (
        <FallingHeart key={heart.id} heart={heart} />
      ))}
    </div>
  );
}

function FallingHeart({ heart }: { heart: any }) {
  return (
    <motion.div
      initial={{ y: -100, x: 0, opacity: 1, rotate: 0 }}
      animate={{
        y: "120vh",
        x: Math.sin(heart.id) * 100,
        rotate: 360,
      }}
      transition={{
        duration: heart.duration,
        delay: heart.delay,
        ease: "linear",
      }}
      style={{
        position: "absolute",
        left: `${heart.left}%`,
        fontSize: `${heart.scale * 2}rem`,
      }}
    >
      ❤️
    </motion.div>
  );
}

function HeartCursor() {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>(
    [],
  );

  useEffect(() => {
    let pointId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + pointId++,
      };
      setTrail((prev) => [...prev.slice(-15), newPoint]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => {
        if (prev.length === 0) return prev;
        return prev.slice(1);
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: "multiply" }}
    >
      <AnimatePresence>
        {trail.map((point) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0.5, y: -20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: "absolute",
              left: point.x,
              top: point.y,
              transform: "translate(-50%, -50%)",
              fontSize: "1.5rem",
              pointerEvents: "none",
            }}
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
