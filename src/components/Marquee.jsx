import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.1' className=" w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className="text border-t-2 border-b-2 flex gap-10 overflow-hidden whitespace-nowrap border-zinc-300 font-['Neue_Montreal']">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="text-[20vw]  uppercase  font-semibold -mb-[3vw] pb-9 leading-none pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="text-[20vw] uppercase  font-semibold -mb-[3vw] pb-9 leading-none pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="text-[20vw]  uppercase  font-semibold -mb-[3vw] pb-9 leading-none pr-20"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
