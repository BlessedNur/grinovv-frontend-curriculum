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
      name: "Mr. Njuh Bronu",
      title: "CEO & Founder",
      specialization: "Leadership, Strategic Vision, Tech Innovation",
      experience: "5+ Years",
      image: "👨‍",
      bio: "Visionary leader and founder of Grace Innovation Computer Training Center. With over 15 years of experience in technology and education, he has dedicated his career to empowering the next generation of tech professionals. His passion for innovation and commitment to excellence has made Grace Innovation a leading training center in Ghana.",
      skills: [
        "Leadership",
        ". ",
        "Tech Innovation",
        "Business Development",
        "Educational Technology",
      ],
      certifications: [
        "Certified Technology Leader",
        "Business Innovation Certificate",
        "Educational Leadership Certification",
      ],
    },
    {
      id: 2,
      name: "Mr. Joseph Jose",
      title: "Fullstack Web Developer (MERN)",
      specialization:
        "MERN Stack, Full-Stack Development, Modern Web Technologies",
      experience: "3+ Years",
      image: "👨‍💻",
      bio: "Expert full-stack developer specializing in the MERN stack with extensive experience in building scalable web applications. Passionate about teaching modern web development technologies and helping students master both frontend and backend development. Known for his practical approach to teaching complex programming concepts.",
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML",
        "CSS",
        "React.js",
        "Nest.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "Python",
        "Docker",
        "Git/GitHub",
      ],
      certifications: [
        "MERN Stack Certified Developer",
        "Full-Stack JavaScript Expert",
        "Docker Container Specialist",
      ],
    },
    {
      id: 3,
      name: "Mrs. Njuh Bella",
      title: "Digital Office Applications Specialist",
      specialization:
        "Microsoft Office Suite, Design Systems, Digital Productivity",
      experience: "2+ Years",
      image: "👩‍💻",
      bio: "Experienced digital office applications specialist with a decade of expertise in Microsoft Office Suite and design systems. She excels at teaching students how to master essential productivity tools and create professional documents, presentations, and spreadsheets. Her patient teaching style and attention to detail help students build confidence in digital office environments.",
      skills: [
        "Microsoft Word",
        "PowerPoint",
        "Excel",
        "Design Systems",
        "Document Design",
        "Data Analysis",
        "Presentation Design",
        "Digital Productivity",
      ],
      certifications: [
        "Microsoft Office Specialist Expert",
        "Advanced Excel Certified",
        "Digital Design Professional",
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
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-white drop-shadow-lg">
                Meet Our Expert Tutors
              </span>
            </h1>
            <p className="text-x text-gray-100 max-w-3xl mx-auto font-medium drop-shadow-md">
              Learn from industry professionals with years of real-world
              experience and passion for teaching
            </p>
          </div>
        </div>
      </section>

      {/* Tutors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
