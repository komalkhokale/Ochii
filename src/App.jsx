import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import LocomotiveScroll CSS
import Start from "./components/Start";

function App() {
  const scrollRef = useRef(null); // Create a ref for the scroll container

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current, // Target the container element
      smooth: true, // Enable smooth scrolling
      multiplier: 1.5, // Adjust scroll speed
    });

    return () => {
      locomotiveScroll.destroy(); // Clean up LocomotiveScroll instance on unmount
    };
  }, []);

  return (
    <div ref={scrollRef} className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Start />
      <Footer />
    </div>
  );
}

export default App;
