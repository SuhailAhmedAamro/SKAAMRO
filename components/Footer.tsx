import { Github, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Suhail Ahmed</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              IT Graduate specializing in Frontend Development and Python Programming
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/skills" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <a href="mailto:suhailahmedamro786@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-all">
                  suhailahmedamro786@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+923093305243" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  +92 309 3305243
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>Maliah Chowk near Bhatti colony Dadu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Suhail Ahmed. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/SuhailAhmedAamro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-md hover:shadow-xl"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/suhail-ahmed-aamro-623863279/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-md hover:shadow-xl"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://wa.me/923093305243"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-md hover:shadow-xl"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
