import {
  Users,
  Lock,
  Code,
  BarChart,
  Settings,
  Headphones,
  FileText,
  Briefcase,
  DollarSign,
  Zap,
} from "lucide-react";
const services = [
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "HR Payroll",
    description:
      "Comprehensive payroll solutions tailored for global and local compliance.",
    subServices: [
      {
        title: "US Payroll",
        description:
          "Streamlined payroll processing for US-based employees with tax compliance.",
      },
      {
        title: "India Payroll",
        description:
          "Efficient payroll management for India, adhering to local regulations.",
      },
    ],
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Surveillance",
    description:
      "Advanced security and monitoring solutions to protect your business.",
    subServices: [
      {
        title: "Video Surveillance",
        description: "Real-time monitoring with high-definition cameras.",
      },
      {
        title: "Access Control",
        description: "Secure access management for facilities and data.",
      },
    ],
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom web solutions to enhance your digital presence.",
    subServices: [
      {
        title: "Frontend Development",
        description: "Responsive and user-friendly website interfaces.",
      },
      {
        title: "Backend Development",
        description: "Robust server-side solutions for seamless functionality.",
      },
    ],
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Data Analysis",
    description: "Actionable insights through advanced data analytics.",
    subServices: [
      {
        title: "Predictive Analytics",
        description: "Forecast trends to drive strategic decisions.",
      },
      {
        title: "Data Visualization",
        description: "Interactive dashboards for clear data interpretation.",
      },
    ],
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Process Support",
    description: "Streamlined processes to boost operational efficiency.",
    subServices: [
      {
        title: "Workflow Automation",
        description: "Automate repetitive tasks to save time.",
      },
      {
        title: "Process Optimization",
        description: "Enhance efficiency with tailored process improvements.",
      },
    ],
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Client Services",
    description: "Dedicated support to ensure client satisfaction.",
    subServices: [
      {
        title: "24/7 Support",
        description: "Round-the-clock assistance for all client needs.",
      },
      {
        title: "Account Management",
        description: "Personalized account support for seamless collaboration.",
      },
    ],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "HR Services",
    description: "Comprehensive HR solutions for employee management.",
    subServices: [
      {
        title: "Recruitment Services",
        description: "End-to-end hiring solutions to find top talent.",
      },
      {
        title: "Employee Engagement",
        description: "Programs to boost morale and productivity.",
      },
    ],
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Data Management",
    description: "Secure and efficient data storage and retrieval systems.",
    subServices: [
      {
        title: "Data Security",
        description: "Protect sensitive data with advanced security measures.",
      },
      {
        title: "Database Management",
        description: "Organized and scalable database solutions.",
      },
    ],
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Consultancy Services",
    description: "Expert guidance to drive business success.",
    subServices: [
      {
        title: "Business Strategy",
        description: "Strategic planning to achieve long-term goals.",
      },
      {
        title: "IT Consulting",
        description: "Tailored IT solutions to meet business needs.",
      },
    ],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Expenses Management",
    description: "Efficient tools to manage and track business expenses.",
    subServices: [
      {
        title: "Expense Tracking",
        description: "Real-time monitoring of business expenditures.",
      },
      {
        title: "Budget Planning",
        description: "Tools to create and manage budgets effectively.",
      },
    ],
  },
];

export default services;