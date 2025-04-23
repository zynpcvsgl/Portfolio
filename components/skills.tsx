"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useLanguage } from "@/context/language-context";

const skillsData = {
  en: [
    {
      title: "💻 Programming Languages",
      items: ["C", "C#", "C++", "Java", "Python", "PHP", "Visual Basic", "Go"],
    },
    {
      title: "🌐 Web Development",
      items: [".NET", "HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "React Native", "Next.js", "Tailwind CSS"],
    },
    {
      title: "🗃 Database Management",
      items: ["SQL", "Oracle", "MongoDB", "Microsoft SQL", "SQLite", "PostgreSQL"],
    },
    {
      title: "🧰 Software Tools",
      items: ["Photoshop", "MATLAB", "VHDL", "Microsoft Office", "Figma", "Canva", "Unity", "Visual Studio Code"],
    },
    {
      title: "🧱 Database Architecture",
      items: ["Relational Design", "ER Modeling", "Query Optimization"],
    },
    {
      title: "📋 Project Management",
      items: ["Agile (Scrum)", "Risk Management"],
    },
    {
      title: "💻 Operating Systems",
      items: ["Windows", "Linux", "Ubuntu"],
    },
    {
      title: "☁️ Cloud Computing",
      items: ["AWS", "Azure", "Google Cloud", "Firebase"],
    },
    {
      title: "🔐 Cybersecurity",
      items: ["Network Security", "Firewalls", "Encryption"],
    },
    {
      title: "🔄 Version Control",
      items: ["Git", "GitHub"],
    },
  ],
  tr: [
    {
      title: "💻 Programlama Dilleri",
      items: ["C", "C#", "C++", "Java", "Python", "PHP", "Visual Basic", "Go"],
    },
    {
      title: "🌐 Web Geliştirme",
      items: [".NET", "HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "React Native", "Next.js", "Tailwind CSS"],
    },
    {
      title: "🗃 Veritabanı Yönetimi",
      items: ["SQL", "Oracle", "MongoDB", "Microsoft SQL", "SQLite", "PostgreSQL"],
    },
    {
      title: "🧰 Yazılım Araçları",
      items: ["Photoshop", "MATLAB", "VHDL", "Microsoft Office", "Figma", "Canva", "Unity", "Visual Studio Code"],
    },
    {
      title: "🧱 Veritabanı Mimarisi",
      items: ["İlişkisel Tasarım", "ER Modelleme", "Sorgu Optimizasyonu"],
    },
    {
      title: "📋 Proje Yönetimi",
      items: ["Agile (Çevik)", "Risk Yönetimi"],
    },
    {
      title: "💻 İşletim Sistemleri",
      items: ["Windows", "Linux", "Ubuntu"],
    },
    {
      title: "☁️ Bulut Bilişim",
      items: ["AWS", "Azure", "Google Cloud", "Firebase"],
    },
    {
      title: "🔐 Siber Güvenlik",
      items: ["Ağ Güvenliği", "Güvenlik Duvarları", "Şifreleme"],
    },
    {
      title: "🔄 Sürüm Kontrol",
      items: ["Git", "GitHub"],
    },
  ],
};

export default function Skills() {
  const { language } = useLanguage();
  const currentSkills = skillsData[language];

  return (
    <section id="skills" className="scroll-mt-28 mb-28 max-w-[53rem] mx-auto text-center sm:mb-40">
      <SectionHeading>{language === "en" ? "My Skills" : "Yeteneklerim"}</SectionHeading>

      <div className="mt-10 flex flex-col items-center gap-10 text-gray-300 dark:text-white/80">
        {currentSkills.map((group, index) => (
          <div key={index} className="w-full max-w-3xl">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">{group.title}</h3>
            <ul className="flex flex-wrap justify-center gap-2">
              {group.items.map((item, i) => (
                <li
                  key={i}
                  className="bg-white/10 dark:bg-white/10 rounded-full px-3 py-1 text-sm font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
