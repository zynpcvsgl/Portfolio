"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";

const navLinks = {
  tr: [
    { name: "Anasayfa", href: "#home" },
    { name: "Hakkımda", href: "#about" },
    { name: "Projeler", href: "#projects" },
    { name: "Yetenekler", href: "#skills" },
    { name: "Deneyim", href: "#experience" },
    { name: "İletişim", href: "#contact" },
    { name: "CV", href: "/zeynep_cv_tr.pdf", download: true },
  ],
  en: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
    { name: "CV", href: "/zeynep_cv_en.pdf", download: true },
  ],
};

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const links = navLinks[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <h1 className="text-xl font-bold text-purple-500">ZÇ</h1>
        <ul className="hidden sm:flex gap-6 text-sm font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                download={link.download}
                className="hover:text-purple-500 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleLanguage}
          className="text-sm text-gray-600 dark:text-gray-300 hover:text-purple-500 transition"
        >
          {language === "tr" ? "EN" : "TR"}
        </button>
      </nav>
    </header>
  );
}
