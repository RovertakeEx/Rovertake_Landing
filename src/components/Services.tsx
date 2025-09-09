import services from "../data/services"
import { ArrowRight } from "lucide-react";

const Services = () => {

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-accent/20 animate-fade-in-up">
              <div className="flex flex-col space-y-1.5 p-6 pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-accent"/>
                  </div>
                  <div>
                    <h3 className="tracking-tight text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
              <div className="p-6 pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 cursor-pointer [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-10 px-4 py-2 group/btn text-accent hover:!text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services