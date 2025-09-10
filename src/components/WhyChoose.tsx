import advantages from '../data/advantages'

const WhyChoose = () => {
  
  return (
    <section className="py-24 bg-gradient-subtle" id='whychoose'>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-accent">Rovertake</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={advantage.title} className="rounded-lg border bg-card text-card-foreground shadow-sm group text-center hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-accent/20 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-8">
                <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 inline-flex mb-6">
                  <advantage.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-hero rounded-2xl p-12 text-white animate-fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-gray-300">Commitment</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">Fast</div>
              <div className="text-gray-300">Delivery Promise</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10+</div>
              <div className="text-gray-300">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose