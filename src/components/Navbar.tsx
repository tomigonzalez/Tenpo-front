"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(
    () => {
      gsap.to(navRef.current, {
        backgroundColor: "rgba(24, 24, 27, 0.7)",
        width: "80%",
        ease: "power2.out",
        scrollTrigger: {
          start: "top+=5% top",
          end: "+=1",
          scrub: true,
        },
      });
    },
    { scope: navRef }
  );

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
        w-[95%] h-16 px-6 flex items-center justify-between 
        rounded-full text-white transition-all duration-300 
        bg-transparent backdrop-blur-md"
      >
        {/* Logo */}
        <Image
          src="/img/Logotipo.svg"
          alt="Tenpo logo"
          width={100}
          height={0}
          priority
          className="z-10"
        />

        {/* Nav - Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-bold">
          <Link href="" className="hover:text-secondary">
            Nosotros
          </Link>
          <Link href="" className="hover:text-secondary">
            Beneficios
          </Link>
          <Link href="" className="hover:text-secondary">
            Contacto
          </Link>
        </nav>

        {/* CTA - Desktop */}
        <div className="hidden md:block">
          <Button
            href="/#"
            className="border-secondary text-secondary hover:bg-secondary hover:text-white hover:border-white"
          >
            Hazte cliente
          </Button>
        </div>

        {/* Hamburguesa - Mobile */}
        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </header>

      {/* Menú Móvil */}
      <div
        className={`fixed top-0 left-0 w-full h-screen 
        bg-zinc-900/90 backdrop-blur-md flex flex-col items-center justify-center gap-6 
        z-40 transition-opacity duration-300 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <Link
          href=""
          className="text-white text-lg font-semibold hover:text-secondary"
          onClick={() => setMenuOpen(false)}
        >
          Nosotros
        </Link>
        <Link
          href=""
          className="text-white text-lg font-semibold hover:text-secondary"
          onClick={() => setMenuOpen(false)}
        >
          Beneficios
        </Link>
        <Link
          href=""
          className="text-white text-lg font-semibold hover:text-secondary"
          onClick={() => setMenuOpen(false)}
        >
          Contacto
        </Link>
        <Button
          href="/#"
          className="border-secondary text-secondary hover:bg-secondary hover:text-white hover:border-white mt-2"
          onClick={() => setMenuOpen(false)}
        >
          Hazte cliente
        </Button>
      </div>
    </>
  );
}
