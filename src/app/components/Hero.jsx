import React from "react";

import Image from "next/image";
import Navbar from "./Navbar";

const BgStyle = {
  backgroundImage: `url(/fondo.png)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Hero = () => {
  return (
    <div
      style={BgStyle}
      //   className="dark:bg-black dark:text-white   duration-300 "
      className="bg-black text-white   duration-300 "
    >
      <div className="container min-h-[210px] flex items-center">
        <Navbar />
        <div className="  flex flex-col items-start justify-start h-24 px-4 ">
          <h1
            className="text-2xl font-bold flex flex-col  mb-1"
            style={{ lineHeight: "1" }}
          >
            HOLA, ENVIA TUS <span> REMESAS</span>
          </h1>
          <h1></h1>
          <h2 className="text-md font-bold" style={{ color: "#2CC7D1" }}>
            De Europa a Venezuela
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
