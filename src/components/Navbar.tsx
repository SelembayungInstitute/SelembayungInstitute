import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Lokasi Pelatihan", path: "/training-locations" },
    { name: "Galeri", path: "/gallery" },
    { name: "Kontak", path: "/contact" },
    { name: "Syarat & Ketentuan", path: "/terms" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Content */}
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="src/img/logo.png"
              alt="Selembayung Institute Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-lg sm:text-xl font-semibold text-gray-800 tracking-tight">
                Selembayung
              </h1>
              <h1 className="text-lg sm:text-xl font-semibold text-gray-800 tracking-tight">
                Institute
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                  isActive(item.path)
                    ? "bg-green-500 text-white"
                    : "text-gray-700 hover:bg-green-100 hover:text-green-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://lynk.id/selembayunginstituteriau"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive(item.path)
                  ? "bg-green-500 text-white"
                  : "text-gray-700 hover:bg-green-100 hover:text-green-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://lynk.id/selembayunginstituteriau"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-5 py-2 rounded-full font-semibold text-base hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition mt-2"
          >
            Daftar Sekarang
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
