import React from "react";
import Button from "./ui/Button";

const UnitePage = () => {
  return (
    <div className="w-full h-[50vh] flex flex-col gap-5 justify-center items-center">
      <h2 className="text-6xl font-bold">Únete a la Financracia</h2>
      <Button className=" hover:text-secondary hover:border-secondary">
        Obtén tu cuenta gratis
      </Button>
    </div>
  );
};

export default UnitePage;
