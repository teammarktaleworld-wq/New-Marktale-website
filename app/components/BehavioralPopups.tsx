"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Gift, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BehavioralPopups() {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showTimedPopup, setShowTimedPopup] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);
  const [hasShownTimedPopup, setHasShownTimedPopup] = useState(false);

  // Tab Title Switcher
  useEffect(() => {
    const originalTitle = document.title;
    const attentionGrabbingTitles = [
      "Wait! Come back! 😭",
      "Don't miss this opportunity... 🚀",
      "One last thing... 👀",
      "We miss you! ❤️",
    ];

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Randomly select a title
        const randomTitle =
          attentionGrabbingTitles[
            Math.floor(Math.random() * attentionGrabbingTitles.length)
          ];
        document.title = randomTitle;
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.title = originalTitle;
    };
  }, []);

  // Exit Intent Detector
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 &&
        !hasShownExitIntent &&
        !localStorage.getItem("marktale_exit_popup_seen")
      ) {
        setShowExitIntent(true);
        setHasShownExitIntent(true);
        localStorage.setItem("marktale_exit_popup_seen", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShownExitIntent]);

  // Timed Popup (triggers after 45 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        !hasShownTimedPopup &&
        !showExitIntent &&
        !localStorage.getItem("marktale_timed_popup_seen")
      ) {
        setShowTimedPopup(true);
        setHasShownTimedPopup(true);
        localStorage.setItem("marktale_timed_popup_seen", "true");
      }
    }, 45000); // 45 seconds

    return () => clearTimeout(timer);
  }, [hasShownTimedPopup, showExitIntent]);

  const closeExitIntent = useCallback(() => setShowExitIntent(false), []);
  const closeTimedPopup = useCallback(() => setShowTimedPopup(false), []);

  return (
    <AnimatePresence>
      {/* Exit Intent Popup */}
      {showExitIntent && (
        <PopupModal onClose={closeExitIntent} key="exit-intent">
          <div className="text-center">
            <div className="mx-auto bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">🛑</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Wait! Before you go...
            </h3>
            <p className="text-gray-600 mb-6">
              You're leaving without seeing our exclusive growth strategy for
              startups? Get a <strong>FREE AI Marketing Audit</strong> worth
              $500.
            </p>
            <Link
              href="/contact"
              onClick={closeExitIntent}
              className="block w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors mb-3 flex items-center justify-center gap-2"
            >
              Claim My Free Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={closeExitIntent}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              No thanks, I hate growth
            </button>
          </div>
        </PopupModal>
      )}

      {/* Timed Lead Magnet Popup */}
      {showTimedPopup && (
        <PopupModal onClose={closeTimedPopup} key="timed-popup">
          <div className="text-center">
            <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
              <Gift className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Enjoying the content?
            </h3>
            <p className="text-gray-600 mb-6">
              Join 1,000+ founders receiving our weekly "AI Marketing
              Experiments" newsletter. No fluff, just results.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
              <button
                onClick={closeTimedPopup} // In real app, submit form then close
                className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Join the Club
              </button>
            </div>
            <button
              onClick={closeTimedPopup}
              className="mt-4 text-sm text-gray-400 hover:text-gray-600"
            >
              Maybe later
            </button>
          </div>
        </PopupModal>
      )}
    </AnimatePresence>
  );
}

function PopupModal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
          {children}
        </motion.div>
      </motion.div>
    </>
  );
}
