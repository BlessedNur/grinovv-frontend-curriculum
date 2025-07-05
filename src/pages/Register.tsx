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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Register for <span className="text-blue-600">Grace Innovation</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Join our comprehensive computer training programs and start your
            tech journey today!
          </p>
          <Badge
            variant="destructive"
            className="bg-red-500 text-white px-4 py-2 text-base font-semibold"
          >
            Early Bird Discount: -10% OFF
          </Badge>
        </div>

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
                <Input id="phone" type="tel" placeholder="Enter phone number" />
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
                    <h4 className="font-semibold">Certificate of Completion</h4>
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
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Basic Package</h4>
                  <p className="text-2xl font-bold text-blue-600">₦50,000</p>
                  <p className="text-sm text-gray-600">
                    Single program enrollment
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-green-900">
                      Premium Package
                    </h4>
                    <Badge className="bg-green-600">POPULAR</Badge>
                  </div>
                  <p className="text-2xl font-bold text-green-600">₦80,000</p>
                  <p className="text-sm text-gray-600">
                    Multiple programs + extras
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  <Footer />
  </>
  );

};

export default Register;
