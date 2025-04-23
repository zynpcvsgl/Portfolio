"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "@/context/language-context";
import { projectsData } from "@/lib/projectsData"; // ✅ DÜZENLENDİ

export default function Projects() {
  const { language } = useLanguage();
  const projects = projectsData[language];

  return (
    <section id="projects" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{language === "tr" ? "Projeler" : "Projects"}</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border border-gray-300 dark:border-white/10 rounded-lg hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-purple-500 group-hover:underline flex items-center gap-2">
              <FaGithub />
              {project.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-white/80 mt-2">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
