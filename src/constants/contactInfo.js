import { Mail, Phone, MapPin } from 'lucide-react';

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
      details: "202. 2th floor, SCR Tower, Siddhi Vinayak Nagar, Madhapur, Hyderabad, Telangana 500081",
      action: "Get Directions",
      href: "https://maps.app.goo.gl/MBj2o9t6wYEjwVpg8",
    },
  ];

   export default contactInfo;