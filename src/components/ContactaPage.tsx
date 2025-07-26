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
    <div className="w-full h-full px-4 flex flex-row justify-evenly">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.href}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="w-52 h-62 border-secondary border-4 rounded-2xl flex flex-col items-center text-center justify-center gap-2 cursor-pointer"
        >
          <p className="font-bold p-4">{item.title}</p>
          <AnimatedIcon
            animationData={item.animation}
            size={80}
            play={hoveredIndex === index}
          />
        </a>
      ))}
    </div>
  );
};

export default ContactaPage;
