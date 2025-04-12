"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white text-[#2a2a56]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF6B35]">Get in Touch</h1>
          <p className="text-gray-600 mt-4 max-w-lg mx-auto">
            Feel free to reach out for collaborations, inquiries, or just to say hi!
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-8 max-w-2xl mx-auto bg-[#FF6B35]/10 p-6 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#2a2a56]">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 mt-2 bg-white text-[#2a2a56] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2a2a56]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full p-3 mt-2 bg-white text-[#2a2a56] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2a2a56]">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={4}
                className="w-full p-3 mt-2 bg-white text-[#2a2a56] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF6B35] text-white py-3 rounded-lg hover:bg-[#e65a2d] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        {/* <div className="mt-12 text-center">
          <h3 className="text-xl font-medium text-[#2a2a56]">Let's Connect</h3>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 hover:opacity-80" />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" className="w-8 h-8 hover:opacity-80" />
            </a>
            <a href="mailto:your@email.com">
              <img src="/email.svg" alt="Email" className="w-8 h-8 hover:opacity-80" />
            </a>
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
