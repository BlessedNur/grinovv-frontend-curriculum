import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Hero = () => {
  return (
    <section className="bg-white border-b">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Logo/Header */}
            <div className="space-y-4">
            

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Shaping Lives Through</span>
                <br />
                <span className="text-gray-900">Technology &</span>
                <br />
                <span className="text-yellow-600">Redesigning Futures</span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-lg text-gray-600 max-w-2xl">
              Offers Quality Computer Training with hands-on experience and
              industry-standard curriculum
            </p>

            {/* Discount Badge */}
            <div className="flex items-center space-x-4">
              <Badge
                variant="destructive"
                className="bg-red-500 text-white px-4 py-2 text-base font-semibold"
              >
                THIS SEASON -10% DISCOUNT
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3"
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3"
              >
                View Programs
              </Button>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Main Training Card */}
              <Card className="sm:col-span-2 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-2xl">👨‍💻</span>
                    Computer Holiday Classes
                    <Badge variant="outline" className="text-xs">
                      ACTIVE
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Interactive Learning Environment with Modern Technology
                  </p>
                </CardContent>
              </Card>

              {/* Service Cards */}
              <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span className="text-xl">🖨️</span>
                    Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Printing, Scanning & Photocopying Services
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span className="text-xl">💻</span>
                    Laptop Sales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Quality Hardware & Computer Equipment
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Strip */}
      <div className="bg-gray-50 py-6 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Our Training Programs Include:
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              "Graphics Design",
              "Software Engineering",
              "Computer Secretariat",
              "Web Development",
              "Computer Maintenance",
            ].map((program, index) => (
              <Card key={index} className="text-center py-3 shadow-sm">
                <CardContent className="p-2">
                  <span className="font-medium text-gray-700 text-sm">
                    {program}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
