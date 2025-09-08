import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AppSettings {
  company: {
    name: string;
    phone: string;
    email: string;
    location: string;
    hours: string;
  };
  socials: {
    whatsapp: string;
    facebook: string;
    instagram: string;
    tiktok: string;
  };
  contactInfo: {
    icon: LucideIcon; 
    type: string;
    value: string;
    href?: string;
  }[];
}

const appSettings: AppSettings = {
  company: {
    name: "Rovertake",
    phone: "+94 71 710 0072",
    email: "info@rovertake.com",
    location: "26/1, Peraru, Kantale",
    hours: "9 AM - 5 PM",
  },
  socials: {
    whatsapp: "https://wa.me/94717100072",
    facebook: "https://www.facebook.com/p/rovertake/",
    instagram: "https://instagram.com/rovertake",
    tiktok: "https://www.tiktok.com/@rovertake",
  },
  contactInfo: [
    { icon: Phone, type: "phone", value: "+94 71 710 0072", href: "tel:+94717100072" },
    { icon: Mail, type: "email", value: "info@rovertake.com", href: "mailto:info@rovertake.com" },
    { icon: MapPin, type: "address", value: "26/1, Peraru, Kantale" },
    { icon: Clock, type: "hours", value: "Mon-Fri: 9AM-5PM" },
  ]
};

export default appSettings;

