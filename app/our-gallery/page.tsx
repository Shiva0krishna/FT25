import Footer from "../components/footer";
import Navbar from "../components/navbar";

const teamMembers = [
  { name: "Dheeraj", role: "Team Leader", image: "/browserbase.png" },
  { name: "Jane Smith", role: "Driver", image: "/images/team2.jpg" },
  { name: "Mike Johnson", role: "Mechanic", image: "/images/team3.jpg" },
  { name: "Emily Davis", role: "Aerodynamics Engineer", image: "/images/team4.jpg" },
  { name: "Chris Brown", role: "Battery Management", image: "/images/team5.jpg" },
  { name: "Sarah Wilson", role: "Chassis Designer", image: "/images/team6.jpg" },
  { name: "David Martinez", role: "Electronics Engineer", image: "/images/team7.jpg" },
  { name: "Sophia Lee", role: "Marketing & Sponsorship", image: "/images/team8.jpg" },
];

const OurGallery = () => {
  return (
    <div className="min-h-screen bg-white text-[#2a2a56]">
      {/* Navbar */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-32">
        <h1 className="text-4xl font-light text-[#FF6B35]">Our Go-Kart Team</h1>
        <p className="text-gray-600 mt-4">
          Meet our dedicated team members who bring passion and expertise to our go-kart project.
        </p>
        
        {/* Team Members Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#FF6B35]/10 p-4 rounded-lg text-center border border-[#FF6B35]/50">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h2 className="mt-4 text-lg font-semibold text-[#2a2a56]">{member.name}</h2>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Go-Kart Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-light text-[#FF6B35]">Gallery</h2>
        <p className="text-gray-600 mt-2">Take a look at our go-kart in action.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <img src="/img1.jpg" alt="Go-Kart 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <img src="/img2.jpg" alt="Go-Kart 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <img src="/img3.jpg" alt="Go-Kart 3" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <div className="bg-[#001f3f] w-full h-64 rounded-lg shadow-md flex items-center justify-center">
            <img src="/logo.png" alt="Go-Kart 4" className="h-full object-contain rounded-lg" />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurGallery;
