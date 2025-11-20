import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SisuniImage from "../assets/Sisuni.png";
import { MoveRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", text: "Launchpad" },
  { to: "/services", text: "Services" },
  { to: "/digital-garden", text: "Digital Garden" },
  { to: "/impact", text: "Impact" },
  { to: "/careers", text: "Future With Us" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (to) => {
    if (to === "/services" && location.pathname === "/services") {
      
      window.location.reload();
    } else {
      navigate(to);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed z-50 w-full flex items-center justify-center py-4 pt-0">
        <div className="w-full max-w-7xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg flex justify-between items-center py-1 px-6">
          <Link to="/" className="flex items-center space-x-2">
            <img
    src={SisuniImage}
    alt="Sisuni Infotech"
    className="h-14 w-14 object-contain"
  />

  <span className="text-xl sm:text-2xl font-semibold tracking-wide text-gray-800">
    <span className="text-gray-900">isuni</span>
    <span className="text-gray-500"> Infotech</span>
  </span>
           
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <button
                  onClick={() => handleLinkClick(link.to)}
                  className="text-gray-800 hover:underline transition"
                >
                  {link.text}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="text-gray-800 border-2 border-gray-800 rounded-md px-4 py-2 flex items-center gap-2"
            >
              Let's Talk <MoveRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

     
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-sm flex flex-col items-center justify-center"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <button
                    onClick={() => handleLinkClick(link.to)}
                    className="text-white text-3xl font-light hover:underline"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
              <li className="pt-8">
                <Link
                  to="/contact"
                  className="text-white border-2 border-white rounded-md px-6 py-3 flex items-center gap-2 text-xl"
                  onClick={toggleMenu}
                >
                  Let's Talk <MoveRight size={18} />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}