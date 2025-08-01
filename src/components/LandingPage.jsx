import React from "react";
import "../index.css";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed='-.3' className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "eye opening", "presentation"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative -top-[1.2vw]"
                  ><img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" className="object-cover h-full w-full rounded-md" /></motion.div>
                )}
                <h1 className="uppercase mr-28 mb-[1vw] leading-[6.6vw] tracking-tight text-[7.4vw] font-semibold font-['Neue_Montreal']">
                  <span>{item}</span>
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-lighter text-md uppercase rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 border-[1px] border-zinc-400 rounded-full items-center justify-center">
            <span className="rotate-[45deg]">{/* arrow remaining */}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
