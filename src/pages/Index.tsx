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

const Index: React.FC = () => {
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
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-500 rounded-full blur-xl"></div>
            <div className="absolute bottom-32 right-1/3 w-18 h-18 bg-yellow-500 rounded-full blur-xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IT</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-3xl font-bold text-gray-900 mb-6">
                Complete{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  IT Solutions
                </span>
              </h2>
              <p className="text-x text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From comprehensive training programs to cutting-edge hardware
                sales, we provide
                <span className="font-semibold text-blue-600">
                  {" "}
                  end-to-end IT services
                </span>{" "}
                for individuals and businesses
              </p>
              <div className="flex items-center justify-center mt-8">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full mx-2"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Main Services Grid - Redesigned with Compact Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Computer Training */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200 to-transparent rounded-full -translate-y-10 translate-x-10 opacity-40 group-hover:opacity-60 transition-opacity"></div>

                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-lg text-white">🖥️</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        Computer Training
                      </CardTitle>
                      <p className="text-gray-600 text-xs">
                        Professional courses
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800 text-xs w-fit">
                    ⭐ Most Popular
                  </Badge>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { name: "Basic Computer", icon: "💻" },
                      { name: "MS Office", icon: "📊" },
                      { name: "Web Dev", icon: "🌐" },
                      { name: "Graphics", icon: "🎨" },
                    ].map((course, index) => (
                      <div
                        key={index}
                        className="text-center p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <div className="text-sm mb-1">{course.icon}</div>
                        <p className="text-xs font-medium text-gray-800">
                          {course.name}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg">
                    <div className="text-center">
                      <p className="text-xs text-gray-600">Success Rate</p>
                      <p className="text-lg font-bold text-blue-600">95%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-600">Graduates</p>
                      <p className="text-lg font-bold text-purple-600">500+</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Document Services */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-200 to-transparent rounded-full -translate-y-10 translate-x-10 opacity-40 group-hover:opacity-60 transition-opacity"></div>

                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-lg text-white">🖨️</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        Document Services
                      </CardTitle>
                      <p className="text-gray-600 text-xs">
                        Printing & documentation
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 text-xs w-fit">
                    ⚡ 24/7 Available
                  </Badge>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { name: "Printing", icon: "📄" },
                      { name: "Photocopying", icon: "📋" },
                      { name: "Scanning", icon: "📱" },
                      { name: "Passport Photos", icon: "📸" },
                    ].map((service, index) => (
                      <div
                        key={index}
                        className="text-center p-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                      >
                        <div className="text-sm mb-1">{service.icon}</div>
                        <p className="text-xs font-medium text-gray-800">
                          {service.name}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center gap-2">
                    <Badge className="bg-purple-100 text-purple-800 text-xs px-2 py-1">
                      High Quality
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 text-xs px-2 py-1">
                      Best Rates
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Hardware Sales */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-200 to-transparent rounded-full -translate-y-10 translate-x-10 opacity-40 group-hover:opacity-60 transition-opacity"></div>

                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-lg text-white">💻</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        Hardware Sales
                      </CardTitle>
                      <p className="text-gray-600 text-xs">
                        Computers & accessories
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800 text-xs w-fit">
                    🏷️ Best Prices
                  </Badge>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <div className="space-y-2 mb-4">
                    {[
                      { name: "Laptops & Desktops", price: "From $299" },
                      { name: "Accessories", price: "From $15" },
                      { name: "Software", price: "From $25" },
                      { name: "Tech Support", price: "24/7" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-xs font-medium text-gray-800">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-green-600">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-3 py-1">
                      Warranty Included
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call-to-Action Section */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm p-6 shadow-xl">
                <div className="text-3xl">🚀</div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 text-lg">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover how our IT solutions can transform your business
                  </p>
                </div>
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Quote →
                  </Button>
                </Link>
              </div>
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
                <p className="text-x text-gray-600 mb-6">
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
              <p className="text-x text-gray-600 max-w-3xl mx-auto mb-6">
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

        {/* CTA Section - Enhanced with Background Image */}
        <section className="py-20 relative overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/85 to-purple-900/80"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-300 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Enhanced Header */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 drop-shadow-lg">
                Ready to Transform Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  {" "}
                  Future
                </span>
                ?
              </h2>

              <p className="text-x text-blue-100 mb-7 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Join thousands of successful graduates who chose Grace
                Innovation for their tech education and career advancement.
                <span className="font-semibold text-yellow-300">
                  {" "}
                  Your journey starts here!
                </span>
              </p>
            </div>

            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/register">
                <Button
                  size="lg"
                  className="group bg-white text-blue-700 hover:bg-yellow-50 font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-yellow-300"
                >
                  <span className="flex items-center gap-2">
                    🎯 Start Your Journey Today
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </Button>
              </Link>

              <Link to="/tutorial">
                <Button
                  size="lg"
                  className="group bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-bold px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white/30 hover:border-white/60"
                >
                  <span className="flex items-center gap-2">
                    📚 Explore Our Curriculum
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
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
