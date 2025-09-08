import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id='home' className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white overflow-hidden pt-[100px] pb-8">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-brand-pink blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-navy-light blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-slide-in-left">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-lg font-medium">Digital Innovation Partner</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 animate-fade-in-up">
            We Build Digital Solutions That 
            <span className="gradient-text-accent">
              {" "}Actually Work
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Fresh perspectives, cutting-edge technology, and relentless focus on results. 
            We're here to turn your digital vision into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-accent text-white hover:shadow-pink hover:scale-105 transform transition-all duration-300 font-semibold h-14 rounded-xl px-10 text-lg group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 cursor-pointer [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm h-14 rounded-xl px-10 text-lg">
              See What We Do
            </button>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-gray-400 text-sm">Commitment to Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Available for Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Fast</div>
              <div className="text-gray-400 text-sm">Delivery & Results</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero