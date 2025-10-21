"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import ScrollBar from "@/components/ScrollBar";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Project1 from "@/components/Project1";
import Project2 from "@/components/Project2";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("#intro");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = "#" + entry.target.id;
            setCurrentSection(id);
            window.history.replaceState(null, "", id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section id="intro" className="h-screen snap-start">
        <Header />
      </section>

      <section
        id="project"
        className="h-screen snap-start bg-[var(--color-bg)] flex items-center justify-center rounded-t-[3rem] rounded-b-[3rem] shadow-xl z-20 relative"
      >
        <Project1 />
      </section>

      <section
        id="project2"
        className="h-screen snap-start bg-[var(--color-bg)]  flex items-center justify-center rounded-t-[3rem] rounded-b-[3rem] shadow-xl z-20 relative"
      >
        <Project2 />
      </section>

      <section
        id="skills"
        className="h-screen snap-start bg-[var(--color-bg-dark)] text-[var(--color-text-inverse)]  flex items-center justify-center rounded-t-[3rem] rounded-b-[3rem] shadow-xl z-30 relative"
      >
        <Skills />
      </section>

      <section
        id="experience"
        className="h-screen snap-start bg-primary  flex items-center justify-center rounded-t-[3rem] rounded-b-[3rem] shadow-xl z-30 relative"
      >
        <Experience />
      </section>

      <section
        id="contact"
        className="bg-[var(--color-bg)] h-screen snap-start flex items-center justify-center z-40 relative"
      >
        <Contact />
      </section>

      <div className="fixed z-50 right-6 top-6 md:top-auto md:bottom-1/3">
        <ScrollBar currentSection={currentSection} />
      </div>
    </div>
  );
}
