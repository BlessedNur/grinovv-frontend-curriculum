import React from "react";
import { ComprehensiveNotes } from "../components/ComprehensiveNotes";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Tutorial = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Tutorial Header */}
      <div className="print:hidden bg-white shadow-sm border-b mb-4 sm:mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-3xl font-bold text-gray-900 mb-2">
              Frontend Development Tutorial
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Comprehensive learning materials for modern web development
            </p>
            <Button
              onClick={handlePrint}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2"
            >
              📄 Download PDF
            </Button>
          </div>
        </div>
      </div>

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
      </div>
    </div>
  );
};

export default Tutorial;
