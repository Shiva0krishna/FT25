"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProjectCard, {
  ProjectCardProps,
} from "./components/project_card/project_card";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  ChevronDown,
  Menu,
  Globe,
  X,
} from "lucide-react";

const GrainOverlay = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-50 pointer-events-none opacity-[0.1]">
      <div
        className="absolute inset-0 mix-blend-overlay"
      />
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "contrast(110%) brightness(100%)",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
};

type BlobPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";

const GradientBlob = ({
  position = "top-right",
}: {
  position?: BlobPosition;
}) => {
  const positionClasses: Record<BlobPosition, string> = {
    "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4",
    "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
    "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
    "bottom-left": "bottom-0 left-0 -translate-x-1/4 translate-y-1/4",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} w-[500px] h-[500px] rounded-full opacity-30 blur-3xl pointer-events-none`}
      style={{
        background:
          "radial-gradient(circle, rgba(204,102,0,0.2) 0%, rgba(204,102,0,0) 70%)",
      }}
    />
  );
};

const Timeline = () => {
  const timelineEvents = [
    {
      year: "2013",
      description:
        "Founded in 2013, Team Full Throttle is driven by a passion for automotive engineering and motorsports. Committed to innovation, research, and hands-on learning, we bridge the gap between theory and practice, fostering a culture of engineering excellence.",
    },
    {
      year: "2015",
      description:
        "By 2015, just a year after our founding, Team Full Throttle took on its first major project—designing our very first go-kart. This milestone transformed theoretical knowledge into real-world application, laying the foundation for continuous innovation and engineering excellence.",
    },
    {
      year: "2016",
      description:
        "Team Full Throttle demonstrated outstanding performance at the official Go-Kart design, fabrication, and testing competition held at Lovely Professional University, Punjab, from March 18th to 21st, 2016.",
    },
    {
      year: "2017",
      description:
        "Team Full Throttle showcased exceptional engineering and racing prowess at the official Go-Kart design, fabrication, and testing competition held at Kari Motor Speedway, Coimbatore, from January 14th to 17th, 2017.",
    },
    {
      year: "2018",
      description:
        "In 2018, Team Full Throttle introduced Monster 3.0, a high-performance go-kart engineered for speed and precision. With advanced design and aerodynamics, it showcased the team's innovation and excellence in competitive racing.",
    },
    {
      year: "2020",
      description:
        "The COVID-19 pandemic forced Team Full Throttle to shut down due to restrictions on gatherings, workshop access, and competitions. Despite the setback, the team’s spirit of innovation remained strong.",
    },
    {
      year: "2025",
      description:
        "After a long pause due to COVID-19, Team Full Throttle is making a comeback in 2025! With renewed passion, fresh talent, and a drive to dominate the track, we're ready to race again. Full speed ahead!",
    },
  ];

  return (
    <section className="relative py-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#00172D] mb-12">
          Our Team History
        </h2>
        <div className="relative border-l-2 border-[#FD7702]">
          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className={`mb-10 ml-6 ${
                index % 2 === 0 ? "timeline-item-left" : "timeline-item-right"
              }`}
            >
              <div className="absolute w-6 h-6 bg-[#FD7702] rounded-full -left-3 border-2 border-white"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-[#FD7702]">
                  {event.year}
                </h3>
                <p className="text-[#00172D] mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((position / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences: Array<ProjectCardProps> = [
    {
      id: "00",
      title: "GO_KARTING",
      subtitle: "CONTRACT SOFTWARE ENGINEER",
      period: "Mar. 2025 - Present",
      description:
        "Collaborating with the Browserbase team to build a cool new tool :)",
      tags: ["Browser Agents"],
      imageSrc: "/img1.jpg",
      links: {
        // github: "#",
        live: "/",
      },
      metrics: {
        // reliability: "+50%",
        // latency: "-27%",
        // "cognitive load": "-40%",
      },
    },
  ];
  const skills = [
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: "4 years" },
        { name: "Python", level: "5 years" },
        { name: "PostgreSQL", level: "2 years" },
        { name: "SQL", level: "2 years" },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Docker", level: "1 year" },
        { name: "AWS", level: "1 year" },
        { name: "CI/CD", level: "4 years" },
        { name: "Git", level: "4+ years" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#00172D] overflow-hidden">
      <div
        className="fixed inset-0 z-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(0,25,51,0.1) 0%, rgba(0,25,51,0) 100%)",
          backgroundSize: "100% 100%",
        }}
      />

      <GrainOverlay />

      <Navbar />

      <div className="relative z-10 min-h-screen backdrop-contrast-110 backdrop-brightness-100">
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, rgba(204,102,0,0.15) 0%, transparent 70%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl mx-auto px-4 py-32 z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mono text-sm text-[#E49B0F] mb-4 tracking-widest"
            >
              PUSHING THE BOUNDARIES OF GO-KARTING EXCELLENCE
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight leading-tight text-[##002347]"
            >
              Hey, We are Team-FT25
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-[##002347] text-xl md:text-2xl max-w-2xl mb-8 font-light"
            >
              We're passionate about building cutting-edge automobile projects, leveraging modern technology to deliver high-performance solutions for an unparalleled go-karting experience like never before.
            </motion.p>
          </motion.div>
        </section>

        <Timeline />

        <section id="experience" className="relative min-h-screen py-32">
          <div className="max-w-7xl mx-auto px-4 z-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 pb-4"
            >
              <div className="mono text-sm text-[#002240] mb-4 tracking-widest">
                
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight mb-16 tracking-tight text-[#00172D]">
                
              </h2>
            </motion.div>

            <div className="space-y-32 md:ml-24">
              {experiences.map((experience) => (
                <ProjectCard key={experience.id} {...experience} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
