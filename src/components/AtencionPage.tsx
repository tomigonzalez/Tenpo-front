"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AtencionPage = () => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Scroll animación
    gsap.to(tickerRef.current, {
      xPercent: -20,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: tickerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 40,
      },
    });
  });
  return (
    <div className="content-center overflow-hidden mt-10 w-full h-16 -translate-y-12 relative">
      <div
        ref={tickerRef}
        className="flex flex-row gap-2 whitespace-nowrap w-max"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <h3 key={i} className="tickerz px-2 font-regular text-6xl">
            SERIVICIO AL PUBLICO 24/7
          </h3>
        ))}
      </div>
    </div>
  );
};

export default AtencionPage;
