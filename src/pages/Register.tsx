import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import WhatsAppButton from "../components/WhatsAppButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section with Blurred Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Blur Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/hero-image.jpg)",
            filter: "blur(8px)",
            transform: "scale(1.1)",
          }}
        ></div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-green-900/75 to-purple-900/70"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">📝</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Register for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Grace Innovation
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-6 drop-shadow-md leading-relaxed">
              Join our comprehensive computer training programs and start your
              tech journey today!{" "}
              <span className="font-semibold text-yellow-300">
                Your future starts here!
              </span>
            </p>
            <Badge
              variant="destructive"
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 text-lg font-bold shadow-xl animate-pulse"
            >
              🎉 Early Bird Discount: -10% OFF
            </Badge>
            {/* Decorative line */}
            <div className="flex items-center justify-center mt-8">
              <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full mx-3 shadow-lg"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Registration Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Student Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="program">Select Program</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="graphics-design">
                        Graphics Design
                      </SelectItem>
                      <SelectItem value="web-development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="software-engineering">
                        Software Engineering
                      </SelectItem>
                      <SelectItem value="computer-secretariat">
                        Computer Secretariat
                      </SelectItem>
                      <SelectItem value="computer-maintenance">
                        Computer Maintenance
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="experience">
                    Previous Experience (Optional)
                  </Label>
                  <Textarea
                    id="experience"
                    placeholder="Tell us about your background or experience..."
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            {/* Program Benefits */}
            <div className="space-y-6">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🎓</span>
                    Why Choose Grace Innovation?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold">
                        Industry-Standard Curriculum
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Learn the latest technologies and best practices
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold">Hands-on Experience</h4>
                      <p className="text-gray-600 text-sm">
                        Work on real projects and build your portfolio
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold">Expert Instructors</h4>
                      <p className="text-gray-600 text-sm">
                        Learn from experienced professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold">
                        Certificate of Completion
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Get recognized credentials for your skills
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">💰</span>
                    Pricing & Packages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 ">
                    <h4 className="font-semibold text-blue-900">
                      Basic Package
                    </h4>
                    <p className="text-2xl font-bold text-blue-600">
                      50,000 XAF
                    </p>
                    <p className="text-sm text-gray-600">
                      Single program enrollment
                    </p>
                  </div>
                  <div className="bg-green-50 p-4  border-2 border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-green-900">
                        Premium Package
                      </h4>
                      <Badge className="bg-green-600">POPULAR</Badge>
                    </div>
                    <p className="text-2xl font-bold text-green-600">
                      80,000 XAF
                    </p>
                    <p className="text-sm text-gray-600">
                      Multiple programs + extras
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Register;
