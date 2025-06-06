import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      details: "info@technocommunications.com",
      action: "Send an Email",
      href: "mailto:info@technocommunications.com",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      details: "+91 123-456-7890",
      action: "Make a Call",
      href: "tel:+911234567890",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      details: "Hyderabad, Telangana 500081, India",
      action: "Get Directions",
      href: "https://maps.google.com",
    },
  ];

   export default contactInfo;