"use client";
import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Code, 
  Users,  
  Headphones, 
  Monitor,
  Server,
  Shield,
  Settings,
  Database,
  Zap,
  Wrench,
  Link,
  CheckCircle,
  Palette,
  GitBranch,
  MessageCircle,
  Layers
} from "lucide-react";

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedService, setExpandedService] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = `transform transition-all duration-1000 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`;

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  // Complete services data with all offerings
  const services = [
    {
      icon: <Server className="w-10 h-10" />,
      title: "IT Infrastructure Management",
      description: "Complete IT infrastructure setup, maintenance, and optimization for maximum performance and reliability.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
      subServices: [
        {
          title: "Server Management",
          description: "24/7 monitoring, maintenance, and optimization of your server infrastructure."
        },
        {
          title: "Network Setup & Configuration",
          description: "Design and implement robust networking solutions for seamless connectivity."
        },
        {
          title: "Hardware Procurement & Installation",
          description: "Source and install the right hardware solutions for your business needs."
        },
        {
          title: "System Performance Optimization",
          description: "Fine-tune systems for optimal performance and resource utilization."
        }
      ]
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built to address your specific business challenges and requirements.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      subServices: [
        {
          title: "Web Application Development",
          description: "Modern, responsive web applications built with cutting-edge technologies."
        },
        {
          title: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android."
        },
        {
          title: "Enterprise Software Solutions",
          description: "Scalable enterprise applications designed for complex business workflows."
        },
        {
          title: "API Development & Integration",
          description: "Custom APIs and third-party integrations to connect your systems."
        }
      ]
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Software Maintenance & Support",
      description: "Ongoing maintenance and support services to keep your software applications running optimally.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
      subServices: [
        {
          title: "Bug Fixes & Updates",
          description: "Regular bug fixes, patches, and feature updates for your applications."
        },
        {
          title: "Performance Monitoring",
          description: "Continuous monitoring and optimization of application performance."
        },
        {
          title: "Legacy System Maintenance",
          description: "Keep older systems running smoothly while planning modernization."
        },
        {
          title: "Version Control Management",
          description: "Manage software versions and deployment pipelines efficiently."
        }
      ]
    },
    {
      icon: <Link className="w-10 h-10" />,
      title: "System Integration Services",
      description: "Seamlessly connect disparate systems and applications to create unified business workflows.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      subServices: [
        {
          title: "API Integration",
          description: "Connect third-party services and applications through robust API integrations."
        },
        {
          title: "Database Integration",
          description: "Synchronize and integrate data across multiple database systems."
        },
        {
          title: "ERP & CRM Integration",
          description: "Integrate enterprise resource planning and customer relationship management systems."
        },
        {
          title: "Middleware Development",
          description: "Build custom middleware solutions for complex system communications."
        }
      ]
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Software Testing & QA",
      description: "Comprehensive quality assurance and testing services to ensure your software meets the highest standards.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      subServices: [
        {
          title: "Automated Testing",
          description: "Implement comprehensive automated testing frameworks for faster deployment cycles."
        },
        {
          title: "Manual Testing",
          description: "Thorough manual testing to catch issues automated tests might miss."
        },
        {
          title: "Performance Testing",
          description: "Load, stress, and performance testing to ensure your applications scale."
        },
        {
          title: "Security Testing",
          description: "Comprehensive security testing to identify and fix vulnerabilities."
        }
      ]
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design Services",
      description: "Create intuitive, engaging user experiences that delight your customers and drive business results.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop",
      subServices: [
        {
          title: "User Experience Design",
          description: "Research-driven UX design that prioritizes user needs and business goals."
        },
        {
          title: "User Interface Design",
          description: "Beautiful, intuitive interfaces that enhance user engagement and satisfaction."
        },
        {
          title: "Prototyping & Wireframing",
          description: "Interactive prototypes and wireframes to validate design concepts early."
        },
        {
          title: "Design System Development",
          description: "Comprehensive design systems for consistent brand experiences across platforms."
        }
      ]
    },
    {
      icon: <GitBranch className="w-10 h-10" />,
      title: "Cloud & DevOps Services",
      description: "Modern cloud infrastructure and DevOps practices to accelerate development and improve reliability.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      subServices: [
        {
          title: "CI/CD Pipeline Setup",
          description: "Automated continuous integration and deployment pipelines for faster releases."
        },
        {
          title: "Container Orchestration",
          description: "Docker and Kubernetes implementation for scalable application deployment."
        },
        {
          title: "Infrastructure as Code",
          description: "Automated infrastructure provisioning using Terraform, CloudFormation, and similar tools."
        },
        {
          title: "Cloud Migration & Optimization",
          description: "Strategic cloud migration and cost optimization across AWS, Azure, and Google Cloud."
        }
      ]
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "Software Consulting",
      description: "Expert guidance and strategic advice to help you make informed technology decisions for your business.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      subServices: [
        {
          title: "Technology Stack Selection",
          description: "Choose the right technologies and frameworks for your specific project requirements."
        },
        {
          title: "Architecture Design",
          description: "Design scalable, maintainable software architectures that grow with your business."
        },
        {
          title: "Code Review & Optimization",
          description: "Expert code reviews and optimization recommendations for existing applications."
        },
        {
          title: "Development Process Improvement",
          description: "Optimize your development workflows and team productivity."
        }
      ]
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Product Engineering",
      description: "End-to-end product development from concept to deployment, focusing on scalability and user value.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      subServices: [
        {
          title: "Product Strategy & Planning",
          description: "Strategic product roadmaps aligned with business objectives and market needs."
        },
        {
          title: "MVP Development",
          description: "Rapid minimum viable product development to validate ideas and get to market quickly."
        },
        {
          title: "Full-Stack Development",
          description: "Complete product development using modern technologies and best practices."
        },
        {
          title: "Product Analytics & Optimization",
          description: "Data-driven insights and continuous optimization to improve product performance."
        }
      ]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
      subServices: [
        {
          title: "Security Audit & Assessment",
          description: "Thorough evaluation of your current security posture and vulnerabilities."
        },
        {
          title: "Firewall & Network Security",
          description: "Advanced firewall configuration and network security implementation."
        },
        {
          title: "Data Backup & Recovery",
          description: "Automated backup solutions with rapid recovery capabilities."
        },
        {
          title: "Employee Security Training",
          description: "Comprehensive cybersecurity awareness training for your team."
        }
      ]
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: "Technical Support Services",
      description: "Dedicated technical support to ensure your systems and applications run smoothly around the clock.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      subServices: [
        {
          title: "24/7 Help Desk Support",
          description: "Always-available technical support for immediate issue resolution."
        },
        {
          title: "Remote System Monitoring",
          description: "Proactive monitoring to detect and resolve issues before they impact operations."
        },
        {
          title: "Application Support",
          description: "Specialized support for custom applications and software solutions."
        },
        {
          title: "Emergency Response",
          description: "Rapid response team for critical system failures and emergencies."
        }
      ]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "IT Consulting & Strategy",
      description: "Expert guidance and strategic planning to align your technology investments with business goals.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      subServices: [
        {
          title: "Digital Transformation Planning",
          description: "Strategic roadmaps for modernizing your business operations with technology."
        },
        {
          title: "Technology Assessment",
          description: "Comprehensive evaluation of your current technology stack and recommendations."
        },
        {
          title: "IT Budget Planning",
          description: "Cost-effective planning for your technology investments and upgrades."
        },
        {
          title: "Compliance & Risk Management",
          description: "Ensure your IT systems meet industry standards and regulatory requirements."
        }
      ]
    }
  ];

  return (
    <div id="services" className="min-h-screen bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`${fadeInUp} delay-200`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive IT solutions designed to streamline your operations, enhance security, 
              and drive digital transformation across your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Introduction */}
          <div className={`${fadeInUp} delay-300 text-center mb-16`}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Complete Technology Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              From infrastructure management to custom development, we provide end-to-end 
              IT services that keep your business running smoothly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${fadeInUp} group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-200 hover:border-blue-300">
                  
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <div className="text-white p-3 bg-blue-600/90 rounded-xl backdrop-blur-sm">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {service.title}
                      </h3>
                      <button
                        onClick={() => toggleService(index)}
                        className="p-2 rounded-full bg-slate-100 hover:bg-blue-100 transition-colors duration-300"
                      >
                        <ArrowRight
                          className={`w-5 h-5 text-slate-600 transform transition-transform duration-300 ${
                            expandedService === index ? "rotate-90 text-blue-600" : ""
                          }`}
                        />
                      </button>
                    </div>
                    
                    <p className="text-lg text-slate-600 leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>

                    {/* Expandable Sub-services */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedService === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="space-y-4 pt-4 border-t border-slate-200">
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">
                          What&apos;s Included:
                        </h4>
                        {service.subServices.map((subService, subIndex) => (
                          <div
                            key={subIndex}
                            className="bg-slate-50 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                          >
                            <h5 className="font-semibold text-slate-900 mb-2">
                              {subService.title}
                            </h5>
                            <p className="text-slate-600 font-light">
                              {subService.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className={`${fadeInUp} delay-200 text-center mb-16`}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our Service Approach
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              We follow a structured methodology to ensure every project delivers 
              maximum value and meets your specific business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We begin by understanding your current infrastructure, pain points, and business objectives.",
                icon: <Database className="w-8 h-8" />
              },
              {
                step: "02",
                title: "Strategic Planning",
                description: "Develop a comprehensive strategy tailored to your specific needs and budget requirements.",
                icon: <Settings className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute the plan with minimal disruption to your operations, ensuring smooth deployment.",
                icon: <Zap className="w-8 h-8" />
              },
              {
                step: "04",
                title: "Ongoing Support",
                description: "Provide continuous monitoring, maintenance, and optimization to ensure peak performance.",
                icon: <Monitor className="w-8 h-8" />
              }
            ].map((process, index) => (
              <div
                key={index}
                className={`${fadeInUp} text-center`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-blue-600 mb-6">
                    <div className="bg-blue-100 p-4 rounded-2xl inline-block">
                      {process.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Content */}
            <div className={`${fadeInUp} delay-200`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Elevate Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed font-light">
                Let$apos;s discuss how our comprehensive IT services can streamline your operations, 
                enhance security, and drive growth for your business. Our team is ready to 
                create a customized solution that fits your unique requirements.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-blue-100">
                  <div className="w-6 h-6 bg-blue-400 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Free initial consultation and system assessment</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <div className="w-6 h-6 bg-blue-400 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Customized solutions designed for your business</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <div className="w-6 h-6 bg-blue-400 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>24/7 ongoing support and maintenance</span>
                </div>
              </div>
              <button className="group inline-flex items-center px-10 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Get Started Today
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            {/* Right - Image */}
            <div className={`${fadeInUp} delay-300`}>
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop"
                alt="IT consultation and strategy"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;