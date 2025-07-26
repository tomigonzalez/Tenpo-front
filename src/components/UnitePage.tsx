import React from "react";
import Button from "./ui/Button";

const UnitePage = () => {
  return (
    <div  className="w-full min-h-[40vh] md:min-h-[50vh] flex flex-col gap-6 justify-center items-center px-4 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        Únete a la Financracia
      </h2>
      <Button data-aos="zoom-in" className="text-base sm:text-lg px-6 py-3 border-2 border-white hover:text-secondary hover:border-secondary transition-colors duration-300">
        Obtén tu cuenta gratis
      </Button>
    </div>
  );
};

export default UnitePage;
