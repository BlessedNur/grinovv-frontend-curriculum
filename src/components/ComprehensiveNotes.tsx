import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { htmlNotes } from "../data/htmlNotes";
import { cssNotes } from "../data/cssBasic";
import { jsNotes } from "../data/jsBasic";
import { reactNotes } from "../data/reactNotes";
import { reactComplete } from "../data/reactComplete";
import { reactHooks } from "../data/reactHooks";
import { reactAdvanced } from "../data/reactAdvanced";
import { typeScriptNotes } from "../data/typeScriptNotes";
import { typeScriptComplete } from "../data/typeScriptComplete";
import { typeScriptAdvanced } from "../data/typeScriptAdvanced";

interface TopicSectionProps {
  title: string;
  topics: any[];
  color: string;
}

const TopicSection: React.FC<TopicSectionProps> = ({
  title,
  topics,
  color,
}) => (
  <div className="mb-6 sm:mb-8">
    <h2
      className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-${color}-600 px-4 sm:px-0`}
    >
      {title}
    </h2>
    <div className="grid gap-4 sm:gap-6 px-4 sm:px-0">
      {topics.map((topic, index) => (
        <Card
          key={index}
          className="print:break-inside-avoid shadow-sm hover:shadow-md transition-shadow"
        >
          <CardHeader className="pb-3">
            <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-2 text-base sm:text-lg">
              <span className="break-words">{topic.title}</span>
              <Badge variant="outline" className="w-fit text-xs">
                {color.toUpperCase()}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base">
                📚 Content:
              </h4>
              <p className="text-xs sm:text-sm mb-3 leading-relaxed text-gray-700">
                {topic.content}
              </p>
            </div>

            {topic.codeExample && (
              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">
                  💻 Code Example:
                </h4>
                <div className="relative">
                  <pre className="bg-gray-100 p-2 sm:p-3 rounded text-xs overflow-x-auto border max-h-60 sm:max-h-96">
                    <code className="text-xs leading-tight">
                      {topic.codeExample}
                    </code>
                  </pre>
                </div>
              </div>
            )}

            {topic.practice && (
              <div>
                <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  🎯 Practice:
                </h4>
                <p className="text-xs sm:text-sm text-gray-700">
                  {topic.practice}
                </p>
              </div>
            )}

            {topic.assignment && (
              <div className="bg-blue-50 p-2 sm:p-3 rounded border-l-4 border-blue-400">
                <h4 className="font-semibold mb-1 text-sm sm:text-base text-blue-800">
                  📝 Assignment:
                </h4>
                <p className="text-xs sm:text-sm text-blue-700">
                  {topic.assignment}
                </p>
              </div>
            )}

            {topic.demo && (
              <div className="bg-green-50 p-2 sm:p-3 rounded border-l-4 border-green-400">
                <h4 className="font-semibold mb-1 text-sm sm:text-base text-green-800">
                  🚀 Demo:
                </h4>
                <p className="text-xs sm:text-sm text-green-700">
                  {topic.demo}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export const ComprehensiveNotes: React.FC = () => {
  const allHtmlTopics = htmlNotes;
  const allCssTopics = cssNotes;
  const allJsTopics = jsNotes;
  const allReactTopics = [
    ...reactNotes,
    ...reactComplete,
    ...reactHooks,
    ...reactAdvanced,
  ];
  const allTypeScriptTopics = [
    ...typeScriptNotes,
    ...typeScriptComplete,
    ...typeScriptAdvanced,
  ];

  return (
    <div className="max-w-7xl mx-auto p-2 sm:p-4 lg:p-6">
      <div className="text-center mb-6 sm:mb-8 px-4 sm:px-0">
        <h1 className="text-blue-600 text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Complete Web Development Textbook
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-1">
          Professional Frontend Development Training
        </p>
        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          Premium IT Training Materials - Full Stack Edition
        </p>
        <div className="mt-4 p-3 sm:p-4 bg-yellow-50 border border-yellow-200  mx-4 sm:mx-0">
          <p className="text-sm font-semibold mb-2">
            📚 Complete Curriculum Includes:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 text-xs sm:text-sm">
            <div className="bg-white p-2 rounded border">
              <span className="font-medium text-red-600">HTML:</span>
              <br />
              <span className="text-gray-700">
                {allHtmlTopics.length} Topics
              </span>
            </div>
            <div className="bg-white p-2 rounded border">
              <span className="font-medium text-blue-600">CSS:</span>
              <br />
              <span className="text-gray-700">
                {allCssTopics.length} Topics
              </span>
            </div>
            <div className="bg-white p-2 rounded border">
              <span className="font-medium text-green-600">JavaScript:</span>
              <br />
              <span className="text-gray-700">{allJsTopics.length} Topics</span>
            </div>
            <div className="bg-white p-2 rounded border">
              <span className="font-medium text-cyan-600">React:</span>
              <br />
              <span className="text-gray-700">
                {allReactTopics.length} Topics
              </span>
            </div>
            <div className="bg-white p-2 rounded border col-span-2 sm:col-span-1">
              <span className="font-medium text-purple-600">TypeScript:</span>
              <br />
              <span className="text-gray-700">
                {allTypeScriptTopics.length} Topics
              </span>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="html" className="w-full">
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 mb-4 sm:mb-6 -mx-2 sm:-mx-4 lg:-mx-6 px-2 sm:px-4 lg:px-6 pb-2 sm:pb-4 z-10">
          <TabsList className="grid w-full grid-cols-5 h-auto p-1 bg-gray-100">
            <TabsTrigger
              value="html"
              className="text-xs sm:text-sm py-2 sm:py-3 data-[state=active]:bg-white data-[state=active]:text-red-600 data-[state=active]:font-semibold"
            >
              <span className="hidden sm:inline">HTML</span>
              <span className="sm:hidden">H</span>
            </TabsTrigger>
            <TabsTrigger
              value="css"
              className="text-xs sm:text-sm py-2 sm:py-3 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:font-semibold"
            >
              <span className="hidden sm:inline">CSS</span>
              <span className="sm:hidden">C</span>
            </TabsTrigger>
            <TabsTrigger
              value="javascript"
              className="text-xs sm:text-sm py-2 sm:py-3 data-[state=active]:bg-white data-[state=active]:text-green-600 data-[state=active]:font-semibold"
            >
              <span className="hidden sm:inline">JavaScript</span>
              <span className="sm:hidden">JS</span>
            </TabsTrigger>
            <TabsTrigger
              value="react"
              className="text-xs sm:text-sm py-2 sm:py-3 data-[state=active]:bg-white data-[state=active]:text-cyan-600 data-[state=active]:font-semibold"
            >
              <span className="hidden sm:inline">React</span>
              <span className="sm:hidden">R</span>
            </TabsTrigger>
            <TabsTrigger
              value="typescript"
              className="text-xs sm:text-sm py-2 sm:py-3 data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:font-semibold"
            >
              <span className="hidden sm:inline">TypeScript</span>
              <span className="sm:hidden">TS</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="html" className="mt-0">
          <TopicSection
            title="Complete HTML Mastery"
            topics={allHtmlTopics}
            color="red"
          />
        </TabsContent>

        <TabsContent value="css" className="mt-0">
          <TopicSection
            title="Complete CSS Mastery"
            topics={allCssTopics}
            color="blue"
          />
        </TabsContent>

        <TabsContent value="javascript" className="mt-0">
          <TopicSection
            title="Complete JavaScript Mastery"
            topics={allJsTopics}
            color="green"
          />
        </TabsContent>

        <TabsContent value="react" className="mt-0">
          <TopicSection
            title="React Development Mastery"
            topics={allReactTopics}
            color="cyan"
          />
        </TabsContent>

        <TabsContent value="typescript" className="mt-0">
          <TopicSection
            title="TypeScript Development"
            topics={allTypeScriptTopics}
            color="purple"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
