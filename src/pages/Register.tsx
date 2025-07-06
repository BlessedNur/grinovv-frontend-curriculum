import React, { useState } from "react";
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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    experience: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      program: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the registration data for WhatsApp message
    const registrationData = {
      fullName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      program: formData.program,
      experience: formData.experience || "No previous experience mentioned",
      timestamp: new Date().toLocaleString(),
    };

    // Create formatted WhatsApp message
    const whatsappMessage = `🎓 NEW STUDENT REGISTRATION 🎓

👤 Student Details:
• Name: ${registrationData.fullName}
• Email: ${registrationData.email}
• Phone: ${registrationData.phone}
• Program: ${registrationData.program}
• Experience: ${registrationData.experience}

📅 Registration Time: ${registrationData.timestamp}

💰 READY FOR PAYMENT PROCESSING
The student is ready to proceed with payment and enrollment. Please contact them to complete the registration process.

📱 Contact Student: ${registrationData.phone}
📧 Email Student: ${registrationData.email}`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Your WhatsApp contact number
    const adminWhatsApp = "237653956170";

    // Send to admin WhatsApp
    const whatsappURL = `https://wa.me/${adminWhatsApp}?text=${encodedMessage}`;

    // Open WhatsApp in new tab/window
    window.open(whatsappURL, "_blank");

    // Log the registration for debugging
    console.log("Registration submitted:", registrationData);

    // Show success modal
    setShowSuccessModal(true);

    // Reset form after a short delay to allow WhatsApp to open
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        program: "",
        experience: "",
      });
    }, 1000);
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };
  return (
    <>
      <Navbar />
      {/* Hero Section with Blurred Background */}
      <section className="relative py-15 overflow-hidden">
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
          <div className="text-center mt-12 mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              <span className="text-white bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Register for Grace Innovation
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter first name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="program">Select Program</Label>
                    <Select
                      value={formData.program}
                      onValueChange={handleSelectChange}
                    >
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
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Tell us about your background or experience..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                  >
                    Register Now
                  </Button>
                </form>
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

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-white  shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100 opacity-100">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal content */}
            <div className="p-6 text-center">
              {/* Success icon with animation */}
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg
                  className="w-8 h-8 text-white animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🎉 Registration Successful!
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Your registration has been sent to our admissions team via
                WhatsApp. You'll be contacted shortly for payment and
                enrollment.
              </p>

              {/* Next Steps - Compact */}
              <div className="bg-blue-50  p-3 mb-4 text-left">
                <h4 className="font-semibold text-blue-900 mb-1 text-sm">
                  📋 What's Next:
                </h4>
                <ul className="text-xs text-blue-800 space-y-0.5">
                  <li>• Await our WhatsApp message for payment</li>
                  <li>• Prepare your documents (ID, certificates)</li>
                </ul>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={closeModal}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 py-2 text-sm"
                >
                  Continue Browsing
                </Button>
                <Button
                  onClick={() => {
                    closeModal();
                    // Navigate to WhatsApp with enrollment message
                    window.open(
                      "https://wa.me/237650159713?text=Hello! I just completed my registration for Grace Innovation. I'm excited to start my journey!",
                      "_blank"
                    );
                  }}
                  variant="outline"
                  className="flex-1 border-green-600 text-green-600 hover:bg-green-50 font-semibold hover:shadow-lg transition-all duration-300 py-2 text-sm"
                >
                  Chat with Us
                </Button>
              </div>

              {/* Additional info - Compact */}
              <p className="text-xs text-gray-500 mt-3">
                Questions? Call{" "}
                <span className="font-semibold text-blue-600">
                  (+237) 650 15 97 13
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Register;
