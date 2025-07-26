"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const CaracteristicasPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const contenido = [
    {
      title: "lorem",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "lorem",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "lorem",
      desc: "It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
  ];

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".gsap-box") as HTMLDivElement[];

      boxes.forEach((box) => {
        gsap.set(box, { opacity: 0 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: box,
              start: "top 90%",
              end: "bottom 60%",
              scrub: true,
            },
          })
          .to(box, {
            x: 0,
            rotation: 0,
            opacity: 1,
            duration: 4,
            ease: "power1.inOut",
          })
          .to(box, {
            scale: 1,
            duration: 3,
            ease: "power1.inOut",
          });
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-4 lg:px-20 py-10"
    >
      {/* Cajas */}
      <div className="w-full lg:w-7/12 flex flex-col items-center gap-8">
        {contenido.map(({ title, desc }, index) => (
          <div
            key={index}
            className="gsap-box translate-x-[300px] w-full lg:w-4/5 bg-zinc-900/70 rounded-xl p-6 text-center opacity-0"
          >
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-300">{desc}</p>
          </div>
        ))}
      </div>

      {/* Imagen (se oculta en sm) */}
      <div className="w-7/12 md:w-4/12 max-w-xs sm:max-w-sm lg:max-w-md">
        <Image
          src="/img/phone.png"
          alt="Tenpo logo"
          width={300}
          height={0}
          priority
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default CaracteristicasPage;

