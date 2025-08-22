import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Us",
    details: "info@technocommunicationsglobal.com",
    action: "Send an Email",
    href: "mailto:info@technocommunicationsglobal.com",
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Call Us",
    details: "+918019316555",
    action: "Make a Call",
    href: "tel:+918019316555",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Visit Us",
    details:
      "Address: 2nd Floor, SCR Towers, 202, above Rajesh Motors, Siddhi Vinayak Nagar, Madhapur, Khanammet, Hyderabad, Telangana 500081",
    action: "Get Directions",
    href: "https://www.google.com/maps/place/Techno+Communications+Global/@17.4543671,78.387837,17z/data=!4m6!3m5!1s0x2d97a252ee73572b:0xda73b96da9daabac!8m2!3d17.4543671!4d78.387837!16s%2Fg%2F11xsjg5lp5?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D",
  },
];

export default contactInfo;
