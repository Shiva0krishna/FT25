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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2a2a56]">Contact Us</h1>
          <p className="text-gray-600 mt-4 max-w-lg mx-auto">
            Feel free to reach out for collaborations, inquiries, or just to say hi!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Address Section with Arrow Marks */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#2a2a56]">Our Address</h2>
            <div className="flex items-start gap-4">
              <span className="text-[#2a2a56] text-2xl">➤</span>
              <p className="text-gray-600 leading-relaxed">
                <strong>Team Full Throttle</strong> ,Automobile Department<br />
                SRM Institute of Science and Technology, <br />
                Kattankulathur, Tamil Nadu, India <br />
                PIN: 603203
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#2a2a56] text-2xl">➤</span>
              <p className="text-gray-600">
                <strong>Email:</strong> contact@fullthrottle.com
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#2a2a56] text-2xl">➤</span>
              <p className="text-gray-600">
                <strong>Phone:</strong> +91 98765 43210
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#2a2a56]">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 mt-2 bg-white text-[#2a2a56] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a2a56] outline-none"
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
                  className="w-full p-3 mt-2 bg-white text-[#2a2a56] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a2a56] outline-none"
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
                  className="w-full p-3 mt-2 bg-white text-[#2a2a56] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a2a56] outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2a2a56] text-white py-3 rounded-lg hover:bg-[#1f1f4b] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
