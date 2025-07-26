import Image from "next/image";
import React from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-zinc-900/70 w-full h-[50vh] rounded-4xl p-4 flex flex-col justify-between">
      <Image
        src="/img/Logotipo.svg" // Ruta a tu archivo SVG en la carpeta public
        alt="Tenpo logo" // Descripción de tu logo para SEO y accesibilidad
        width={300} // Ancho deseado de tu logo en el navbar (ajusta según necesites)
        height={0} // Alto deseado de tu logo en el navbar (ajusta según necesites)
        priority={true} // Marca como priority ya que es un elemento LCP (Largest Contentful Paint) en la primera carga
        className="z-10"
      />
      <div className="flex flex-row justify-between">
        <h5>
          developed by <b>TMGC</b>
        </h5>
        <ul className="flex flex-row gap-20">
          <li>
            <FaInstagram size={40} />
          </li>
          <li>
            <FaTiktok size={40} />
          </li>
          <li>
            <FaYoutube size={40} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
