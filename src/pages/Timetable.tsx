import React from "react";
import SyllabusTimetable from "../components/SyllabusTimetable";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

const Timetable = () => {
  return (
    <div>
      <Navbar />
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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/75 to-blue-900/70"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-6xl mt-12 mb-12 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
             
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                Course{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Timetable
                </span>
              </h1>
              <p className="text-x text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Explore our comprehensive course schedules and find the perfect
                time to
                <span className="font-semibold text-yellow-300">
                  {" "}
                  advance your tech skills!
                </span>
              </p>
              {/* Decorative line */}
              <div className="flex items-center justify-center mt-8">
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full mx-3 shadow-lg"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        <SyllabusTimetable />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Timetable;
