import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
             Greenfield Oil and <span className="text-green-500">Trading Services Pvt. Ltd</span>
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Leading provider of innovative engineering consultancy and software solutions
              for the oil and gas industry. Committed to sustainable and efficient energy management.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/greenfield-oil-and-trading-services/" className="hover:text-green-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-green-500 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-green-500 transition-colors">Services</a></li>
              <li><a href="/products" className="hover:text-green-500 transition-colors">Products</a></li>
              <li><a href="/contact" className="hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-500 mt-0.5" />
                <span className="text-sm">support@greenfield.energy</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-500 mt-0.5" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5" />
                <span className="text-sm">Global Operations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Greenfield Oil and Trading Services Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
