"use client";

import { useEffect, useState } from "react";

import AtencionPage from "@/components/AtencionPage";
import BeneficiosPage from "@/components/BeneficiosPage";
import CaracteristicasPage from "@/components/CaracteristicasPage";
import ContactaPage from "@/components/ContactaPage";
import CreditCardCanvas from "@/components/ui/CreditCardModel";
import UnitePage from "@/components/UnitePage";


import { IoIosArrowDown } from "react-icons/io";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="h-full w-full bg-black/80 pl-4 pr-4">
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="h-full w-full absolute md:top-[-60] top-[-30]">
          <CreditCardCanvas />
        </div>
        <div
          data-aos="fade-up"
          className="md:w-1/2 w-full relative md:top-74 top-62 flex flex-col justify-center text-center items-center gap-6"
        >
          <h2 className="md:text-4xl text'2">
            Si en <b>5 años</b> hicimos tanto,
            <br /> imagínate lo que está
            <br /> por venir
          </h2>
          <div className="text-center animate-bounce">
            <a href="#" className="text-white text-2xl ">
              <IoIosArrowDown />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center pl-4 pr-4 mb-6">
        <CaracteristicasPage />
      </div>
      <div className="w-full h-full pl-4 pr-4 ">
        <BeneficiosPage />
      </div>
      <div className="w-full h-full">
        <AtencionPage />
        <ContactaPage />
      </div>
      <div className="w-full h-full pl-4 pr-4">
        <UnitePage />
      </div>
    </div>
  );
}
