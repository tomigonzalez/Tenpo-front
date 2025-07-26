"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "px-5 py-2 font-bold cursor-pointer rounded-full border-3 transition";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
