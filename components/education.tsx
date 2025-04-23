"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import { useTheme } from "@/context/theme-context";

export default function Education() {
  const { theme } = useTheme();

  return (
    <section id="education" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Education</SectionHeading>
      <VerticalTimeline lineColor="">
        <VerticalTimelineElement
          contentStyle={{
            background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
            boxShadow: "none",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight:
              theme === "light"
                ? "0.4rem solid #9ca3af"
                : "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          date="2019 – 2025"
          icon={<FaGraduationCap />}
          iconStyle={{
            background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
            fontSize: "1.5rem",
          }}
        >
          <h3 className="font-semibold capitalize">Eastern Mediterranean University</h3>
          <p className="text-sm text-gray-400 !mt-0">Famagusta, Cyprus</p>
          <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            Graduated from the Computer Engineering program. Specialized in software development,
            web technologies and databases.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
            boxShadow: "none",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight:
              theme === "light"
                ? "0.4rem solid #9ca3af"
                : "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          date="2013 – 2017"
          icon={<FaGraduationCap />}
          iconStyle={{
            background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
            fontSize: "1.5rem",
          }}
        >
          <h3 className="font-semibold capitalize">Bornova Anadolu Lisesi</h3>
          <p className="text-sm text-gray-400 !mt-0">Izmir, Turkey</p>
          <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            High school education focused on science and foreign languages.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
