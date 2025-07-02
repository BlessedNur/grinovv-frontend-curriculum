import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface NotePageProps {
  title: string;
  week: string;
  topics: string[];
  content: {
    theory: string[];
    examples: string[];
    tasks: string[];
    assignment: string;
    resources: string[];
  };
}

export const NotePage = ({ title, week, topics, content }: NotePageProps) => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-white print:p-4 print:max-w-none">
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 print:text-xl">
            {title}
          </h1>
          <Badge variant="outline" className="text-xs sm:text-sm w-fit">
            {week}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {topics.map((topic, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>
        <Separator />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 print:grid-cols-2 print:gap-3">
        <Card className="print:break-inside-avoid">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg text-blue-700">
              📚 Theory
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1.5 sm:space-y-2">
            {content.theory.map((item, index) => (
              <div key={index} className="text-xs sm:text-sm leading-relaxed">
                <span className="font-medium text-blue-600">•</span>
                <span className="ml-2">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="print:break-inside-avoid">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg text-green-700">
              💡 Examples
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {content.examples.map((item, index) => (
              <div
                key={index}
                className="text-xs sm:text-sm bg-gray-50 p-2 sm:p-3 rounded font-mono border overflow-x-auto"
              >
                <pre className="whitespace-pre-wrap break-words">{item}</pre>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-3 sm:mt-4 lg:mt-6 grid grid-cols-1 gap-3 sm:gap-4">
        <Card className="print:break-inside-avoid">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg text-purple-700">
              🔧 Coding Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {content.tasks.map((task, index) => (
                <div
                  key={index}
                  className="text-xs sm:text-sm border-l-4 border-purple-200 pl-3 py-1 bg-purple-50/50 rounded-r"
                >
                  <span className="font-medium text-purple-700">
                    {index + 1}.
                  </span>
                  <span className="ml-1">{task}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-3 sm:mt-4 lg:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 print:grid-cols-2">
        <Card className="print:break-inside-avoid">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg text-red-700">
              📝 Assignment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs sm:text-sm font-medium bg-red-50 p-3 sm:p-4 rounded border-l-4 border-red-400">
              {content.assignment}
            </div>
          </CardContent>
        </Card>

        <Card className="print:break-inside-avoid">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg text-indigo-700">
              🔗 Resources
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {content.resources.map((resource, index) => (
              <div
                key={index}
                className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 underline bg-blue-50 p-2 rounded border-l-2 border-blue-200"
              >
                {resource}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
