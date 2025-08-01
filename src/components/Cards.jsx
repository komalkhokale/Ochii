import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center relative">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute text-sm px-5 left-10 bottom-10 border-2 border-green-700 rounded-full p-1">
            ©2019–2022
          </button>
        </div>
      </div>

      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute text-sm px-5 left-10 bottom-10 border-2 border-green-700 rounded-full p-1">
           RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="text-sm absolute px-5 left-10 bottom-10 border-2 border-green-700 rounded-full p-1">
            BUSINESS BOOTCAMP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
