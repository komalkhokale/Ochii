import React from "react";

function About() {
  return (
    <div className="w-full p-20 py-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[3.9vw]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#515c2c86]">
        <div className="w-1/2">
          <h1 className="text-6xl">Our Approach:</h1>
          <button className="flex gap-10 items-center px-7 uppercase py-4 bg-zinc-900 mt-10 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/9 rounded-2xl bg-[#a6be4d]"><img className="rounded-2xl h-[70vh]" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" /></div>
      </div>
    </div>
  );
}

export default About;
