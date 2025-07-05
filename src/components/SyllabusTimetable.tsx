import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import TimetableHeader from './TimetableHeader';
import ModuleCard from './ModuleCard';
import { syllabusData } from './SyllabusData';

const SyllabusTimetable: React.FC = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mt-10 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <FileText className="h-10 w-10 text-blue-600" />
            Web Development Program Syllabus
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Comprehensive Full-Stack Development Training Program
          </p>
          <Button onClick={handleDownloadPDF} className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Frontend Section */}
        <TimetableHeader 
          title="Frontend Development" 
          duration="2 Months (8 Weeks)" 
          color="bg-gradient-to-r from-blue-600 to-blue-800"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {syllabusData.frontend.map((module, index) => (
            <ModuleCard key={index} module={module} index={index} />
          ))}
        </div>

        {/* Backend Section */}
        <TimetableHeader 
          title="Backend Development" 
          duration="3 Months (12 Weeks)" 
          color="bg-gradient-to-r from-green-600 to-green-800"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {syllabusData.backend.map((module, index) => (
            <ModuleCard key={index} module={module} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyllabusTimetable;