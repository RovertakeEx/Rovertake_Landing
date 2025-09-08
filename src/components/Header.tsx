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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-medium border-b border-border"
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                    <h3 className={`${isScrolled ? "text-foreground" : "text-white"} text-2xl font-bold`}>Rovertake</h3>
                    {/* <img src={isScrolled ? logo : logoWhite} alt="Rovertake logo" width={80}/>
                    <img src={logoSharing} className="hidden" alt="Rovertake logo" /> */}
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <button 
                        key={link.name}
                        onClick={() => scrollToSection(link.href)} 
                        className={`${isScrolled ? "text-foreground" : "text-white"} hover:text-rovertake-red transition-colors duration-200 cursor-pointer font-medium`}
                        role="button">{link.name}</button>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 ${isScrolled ? "text-foreground" : "text-white"}`}>
                      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </div>

        {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block px-3 py-2 text-base font-medium cursor-pointer text-foreground hover:text-rovertake-red transition-colors duration-200 w-full text-left"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header