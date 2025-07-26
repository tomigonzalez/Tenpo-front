"use client";
import Lottie from "lottie-react";
import React from "react";

type Props = {
  animationData: object;
  size?: number;
  play?: boolean;
};

const AnimatedIcon = ({ animationData, size = 64, play = false }: Props) => {
  return (
    <div className="cursor-pointer" style={{ width: size, height: size }}>
      <Lottie animationData={animationData} autoplay={play} loop={play} />
    </div>
  );
};

export default AnimatedIcon;
