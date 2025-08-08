import {
  Code,
  Settings,
  Wrench,
  Bug,
  Monitor,
  Server,
  Users,
  FileCode,
  LifeBuoy,
} from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Software Development",
    description:
      "Tailor-made software solutions designed to meet unique business requirements.",
    subServices: [
      {
        title: "Business Software",
        description:
          "Custom ERP, CRM, and domain-specific tools to streamline operations.",
      },
      {
        title: "Mobile & Web Apps",
        description:
          "Cross-platform applications with modern UI/UX and scalability.",
      },
      {
        title: "Embedded Systems",
        description:
          "Firmware and software solutions for hardware-integrated systems.",
      },
    ],
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Software Maintenance & Support",
    description:
      "End-to-end software lifecycle support to ensure performance and uptime.",
    subServices: [
      {
        title: "Bug Fixing & Patch Management",
        description: "Timely resolution of issues and vulnerabilities.",
      },
      {
        title: "Feature Enhancements",
        description: "Continuous improvement of existing software systems.",
      },
    ],
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "System Integration Services",
    description:
      "Seamless integration of various software and hardware components.",
    subServices: [
      {
        title: "API Integration",
        description: "Link internal and external systems with secure APIs.",
      },
      {
        title: "Legacy System Upgrades",
        description:
          "Modernize existing systems while retaining business continuity.",
      },
    ],
  },
  {
    icon: <Bug className="w-8 h-8" />,
    title: "Software Testing & QA",
    description:
      "Comprehensive testing services for reliable and secure applications.",
    subServices: [
      {
        title: "Manual & Automated Testing",
        description: "Ensure product quality through rigorous testing cycles.",
      },
      {
        title: "Performance & Load Testing",
        description: "Validate stability under real-world conditions.",
      },
    ],
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "UI/UX Design Services",
    description:
      "Intuitive user experiences and attractive interfaces for software products.",
    subServices: [
      {
        title: "User-Centric Design",
        description: "Design interfaces that improve usability and engagement.",
      },
      {
        title: "Prototyping & Wireframing",
        description: "Rapid visual concepts before development begins.",
      },
    ],
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Cloud & DevOps Services",
    description:
      "Reliable cloud hosting, CI/CD pipelines, and infrastructure management.",
    subServices: [
      {
        title: "AWS, Azure, GCP Deployment",
        description: "Cloud-native application setup and monitoring.",
      },
      {
        title: "DevOps Automation",
        description: "CI/CD, containerization, and infrastructure as code.",
      },
    ],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Software Consulting",
    description:
      "Strategic consulting to optimize software architecture and delivery.",
    subServices: [
      {
        title: "Technical Audits",
        description: "Evaluate software design, code quality, and architecture.",
      },
      {
        title: "Project Planning",
        description: "Define timelines, tools, and technologies for execution.",
      },
    ],
  },
  {
    icon: <FileCode className="w-8 h-8" />,
    title: "Product Engineering",
    description:
      "Transform your product idea into a market-ready software solution.",
    subServices: [
      {
        title: "MVP Development",
        description:
          "Lean product development to validate ideas quickly and cost-effectively.",
      },
      {
        title: "Product Lifecycle Management",
        description:
          "Support from concept to launch and post-deployment evolution.",
      },
    ],
  },
  {
    icon: <LifeBuoy className="w-8 h-8" />,
    title: "Technical Support Services",
    description: "Ongoing technical support to ensure smooth software use.",
    subServices: [
      {
        title: "L1, L2, L3 Support",
        description:
          "Multi-tiered support structure to resolve issues based on severity.",
      },
      {
        title: "Service Desk Setup",
        description:
          "Establish structured IT support processes and response teams.",
      },
    ],
  },
];

export default services;
