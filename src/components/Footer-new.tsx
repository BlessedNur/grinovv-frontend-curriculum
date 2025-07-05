import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/grace-logo.svg"
                alt="Grace Innovation"
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Grace Innovation
              </h3>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                Empowering minds through technology education and transforming
                futures with world-class IT training.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 hover:from-blue-700 hover:to-blue-800 transition-all">
                Est. 2020
              </Badge>
              <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 hover:from-green-700 hover:to-emerald-700 transition-all">
                500+ Graduates
              </Badge>
            </div>
          </div>

          {/* Quick Links & Services Combined */}
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm py-1"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm py-1"
                >
                  About
                </Link>
                <Link
                  to="/tutorial"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm py-1"
                >
                  Courses
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm py-1"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Core Services
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Computer Training</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Web Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Graphics Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>IT Support & Cyber Cafe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Get In Touch
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                    <span className="text-xs">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-300">123 Technology Street</p>
                    <p className="text-gray-400">Accra, Ghana</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center">
                    <span className="text-xs">📞</span>
                  </div>
                  <p className="text-gray-300">+233 24 123 4567</p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-xs">📧</span>
                  </div>
                  <p className="text-gray-300">info@graceinnovation.com</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title="Facebook"
                >
                  <span className="text-sm">📘</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title="LinkedIn"
                >
                  <span className="text-sm">💼</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title="WhatsApp"
                >
                  <span className="text-sm">💬</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title="Instagram"
                >
                  <span className="text-sm">📷</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-gray-700/50 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <div className="text-gray-400">
              © 2025 Grace Innovation. All rights reserved.
            </div>

            <div className="flex items-center space-x-2 text-gray-400">
              <span>Crafted with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>in Ghana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
