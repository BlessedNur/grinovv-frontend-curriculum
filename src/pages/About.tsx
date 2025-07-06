import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Content with top padding to account for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section with Blurred Background */}
        <section className="relative py-15 overflow-hidden">
          {/* Background Image with Blur Effect */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/hero-image.jpg)",
              filter: "blur(8px)",
              transform: "scale(1.1)",
            }}
          ></div>

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/75 to-purple-900/70"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-6xl mt-12 mb-12 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Grace Innovation
                </span>
              </h1>
              <p className="text-x text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Empowering minds through technology education and transforming
                futures with world-class computer training since 2020.
                <span className="font-semibold text-yellow-300">
                  {" "}
                  Excellence in every lesson!
                </span>
              </p>
              {/* Decorative line */}
              <div className="flex items-center justify-center mt-8">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full mx-3 shadow-lg"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Story Section */}
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                  <span className="mr-2">📖</span>
                  Our Story
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Building Tomorrow's Tech Leaders
                </h2>
                <p className="text-gray-600 text-x mb-4 leading-relaxed">
                  Grace Innovation Computer Training Center was founded with a
                  vision to bridge the digital divide and empower individuals
                  with cutting-edge technology skills. We believe that quality
                  education should be accessible to everyone.
                </p>
                <p className="text-gray-600 mb-8 text-x leading-relaxed">
                  Since our inception, we have trained hundreds of students in
                  various computer technologies, helping them secure rewarding
                  careers in the tech industry with our hands-on approach and
                  industry-standard curriculum.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">
                    Est. 2020
                  </Badge>
                  <Badge className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white">
                    500+ Graduates
                  </Badge>
                  <Badge className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white">
                    95% Employment Rate
                  </Badge>
                </div>
              </div>

              {/* Mission & Vision Cards */}
              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-blue-600 text-lg">
                      <div className="w-10 h-10 bg-blue-100  flex items-center justify-center">
                        <span className="text-lg">🎯</span>
                      </div>
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To provide world-class computer training that transforms
                      lives and creates opportunities for personal and
                      professional growth in the digital age.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-purple-600 text-lg">
                      <div className="w-10 h-10 bg-purple-100  flex items-center justify-center">
                        <span className="text-lg">👁️</span>
                      </div>
                      Our Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To be the leading computer training center in the region,
                      known for excellence in education, innovation in teaching
                      methods, and success of our graduates.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
                  <span className="mr-2">⭐</span>
                  Core Values
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  What Drives Us Forward
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="text-center p-3 border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-blue-100 group">
                  <CardHeader className="pb-2 pt-3">
                    <div className="w-10 h-10 bg-blue-500  flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg text-white">🎓</span>
                    </div>
                    <CardTitle className="text-sm font-bold text-gray-900">
                      Excellence
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-3">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Striving for excellence in curriculum design and student
                      support.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-3 border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-green-50 to-green-100 group">
                  <CardHeader className="pb-2 pt-3">
                    <div className="w-10 h-10 bg-green-500  flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg text-white">🤝</span>
                    </div>
                    <CardTitle className="text-sm font-bold text-gray-900">
                      Integrity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-3">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Maintaining highest standards of honesty and transparency.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-3 border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-purple-100 group">
                  <CardHeader className="pb-2 pt-3">
                    <div className="w-10 h-10 bg-purple-500  flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg text-white">🚀</span>
                    </div>
                    <CardTitle className="text-sm font-bold text-gray-900">
                      Innovation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-3">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Embracing new technologies and modern teaching methods.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-3 border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-orange-50 to-orange-100 group">
                  <CardHeader className="pb-2 pt-3">
                    <div className="w-10 h-10 bg-orange-500  flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg text-white">❤️</span>
                    </div>
                    <CardTitle className="text-sm font-bold text-gray-900">
                      Passion
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-3">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Passionate about technology and sharing knowledge with
                      students.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Services Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                  <span className="mr-2">🎯</span>
                  Our Services
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  What We Offer
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600  flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl text-white">👨‍💻</span>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      Training Programs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Graphics Design
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Web Development
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Software Engineering
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Computer Secretariat
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Computer Maintenance
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600  flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl text-white">🖨️</span>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      Documentation Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Photocopying
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Printing Services
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Scanning & Digital Conversion
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Lamination
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Document Binding
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-violet-50">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600  flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl text-white">💻</span>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      Hardware Sales
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Laptop Sales
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Computer Accessories
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Software Installation
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Technical Support
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Warranty Services
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-12 text-white">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                  <span className="mr-2">🚀</span>
                  Start Your Journey
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Future?
                </h2>
                <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
                  Join thousands of successful graduates who transformed their
                  careers with our comprehensive training programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/register">
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Enroll Today
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="border-2 border-gray-600 text-white bg-gray-600 font-semibold px-8 py-3 transition-all duration-300"
                    >
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default About;
