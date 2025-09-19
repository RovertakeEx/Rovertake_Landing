import { useState } from "react";
import { toast } from "react-toastify";

import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  Send
} from "lucide-react";

const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phoneno: "",
    message: ""
  });

   const clearFields = () => {
    setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phoneno: "",
        message: ""
      });
  };

  const phoneNumber = "94717100072";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();

     if (!formData.firstName || !formData.email || !formData.phoneno || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Format message
    const message = `
    New Inquiry
    
    Name: ${formData.firstName} ${formData.lastName}
    Email: ${formData.email}
    Phone: ${formData.phoneno}
    Company: ${formData.company}
    Message: 
    ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    
    // Detect if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const url = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}` // opens WhatsApp app on mobile
      : `https://wa.me/${phoneNumber}?text=${encodedMessage}`; // opens WhatsApp Web/Desktop

    toast.success("Redirecting to WhatsApp...");
    window.open(url, "_blank");
    clearFields();
  };

  const inputClass = "w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-border/50 focus:border-accent";

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm shadow-elegant border-border/50 animate-fade-in-up">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="tracking-tight text-2xl font-bold text-foreground">Start Your Project</h3>
            </div>
            <div className="p-6 pt-0 space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-3">
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name <span className="text-red-500">*</span></label>
                    <input placeholder="John" className={`flex h-10 ${inputClass}`} 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}/>
                  </div>
                  <div className="mb-3">
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <input placeholder="Doe" className={`flex h-10 ${inputClass}`} 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}/>
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="text-sm font-medium text-foreground mb-2 block">Email <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="john@company.com" className={`flex h-10 ${inputClass}`} 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}/>
                </div>
                
                <div className="mb-3">
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone No <span className="text-red-500">*</span></label>
                  <input placeholder="Your Mobile No" className={`flex h-10 ${inputClass}`} 
                  id="phoneno" 
                  name="phoneno" 
                  value={formData.phoneno}
                  onChange={handleChange}/>
                </div>

                <div className="mb-3">
                  <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                  <input placeholder="Your Company" className={`flex h-10 ${inputClass}`} 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}/>
                </div>
                
                <div className="mb-3">
                  <label className="text-sm font-medium text-foreground mb-2 block">Message <span className="text-red-500">*</span></label>
                  <textarea 
                  placeholder="Tell us about your project..." 
                  className={`flex ${inputClass} min-h-[120px] resize-none`}
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}></textarea>
                </div>
                
                <button type="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-accent text-white hover:shadow-pink hover:scale-105 transform transition-all duration-300 font-semibold h-11 rounded-md px-8 w-full group">
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking to transform your business digitally or need expert guidance on your next project, 
                we're here to help. Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">info@rovertake.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+94 71 7100072</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Colombo • Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border/50">
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/rovertake/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors duration-300 group">
                  <Linkedin className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://x.com/_rovertake" target="_blank" className="p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors duration-300 group">
                  <Twitter className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.facebook.com/people/Rovertake/61576206402831/" target="_blank" className="p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors duration-300 group">
                  <Facebook className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Founder CTA */}
            <div className="rounded-xl shadow-sm bg-gradient-hero text-white border-0">
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">Meet Our Founder</h4>
                <p className="text-gray-300 mb-4">
                  Connect directly with Rifnaz, our Founder and CEO, to discuss your vision and explore partnership opportunities.
                </p>
                <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm h-9 rounded-lg px-3" href="mailto:rifnaz@rovertake.com" target="_blank" rel="noopener noreferrer" title="rifnaz@rovertake.com">
                    Book an Appointment
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact