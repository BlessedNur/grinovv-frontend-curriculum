import React from "react";
import { ComprehensiveNotes } from "../components/ComprehensiveNotes";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Tutorial = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="print:hidden relative bg-white border-b overflow-hidden">
        {/* Blurred Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/hero-image.jpg)",
            filter: "blur(8px)",
            transform: "scale(1.1)",
          }}
        />

        {/* Dark Overlay for better content readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-400/30 to-red-500/30 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-40 right-20 w-28 h-28 bg-gradient-to-r from-green-400/30 to-blue-500/30 rounded-full blur-xl animate-pulse delay-500" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                Frontend Development
              </span>{" "}
              Tutorial
            </h1>
            <p className="text-lg text-gray-100 mb-6 font-medium drop-shadow-md">
              Comprehensive learning materials for modern web development
            </p>
            <Button
              onClick={handlePrint}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              📄 Download PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Tutorial Content */}
      <div className="print:p-0">
        <ComprehensiveNotes />
      </div>

      <style>{`
        @media print {
          body { font-size: 12px; }
          .print\\:break-inside-avoid { break-inside: avoid; }
          .print\\:hidden { display: none !important; }
          .print\\:p-0 { padding: 0 !important; }
          pre { font-size: 10px; white-space: pre-wrap; }
        }
      `}</style>

      {/* Footer */}
      <div className="print:hidden">
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Tutorial;
