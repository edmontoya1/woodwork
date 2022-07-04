import React from "react";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="container">
      <Announcements />
      <Navbar />
    </div>
  );
};

export default Home;
