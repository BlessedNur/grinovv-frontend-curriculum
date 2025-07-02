import { useState } from "react";
import { NotePage } from "./NotePage";
import { frontendNotes } from "./NoteData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Download, FileText } from "lucide-react";

export const NoteViewer = () => {
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const currentNote = frontendNotes[currentNoteIndex];

  const handlePrevious = () => {
    setCurrentNoteIndex((prev) =>
      prev > 0 ? prev - 1 : frontendNotes.length - 1
    );
  };

  const handleNext = () => {
    setCurrentNoteIndex((prev) =>
      prev < frontendNotes.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">
      {/* Navigation Header - Hidden in print */}
      <div className="print:hidden bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                Frontend Development Notes
              </h1>
            </div>
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrint}
                className="w-full sm:w-auto text-sm"
              >
                <Download className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Note Navigation - Hidden in print */}
      <div className="print:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg">
              Course Modules
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={frontendNotes.length <= 1}
                size="sm"
                className="w-full sm:w-auto"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                {frontendNotes.map((_, index) => (
                  <Button
                    key={index}
                    variant={index === currentNoteIndex ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentNoteIndex(index)}
                    className="min-w-[2.5rem] h-8"
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                onClick={handleNext}
                disabled={frontendNotes.length <= 1}
                size="sm"
                className="w-full sm:w-auto"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Note Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 print:px-0 print:pb-0">
        <NotePage
          title={currentNote.title}
          week={currentNote.week}
          topics={currentNote.topics}
          content={currentNote.content}
        />
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0.5in;
          }
          body {
            font-size: 12pt;
            line-height: 1.4;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
