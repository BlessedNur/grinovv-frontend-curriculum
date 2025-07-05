import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleViewProgramsClick = () => {
    navigate("/timetable");
  };

  return (
    <section className="relative bg-white border-b overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/hero-image.jpg)",
          filter: "blur(8px)",
          transform: "scale(1.1)",
        }}
      />

      {/* Overlay for better content readability */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Logo/Header */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight drop-shadow-sm">
                <span className="text-blue-700">Shaping Lives Through</span>
                <br />
                <span className="text-gray-50">Technology &</span>
                <br />
                <span className="text-gray-900">Redesigning Futures</span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-lg text-gray-50 max-w-2xl font-medium drop-shadow-sm">
              Offers Quality Computer Training with hands-on experience and
              industry-standard curriculum
            </p>

            {/* Discount Badge */}
            <div className="flex items-center space-x-4">
              <Badge
                variant="outline"
                className="bg-red-500/30 backdrop-blur-md border-red-500/50 text-gray-300 px-4 py-2 text-base font-semibold shadow-lg"
              >
                THIS SEASON -10% DISCOUNT
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={handleRegisterClick}
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={handleViewProgramsClick}
              >
                View Programs
              </Button>
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div className="space-y-4">
            <Carousel
              className="w-full max-w-lg mx-auto"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="shadow-xl hover:shadow-2xl transition-shadow bg-white/95 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <img
                          src="public/hero-image.jpg"
                          alt="Grace Innovation Computer Training Center - Main"
                          className="w-full h-auto object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Programs Strip */}
      <div className="relative z-10 bg-gray-50/95 backdrop-blur-sm py-6 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 drop-shadow-sm">
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
              <Card
                key={index}
                className="text-center py-3 shadow-md bg-white/90 backdrop-blur-sm hover:bg-white/95 transition-all duration-200"
              >
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
