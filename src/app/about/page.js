"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Target,
  Eye,
  Shield,
  Users,
  Zap,
  Heart,
  CheckCircle,
} from "lucide-react";

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = `transform transition-all duration-1000 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`;

  const coreValues = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliability",
      description: "We deliver consistent, dependable IT solutions that keep your business running smoothly around the clock. Our commitment to uptime and performance ensures your operations never skip a beat.",
      image: "/photo-1558494949-ef010cbdcc31.avif"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership",
      description: "We build long-term relationships based on trust, truly understanding your unique business challenges. Our collaborative approach means we're invested in your success for the long haul.",
      image: "/photo-1522071820081-009f0129c71c.avif"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that drive sustainable growth. Our team constantly explores new technologies to keep you competitive.",
      image: "/innovatio.jpg"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Excellence",
      description: "We pursue perfection in every project, from initial consultation to ongoing support and optimization. Quality isn't just a goal—it's our standard operating procedure.",
      image: "/photo-1460925895917-afdab827c52f.avif"
    }
  ];

  const expertiseAreas = [
    { label: "System Infrastructure", percentage: 95, description: "Enterprise-grade server management and optimization" },
    { label: "Cloud Solutions", percentage: 90, description: "AWS, Azure, and Google Cloud implementation" },
    { label: "Network Management", percentage: 92, description: "Secure networking and connectivity solutions" },
    { label: "IT Consulting", percentage: 88, description: "Strategic technology planning and guidance" },
    { label: "Technical Support", percentage: 96, description: "24/7 monitoring and rapid issue resolution" },
    { label: "Digital Transformation", percentage: 85, description: "Legacy system modernization and automation" }
  ];

 const achievements = [
  { number: "50+", label: "Expert Team Members", description: "Certified professionals delivering quality solutions" },
  { number: "2+", label: "Years of Experience", description: "Rapidly growing with a proven track record" },
  { number: "99%", label: "Uptime Guarantee", description: "Reliable and consistent service you can count on" },
  { number: "30+", label: "Projects & Services", description: "Delivering tailored solutions across industries" }
];


  const whyChooseUs = [
    {
      title: "Experienced Leadership",
      description: "Our senior team brings decades of experience from leading technology companies, ensuring strategic guidance for complex IT challenges."
    },
    {
      title: "Comprehensive Solutions",
      description: "From infrastructure setup to cloud migration, we handle every aspect of your technology needs under one roof."
    },
    {
      title: "Scalable Architecture",
      description: "We design systems that grow with your business, ensuring your technology investment delivers long-term value."
    },
    {
      title: "Proactive Support",
      description: "Our monitoring systems detect and resolve issues before they impact your business operations."
    },
    {
      title: "Industry Best Practices",
      description: "We follow ITIL frameworks and security standards to ensure your systems meet enterprise requirements."
    },
    {
      title: "Transparent Communication",
      description: "Regular reporting and clear communication keep you informed about your technology landscape at all times."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className={`${fadeInUp} delay-300`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                <span className="block text-slate-900 mb-2">Techno Communications</span>
                <span className="text-2xl md:text-3xl text-slate-600 font-light block">Global Private Limited</span>
              </h1>
              
              <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 my-8"></div>
              
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  At Techno Communications Pvt. Ltd., we believe technology should feel effortless — something that works quietly in the background while you focus on growing your business. We&apos;re not just another IT services company; we&apos;re your technology partner, here to simplify, support, and strengthen the way you work.
                </p>
                <p>
                  Over the years, we&apos;ve grown into a trusted name in the world of IT and computer services. From keeping your systems running smoothly to helping you move to the cloud, we offer smart, scalable solutions that fit your business — not the other way around.
                </p>
              </div>
            </div>
            
            {/* Right - Hero Image */}
            <div className={`${fadeInUp} delay-400`}>
              <div className="relative">
                <img
                  src="/photo-1551434678-e076c223a692.avif"
                  alt="Modern tech workspace"
                  className="w-full h-80 object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Image */}
            <div className={`${fadeInUp} delay-200`}>
              <div className="relative mb-6">
                <img
                  src="/photo-1542744173-8e7e53415bb0.avif"
                  alt="Team collaboration and technology"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Commitment</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Delivering solutions that work from day one</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Maintaining transparent communication throughout projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Providing ongoing support that keeps you running smoothly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Staying current with emerging technologies and best practices</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right - Content */}
            <div className={`${fadeInUp} delay-300`}>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                What Drives Us
              </h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mb-6"></div>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  It&apos;s simple — helping businesses use technology better. We know how fast things change in the digital world, and we&apos;re here to keep you one step ahead. So whether you&apos;re a startup looking for guidance or an enterprise ready to scale, we&apos;ve got your back with reliable solutions and responsive support.
                </p>
                <p>
                  We understand that every company is different, so we listen first, then build the right tools and support around what you need. Our team is a mix of curious minds, tech enthusiasts, and problem-solvers who genuinely care about doing good work.
                </p>
                <p>
                  Whether it&apos;s setting up infrastructure, managing networks, or solving complex IT issues, we do it with precision and a personal touch. We&apos;re proud of the long-term relationships we&apos;ve built — not just with systems, but with people.
                </p>
                <p className="text-2xl font-semibold text-blue-600 italic">
                  Let&apos;s build something better together — powered by technology, driven by people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div className={`${fadeInUp} delay-300`}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <img
                  src="/photo-1552664730-d307ca884978.avif"
                  alt="Team collaboration"
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4">
                      <Target className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">Our Mission</h3>
                  </div>
                  
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    To empower businesses by providing exceptional IT solutions and support that enables them to focus on their core competencies. We are committed to delivering reliable, efficient, and innovative technology services that drive organizational success and digital transformation.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Key Focus Areas:</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Streamlining business operations through technology</li>
                      <li>• Ensuring maximum system uptime and reliability</li>
                      <li>• Providing scalable solutions for growing businesses</li>
                      <li>• Delivering cost-effective IT infrastructure management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vision */}
            <div className={`${fadeInUp} delay-400`}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <img
                  src="/photo-1498050108023-c5249f4df085.avif"
                  alt="Digital innovation workspace"
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-indigo-100 p-3 rounded-xl mr-4">
                      <Eye className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">Our Vision</h3>
                  </div>
                  
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    To become the most trusted technology partner for businesses across India, known for our excellence in IT services and consulting. We envision a future where organizations achieve seamless digital transformation through our comprehensive solutions and expert guidance.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Future Goals:</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Leading digital transformation initiatives</li>
                      <li>• Expanding our expertise in emerging technologies</li>
                      <li>• Building long-term strategic partnerships</li>
                      <li>• Setting industry standards for IT service delivery</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Achievements Grid */}
            <div>
              <div className={`${fadeInUp} delay-200 mb-8`}>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Track Record</h2>
                <p className="text-xl text-slate-600">
                  Numbers that reflect our commitment to excellence and client satisfaction
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`${fadeInUp}`} style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-3xl font-bold text-blue-600 mb-2">
                        {achievement.number}
                      </h3>
                      <p className="text-lg font-semibold text-slate-900 mb-2">
                        {achievement.label}
                      </p>
                      <p className="text-sm text-slate-600">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className={`${fadeInUp} delay-300`}>
              <img
                src="/photo-1504384308090-c894fdcc538d.avif"
                alt="Business analytics and success metrics"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className={`${fadeInUp} delay-200 text-center mb-12`}>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we deliver
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className={`${fadeInUp}`} style={{ animationDelay: `${index * 150}ms` }}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="grid md:grid-cols-2">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-blue-600 mr-3">
                          {value.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {value.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left - Skills */}
            <div className={`${fadeInUp} delay-300`}>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  Our Technical Expertise
                </h2>
                <div className="w-16 h-1 bg-indigo-600 rounded-full mb-4"></div>
                <p className="text-lg text-slate-600">
                  Core competencies that define our excellence in technology services and solution delivery
                </p>
              </div>
              
              <div className="space-y-6">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className={`${fadeInUp}`} style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="text-lg font-semibold text-slate-900 block">
                          {area.label}
                        </span>
                        <span className="text-sm text-slate-600">
                          {area.description}
                        </span>
                      </div>
                      <span className="text-indigo-600 font-bold text-lg ml-4">
                        {area.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-2000 ease-out"
                        style={{
                          width: isVisible ? `${area.percentage}%` : "0%",
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Images & Info */}
            <div className={`${fadeInUp} delay-400`}>
              <div className="space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Professional IT team"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                
                <img
                  src="/xvvl123.jpg"
                  alt="Technology infrastructure"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg mt-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Why Choose Techno Communications
                </h3>
                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className={`${fadeInUp} delay-200`}>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Technology Infrastructure?
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Whether you&apos;re looking to modernize your existing systems, migrate to the cloud, or need ongoing IT support, we&apos;re here to help. Let&apos;s discuss how we can streamline your operations and drive your business forward.
              </p>
              
              <button
                onClick={handleClick}
                className="group inline-flex items-center px-10 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Start Your Digital Transformation
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            {/* Right - Image */}
            <div className={`${fadeInUp} delay-300`}>
              <img
                src="/photo-1559136555-9303baea8ebd.avif"
                alt="Digital transformation and cloud computing"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;