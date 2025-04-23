"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="w-full flex justify-end px-6 py-4">
      <button
        onClick={toggleLanguage}
        className="text-sm text-purple-400 border border-purple-400 rounded-full px-4 py-1 hover:bg-purple-400 hover:text-white transition"
      >
        🌐 {language === "en" ? "EN" : "TR"}
      </button>
    </header>
  );
}
