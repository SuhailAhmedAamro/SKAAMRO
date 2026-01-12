"use client";

import { Code, Palette, Server, Briefcase, MessageSquare } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-primary-600 dark:text-primary-400" size={32} />,
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      title: "Backend & Tools",
      icon: <Server className="text-primary-600 dark:text-primary-400" size={32} />,
      skills: [
        { name: "Python (Complete)", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "Sanity CMS", level: 75 },
        { name: "Streamlit", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL (Neon)", level: 70 },
        { name: "Google Colab", level: 85 },
        { name: "Firebase", level: 75 },
        { name: "Git & GitHub", level: 85 },
        { name: "Vercel", level: 90 },
        { name: "Docusaurus", level: 70 },
      ],
    },
    {
      title: "Office & Professional",
      icon: <Briefcase className="text-primary-600 dark:text-primary-400" size={32} />,
      skills: [
        { name: "MS Word", level: 95 },
        { name: "MS Excel", level: 90 },
        { name: "MS PowerPoint", level: 90 },
        { name: "MS Outlook", level: 85 },
        { name: "Documentation", level: 90 },
      ],
    },
    {
      title: "Soft Skills",
      icon: <MessageSquare className="text-primary-600 dark:text-primary-400" size={32} />,
      skills: [
        { name: "Communication", level: 90 },
        { name: "Teamwork", level: 95 },
        { name: "Problem Solving", level: 85 },
        { name: "Time Management", level: 85 },
        { name: "Adaptability", level: 90 },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              A comprehensive overview of my technical and professional competencies
            </p>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  {category.icon}
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                </div>
                <div className="grid gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-semibold">{skill.name}</span>
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-primary-600 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animation: `growWidth 1s ease-out ${skillIndex * 0.1}s forwards`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Icons */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Technologies I <span className="gradient-text">Work With</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { name: "React", emoji: "⚛️", color: "from-blue-400 to-cyan-500" },
                { name: "Next.js", emoji: "▲", color: "from-gray-700 to-gray-900" },
                { name: "TypeScript", emoji: "📘", color: "from-blue-500 to-blue-700" },
                { name: "Python", emoji: "🐍", color: "from-yellow-400 to-blue-500" },
                { name: "Node.js", emoji: "🟢", color: "from-green-500 to-green-700" },
                { name: "Tailwind", emoji: "🎨", color: "from-teal-400 to-cyan-500" },
                { name: "MongoDB", emoji: "🍃", color: "from-green-400 to-green-600" },
                { name: "PostgreSQL", emoji: "🐘", color: "from-blue-600 to-indigo-600" },
                { name: "Firebase", emoji: "🔥", color: "from-orange-400 to-yellow-500" },
                { name: "Sanity", emoji: "✨", color: "from-red-400 to-pink-500" },
                { name: "Vercel", emoji: "▲", color: "from-black to-gray-700" },
                { name: "Streamlit", emoji: "🚀", color: "from-red-500 to-pink-600" },
                { name: "Git", emoji: "📦", color: "from-orange-500 to-red-600" },
                { name: "GitHub", emoji: "🐙", color: "from-purple-600 to-indigo-700" },
                { name: "VS Code", emoji: "💻", color: "from-blue-600 to-blue-800" },
                { name: "Figma", emoji: "🎨", color: "from-purple-500 to-pink-500" },
                { name: "Docusaurus", emoji: "🦖", color: "from-green-400 to-emerald-600" },
                { name: "Stripe", emoji: "💳", color: "from-purple-600 to-indigo-600" },
                { name: "Neon", emoji: "⚡", color: "from-cyan-400 to-blue-500" },
                { name: "Clark", emoji: "📊", color: "from-orange-400 to-red-500" },
                { name: "MS Office", emoji: "📊", color: "from-blue-500 to-indigo-600" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer relative overflow-hidden"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="text-5xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">{tech.emoji}</div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-blue-500 transition-all duration-300">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes growWidth {
          from {
            width: 0%;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
