import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Start = () => {
  const [rotate, setRotate] = useState(0);
  const ref = useRef(null);

  // ✅ SCROLL ANIMATION SETUP
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // ✅ PAGE MOVE karega (upar slide)
  const pageY = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);

  // ✅ EYES neeche se appear hongi aur fir upar slide hongi
  const eyesY = useTransform(scrollYProgress, [0, 1], ["50%", "-200%"]);

  // ✅ MOUSE FOLLOW EFFECT
  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section
      ref={ref}
      style={{ y: pageY }}
      className="h-screen w-full bg-[#a6be4d] rounded-tl-3xl rounded-tr-3xl flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* 👀 EYES – independent scroll animation */}
      <motion.div style={{ y: eyesY }} className="flex gap-10 mb-6 absolute">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="w-[10vw] h-[10vw] flex items-center justify-center rounded-full bg-zinc-100"
          >
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* 📝 TEXT */}
      <div className="font-extrabold font-['Neue_Montreal'] items-center flex flex-col justify-center text-[9vw] leading-none text-black">
        <h1>READY</h1>
        <h1>TO START</h1>
        <h1>START PROJECT?</h1>
      </div>

      {/* 🔘 BUTTON */}
      <button className="flex gap-3 items-center px-7 uppercase py-4 bg-zinc-900 mt-10 rounded-full text-white hover:bg-zinc-800 transition">
        Read More
        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
      </button>
    </motion.section>
  );
};

export default Start;
