
const Hero = () => {

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id='home' className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden ">

    </section>
  )
}

export default Hero