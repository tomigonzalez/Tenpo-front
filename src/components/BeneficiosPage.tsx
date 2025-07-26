"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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

      if (!title || !container || panels.length < 2) return;

      // Título animado con scroll
      gsap.fromTo(
        title,
        { fontSize: "3rem" },
        {
          fontSize: "12vw",
          scrollTrigger: {
            trigger: title,
            start: "top center",
            end: "bottom top", // cuando el título desaparece
            scrub: true,
          },
        }
      );

      // Carrousel horizontal que empieza inmediatamente después
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 10%", // el mismo contenedor
          pin: true,
          scrub: 0.1,
          snap: 1 / (panels.length - 1),
          end: "+=2000",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full h-screen overflow-hidden">
      {/* Título animado */}
      <div className="flex flex-col items-center">
        <h3 ref={titleRef} className="font-bold leading-none text-white">
          BENEFICIOS
        </h3>
      </div>

      {/* Carrousel horizontal */}
      <div className="flex w-fit h-[60vh]">
        <div
          ref={panel1Ref}
          className="w-screen h-full flex items-center justify-center  "
        >
          <div className="bg-zinc-900/70 w-2/3 h-full rounded-4xl border-white border-4 flex justify-center items-center">
            insertar img
          </div>
        </div>
        <div
          ref={panel2Ref}
          className="w-screen h-full flex items-center justify-center"
        >
          <div className="bg-zinc-900/70 w-2/3 h-full rounded-4xl border-white border-4 flex justify-center items-center">
            insertar img
          </div>
        </div>
        <div
          ref={panel3Ref}
          className="w-screen h-full flex items-center justify-center"
        >
          <div className="bg-zinc-900/70 w-2/3 h-full rounded-4xl border-white border-4 flex justify-center items-center">
            insertar img
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeneficiosPage;
