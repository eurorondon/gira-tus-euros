"use client";

import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";

const europeanCountries = [
  {
    name: "United Kingdom",
    image: "/englad.png",
  },
  {
    name: "Italia",
    image: "/itali.png",
  },
  {
    name: "Germany",
    image: "/germany.png",
  },

  {
    name: "Spain",
    image: "/spain.png",
  },
];

const InputVenezuela = () => {
  const [countries, setCountries] = useState(europeanCountries);
  const [inputValue, setInputValue] = useState("");
  const [inputText, setInputText] = useState("100");
  const [selected, setSelected] = useState("/venezuela.png");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative mt-3 ">
      <div
        className="bg-white px-4 text-xs absolute z-10  "
        style={{ top: "-7px", left: "20px" }}
      >
        <p className=" ">Tu familiar recibe en VNZLA</p>
      </div>

      <div className="flex items-center border relative rounded-xl  ">
        <div className="   font-medium  w-8/12 flex flex-col   ">
          <div
            onClick={() => setOpen(!open)}
            className={`  flex items-center justify-start h-16 w-full  rounded p-1 ${
              !selected && "text-gray-700"
            }`}
          >
            {selected ? (
              <Image alt="log" src={selected} height={40} width={40} />
            ) : (
              "Select Country"
            )}
            <p className="ml-1"> VES</p>
            {/* <BiChevronDown size={30} className={`${open && "rotate-180"}`} /> */}
          </div>
        </div>
        <div className="flex h-16 w-full border rounded-lg relative">
          <input
            type="number"
            className="w-full outline-none text-2xl font-bold text-right px-8 flex-grow-1 mr-5"
            placeholder="Enter amount"
            value={inputText}
            onChange={(e) => setInputText(e.target.value.toLowerCase())}
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold">
            Bs
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputVenezuela;
