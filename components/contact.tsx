"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useLanguage } from "@/context/language-context";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{language === "en" ? "Contact" : "İletişim"}</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {language === "en"
          ? "Please contact me directly at "
          : "Benimle doğrudan iletişime geçmek isterseniz "}{" "}
        <a className="underline text-purple-400" href="mailto:zynpcvsgl_@hotmail.com">
          zynpcvsgl_@hotmail.com
        </a>{" "}
        {language === "en" ? "or through this form." : "ya da aşağıdaki formu doldurabilirsiniz."}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={language === "en" ? "Your email" : "E-posta adresiniz"}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={language === "en" ? "Your message" : "Mesajınız"}
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
