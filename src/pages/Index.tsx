import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
//import Portfolio from "../components/Portfolio";
import WhyChoose from '../components/WhyChoose';
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      {/* <Portfolio/> */}
      <WhyChoose />
      <Contact />
    </div>
  )
}

export default Index