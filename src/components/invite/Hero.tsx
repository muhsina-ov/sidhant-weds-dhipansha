import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState, lazy, Suspense } from "react";
import { ChevronDown } from "lucide-react";
const couple = "/images/couple.png";
const floral = "https://media.invitestory.in/rajwada-royale-alt/src/assets/floral-corner.png";
const lantern = "https://media.invitestory.in/rajwada-royale-alt/src/assets/lantern.png";
import { invitation } from "@/config/invitation";

const Aurora = lazy(() => import("@/components/Aurora"));


export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const floralY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const coupleY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setMounted(true);
  }, []);

  return (
    <section ref={ref} className="relative isolate overflow-hidden px-4 pt-10 pb-16 sm:pt-16">
      {mounted ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-45">
          <Suspense fallback={null}>
            <Aurora colorStops={["#C9A84C", "#F3D9C6", "#7B1E2B"]} amplitude={0.75} blend={0.6} speed={0.5} />
          </Suspense>
        </div>
      ) : null}

      <motion.img
        src={lantern}
        alt=""
        aria-hidden
        width={624}
        height={1088}
        className="lantern-sway pointer-events-none absolute -top-6 left-2 w-16 origin-top sm:w-24"
      />
      <motion.img
        src={lantern}
        alt=""
        aria-hidden
        width={624}
        height={1088}
        className="lantern-sway-slow pointer-events-none absolute -top-10 right-2 w-14 origin-top sm:w-20"
      />

      <div className="relative mx-auto max-w-md">
        <div className="arch-frame relative px-4 pt-14 pb-8 text-center sm:px-10 sm:pt-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-kicker text-gold mx-auto max-w-xs text-[0.62rem] leading-relaxed tracking-[0.2em] uppercase sm:max-w-none sm:text-[0.65rem] sm:tracking-[0.35em]"
          >
            <span className="block sm:inline">॥ श्री गणेशाय नमः ॥</span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">Wedding Invitation</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-script text-maroon mt-4 text-[2.15rem] leading-[1.1] sm:text-5xl md:text-6xl"
          >
            {invitation.couple.groom}
            <span className="font-display text-gold mx-2 text-2xl sm:text-4xl">&</span>
            {invitation.couple.bride}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1, duration: 0.9 }}
            className="via-gold mx-auto mt-5 h-px w-40 bg-gradient-to-r from-transparent to-transparent"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.8 }}
            className="mt-5 flex items-center justify-center gap-4"
          >
            <span className="font-kicker text-ink/70 text-[0.66rem] tracking-[0.3em] uppercase">
              {invitation.mainEvent.month}
            </span>
            <span className="border-gold/50 font-display text-maroon border-x px-4 text-4xl">{invitation.mainEvent.day}</span>
            <span className="font-kicker text-ink/70 text-[0.66rem] tracking-[0.3em] uppercase">{invitation.mainEvent.year}</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="font-body text-ink/65 mt-2 text-xs tracking-[0.2em] uppercase"
          >
            {invitation.mainEvent.weekday} · {invitation.mainEvent.timeLabel}
          </motion.p>

          <motion.img
            src={couple}
            alt={`Illustration of ${invitation.couple.groom} and ${invitation.couple.bride} in traditional wedding attire`}
            width={912}
            height={1200}
            style={{ y: coupleY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto mt-6 w-[86%] max-w-xs drop-shadow-[0_18px_28px_var(--shadow-gold)]"
          />

          <motion.img
            src={floral}
            alt=""
            aria-hidden
            width={912}
            height={912}
            style={{ y: floralY }}
            className="pointer-events-none absolute -bottom-6 -left-6 w-40 opacity-95 sm:w-52"
          />
          <motion.img
            src={floral}
            alt=""
            aria-hidden
            width={912}
            height={912}
            style={{ y: floralY }}
            className="pointer-events-none absolute -right-6 -bottom-6 w-40 scale-x-[-1] opacity-95 sm:w-52"
          />
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="text-gold mt-10 flex justify-center"
      >
        <ChevronDown className="size-6" aria-hidden />
      </motion.div>
    </section>
  );
}
