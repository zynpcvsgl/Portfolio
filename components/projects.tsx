"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "Dogus Teknoloji Bitirme Projesi",
    description:
      ".NET Core ve Entity Framework kullanılarak geliştirilen, kullanıcı yönetimi, blog gönderileri, yorumlar ve kategori filtreleme özelliklerine sahip tam işlevli bir Blog Uygulaması.",
    url: "https://github.com/zynpcvsgl/Dogus-Teknoloji-Bitirme-Projesi",
  },
  {
    title: "Twitter Clone",
    description:
      "A modern Twitter clone built with Next.js 13, TypeScript, Prisma, and Tailwind CSS. Features posts, comments, likes, dark mode, and responsive design.",
    url: "https://github.com/zynpcvsgl/twitter_clone",
  },
  {
    title: "Bank Management System",
    description:
      "Bank Management System, Java kullanılarak geliştirilmiş bir masaüstü uygulamasıdır.",
    url: "https://github.com/zynpcvsgl/bank_management_system",
  },
  {
    title: "Amiral Battı (JavaScript)",
    description: "JavaScript ile amiral battı oyunu.",
    url: "https://github.com/zynpcvsgl/amiralbatti_js",
  },
  {
    title: "Amiral Battı (Python)",
    description: "Python ile amiral battı oyunu.",
    url: "https://github.com/zynpcvsgl/amiral-batti-python",
  },
  {
    title: "Super Mario Unity",
    description:
      "A classic 2D Super Mario Bros clone recreated using Unity. Game mechanics and visual effects mimic the original gameplay.",
    url: "https://github.com/zynpcvsgl/super-mario-unity",
  },
  {
    title: "YouTube Clone",
    description:
      "A YouTube clone built with HTML and basic JavaScript functionalities.",
    url: "https://github.com/zynpcvsgl/youtubeclone",
  },
  {
    title: "Flappy Bird Unity Clone",
    description:
      "A clone of the Flappy Bird game made in Unity with accurate physics and pixel art visuals.",
    url: "https://github.com/zynpcvsgl/flappy-bird-unity-clone",
  },
  {
    title: "BlissChat",
    description:
      "A real-time encrypted messaging app built with Node.js and React Native. Features secure login, message encryption, and chat history.",
    url: "https://github.com/zynpcvsgl/blisschat",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Projects</SectionHeading>
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
