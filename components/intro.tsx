"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language } = useLanguage();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
            src="/zeynep.jpg"
            alt="Zeynep Çavuşoğlu"
            width={400}
            height={400}
            priority={true}
            quality={100}
            className="h-60 w-60 sm:h-72 sm:w-72 rounded-full object-cover border-[0.4rem] border-white shadow-xl"
          />

          </motion.div>
        </div>
      </div>

      <h1 className="mb-6 mt-6 px-4 text-3xl font-medium !leading-[1.5] sm:text-5xl">
        {language === "en" ? (
          <>Hi, I'm <span className="font-bold text-purple-400">Zeynep Çavuşoğlu</span> 👋<br /> I'm a computer engineer and software developer.</>
        ) : (
          <>Merhaba, ben <span className="font-bold text-purple-400">Zeynep Çavuşoğlu</span> 👋<br /> Bilgisayar mühendisiyim ve yazılım geliştiricisiyim.</>
        )}
      </h1>

      <p className="mb-10 max-w-xl mx-auto text-lg text-gray-300 px-4">
        {language === "en"
          ? "I build efficient, user-focused applications using .NET, React Native, and modern web technologies. I'm a quick learner, a collaborative team player, and a solution-oriented developer."
          : ".NET, React Native ve modern web teknolojileriyle üretken, kullanıcı odaklı yazılımlar geliştiriyorum. Öğrenmeyi seven, takım çalışmasına açık ve çözüm odaklı bir geliştiriciyim."}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium">
        <a
          className="bg-purple-500 text-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none hover:bg-purple-600 focus:scale-110 hover:scale-110 active:scale-105 transition"
          href="#contact"
        >
          {language === "en" ? "Contact me" : "Bana ulaş"} <BsArrowRight />
        </a>

        <a
          className="bg-[#0077B5] text-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none hover:scale-110 active:scale-105 transition cursor-pointer"
          href="https://www.linkedin.com/in/zynpcvsgl"
          target="_blank"
        >
          <BsLinkedin />
          LinkedIn
        </a>

        <a
          className="bg-black text-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none hover:scale-110 active:scale-105 transition cursor-pointer"
          href="https://github.com/zynpcvsgl"
          target="_blank"
        >
          <FaGithubSquare />
          GitHub
        </a>
      </div>

      <p className="mt-6 text-gray-300 text-sm">
        📧 {language === "en" ? "You can also reach me via email:" : "Bana e-posta ile de ulaşabilirsiniz:"}{" "}
        <a
          href="mailto:zynpcvsgl_@hotmail.com"
          className="text-purple-400 underline hover:text-purple-300"
        >
          zynpcvsgl_@hotmail.com
        </a>
      </p>
    </section>
  );
}
