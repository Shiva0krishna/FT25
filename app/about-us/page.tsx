'use client';

import { motion } from 'framer-motion';
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const AboutUs = () => {
  const slideUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-white text-[#2a2a56]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="text-center py-12 space-y-4"
        >
          <motion.h1 
            variants={slideUp}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FF881B] bg-clip-text text-transparent"
          >
            Team Full Throttle
          </motion.h1>
          <motion.p 
            variants={slideUp}
            className="text-lg md:text-xl text-[#2a2a56] mt-4 font-medium"
          >
            SRMIST KTR · Go-Kart Racing Excellence Since <strong>2014</strong>
          </motion.p>
        </motion.div>

        {/* About Section */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={slideUp} className="space-y-6">
            <div className="border-l-4 border-[#FF6B35] pl-4">
              <h2 className="text-3xl font-bold text-[#2a2a56]">About Us</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              <strong>Team Full Throttle</strong> is a dynamic and passionate group of 
              student engineers, designers, and automotive enthusiasts from 
              <strong> SRMIST, KTR</strong>, dedicated to pushing the boundaries of 
              automotive innovation. Established in <strong>2014</strong>, our team has 
              a rich legacy of excellence in motorsports engineering. We've participated 
              in numerous national and international competitions, consistently 
              showcasing our technical expertise and racing prowess.
            </p>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            className="p-2 rounded-2xl shadow-lg"
          >
            <img 
              src="/img3.jpg" 
              alt="Go-Kart Team"
              className="rounded-xl w-full h-auto max-h-96 object-cover"
            />
          </motion.div>
        </motion.section>

        {/* Mission Section */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative py-16"
        >
          <div className="relative max-w-4xl mx-auto px-4">
            <motion.div 
              variants={slideUp}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-[#FF6B35]">Our Mission</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  To design and develop <strong>high-performance ICE go-karts</strong> 
                  that balance speed, efficiency, and reliability through rigorous 
                  research, simulation, and prototyping. We push karting technology 
                  limits while promoting <strong>innovation</strong> and 
                  <strong>sustainability</strong> in motorsports.
                </p>
              </div>
              <div className="bg-[#FF6B35] text-white p-8 rounded-2xl shadow-xl md:w-96">
                <blockquote className="text-2xl font-light italic">
                  “Driving Talents Forging Leaders”
                </blockquote>
                <p className="mt-4 font-medium text-center">Our Guiding Motto</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Department & Institute Section */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div 
            variants={slideUp}
            className="bg-white p-8 rounded-2xl border border-gray-300 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#FF6B35] rounded-lg text-white">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2a2a56]">Our Department</h3>
            </div>
            <p className="leading-relaxed text-gray-700">
              The <strong>Department of Automobile Engineering</strong> at SRMIST KTR, 
              established in <strong>2004</strong>, features:
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li><strong>20+</strong> Faculty Members</li>
                <li><strong>300+</strong> Students & Researchers</li>
                <li><strong>18 Years</strong> of Academic Excellence</li>
                <li>State-of-the-art Research Facilities</li>
              </ul>
            </p>
          </motion.div>

          <motion.div 
            variants={slideUp}
            className="bg-white p-8 rounded-2xl border border-gray-300 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#2a2a56] rounded-lg text-white">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2a2a56]">Our Institute</h3>
            </div>
            <p className="leading-relaxed text-gray-700">
              <strong>SRMIST</strong> is a premier Indian university renowned for:
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Cutting-edge Research Facilities</li>
                <li><strong>150+</strong> Academic Programs</li>
                <li>Global Industry Collaborations</li>
                <li><strong>25,000+</strong> Students Nationwide</li>
              </ul>
            </p>
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;