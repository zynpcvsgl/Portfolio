"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        {language === "tr"
          ? "© 2025 Zeynep Çavuşoğlu. Tüm hakları saklıdır."
          : "© 2025 Zeynep Çavuşoğlu. All rights reserved."}
      </small>
      <p className="text-xs">
        <span className="font-semibold">
          {language === "tr" ? "Bu web sitesi hakkında:" : "About this website:"}
        </span>{" "}
        {language === "tr"
          ? "React, Next.js, TypeScript, Tailwind CSS, Framer Motion ve Vercel kullanılarak geliştirildi."
          : "Built with React, Next.js, TypeScript, Tailwind CSS, Framer Motion, and hosted on Vercel."}
      </p>
    </footer>
  );
}
