import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="print:hidden">
        <Navbar />
      </div>

      {/* Content with top padding to account for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <div className="print:hidden">
          <Hero />
        </div>

        {/* IT Services Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Complete <span className="text-blue-600">IT Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From training to hardware sales, we provide comprehensive IT
                services for individuals and businesses
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {/* Computer Training */}
              <div className="xl:col-span-2">
                <Card className="h-full shadow-md hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-br from-blue-50 to-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-xl text-white">🖥️</span>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      Computer Training
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-1.5 text-sm text-gray-600 mb-4">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Basic Computer Literacy
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Microsoft Office Suite
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Web Development
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Graphics Design
                      </li>
                    </ul>
                    <Badge className="bg-green-500 text-white text-xs px-3 py-1 shadow-sm">
                      Most Popular
                    </Badge>
                  </CardContent>
                </Card>
              </div>

              {/* Document Services */}
              <div className="xl:col-span-2">
                <Card className="h-full shadow-md hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-br from-purple-50 to-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-xl text-white">🖨️</span>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      Document Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-1.5 text-sm text-gray-600 mb-4">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                        High-Quality Printing
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                        Photocopying & Scanning
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                        Lamination Services
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                        Passport Photos
                      </li>
                    </ul>
                    <Badge className="bg-blue-500 text-white text-xs px-3 py-1 shadow-sm">
                      24/7 Available
                    </Badge>
                  </CardContent>
                </Card>
              </div>

              {/* Hardware Sales */}
              <div className="xl:col-span-2">
                <Card className="h-full shadow-md hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-br from-green-50 to-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-xl text-white">💻</span>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      Hardware Sales
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-1.5 text-sm text-gray-600 mb-4">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        Laptops & Desktops
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        Computer Accessories
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        Software Installation
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        Technical Support
                      </li>
                    </ul>
                    <Badge className="bg-yellow-500 text-white text-xs px-3 py-1 shadow-sm">
                      Best Prices
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Additional Services Row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <Card className="shadow-sm hover:shadow-md transition-all duration-300 border-0 bg-white group">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10  flex items-center justify-center mx-auto mb-2 group-hover:bg-orange-200 transition-colors">
                    <span className="text-lg">🔧</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Tech Repair
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Quick fixes & maintenance
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all duration-300 border-0 bg-white group">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-indigo-100  flex items-center justify-center mx-auto mb-2 group-hover:bg-indigo-200 transition-colors">
                    <span className="text-lg">☁️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Cloud Services
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Backup & storage solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all duration-300 border-0 bg-white group">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-red-100  flex items-center justify-center mx-auto mb-2 group-hover:bg-red-200 transition-colors">
                    <span className="text-lg">🔒</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Security
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Antivirus & data protection
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all duration-300 border-0 bg-white group">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-teal-100  flex items-center justify-center mx-auto mb-2 group-hover:bg-teal-200 transition-colors">
                    <span className="text-lg">📊</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Data Recovery
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Lost file restoration
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cyber Cafe Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Modern <span className="text-blue-600">Cyber Cafe</span>{" "}
                  Experience
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Access high-speed internet, modern computers, and a
                  comfortable environment for all your digital needs. Perfect
                  for students, professionals, and casual users.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-white  shadow-sm">
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="font-semibold text-gray-900">
                      High-Speed Internet
                    </h4>
                    <p className="text-sm text-gray-600">
                      100+ Mbps connection
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white  shadow-sm">
                    <div className="text-2xl mb-2">🖥️</div>
                    <h4 className="font-semibold text-gray-900">Modern PCs</h4>
                    <p className="text-sm text-gray-600">
                      Latest software & hardware
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white  shadow-sm">
                    <div className="text-2xl mb-2">🔒</div>
                    <h4 className="font-semibold text-gray-900">
                      Secure Environment
                    </h4>
                    <p className="text-sm text-gray-600">
                      Safe & private browsing
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white  shadow-sm">
                    <div className="text-2xl mb-2">☕</div>
                    <h4 className="font-semibold text-gray-900">
                      Comfort Zone
                    </h4>
                    <p className="text-sm text-gray-600">
                      AC, refreshments available
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">💡</span>
                      Cyber Cafe Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">
                          Internet Services
                        </h5>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Web Browsing</li>
                          <li>• Email Access</li>
                          <li>• Online Research</li>
                          <li>• Social Media</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">
                          Digital Services
                        </h5>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Document Typing</li>
                          <li>• Online Applications</li>
                          <li>• Video Conferencing</li>
                          <li>• File Downloads</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg bg-blue-600 text-white">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h4 className="text-xl font-bold mb-2">Special Rates</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-yellow-300">
                            ₵5
                          </div>
                          <p className="text-sm text-blue-100">Per Hour</p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-yellow-300">
                            ₵40
                          </div>
                          <p className="text-sm text-blue-100">Daily Pass</p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-yellow-300">
                            ₵200
                          </div>
                          <p className="text-sm text-blue-100">Weekly Pass</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose{" "}
                <span className="text-blue-600">Grace Innovation</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                We combine quality training, modern facilities, and excellent
                customer service to deliver the best IT experience
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Experience Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-xs">5+</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Years Experience
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Trusted by hundreds of satisfied customers and students
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Badge className="bg-blue-100 text-blue-800 text-xs px-3 py-1">
                      Established 2020
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Expert Instructors Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-xs">★</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Expert Instructors
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Learn from industry professionals with real-world experience
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Badge className="bg-green-100 text-green-800 text-xs px-3 py-1">
                      Certified Professionals
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Modern Equipment Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                      <span className="text-xs">🔥</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Modern Equipment
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    State-of-the-art computers and high-speed internet
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Badge className="bg-purple-100 text-purple-800 text-xs px-3 py-1">
                      Latest Technology
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Job Placement Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">95%</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Job Placement
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    95% of our graduates find employment within 6 months
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Badge className="bg-orange-100 text-orange-800 text-xs px-3 py-1">
                      Career Support
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Benefits Row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12  flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Practical Training
                </h4>
                <p className="text-xs text-gray-600">
                  Hands-on learning approach
                </p>
              </div>

              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12   flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg">�</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Certification
                </h4>
                <p className="text-xs text-gray-600">
                  Industry-recognized certificates
                </p>
              </div>

              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12  flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg">🤝</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Small Classes
                </h4>
                <p className="text-xs text-gray-600">Personalized attention</p>
              </div>

              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12  flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg">💰</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Affordable
                </h4>
                <p className="text-xs text-gray-600">Best value for money</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who chose Grace Innovation
              for their tech education and career advancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
                >
                  Start Your Journey Today
                </Button>
              </Link>
              <Link to="/tutorial">
                <Button
                  size="lg"
                  className="border-white bg-gray-600 text-white font-semibold px-8 py-3"
                >
                  Explore Our Curriculum
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
