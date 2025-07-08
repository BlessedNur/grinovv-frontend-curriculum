import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const quickLinks = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "About Us", path: "/about", icon: "ℹ️" },
    { name: "Courses", path: "/tutorial", icon: "📚" },
    { name: "Instructors", path: "/tutor", icon: "👨‍🏫" },
    { name: "Contact", path: "/contact", icon: "📞" },
    { name: "Register", path: "/register", icon: "✍️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      {/* Main 404 Content */}
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute bottom-40 left-20 w-36 h-36 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse delay-2000"></div>
            <div className="absolute bottom-20 right-10 w-28 h-28 bg-yellow-200 rounded-full blur-3xl opacity-30 animate-pulse delay-500"></div>
          </div>

          <div
            className={`relative z-10 text-center transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Animated Robot/Computer Icon */}
            <div className=" mt-12">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full animate-bounce">
                <span className="text-4xl">🤖</span>
              </div>
            </div>

            {/* 404 Number with Animation */}
            <div className="relative mb-8">
              <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse select-none">
                404
              </h1>
              <div className="absolute inset-0 text-8xl md:text-9xl font-black text-gray-200 -z-10 blur-sm">
                404
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Oops! Page Not Found
              </h2>
              <p className="text-x text-gray-600 max-w-2xl mx-auto leading-relaxed">
                The page you're looking for seems to have vanished into the
                digital void. Don't worry though, we'll help you get back on
                track!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  🏠 Back to Home
                </Button>
              </Link>
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                ← Go Back
              </Button>
            </div>

            {/* Quick Navigation */}
            <Card className="p-6 shadow-xl bg-white/80 backdrop-blur-sm border-0">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                🧭 Quick Navigation
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {quickLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`group p-4 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                      isVisible ? "animate-fade-in" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
                        {link.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Help Section */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50  border border-blue-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                💡 Need Help?
              </h4>
              <p className="text-gray-600 mb-4">
                If you believe this is an error, please contact our support
                team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                  >
                    📧 Contact Support
                  </Button>
                </Link>
                <a
                  href="https://wa.me/237650159713?text=Hello! I encountered a 404 error on your website."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="text-green-600 border-green-600 hover:bg-green-50"
                  >
                    💬 WhatsApp Support
                  </Button>
                </a>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 italic">
                🎓 Fun fact: While you're here, why not explore our amazing
                computer training programs?
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
