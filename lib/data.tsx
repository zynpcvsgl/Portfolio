import React, { ReactNode } from "react";
import { FaBuilding, FaCode, FaGraduationCap } from "react-icons/fa";

interface Experience {
  title: string;
  location: string;
  description: string;
  icon: ReactNode;
  date: string;
}

export const experiencesData: Experience[] = [
  {
    title: "SCA Social",
    location: "Remote",
    description:
      "Worked on software development tasks as part of a team project, contributing to frontend and backend improvements.",
    icon: React.createElement(FaCode),
    date: "Aug 2024 – Sep 2024",
  },
  {
    title: "Ministry of Environment, Urbanization and Climate Change",
    location: "Izmir",
    description:
      "Developed archive automation systems and improved internal portal integrations during my internship.",
    icon: React.createElement(FaBuilding),
    date: "Jul 2023 – Aug 2023",
  },
  {
    title: "Eastern Mediterranean University",
    location: "Famagusta, Cyprus",
    description:
      "Graduated with a degree in Computer Engineering. Focused on software development, web technologies, and databases.",
    icon: React.createElement(FaGraduationCap),
    date: "2019 – 2025",
  },
  {
    title: "Bornova Anadolu Lisesi",
    location: "Izmir, Turkey",
    description:
      "High school education with a focus on science and foreign languages.",
    icon: React.createElement(FaGraduationCap),
    date: "2015 – 2019",
  },
];
