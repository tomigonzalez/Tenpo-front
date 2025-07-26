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
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "lorem",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "lorem",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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
      className="w-full h-full mt-6 flex flex-row items-center space-y-20  overflow-hidden"
    >
      {/* Cajas */}
      <div className="w-full flex flex-col justify-center items-center m-0 space-y-10">
        {contenido.map(({ title, desc }, index) => (
          <div
            key={index}
            className="gsap-box translate-x-[300px] w-1/2 h-40 bg-primary rounded-xl p-4 text-center opacity-0"
          >
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm">{desc}</p>
          </div>
        ))}
      </div>

      {/* Imagen */}
      <div className="w-4/12 mt-10">
        <Image
          src="/img/phone.png"
          alt="Tenpo logo"
          width={280}
          height={0}
          priority
          className="z-10"
        />
      </div>
    </div>
  );
};

export default CaracteristicasPage;
