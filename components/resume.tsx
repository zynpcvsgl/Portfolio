"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useLanguage } from "@/context/language-context";

export default function Resume() {
  const { language } = useLanguage();

  return (
    <section
      id="resume"
      className="scroll-mt-28 mb-28 max-w-[53rem] mx-auto text-center sm:mb-40"
    >
      <SectionHeading>{language === "en" ? "Resume" : "Özgeçmiş"}</SectionHeading>

      <p className="text-gray-300 mb-6">
        {language === "en"
          ? "You can view or download my resume in both English and Turkish below:"
          : "Aşağıdan İngilizce ve Türkçe özgeçmişime ulaşabilirsiniz:"}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-300">
        <div className="bg-white/10 p-6 rounded-xl flex flex-col items-center gap-4">
          <h3 className="text-lg font-semibold text-purple-400">English</h3>
          <a
            href="/Zeynep_CV_EN.pdf"
            target="_blank"
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full transition"
          >
            📄 Download CV (English)
          </a>
        </div>
        <div className="bg-white/10 p-6 rounded-xl flex flex-col items-center gap-4">
          <h3 className="text-lg font-semibold text-purple-400">Türkçe</h3>
          <a
            href="/Zeynep_CV_TR.pdf"
            target="_blank"
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full transition"
          >
            📄 Özgeçmişi İndir (Türkçe)
          </a>
        </div>
      </div>
    </section>
  );
}
