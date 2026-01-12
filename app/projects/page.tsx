"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "University AI Assistant",
    description:
      "Intelligent university assistant built with Next.js and AI integration. Provides students with instant answers to university-related queries, course information, and academic guidance using advanced language models.",
    tech: ["Next.js", "TypeScript", "AI/ML", "Tailwind CSS"],
    category: "Web Application",
    features: [
      "AI-powered chat interface",
      "University information database",
      "Real-time query responses",
      "Student guidance system",
    ],
    liveUrl: "https://aamro-university-agent.vercel.app/",
    image: "/NEXT.JS/University Assistant.png",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Professional portfolio website built with Next.js 14, featuring dark mode, PDF CV generation, contact form, and fully responsive design. Optimized for SEO and performance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React PDF"],
    category: "Web Application",
    features: [
      "Dark/Light mode toggle",
      "PDF CV download",
      "Responsive design",
      "SEO optimized",
    ],
    liveUrl: "https://my-portfilo-41201.vercel.app/",
    image: "/NEXT.JS/portfilo.png",
  },
  {
    title: "Physical AI & Humanoid Robotics Platform",
    description:
      "Cutting-edge platform showcasing physical AI and humanoid robotics technology. Features interactive demos, research insights, and real-world applications of AI-powered robotics in modern industry.",
    tech: ["Next.js", "TypeScript", "3D Graphics", "Tailwind CSS"],
    category: "Web Application",
    features: [
      "Interactive robotics demos",
      "AI technology showcase",
      "Research documentation",
      "Modern responsive design",
    ],
    liveUrl: "https://book-skp-claude.vercel.app/",
    image: "/NEXT.JS/physical AI & Humanoid Robotics.png",
  },
  {
    title: "Islamic Worship Assistant (Ramadan App)",
    description:
      "Comprehensive Islamic worship assistant featuring prayer times, Quran recitation, Ramadan calendar, and spiritual guidance. Helps Muslims maintain their religious practices with modern technology.",
    tech: ["Next.js", "TypeScript", "Islamic APIs", "Tailwind CSS"],
    category: "Web Application",
    features: [
      "Prayer time calculator",
      "Quranic features",
      "Ramadan calendar",
      "Spiritual guidance tools",
    ],
    liveUrl: "https://v0-ramzan-app-features.vercel.app/",
    image: "/NEXT.JS/Islamic Worship Assistant.png",
  },
  {
    title: "E-Commerce Book Store",
    description:
      "Modern e-commerce platform for online book shopping. Features product catalog, shopping cart, user authentication, secure checkout, and order management with a clean, intuitive interface.",
    tech: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS"],
    category: "Web Application",
    features: [
      "Product catalog & search",
      "Shopping cart system",
      "Secure checkout process",
      "Order management",
    ],
    liveUrl: "https://final-hackthoon-2-ska-git-main-suhailahmedaamros-projects.vercel.app/",
    image: "/NEXT.JS/E-Commerce website.png",
  },
  {
    title: "NJV School Management System",
    description:
      "Comprehensive school management system for NJV School. Includes student registration, attendance tracking, grade management, and parent-teacher communication portal.",
    tech: ["Next.js", "TypeScript", "Database", "Tailwind CSS"],
    category: "Web Application",
    features: [
      "Student registration forms",
      "Attendance management",
      "Grade tracking system",
      "Parent communication portal",
    ],
    liveUrl: "https://njv-school.vercel.app/",
    image: "/NEXT.JS/NJV Form.png",
  },
  {
    title: "Next.js Testing & Demo Platform",
    description:
      "Next.js testing and demonstration platform showcasing various Next.js features, components, and capabilities. Serves as a learning resource and testing ground for Next.js development.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    category: "Web Application",
    features: [
      "Component demonstrations",
      "Feature testing",
      "Code examples",
      "Development best practices",
    ],
    liveUrl: "https://next-js-ska.vercel.app/",
    image: "/NEXT.JS/Next.js test.png",
  },
  {
    title: "GDP Dashboard",
    description:
      "Interactive global economic data visualization dashboard built with Python and Streamlit. Features comprehensive GDP statistics, country comparisons, historical trends, and interactive charts for analyzing economic data.",
    tech: ["Python", "Streamlit", "Pandas", "Plotly"],
    category: "Python Application",
    features: [
      "Global GDP visualization",
      "Country comparisons",
      "Historical trend analysis",
      "Interactive charts",
    ],
    liveUrl: "https://gdp-dashboard-uskmsgizln.streamlit.app/",
    image: "/PY/GDP.png",
  },
  {
    title: "Multi-Project Python App",
    description:
      "Comprehensive collection of 15 Python projects in one Streamlit application. Includes BMI Calculator, Password Generator, To-Do List, Weather App, Calculator, and more interactive tools.",
    tech: ["Python", "Streamlit", "Plotly", "Pandas"],
    category: "Python Application",
    features: [
      "15 different projects",
      "Interactive UI components",
      "Data visualization",
      "User-friendly interface",
    ],
    liveUrl: "https://suhailahmedaamro-python-projects-projects-60ybw3.streamlit.app/",
    image: "/PY/Multiple Projects.png",
  },
  {
    title: "Personal Library Manager",
    description:
      "Python-based library management system for tracking personal book collections. Features book cataloging, reading status tracking, genre distribution analysis, and comprehensive statistics.",
    tech: ["Python", "Streamlit", "Pandas", "Plotly"],
    category: "Python Application",
    features: [
      "Book cataloging system",
      "Reading status tracking",
      "Genre distribution charts",
      "Library statistics",
    ],
    liveUrl: "https://suhailahmedaamro-library-manager-py-library-manager-txxaiw.streamlit.app/",
    image: "/PY/Personal Library Manger.png",
  },
  {
    title: "Advanced Unit Converter",
    description:
      "Comprehensive unit conversion tool supporting multiple categories including length, weight, temperature, area, volume, speed, and data. Features real-time conversion and conversion tables.",
    tech: ["Python", "Streamlit", "Pandas"],
    category: "Python Application",
    features: [
      "Multiple conversion categories",
      "Real-time conversion",
      "Conversion tables",
      "User-friendly interface",
    ],
    liveUrl: "https://suhailahmedaamro-unit-convertor-unit-convertor-12dfmd.streamlit.app/",
    image: "/PY/unit Convertor.png",
  },
  {
    title: "Password Strength Meter",
    description:
      "Security tool for testing password strength with real-time feedback and suggestions. Includes admin panel for user management and security analysis with visual strength indicators.",
    tech: ["Python", "Streamlit", "Plotly"],
    category: "Python Application",
    features: [
      "Real-time strength analysis",
      "Security recommendations",
      "Admin panel",
      "Visual strength meter",
    ],
    liveUrl: "https://suhailahmedaamro-password-strength-met-password-strength-yejykr.streamlit.app/",
    image: "/PY/Password Stregth.png",
  },
  {
    title: "Growth Mindset App",
    description:
      "Motivational application featuring user authentication, daily motivation quotes, goal tracking system, and progress monitoring. Helps users stay motivated and track their personal development goals.",
    tech: ["Python", "Streamlit", "Plotly"],
    category: "Python Application",
    features: [
      "User authentication",
      "Daily motivations",
      "Goal tracking system",
      "Progress monitoring",
    ],
    liveUrl: "https://suhailahmedaamro-q3-assig-01-growth-mindset-appapp-pu7glh.streamlit.app/",
    image: "/PY/Motivation!.png",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              A showcase of my recent work in web development, Python programming, and automation
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden border-2 border-transparent hover:border-primary-400"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Project Image */}
                {project.image && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}

                {/* Project Header */}
                <div className="p-6 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-900 px-3 py-1 rounded-full shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-blue-500 transition-all duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Project Body */}
                <div className="p-6 relative z-10">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full hover:from-primary-500 hover:to-blue-500 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-primary-700 hover:to-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        <ExternalLink size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href="https://github.com/SuhailAhmedAamro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 animate-pulse">
              Interested in <span className="gradient-text">Working Together?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I'm always open to discussing new projects and opportunities
            </p>
            <a href="/contact" className="btn-primary hover:scale-110 transition-transform duration-300">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
