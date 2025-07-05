import React from "react";
import SyllabusTimetable from "../components/SyllabusTimetable";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

const Timetable = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <SyllabusTimetable />
        <Footer />
      </div>
    </div>
  );
};

export default Timetable;
