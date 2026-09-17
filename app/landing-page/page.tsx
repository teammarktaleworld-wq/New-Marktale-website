"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

const WHATSAPP_NUMBER = "918527664228";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Offer", href: "#offer" },
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "/portfolio" },
  { name: "Contact", href: "#contact" },
];

const heroMessages = [
  {
    top: "BUSINESS KO",
    main: "BRAND BANAO.",
    sub: "From identity to digital presence — everything your brand needs.",
  },
  {
    top: "IDEA KO",
    main: "IDENTITY DO.",
    sub: "Build a visual identity people remember.",
  },
  {
    top: "ONLINE PRESENCE",
    main: "STRONG KARO.",
    sub: "Website, social media and content designed to work together.",
  },
  {
    top: "BRAND BUILDING",
    main: "₹12,499 SE.",
    sub: "A complete starter package for businesses ready to grow.",
  },
  {
    top: "SIRF LOGO NAHI,",
    main: "PEHCHAAN BANAO.",
    sub: "Turn your business into a brand with a clear digital identity.",
  },
];

const offerItems = [
  "Brand Identity",
  "Professional Website",
  "Social Media Setup",
  "22 Graphic Creatives",
  "8 Reels",
  "SEO Setup",
  "1 Month Brand Building",
  "1 Year Hosting",
  "Technical Support",
];

const services = [
  {
    number: "01",
    title: "Brand Identity",
    text: "Logo, colours, typography and a visual direction that gives your business a recognisable personality.",
  },
  {
    number: "02",
    title: "Website",
    text: "Modern, responsive and conversion-focused websites built to turn visitors into enquiries.",
  },
  {
    number: "03",
    title: "Social Media",
    text: "Profile setup and creative content that keeps your brand looking consistent and professional.",
  },
  {
    number: "04",
    title: "SEO & Growth",
    text: "Essential SEO and digital foundations that help your business become easier to discover online.",
  },
];

const faqs = [
  {
    q: "What do I get for ₹12,499?",
    a: "Brand identity, professional website, social media setup, 22 graphic creatives, 8 reels, SEO setup, 1 month brand building, 1 year hosting and technical support.",
  },
  {
    q: "Is this suitable for a new business?",
    a: "Yes. The package is designed to give a new or growing business a complete professional starting point.",
  },
  {
    q: "How quickly can I start?",
    a: "Submit the form and our team can contact you to understand your business, requirements and next steps.",
  },
];

function trackEvent(
  eventName: string,
  data: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;

  const fbq = (window as Window & {
    fbq?: (...args: unknown[]) => void;
  }).fbq;

  if (fbq) {
    fbq("track", eventName, data);
  }

  const dataLayer = (window as Window & {
    dataLayer?: Record<string, unknown>[];
  }).dataLayer;

  if (dataLayer) {
    dataLayer.push({
      event: eventName,
      ...data,
    });
  }
}

function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

function SectionTitle({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] ${light ? "text-[#f4c400]" : "text-[#8b6f00]"
          }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#f4c400]" />
        {eyebrow}
      </p>

      <h2
        className={`text-[clamp(2.4rem,5vw,5.2rem)] font-black leading-[0.88] tracking-[-0.06em] ${light ? "text-white" : "text-[#111827]"
          }`}
      >
        {title}
      </h2>

      {text && (
        <p
          className={`mt-4 max-w-xl text-sm font-medium leading-6 ${light ? "text-white/60" : "text-[#667085]"
            }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export default function BrandBuildingLandingPage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex(
        (current) => (current + 1) % heroMessages.length
      );
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const sectionIds = [
      "home",
      "offer",
      "services",
      "contact",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(
        (section): section is HTMLElement =>
          Boolean(section)
      );

    if (!sections.length) return;

    const initialHash = window.location.hash.replace(
      "#",
      ""
    );

    if (sectionIds.includes(initialHash)) {
      setActiveSection(initialHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          )[0];

        if (!visible) return;

        const id = (visible.target as HTMLElement).id;

        if (!id) return;

        setActiveSection(id);

        const nextUrl =
          id === "home"
            ? `${window.location.pathname}${window.location.search}`
            : `${window.location.pathname}${window.location.search}#${id}`;

        window.history.replaceState(
          null,
          "",
          nextUrl
        );
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.15, 0.35, 0.6],
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  function scrollToSection(id: string) {
    const section = document.getElementById(id);

    if (!section) return;

    setActiveSection(id);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    const nextUrl =
      id === "home"
        ? `${window.location.pathname}${window.location.search}`
        : `${window.location.pathname}${window.location.search}#${id}`;

    window.history.pushState(null, "", nextUrl);
  }

  const hero = heroMessages[heroIndex];
  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSubmitting(true);
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      business: String(
        formData.get("business") || ""
      ),
      requirement: String(
        formData.get("requirement") || ""
      ),
    };

    try {
      const response = await fetch(
        "/api/landing-page-contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Contact submission failed");
      }

      trackEvent("Lead", {
        content_name: "Brand Building Package",
        value: 12499,
        currency: "INR",
      });

      setSubmitted(true);
      setSubmitError("");
      form.reset();
    } catch (error) {
      console.error("Landing page contact submission failed:", error);
      setSubmitError(
        "Something went wrong while submitting your enquiry. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen scroll-smooth overflow-x-hidden bg-[#f8f8f5] text-[#111827] selection:bg-[#f4c400] selection:text-black">

      {/* =========================================================
          PREMIUM NAVBAR
      ========================================================= */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8f8f5]/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">

          {/* LOGO - BIGGER + SLIGHTLY LEFT */}
          <Link
            href="#home"
            className="-ml-3 flex shrink-0 items-center transition-transform hover:scale-105 sm:-ml-4"
            aria-label="MarkTale home"
          >
            <Image
              src="/logos/MarkTale-logo-transparent-dark-text.png"
              alt="MarkTale"
              width={1003}
              height={372}
              className="h-16 w-[260px] object-contain sm:h-[72px] sm:w-[300px] lg:h-[78px] lg:w-[350px]"
              priority
              sizes="(max-width: 767px) 260px, (max-width: 1024px) 300px, 350px"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Landing page navigation"
            className="hidden items-center gap-1 rounded-full border border-black/5 bg-white/60 p-1.5 shadow-sm backdrop-blur-md md:flex"
          >
            {navLinks.map((link) => {
              const isPortfolio =
                link.href === "/portfolio";

              const sectionId = isPortfolio
                ? ""
                : link.href.replace("#", "");

              if (isPortfolio) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() =>
                      trackEvent(
                        "Navigation_Click",
                        {
                          label: link.name,
                        }
                      )
                    }
                    className="rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.08em] text-[#667085] transition hover:bg-[#111827] hover:text-white"
                  >
                    {link.name}
                  </Link>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();

                    trackEvent(
                      "Navigation_Click",
                      {
                        label: link.name,
                      }
                    );

                    scrollToSection(sectionId);
                  }}
                  className={`rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.08em] transition ${activeSection === sectionId
                    ? "bg-[#111827] text-white shadow-md"
                    : "text-[#667085] hover:bg-black/5 hover:text-[#111827]"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* NAVBAR CTA */}
          <div className="flex items-center gap-3">

            {/* WHATSAPP */}
            <a
              href={whatsappUrl(
                "Hi MarkTale, I want to know more about the ₹12,499 Brand Building Package."
              )}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent(
                  "WhatsApp_Click",
                  {
                    location: "navbar",
                  }
                )
              }
              className="hidden rounded-full border border-black/10 bg-white/80 px-4 py-2.5 text-[11px] font-black transition hover:border-black/30 hover:bg-white sm:inline-flex"
            >
              WhatsApp
            </a>

            {/* GET STARTED */}
            <Link
              href="#contact"
              onClick={() =>
                trackEvent("CTA_Click", {
                  location: "navbar",
                })
              }
              className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-4 py-2.5 text-[11px] font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-black hover:shadow-lg sm:px-5"
            >
              Get Started
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </header>

      {/* =========================================================
          MOBILE NAV
      ========================================================= */}
      <div className="sticky top-[76px] z-40 border-b border-black/5 bg-[#f8f8f5]/80 backdrop-blur-2xl md:hidden">
        <nav
          aria-label="Mobile landing page navigation"
          className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {navLinks.map((link) => {
            const isPortfolio =
              link.href === "/portfolio";

            const sectionId = isPortfolio
              ? ""
              : link.href.replace("#", "");

            if (isPortfolio) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="shrink-0 rounded-full border border-black/5 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.08em]"
                >
                  {link.name}
                </Link>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();

                  trackEvent(
                    "Navigation_Click",
                    {
                      label: link.name,
                    }
                  );

                  scrollToSection(sectionId);
                }}
                className={`shrink-0 rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.08em] ${activeSection === sectionId
                  ? "bg-[#111827] text-white shadow-sm"
                  : "bg-white/80 text-[#667085]"
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </div>

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section
        id="home"
        className="relative isolate flex min-h-[calc(100svh-76px)] scroll-mt-[120px] items-center overflow-hidden border-b border-black/10"
      >
        <div className="absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-[#f4c400]/20 blur-3xl" />

        <div className="absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#ffdf45]/20 blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-7 px-5 py-7 sm:px-8 md:py-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-10 lg:py-5">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#667085] shadow-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f4c400]" />
              Brand Building Package
            </div>

            <div className="mt-4 min-h-[145px] sm:min-h-[155px] lg:min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroIndex}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <p className="text-sm font-black uppercase tracking-[0.13em] text-[#667085] sm:text-base">
                    {hero.top}
                  </p>

                  <h1 className="mt-1 max-w-3xl text-[clamp(3rem,6.2vw,5.8rem)] font-black leading-[0.87] tracking-[-0.065em] text-[#111827]">
                    {hero.main}
                  </h1>

                  <p className="mt-3 max-w-xl text-sm font-semibold leading-5 text-[#667085] sm:text-base sm:leading-6">
                    {hero.sub}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-3 inline-flex -rotate-1 bg-[#f4c400] px-4 py-2.5 text-sm font-black uppercase text-black shadow-[6px_6px_0_rgba(17,24,39,.08)] sm:text-base">
              Complete package at ₹12,499
            </div>

            <div className="mt-4 flex items-center gap-2">
              {heroMessages.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Hero slide ${index + 1
                    }`}
                  onClick={() =>
                    setHeroIndex(index)
                  }
                  className={`h-1.5 rounded-full transition-all ${index === heroIndex
                    ? "w-9 bg-[#111827]"
                    : "w-2 bg-black/20"
                    }`}
                />
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <Link
                href="#contact"
                onClick={() =>
                  trackEvent("CTA_Click", {
                    location: "hero",
                  })
                }
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] px-6 py-3.5 text-sm font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-black hover:shadow-lg"
              >
                Start Your Brand
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/portfolio"
                onClick={() =>
                  trackEvent(
                    "Portfolio_Click",
                    {
                      location: "hero",
                    }
                  )
                }
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-black transition hover:-translate-y-0.5 hover:border-black/30"
              >
                See Our Work
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#667085] sm:text-[11px]">
              <span className="flex items-center gap-1.5">
                <Check
                  size={13}
                  strokeWidth={3}
                />
                Website
              </span>

              <span className="flex items-center gap-1.5">
                <Check
                  size={13}
                  strokeWidth={3}
                />
                Brand Identity
              </span>

              <span className="flex items-center gap-1.5">
                <Check
                  size={13}
                  strokeWidth={3}
                />
                Social Media
              </span>
            </div>
          </div>

          {/* HERO VIDEO */}
          <div className="relative mx-auto w-full max-w-[570px] lg:max-w-none">
            <div className="relative aspect-[5/5.7] max-h-[62svh] overflow-hidden rounded-[28px] bg-[#111827] shadow-[0_30px_80px_rgba(17,24,39,.18)] lg:max-h-[calc(100svh-125px)]">
              <video
                src="/founder/foundervideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
                <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#f4c400]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f4c400]" />
                  MarkTale
                </div>

                <h2 className="max-w-md text-2xl font-black leading-none tracking-[-0.04em] text-white sm:text-3xl">
                  Build a brand people remember.
                </h2>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-2 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-[0_18px_50px_rgba(17,24,39,.14)] sm:-left-5">
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#667085]">
                Starting at
              </p>

              <p className="text-2xl font-black tracking-[-0.05em]">
                ₹12,499
              </p>
            </div>

            <div className="absolute -right-2 top-6 rounded-2xl bg-[#f4c400] px-3 py-2.5 text-black shadow-[0_18px_50px_rgba(17,24,39,.12)] sm:-right-4">
              <p className="text-[9px] font-black uppercase tracking-[0.12em]">
                Complete
              </p>

              <p className="text-xs font-black">
                Brand Setup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OFFER
      ========================================================= */}
      <section
        id="offer"
        className="flex min-h-[calc(100svh-76px)] scroll-mt-[120px] items-center overflow-hidden bg-[#f4c400] py-10 lg:py-6"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-14">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/50">
              Limited brand building offer
            </p>

            <h2 className="mt-3 text-[clamp(3rem,5.8vw,6rem)] font-black leading-[0.85] tracking-[-0.065em]">
              EVERYTHING
              <br />
              TO START.
            </h2>

            <div className="mt-5 flex items-end gap-3">
              <span className="text-5xl font-black tracking-[-0.07em] sm:text-6xl">
                ₹12,499
              </span>

              <span className="pb-2 text-[10px] font-black uppercase tracking-[0.1em] text-black/50">
                One time
              </span>
            </div>

            <p className="mt-3 max-w-md text-sm font-semibold leading-6 text-black/60">
              One focused package to give your business the identity,
              website and content foundation it needs.
            </p>

            <Link
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#111827] px-6 py-3.5 text-sm font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-black hover:shadow-lg"
            >
              Claim The Offer
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {offerItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.035,
                }}
                className="min-h-[108px] rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur-sm sm:min-h-[125px]"
              >
                <span className="text-[9px] font-black text-black/35">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <p className="mt-5 text-sm font-black leading-tight sm:text-base">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        id="services"
        className="flex min-h-[calc(100svh-76px)] scroll-mt-[120px] items-center overflow-hidden bg-white py-10 lg:py-6"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="What we do"
              title="Everything your brand needs to look ready."
              text="We connect strategy, design, technology and content into one clear brand presence."
            />

            <Link
              href="/portfolio"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-black/10 bg-[#f8f8f5] px-5 py-3 text-xs font-black transition hover:border-black/30"
            >
              Explore Past Work
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                className="group rounded-[24px] border border-black/10 bg-[#f8f8f5] p-5 transition hover:-translate-y-1 hover:bg-[#111827] hover:text-white sm:p-6 lg:min-h-[290px]"
              >
                <span className="text-xs font-black text-[#8b6f00] group-hover:text-[#f4c400]">
                  {service.number}
                </span>

                <h3 className="mt-14 text-xl font-black tracking-[-0.04em] sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-xs font-medium leading-5 text-[#667085] group-hover:text-white/60 sm:text-sm">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-[#111827] px-5 py-4 text-center text-xs font-bold text-white/65">
            <span className="text-[#f4c400]">
              One team.
            </span>{" "}
            One direction. One complete brand experience.
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK WORK CTA
      ========================================================= */}
      <section className="overflow-hidden bg-[#111827]">
        <div className="mx-auto flex min-h-[42svh] max-w-7xl flex-col items-center justify-center px-5 py-10 text-center sm:px-8">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#f4c400]">
            Past work
          </p>

          <h2 className="mt-3 max-w-4xl text-[clamp(2.8rem,6vw,6rem)] font-black leading-[0.86] tracking-[-0.065em] text-white">
            SEE WHAT WE&apos;VE
            <br />
            <span className="text-[#f4c400]">
              BUILT.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-white/55">
            Explore previous websites, brand experiences and digital work
            created by MarkTale.
          </p>

          <Link
            href="/portfolio"
            onClick={() =>
              trackEvent(
                "Portfolio_Click",
                {
                  location: "work_cta",
                }
              )
            }
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f4c400] px-6 py-3.5 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-[#e0b400]"
          >
            View Portfolio
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section
        id="contact"
        className="flex min-h-[calc(100svh-76px)] scroll-mt-[120px] items-center overflow-hidden bg-[#f4c400] py-8 lg:py-5"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-7 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f4c400]" />
              Limited availability
            </div>

            <h2 className="mt-4 text-[clamp(3rem,5.8vw,6rem)] font-black leading-[0.84] tracking-[-0.065em]">
              READY TO
              <br />
              BUILD?
            </h2>

            <p className="mt-4 max-w-md text-sm font-semibold leading-6 text-black/60">
              Don&apos;t wait until your business looks outdated. Tell us what
              you need and start building your brand today.
            </p>

            <div className="mt-6 space-y-3">

              {/* CALL */}
              <a
                href="tel:+918527664228"
                onClick={() =>
                  trackEvent(
                    "Call_Click",
                    {
                      location: "contact",
                    }
                  )
                }
                className="flex items-center gap-3 text-sm font-black"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#111827] text-white">
                  <Phone size={15} />
                </span>

                +91 85276 64228
              </a>

              {/* WHATSAPP */}
              <a
                href={whatsappUrl(
                  "Hi MarkTale, I want to discuss the ₹12,499 Brand Building Package."
                )}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent(
                    "WhatsApp_Click",
                    {
                      location: "contact",
                    }
                  )
                }
                className="flex items-center gap-3 text-sm font-black"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#111827] text-white">
                  <MessageCircle size={15} />
                </span>

                WhatsApp us instantly
              </a>

              {/* EMAIL */}
              <a
                href="mailto:marktaleworld@gmail.com"
                className="flex items-center gap-3 text-sm font-black"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#111827] text-white">
                  <Mail size={15} />
                </span>

                Email MarkTale
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[28px] bg-white p-5 shadow-[0_25px_70px_rgba(17,24,39,.16)] sm:p-7">
            {submitted ? (
              <div className="flex min-h-[390px] flex-col items-center justify-center text-center">

                <div className="grid h-16 w-16 place-items-center rounded-full bg-[#f4c400]">
                  <Check
                    size={30}
                    strokeWidth={3}
                  />
                </div>

                <h3 className="mt-5 text-3xl font-black tracking-[-0.04em]">
                  You&apos;re on the list.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#667085]">
                  Thank you for contacting us. We have received your enquiry
                  and our team will reach out to you within a few hours.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setSubmitted(false)
                  }
                  className="mt-6 rounded-full bg-[#111827] px-5 py-3 text-xs font-black text-white"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-3.5"
              >
                <div className="mb-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8b6f00]">
                    Enquiry form
                  </p>

                  <h3 className="mt-1.5 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                    Tell us about your business.
                  </h3>

                  <p className="mt-2 text-xs font-medium text-[#667085]">
                    Takes less than a minute.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name *"
                    className="w-full rounded-xl border border-black/10 bg-[#f8f8f5] px-4 py-3 text-sm outline-none focus:border-black/30 focus:bg-white"
                  />

                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="Phone number *"
                    className="w-full rounded-xl border border-black/10 bg-[#f8f8f5] px-4 py-3 text-sm outline-none focus:border-black/30 focus:bg-white"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border border-black/10 bg-[#f8f8f5] px-4 py-3 text-sm outline-none focus:border-black/30 focus:bg-white"
                  />

                  <input
                    required
                    name="business"
                    type="text"
                    placeholder="Business name *"
                    className="w-full rounded-xl border border-black/10 bg-[#f8f8f5] px-4 py-3 text-sm outline-none focus:border-black/30 focus:bg-white"
                  />
                </div>

                <select
                  name="requirement"
                  defaultValue=""
                  className="w-full rounded-xl border border-black/10 bg-[#f8f8f5] px-4 py-3 text-sm outline-none focus:border-black/30 focus:bg-white"
                >
                  <option value="" disabled>
                    What are you looking for?
                  </option>

                  <option value="Complete brand building package">
                    Complete brand building package
                  </option>

                  <option value="Brand identity">
                    Brand identity
                  </option>

                  <option value="Website">
                    Website
                  </option>

                  <option value="Social media and content">
                    Social media & content
                  </option>

                  <option value="SEO and digital growth">
                    SEO & digital growth
                  </option>

                  <option value="Other">
                    Something else
                  </option>
                </select>

                {submitError && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-semibold text-red-600"
                  >
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#111827] px-6 py-4 text-sm font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-black hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {submitting
                    ? "Sending..."
                    : "Get My Brand Started"}

                  {!submitting && (
                    <ArrowRight size={17} />
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-[#667085]">
                  <Check size={13} />
                  ₹12,499 complete brand building package
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="border-t border-black/10 bg-[#f8f8f5] px-5 py-14 sm:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.75fr_1.25fr]">

          <SectionTitle
            eyebrow="Quick answers"
            title="Before you hit send."
          />

          <div className="space-y-2.5">
            {faqs.map((faq, index) => {
              const isOpen =
                openFaq === index;

              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-black/10 bg-white"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(
                        isOpen ? null : index
                      )
                    }
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-black">
                      {faq.q}
                    </span>

                    <ChevronDown
                      size={17}
                      className={`shrink-0 transition-transform ${isOpen
                        ? "rotate-180"
                        : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence
                    initial={false}
                  >
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                      >
                        <p className="px-5 pb-5 text-xs font-medium leading-5 text-[#667085]">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      
      <footer className="bg-[#111827] px-5 py-10 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">

          {/* TOP FOOTER */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* SAME LOGO AS NAVBAR */}
            <div className="shrink-0">
              <Link
                href="#home"
                aria-label="MarkTale home"
                className="inline-flex items-center transition-transform hover:scale-105"
              >
                <Image
                  src="/logos/MarkTale-logo-transparent.png"
                  alt="MarkTale"
                  width={1003}
                  height={372}
                  className="h-16 w-[260px] object-contain sm:h-[72px] sm:w-[300px] lg:h-[78px] lg:w-[350px]"
                  sizes="(max-width: 767px) 260px, (max-width: 1024px) 300px, 350px"
                />
              </Link>
            </div>

            {/* FOOTER NAVIGATION */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[10px] font-black uppercase tracking-[0.1em] text-white/50">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4">

              {/* WHATSAPP */}
              <a
                href={whatsappUrl(
                  "Hi MarkTale, I want to discuss my business."
                )}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                onClick={() =>
                  trackEvent("WhatsApp_Click", {
                    location: "footer",
                  })
                }
                className="text-white/50 transition hover:text-white"
              >
                <MessageCircle size={19} />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/marktaleworld/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                onClick={() =>
                  trackEvent("Instagram_Click", {
                    location: "footer",
                  })
                }
                className="text-white/50 transition hover:text-white"
              >
                <Instagram size={19} />
              </a>
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div className="mt-8 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-3">

            {/* CALL */}
            <a
              href="tel:+918527664228"
              onClick={() =>
                trackEvent("Call_Click", {
                  location: "footer",
                })
              }
              className="group flex items-center gap-3"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 transition group-hover:bg-[#f4c400] group-hover:text-black">
                <Phone size={17} />
              </span>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-white/35">
                  Call us
                </p>

                <p className="mt-0.5 text-sm font-bold text-white/80 group-hover:text-white">
                  +91 85276 64228
                </p>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href={whatsappUrl(
                "Hi MarkTale, I want to discuss my business."
              )}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent("WhatsApp_Click", {
                  location: "footer_contact",
                })
              }
              className="group flex items-center gap-3"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 transition group-hover:bg-[#f4c400] group-hover:text-black">
                <MessageCircle size={17} />
              </span>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-white/35">
                  WhatsApp
                </p>

                <p className="mt-0.5 text-sm font-bold text-white/80 group-hover:text-white">
                  +91 85276 64228
                </p>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:marktaleworld@gmail.com"
              className="group flex items-center gap-3"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 transition group-hover:bg-[#f4c400] group-hover:text-black">
                <Mail size={17} />
              </span>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-white/35">
                  Email
                </p>

                <p className="mt-0.5 text-sm font-bold text-white/80 group-hover:text-white">
                  marktaleworld@gmail.com
                </p>
              </div>
            </a>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} MarkTale. All rights reserved.
            </p>

            <p className="font-medium">
              Brand identity · Websites · Social media · SEO
            </p>
          </div>

        </div>
      </footer>


      {/* =========================================================
          MOBILE CTA
      ========================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 bg-white/95 p-2.5 shadow-[0_-10px_30px_rgba(0,0,0,.08)] backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-[1fr_auto] gap-2">

          <Link
            href="#contact"
            onClick={() =>
              trackEvent(
                "CTA_Click",
                {
                  location:
                    "mobile_sticky",
                }
              )
            }
            className="flex items-center justify-center gap-2 rounded-full bg-[#111827] px-4 py-3 text-xs font-black text-white"
          >
            Get Started — ₹12,499
            <ArrowRight size={15} />
          </Link>

          <a
            href={whatsappUrl(
              "Hi MarkTale, I am interested in the ₹12,499 Brand Building Package."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            onClick={() =>
              trackEvent(
                "WhatsApp_Click",
                {
                  location:
                    "mobile_sticky",
                }
              )
            }
            className="grid w-12 place-items-center rounded-full bg-[#f4c400] text-black"
          >
            <MessageCircle size={19} />
          </a>
        </div>
      </div>
    </main>
  );
}