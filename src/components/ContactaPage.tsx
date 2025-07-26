"use client";
import React, { useState } from "react";
import AnimatedIcon from "./ui/AnimatedIcon";

import chatAnimation from "../../public/icons/chat.json";
import contactAnimation from "../../public/icons/contact.json";
import mailAnimation from "../../public/icons/mail.json";

const icons = [
  {
    title: "Lorem Ipsum",
    animation: chatAnimation,
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    animation: contactAnimation,
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    animation: mailAnimation,
    href: "#",
  },
];

const ContactaPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.href}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="w-full max-w-xs bg-zinc-900 border-2 border-secondary rounded-2xl p-4 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <p className="text-white font-semibold text-lg sm:text-xl">{item.title}</p>
          <div className="w-[60px] sm:w-[80px]">
            <AnimatedIcon
              animationData={item.animation}
              size={80}
              play={hoveredIndex === index}
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactaPage;
