import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Tutor = () => {
  const tutors = [
    {
      id: 1,
      name: "Dr. Emmanuel Kwame",
      title: "Senior Full-Stack Developer",
      specialization: "React, Node.js, Python",
      experience: "8+ Years",
      image: "👨‍💻",
      bio: "Expert in modern web technologies with extensive experience in building scalable applications. Passionate about teaching and mentoring aspiring developers.",
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "MongoDB",
        "PostgreSQL",
      ],
      certifications: [
        "AWS Certified",
        "Google Cloud Professional",
        "Microsoft Azure",
      ],
    },
    {
      id: 2,
      name: "Mrs. Sarah Osei",
      title: "UI/UX Design Lead",
      specialization: "Design Systems, Figma, Adobe Creative Suite",
      experience: "6+ Years",
      image: "👩‍🎨",
      bio: "Creative designer with a passion for user-centered design. Specializes in creating beautiful and functional digital experiences.",
      skills: [
        "Figma",
        "Adobe XD",
        "Photoshop",
        "Illustrator",
        "Prototyping",
        "User Research",
      ],
      certifications: [
        "Adobe Certified Expert",
        "Google UX Design Certificate",
        "Figma Professional",
      ],
    },
    {
      id: 3,
      name: "Mr. Joseph Mensah",
      title: "Software Engineering Expert",
      specialization: "Java, C#, System Architecture",
      experience: "10+ Years",
      image: "👨‍🔬",
      bio: "Seasoned software engineer with deep expertise in enterprise applications and system design. Mentor to hundreds of successful developers.",
      skills: [
        "Java",
        "C#",
        ".NET",
        "Spring Boot",
        "Microservices",
        "System Design",
      ],
      certifications: [
        "Oracle Certified Java Professional",
        "Microsoft Certified Developer",
        "AWS Solutions Architect",
      ],
    },
    {
      id: 4,
      name: "Miss Grace Asante",
      title: "Web Development Specialist",
      specialization: "Frontend Technologies, Responsive Design",
      experience: "5+ Years",
      image: "👩‍💻",
      bio: "Frontend specialist passionate about creating responsive and accessible web applications. Expert in modern CSS frameworks and JavaScript libraries.",
      skills: ["HTML5", "CSS3", "JavaScript", "Vue.js", "Tailwind CSS", "SASS"],
      certifications: [
        "Frontend Masters Certified",
        "W3C Web Accessibility",
        "Google Mobile Web Specialist",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
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

        {/* Dark Overlay for better content readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-400/30 to-red-500/30 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-40 right-20 w-28 h-28 bg-gradient-to-r from-green-400/30 to-blue-500/30 rounded-full blur-xl animate-pulse delay-500" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                Expert Tutors
              </span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto font-medium drop-shadow-md">
              Learn from industry professionals with years of real-world
              experience and passion for teaching
            </p>
          </div>
        </div>
      </section>

      {/* Tutors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {tutors.map((tutor) => (
              <Card
                key={tutor.id}
                className="group shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 border-0"
              >
                <CardHeader className="text-center pb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{tutor.image}</span>
                  </div>
                  <CardTitle className="text-lg text-gray-900 leading-tight">
                    {tutor.name}
                  </CardTitle>
                  <p className="text-blue-600 font-medium text-sm">
                    {tutor.title}
                  </p>
                  <div className="flex flex-col gap-1 mt-2">
                    <Badge
                      variant="outline"
                      className="text-xs w-fit mx-auto bg-blue-50 text-blue-700 border-blue-200"
                    >
                      {tutor.experience}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <p className="text-gray-600 text-center text-xs leading-relaxed line-clamp-3">
                    {tutor.bio}
                  </p>

                  {/* Top Skills */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 text-xs">
                      Top Skills:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {tutor.skills.slice(0, 3).map((skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs px-2 py-0.5 bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {tutor.skills.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs px-2 py-0.5 bg-yellow-50 text-yellow-700 border-yellow-200"
                        >
                          +{tutor.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Key Certification */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 text-xs">
                      Key Certification:
                    </h4>
                    <Badge className="bg-green-50 text-green-700 text-xs border border-green-200 px-2 py-1">
                      {tutor.certifications[0]}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Teaching Approach Section */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg mb-16 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Our Teaching Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Practical Learning
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hands-on projects and real-world scenarios to ensure you gain
                  practical experience.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">👥</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Personalized Attention
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Small class sizes and one-on-one mentoring to address
                  individual learning needs.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Industry Standards
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Learn using the latest tools and technologies used by top
                  companies worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Student Success Section */}
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-6 text-white mb-16 shadow-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-3">
                Student Success Stories
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                Our tutors have guided hundreds of students to successful tech
                careers
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">
                    500+
                  </div>
                  <p className="text-blue-100 text-sm">Students Trained</p>
                </div>
                <div className="text-center bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">
                    95%
                  </div>
                  <p className="text-blue-100 text-sm">Employment Rate</p>
                </div>
                <div className="text-center bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">
                    4.9★
                  </div>
                  <p className="text-blue-100 text-sm">Average Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Learn from the Best?
            </h2>
            <p className="text-lg text-gray-600 mb-5">
              Join our next cohort and get mentored by industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Register for Classes
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium hover:shadow-lg transition-all duration-300"
                >
                  Contact a Tutor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Tutor;
