"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

export default function About() {
  const { ref } = useSectionInView("About");
  const { language } = useLanguage();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{language === "en" ? "About me" : "Hakkımda"}</SectionHeading>
      <p className="mb-3">
        {language === "en"
          ? "I graduated from Eastern Mediterranean University with a degree in Computer Engineering. During my studies, I focused on software development, web technologies, and database systems, gaining hands-on experience through various projects and internships."
          : "Doğu Akdeniz Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum. Eğitimim süresince yazılım geliştirme, web teknolojileri ve veritabanı sistemlerine odaklandım; çeşitli projeler ve stajlarla pratik deneyim kazandım."}
      </p>
      <p>
        {language === "en"
          ? "I enjoy building creative and functional applications using .NET, React Native, and modern web technologies. I’m currently seeking junior developer roles where I can contribute and grow."
          : ".NET, React Native ve modern web teknolojileriyle yaratıcı ve işlevsel uygulamalar geliştirmekten keyif alıyorum. Şu anda katkı sağlayabileceğim ve gelişebileceğim junior yazılım geliştirici pozisyonları arıyorum."}
      </p>
    </motion.section>
  );
}
