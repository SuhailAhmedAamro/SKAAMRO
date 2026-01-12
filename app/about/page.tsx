"use client";

import { GraduationCap, Award, Languages, MapPin, Phone, Mail } from "lucide-react";

const education = [
  {
    degree: "Governor Initiative for AI, Web 3.0 & Metaverse",
    year: "2024 - Ongoing",
    institution: "Governor House",
    grade: "In Progress",
  },
  {
    degree: "Diploma in Information Technology",
    year: "2022",
    institution: "Shaheed Mohtarma Benazir Bhutto University",
    grade: "A Grade",
  },
  {
    degree: "Bachelor of Arts",
    year: "2023",
    institution: "Ustad Bukhari Degree College",
    grade: "Second Division",
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    year: "2019",
    institution: "Ustad Bukhari Degree College",
    grade: "C Grade",
  },
  {
    degree: "Matriculation",
    year: "2017",
    institution: "Government Talib-ul-Mola High School",
    grade: "B Grade",
  },
  {
    degree: "Office Automation Course",
    year: "2021",
    institution: "Benazir Youth Program",
    grade: "Merit",
  },
];

const achievements = [
  {
    title: "IBA Test Performance",
    description: "Scored 45 Points in IBA 5 BPS to 15 BPS Test",
    icon: "🏆",
  },
  {
    title: "IT Diploma Excellence",
    description: "Completed 1-Year IT Diploma with Distinction (A Grade)",
    icon: "🎓",
  },
  {
    title: "Project Portfolio",
    description: "Created multiple Next.js & React projects deployed on Vercel",
    icon: "💻",
  },
  {
    title: "Python Development",
    description: "Developed Python + Streamlit applications",
    icon: "🐍",
  },
  {
    title: "Office Automation",
    description: "Certified in Office Automation with Merit",
    icon: "📊",
  },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Urdu", level: "Fluent" },
  { name: "Sindhi", level: "Fluent" },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Profile Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
              About <span className="gradient-text">Me</span>
            </h1>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500" style={{ animation: "fadeInUp 0.8s ease-out" }}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500">Profile Statement</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Recent IT graduate proficient in front-end development (React.js, Next.js, TypeScript)
                  and Python programming. Skilled in MS Office Suite and office automation with strong
                  problem-solving abilities. Seeking opportunities to apply technical and administrative
                  skills in a dynamic environment.
                </p>
              </div>

              {/* Contact Details */}
              <div className="grid md:grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <Phone className="text-primary-600 dark:text-primary-400 group-hover:rotate-12 transition-transform duration-300" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="font-medium">+92 309 3305243</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <Mail className="text-primary-600 dark:text-primary-400 group-hover:rotate-12 transition-transform duration-300" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium break-all">suhailahmedamro786@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:col-span-2 group hover:translate-x-2 transition-transform duration-300">
                  <MapPin className="text-primary-600 dark:text-primary-400 group-hover:rotate-12 transition-transform duration-300" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium">Maliah Chowk near Bhatti colony Dadu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary-600 dark:text-primary-400" size={32} />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 hover:border-primary-400 transition-all duration-300"
                  style={{ animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s both` }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                      {edu.degree}
                    </h3>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full w-fit">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Grade: <span className="font-semibold">{edu.grade}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-primary-600 dark:text-primary-400" size={32} />
              <h2 className="text-3xl font-bold">Achievements</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 hover:border-primary-400 transition-all duration-300 group"
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                >
                  <div className="text-4xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">{achievement.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Languages className="text-primary-600 dark:text-primary-400" size={32} />
              <h2 className="text-3xl font-bold">Languages</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 text-center border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 hover:border-primary-400 transition-all duration-300"
                  style={{ animation: `fadeInRight 0.6s ease-out ${index * 0.2}s both` }}
                >
                  <h3 className="text-xl font-semibold mb-2">{language.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {language.level}
                  </p>
                </div>
              ))}
            </div>
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
