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
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      jump: false,
    })
  );

  const programsPlugin = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      jump: false,
    })
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
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {[
                  {
                    src: "/hero-image.jpg",
                    alt: "Premium Laptop Collection - Model 1",
                  },
                  {
                    src: "/laptop4 (1).jpg",
                    alt: "Premium Laptop Collection - Model 1",
                  },
                  {
                    src: "/laptop4 (2).jpg",
                    alt: "Premium Laptop Collection - Model 2",
                  },
                  {
                    src: "/laptop4 (3).jpg",
                    alt: "Premium Laptop Collection - Model 3",
                  },
                  {
                    src: "/laptop4 (4).jpg",
                    alt: "Premium Laptop Collection - Model 4",
                  },
                  {
                    src: "/laptop4 (5).jpg",
                    alt: "Premium Laptop Collection - Model 5",
                  },
                  {
                    src: "/laptop4 (6).jpg",
                    alt: "Premium Laptop Collection - Model 6",
                  },
                ].map((laptop, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="shadow-xl hover:shadow-2xl transition-shadow bg-white/95 backdrop-blur-sm">
                        <CardContent className="p-0">
                          <div className="w-full h-72 sm:h-80 lg:h-96 overflow-hidden">
                            <img
                              src={laptop.src}
                              alt={laptop.alt}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white/80 hover:bg-white/90 backdrop-blur-sm" />
              <CarouselNext className="right-2 bg-white/80 hover:bg-white/90 backdrop-blur-sm" />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Programs Strip */}
      <div className="relative z-10 bg-gradient-to-r from-blue-50/95 via-white/95 to-purple-50/95 backdrop-blur-sm py-8 border-t shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 drop-shadow-sm">
              Our Professional Training Programs
            </h3>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Comprehensive courses designed to shape your future in technology
            </p>
          </div>

          <Carousel
            className="w-full"
            plugins={[programsPlugin.current]}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[
                {
                  name: "Graphics Design",
                  icon: "🎨",
                  duration: "3-6 months",
                  level: "Beginner to Pro",
                },
                {
                  name: "Software Engineering",
                  icon: "💻",
                  duration: "6-12 months",
                  level: "Professional",
                },
                {
                  name: "Computer Secretariat",
                  icon: "📝",
                  duration: "2-4 months",
                  level: "Essential Skills",
                },
                {
                  name: "Web Development",
                  icon: "🌐",
                  duration: "4-8 months",
                  level: "Full Stack",
                },
                {
                  name: "Computer Maintenance",
                  icon: "🔧",
                  duration: "1-3 months",
                  level: "Technical",
                },
                {
                  name: "Digital Marketing",
                  icon: "📱",
                  duration: "2-4 months",
                  level: "Strategic",
                },
                {
                  name: "Data Analysis",
                  icon: "📊",
                  duration: "3-6 months",
                  level: "Analytics",
                },
                {
                  name: "Mobile App Development",
                  icon: "📲",
                  duration: "5-8 months",
                  level: "Advanced",
                },
              ].map((program, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <Card className="h-full shadow-lg bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 group">
                    <CardContent className="p-4 text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          {program.icon}
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-blue-700 transition-colors">
                          {program.name}
                        </h4>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                          >
                            {program.duration}
                          </Badge>
                          <p className="text-xs text-gray-500 font-medium">
                            {program.level}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="text-center mt-6">
            <p className="text-xs text-gray-500 italic">
              ✨ Programs continuously enrolling • Flexible schedules available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
