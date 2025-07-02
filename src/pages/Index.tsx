import React from "react";
import { ComprehensiveNotes } from "../components/ComprehensiveNotes";
import { Button } from "../components/ui/button";

const Index = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="print:hidden bg-white shadow-sm border-b mb-4 sm:mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <h1
            className="text-lg sm:text-xl font-bold text-gray-900"
            style={{ fontFamily: "Lucida Handwriting, cursive" }}
          >
            GRINOVV FRONTEND WEB DEVELOPMENT NOTES
          </h1>
          <Button
            onClick={handlePrint}
            className="bg-blue-600 hover:bg-blue-700 text-sm w-full sm:w-auto"
            size="sm"
          >
            📄 Download PDF
          </Button>
        </div>
      </div>

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
    </div>
  );
};

export default Index;
