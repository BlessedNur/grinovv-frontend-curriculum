import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
        <div className="flex justify-between items-center py-2 sm:py-3">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center">
            <img
              src="/grace-logo.svg"
              alt="Grace Innovation Computer Training Center"
              className="h-12 w-auto mr-4"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            

            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              About
            </Link>

            <Link
              to="/tutorial"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/tutorial")
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Tutorial
            </Link>

            <Link
              to="/timetable"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/timetable")
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Timetable
            </Link>

            <Link
              to="/tutor"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/tutor")
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Instructor
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Contact
            </Link>

            <Link to="/register">
              <Button
                className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm ${
                  isActive("/register") ? "ring-2 ring-blue-300" : ""
                }`}
                size="sm"
              >
                Register
              </Button>
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
