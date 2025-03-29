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
