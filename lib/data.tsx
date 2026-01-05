import React, { ReactNode } from "react";
import { FaBuilding, FaCode, FaGraduationCap } from "react-icons/fa";

export const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Projects", url: "/projects" },
  { name: "Skills", url: "/skills" },
  { name: "Experience", url: "/experience" },
  { name: "Contact", url: "/contact" },
  { name: "Blog", url: "/blog" },
  { name: "Resume", url: "/resume" },
  { name: "CV (İngilizce)", url: "/zeynep_cv_en.pdf" },
  { name: "CV (Türkçe)", url: "/zeynep_cv_tr.pdf" },
  { name: "Testimonials", url: "/testimonials" },
  { name: "GitHub", url: "https://github.com/zynpcvsgl" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/zynpcvsgl" }
];

interface Experience {
  title: string;
  location: string;
  description: string;
  icon: ReactNode;
  date: string;
}

export const experiencesData = {
  en: [
    {
      title: "Karanix Software Solutions",
      location: "Remote / Turkey",
      description:
        "Developed backend APIs for Support Panel and Onboarding flows. Implemented endpoints for application create/update, IBAN handling, contract approval, package & add-on selection, and domain selection/availability checks. Built support workflows such as status-based listing, detail views, and submit/approve/reject actions using NestJS (TypeScript), Prisma, and PostgreSQL with strong validation and error handling.",
      icon: React.createElement(FaCode),
      date: "Dec 2025 - Dec 2025"
    },
    {
      title: "SCA Social",
      location: "Remote",
      description:
        "Completed training in management, marketing, and digital transformation. Led a branding project that increased engagement by 15%. Organized a 5-person team to conduct market analysis and improved client satisfaction by 10%.",
      icon: React.createElement(FaCode),
      date: "Aug 2024 – Sep 2024"
    },
    {
      title: "Ministry of Environment, Urbanization and Climate Change",
      location: "Izmir",
      description:
        "Developed archive automation systems and improved internal portal integrations during my internship.",
      icon: React.createElement(FaBuilding),
      date: "Jul 2023 – Aug 2023"
    },
    {
      title: "Eastern Mediterranean University",
      location: "Famagusta, Cyprus",
      description:
        "Graduated with a degree in Computer Engineering. Focused on software development, web technologies, and databases.",
      icon: React.createElement(FaGraduationCap),
      date: "2019 – 2025"
    },
    {
      title: "Bornova Anadolu Lisesi",
      location: "Izmir, Turkey",
      description:
        "High school education with a focus on science and foreign languages.",
      icon: React.createElement(FaGraduationCap),
      date: "2013 – 2017"
    }
  ],
  tr: [
    {
      title: "Karanix Software Solutions",
      location: "Uzaktan / Türkiye",
      description:
        "Support Panel ve Onboarding akışları için backend API’leri geliştirdim. Başvuru oluşturma/güncelleme, IBAN işlemleri, sözleşme onayı, paket & eklenti seçimi ile domain seçimi/uygunluk kontrolü gibi endpoint’leri hayata geçirdim. NestJS (TypeScript), Prisma ve PostgreSQL kullanarak durum bazlı listeleme, detay görüntüleme ve gönder/onayla/reddet aksiyonları gibi support akışlarını güçlü doğrulama ve hata yönetimiyle geliştirdim.",
      icon: React.createElement(FaCode),
      date: "Ara 2025 - Ara 2025"
    },
    {
      title: "SCA Social",
      location: "Uzaktan",
      description:
        "Yönetim, pazarlama ve dijital dönüşüm alanlarında eğitim aldım. Marka kimliği projesi yürüterek etkileşimi %15 artırdım. 5 kişilik bir ekiple pazar analizi gerçekleştirdim ve müşteri memnuniyetini %10 artırdım.",
      icon: React.createElement(FaCode),
      date: "Ağu 2024 – Eyl 2024"
    },
    {
      title: "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı",
      location: "İzmir",
      description:
        "Arşiv otomasyon sistemleri geliştirerek kurum içi portal entegrasyonları üzerine çalıştım.",
      icon: React.createElement(FaBuilding),
      date: "Tem 2023 – Ağu 2023"
    },
    {
      title: "Doğu Akdeniz Üniversitesi",
      location: "Gazimağusa, KKTC",
      description:
        "Bilgisayar Mühendisliği bölümünden mezun oldum. Yazılım geliştirme, web teknolojileri ve veritabanı konularına odaklandım.",
      icon: React.createElement(FaGraduationCap),
      date: "2019 – 2025"
    },
    {
      title: "Bornova Anadolu Lisesi",
      location: "İzmir",
      description: "Fen ve yabancı dil ağırlıklı lise eğitimi aldım.",
      icon: React.createElement(FaGraduationCap),
      date: "2013 – 2017"
    }
  ]
};
