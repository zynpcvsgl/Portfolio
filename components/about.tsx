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
          ? "I’m a Computer Engineering graduate focused on building reliable, user-friendly software products. I enjoy turning ideas and requirements into real applications by combining strong fundamentals in web development and databases with modern technologies, while keeping code quality, readability, and maintainability at the center."
          : "Bilgisayar Mühendisliği mezunuyum ve güvenilir, kullanıcı odaklı yazılım ürünleri geliştirmeye odaklanıyorum. Web geliştirme ve veritabanı temellerini modern teknolojilerle birleştirerek fikirleri ve ihtiyaçları gerçek uygulamalara dönüştürmeyi seviyorum; kod kalitesi, okunabilirlik ve sürdürülebilirlik benim için öncelik."}
      </p>

      <p className="mb-3">
        {language === "en"
          ? "I have hands-on experience developing backend services for operational and onboarding flows—designing RESTful APIs, implementing business rules, and integrating database operations. I pay attention to validation, error handling, and edge cases to make systems stable and predictable, and I like structuring code in a clean, scalable way."
          : "Operasyonel ve onboarding akışları için backend servisleri geliştirme konusunda pratik deneyimim var; RESTful API’ler tasarlıyor, iş kurallarını uyguluyor ve veritabanı işlemlerini entegre ediyorum. Sistemlerin stabil ve öngörülebilir olması için doğrulama (validation), hata yönetimi (error handling) ve edge-case’lere önem veriyor; kodu temiz ve ölçeklenebilir şekilde kurgulamayı seviyorum."}
      </p>

      <p className="mb-3">
        {language === "en"
          ? "On the product side, I build modern, responsive interfaces with Next.js and Tailwind CSS and enjoy creating smooth user experiences. I’ve worked on multilingual and dark-mode supported web apps, and I’m comfortable using tools like Git/GitHub, Postman, and deployment workflows to ship features from development to production."
          : "Ürün tarafında Next.js ve Tailwind CSS ile modern, responsive arayüzler geliştiriyor ve akıcı kullanıcı deneyimleri tasarlamaktan keyif alıyorum. Çok dilli (i18n) ve dark mode destekli web uygulamalarında çalıştım; Git/GitHub, Postman ve deployment süreçleriyle geliştirmeden yayına kadar özellik çıkarmaya da aşinayım."}
      </p>

      <p>
        {language === "en"
          ? "I’m currently looking for a junior backend or full-stack role where I can contribute to real products, collaborate closely with a team, and grow through continuous learning. I’m motivated by ownership, clear communication, and delivering user-focused solutions with measurable impact."
          : "Şu anda gerçek ürünlerde katkı sağlayabileceğim, ekip içinde yakın çalışabileceğim ve sürekli öğrenerek gelişebileceğim junior backend veya full-stack roller arıyorum. Sahiplenme, net iletişim ve kullanıcı odaklı çözümleri somut çıktılara dönüştürmek beni motive ediyor."}
      </p>
    </motion.section>
  );
}
