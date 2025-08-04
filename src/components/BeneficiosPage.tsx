"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BeneficiosPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const panel3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const title = titleRef.current;
      const container = containerRef.current;
      const panels = [panel1Ref.current, panel2Ref.current, panel3Ref.current];

      if (!title || !container || panels.some((p) => !p)) return;

      const isDesktop = window.innerWidth > 768;

      // 🎯 Animación del título SOLO en desktop
      if (isDesktop) {
        gsap.fromTo(
          title,
          { scale: 1 },
          {
            scale: 6,
            transformOrigin: "center",
            scrollTrigger: {
              trigger: container,
              start: "top 90%",
              end: "top+=300px",
              scrub: true,
            },
          }
        );
      }

      // 🎯 Carrusel horizontal
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          pin: true,
          scrub: 0.1,
          snap: 1 / (panels.length - 1),
          end: "+=1000",
        },
      });

      // ✅ Refrescar scroll cuando DOM se estabiliza
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full min-h-[100dvh] overflow-hidden">
      {/* Título */}
      <div className="pt-[90px] sm:pt-[180px] flex flex-col items-center justify-center py-12 px-4">
        <h3
          ref={titleRef}
          className="font-bold text-white text-[2.5rem] text-center leading-none"
        >
          BENEFICIOS
        </h3>
      </div>

      {/* Carrusel horizontal */}
      <div className="flex w-fit h-[60vh] mt-10">
        {[panel1Ref, panel2Ref, panel3Ref].map((ref, index) => (
          <div
            key={index}
            ref={ref}
            className="w-screen h-full flex items-center p-4"
          >
            <div className="bg-zinc-900/70 w-[85%] sm:w-[92%] h-full rounded-3xl border-2 border-white flex justify-center items-center text-white text-xl">
              insertar img
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeneficiosPage;
