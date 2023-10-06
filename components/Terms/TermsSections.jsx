"use client";

import React, { useState, useEffect } from "react";

const TermsSections = ({ termsData }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:gap-x-32 md:mx-32 py-12 flex flex-col gap-y-8 md:flex-row items-start">
      {/* Left Sidebar */}
      <div className="w-1/4 md:sticky md:top-0 mx-auto items-center md:left-36 bg-gray-100 pt-8">
        <p className="text-xl font-bold mb-4 roboto700">Content</p>
        <div className="flex flex-col w-fit md:gap-y-2 roboto400">
          {termsData.map((dt, i) => (
            <a
              href={`#${dt.title}`}
              key={i}
              className={activeSection === dt.title ? "active" : ""}
            >
              {dt.title}
            </a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/5 mx-auto items-center flex flex-col gap-y-8 bg-white p-8 mb-24">
        {termsData.map((dt, i) => (
          <section id={dt.title} className="flex flex-col gap-y-2" key={i}>
            <h1 className="robot-bold text-2xl">{dt.title}</h1>
            {dt.desc.split("\n").map((line, index) => (
              <p className="robot-regular text-sm" key={index}>
                {line}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermsSections;
