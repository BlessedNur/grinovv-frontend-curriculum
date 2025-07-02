import React from "react";
import { Card } from "@/components/ui/card";

interface TimetableHeaderProps {
  title: string;
  duration: string;
  color: string;
}

const TimetableHeader: React.FC<TimetableHeaderProps> = ({
  title,
  duration,
  color,
}) => {
  return (
    <Card className={`p-6 mb-6 ${color} text-white`}>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-lg opacity-90">Duration: {duration}</p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="bg-white/20  p-3">
            <div className="font-semibold">Monday</div>
            <div>4:00 PM - 8:00 PM</div>
          </div>
          <div className="bg-white/20  p-3">
            <div className="font-semibold">Tuesday</div>
            <div>4:00 PM - 8:00 PM</div>
          </div>
          <div className="bg-white/20  p-3">
            <div className="font-semibold">Thursday</div>
            <div>4:00 PM - 8:00 PM</div>
          </div>
          <div className="bg-white/20  p-3">
            <div className="font-semibold">Saturday</div>
            <div>12:00 PM - 4:00 PM</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TimetableHeader;
