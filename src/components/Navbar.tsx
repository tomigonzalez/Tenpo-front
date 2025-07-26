"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(navRef.current, {
        backgroundColor: "rgba(42,42,42,0.9)",
        width: "80%",
        ease: "power2.out",

        scrollTrigger: { start: "top+=5% top", end: "+=1", scrub: true },
      });
    },
    { scope: navRef }
  );

  return (
    <header
      ref={navRef}
      className="fixed top-4 z-50
      w-[95%] left-1/2 -translate-x-1/2
      h-20 px-6 flex items-center justify-between
      rounded-full  text-white
      transition-all duration-300 overflow-hidden
      "
    >
      {/* Logo */}
      <Image
        src="/img/Logotipo.svg" // Ruta a tu archivo SVG en la carpeta public
        alt="Tenpo logo" // Descripción de tu logo para SEO y accesibilidad
        width={100} // Ancho deseado de tu logo en el navbar (ajusta según necesites)
        height={0} // Alto deseado de tu logo en el navbar (ajusta según necesites)
        priority={true} // Marca como priority ya que es un elemento LCP (Largest Contentful Paint) en la primera carga
        className="z-10"
      />

      {/* Nav links */}
      <nav className="flex items-center space-x-6 text-sm font-bold">
        <Link href="">Nosotros</Link>
        <Link href="">Beneficios</Link>
        <Link href="">Contacto</Link>
      </nav>

      {/* CTA */}
      <Button
        href="/#"
        className="border-secondary  text-secondary hover:bg-secondary hover:text-white hover:border-wite"
      >
        Hazte cliente
      </Button>
    </header>
  );
}
