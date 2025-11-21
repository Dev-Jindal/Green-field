import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Event', path: '/event' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#1B4D3E]/90 backdrop-blur-md border-b border-[#e8f5e9]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#e8f5e9] group-hover:bg-white transition-colors">
              <Leaf className="w-6 h-6 text-[#1B4D3E]" />
            </div>
            <span className="text-2xl font-semibold tracking-tight text-white">
              Greenfield <span className="text-[#e8f5e9]">Energy</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-[#e8f5e9]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-[#e8f5e9] transition-all duration-200 ${
                    isActive(link.path)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}

            {/* Schedule a Demo button */}
            <Link
              to="/schedule-demo"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold 
                         rounded-full bg-white text-[#1B4D3E] shadow-md shadow-[#e8f5e9]
                         hover:bg-[#e8f5e9] hover:text-[#1B4D3E] hover:shadow-lg hover:shadow-[#e8f5e9]
                         focus:outline-none focus:ring-2 focus:ring-[#e8f5e9] focus:ring-offset-2
                         transition-all duration-200"
            >
              Schedule a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md 
                       text-white hover:text-[#e8f5e9] hover:bg-[#153c30]
                       focus:outline-none focus:ring-2 focus:ring-[#e8f5e9]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#1B4D3E] border-b border-[#e8f5e9]/30 shadow-lg">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#153c30] text-white'
                    : 'text-white/80 hover:bg-[#153c30] hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Schedule a Demo button */}
            <Link
              to="/schedule-demo"
              onClick={() => setIsOpen(false)}
              className="mt-3 block w-full text-center rounded-full bg-white px-4 py-2.5 
                         text-sm font-semibold text-[#1B4D3E] shadow-md shadow-[#e8f5e9]
                         hover:bg-[#e8f5e9] hover:text-[#1B4D3E] hover:shadow-lg hover:shadow-[#e8f5e9]
                         focus:outline-none focus:ring-2 focus:ring-[#e8f5e9] focus:ring-offset-2
                         transition-all duration-200"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
