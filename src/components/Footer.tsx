import Image from "next/image";
import React from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900/70 w-full rounded-t-4xl p-6 sm:p-10 flex flex-col gap-6">
      {/* Logo */}
      <div className="flex justify-center sm:justify-start">
        <Image
          src="/img/Logotipo.svg"
          alt="Tenpo logo"
          width={180}
          height={0}
          priority
          className="h-auto"
        />
      </div>

      {/* Bottom content */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-white/10 pt-6">
        {/* Developer info */}
        <p className="text-sm text-white/70 text-center sm:text-left">
          Developed by <b className="text-white">TMGC</b>
        </p>

        {/* Social icons */}
        <ul className="flex gap-6 text-white">
          <li className="hover:text-secondary transition-colors">
            <a href="#"><FaInstagram size={28} /></a>
          </li>
          <li className="hover:text-secondary transition-colors">
            <a href="#"><FaTiktok size={28} /></a>
          </li>
          <li className="hover:text-secondary transition-colors">
            <a href="#"><FaYoutube size={28} /></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
