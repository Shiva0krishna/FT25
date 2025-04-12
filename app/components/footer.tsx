import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#002347] text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#FF6B35]">Team Full Throttle</h3>
            <p className="text-sm leading-relaxed">
              SRM Institute of Science and Technology
              <br />
              Kattankulathur, Chennai
              <br />
              Tamil Nadu 603203
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about-us" className="hover:text-[#FF6B35] transition">About Us</a></li>
              <li><a href="/contact-us" className="hover:text-[#FF6B35] transition">Contact Us</a></li>
              <li><a href="/our-gallery" className="hover:text-[#FF6B35] transition">Our Gallery</a></li>
              <li><a href="/our-partners" className="hover:text-[#FF6B35] transition">Our Partners</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#FF6B35]" />
                <a href="mailto:contact@teamfullthrottle.com" className="hover:text-[#FF6B35] transition">
                  contact@teamfullthrottle.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#FF6B35]" />
                <span>Automobile Engineering Dept</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-[#FF6B35] hover:bg-[#FF881B] transition">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="p-2 rounded-full bg-[#FF6B35] hover:bg-[#FF881B] transition">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="p-2 rounded-full bg-[#FF6B35] hover:bg-[#FF881B] transition">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#FF6B35]/20 pt-8 text-center text-sm">
          © {new Date().getFullYear()} Team Full Throttle. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;