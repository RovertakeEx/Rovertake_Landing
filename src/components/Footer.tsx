import navLinks from "../data/navLinks";
import services from "../data/services";
import { Linkedin, Twitter, Facebook, Mail } from "lucide-react";
import logoFullWhite from '../assets/img/rovertake-logo-full-white.png'

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              onClick={() => scrollToSection("#home")}
              src={logoFullWhite} 
              alt="Rovertake" 
              className="h-6 w-auto mb-6 cursor-pointer"
            />
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Your trusted partner for digital innovation, transformation, and growth. 
              We help businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/rovertake/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-accent/20 transition-colors duration-300 group">
                <Linkedin className="h-5 w-5 text-white group-hover:text-accent transition-colors" />
              </a>
              <a href="https://x.com/_Rovertake" target="_blank" className="p-2 rounded-lg bg-white/10 hover:bg-accent/20 transition-colors duration-300 group">
                <Twitter className="h-5 w-5 text-white group-hover:text-accent transition-colors" />
              </a>
              <a href="https://www.facebook.com/people/Rovertake/61576206402831/" target="_blank" className="p-2 rounded-lg bg-white/10 hover:bg-accent/20 transition-colors duration-300 group">
                <Facebook className="h-5 w-5 text-white group-hover:text-accent transition-colors" />
              </a>
              <a href="mailto:info@rovertake.com" target="_blank" className="p-2 rounded-lg bg-white/10 hover:bg-accent/20 transition-colors duration-300 group">
                <Mail className="h-5 w-5 text-white group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    onClick={() => scrollToSection(link.href)} 
                    className="text-gray-300 hover:text-accent cursor-pointer transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <a 
                    onClick={() => scrollToSection("#services")}
                    className="text-gray-300 hover:text-accent cursor-pointer transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Rovertake. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors duration-300">
                Terms of Service
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors duration-300">
                Cookie Policy
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
