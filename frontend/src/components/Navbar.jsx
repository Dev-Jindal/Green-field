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
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors">
              <Leaf className="w-6 h-6 text-green-700" />
            </div>
            <span className="text-2xl font-semibold tracking-tight text-gray-900">
              Greenfield <span className="text-green-700">Energy</span>
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
                    ? 'text-green-700'
                    : 'text-gray-700 hover:text-green-700'
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-green-600 transition-all duration-200 ${
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
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full 
                         bg-green-600 text-white shadow-md shadow-green-200 
                         hover:bg-green-700 hover:shadow-lg hover:shadow-green-200
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                         transition-all duration-200"
            >
              Schedule a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md 
                       text-gray-700 hover:text-green-700 hover:bg-green-50 
                       focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-green-100 shadow-lg">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-green-50 text-green-800'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Schedule a Demo button */}
            <Link
              to="/schedule-demo"
              onClick={() => setIsOpen(false)}
              className="mt-3 block w-full text-center rounded-full bg-green-600 px-4 py-2.5 
                         text-sm font-semibold text-white shadow-md shadow-green-200 
                         hover:bg-green-700 hover:shadow-lg hover:shadow-green-200
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
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
