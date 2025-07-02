import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CourseModule } from './SyllabusData';

interface ModuleCardProps {
  module: CourseModule;
  index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, index }) => {
  const colors = [
    'bg-blue-50 border-blue-200',
    'bg-green-50 border-green-200',
    'bg-purple-50 border-purple-200',
    'bg-orange-50 border-orange-200',
    'bg-pink-50 border-pink-200'
  ];

  const badgeColors = [
    'bg-blue-100 text-blue-800',
    'bg-green-100 text-green-800',
    'bg-purple-100 text-purple-800',
    'bg-orange-100 text-orange-800',
    'bg-pink-100 text-pink-800'
  ];

  return (
    <Card className={`${colors[index % colors.length]} hover:shadow-lg transition-shadow`}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span className="text-lg font-bold">{module.name}</span>
          <Badge className={badgeColors[index % badgeColors.length]}>
            {module.duration}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {module.topics.map((topic, topicIndex) => (
            <div key={topicIndex} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span className="text-sm">{topic}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;