
const Footer = () => {

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="gradient-tech text-white">
      
    </footer>
  );
}

export default Footer;
