import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import navLinks from "../data/navLinks";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className={`transition-all duration-300 fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h3 className={`${isScrolled ? "text-foreground" : "text-gray-300"} text-2xl font-bold`}>Rovertake</h3>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (                
                <a 
                key={link.name}
                onClick={() => scrollToSection(link.href)} 
                className={`${isScrolled ? "text-foreground" : "text-gray-300"} hover:text-accent transition-colors duration-300 font-medium`}>
                  {link.name}
                </a>
              ))}
              <button className="inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap text-sm [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-accent text-white hover:shadow-pink hover:scale-105 transform transition-all duration-300 font-semibold h-11 rounded-lg px-8">Start a Project</button>
            </div>
            <div className="md:hidden">
              <button className={`${isScrolled ? "text-foreground" : "text-gray-300"} inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            </div>
          </div>
          {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (                
                  <a 
                  key={link.name}
                  onClick={() => scrollToSection(link.href)} 
                  className={`${isScrolled ? "text-foreground" : "text-gray-300"} hover:text-accent transition-colors duration-300 font-medium`}>
                    {link.name}
                  </a>
                ))}
                <button className="inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap text-sm [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-accent text-white hover:shadow-pink hover:scale-105 transform transition-all duration-300 font-semibold h-11 rounded-lg px-8">Start a Project</button>
            </div>
          </div>
        )}
        </nav>
    </header>
  )
}

export default Header