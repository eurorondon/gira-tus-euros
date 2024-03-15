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

const Selector = ({ setEuro, euro, tasa, setVes }) => {
  const [countries, setCountries] = useState(europeanCountries);
  const [inputValor, setInputValor] = useState("");
  const [input, setInput] = useState("euro");
  const [selected, setSelected] = useState("/spain.png");
  const [open, setOpen] = useState(false);

  const handleChangeEuro = (e) => {
    setInput(e);
    setEuro(e);
    // Convertir el número a formato con separadores de miles
    const vesWithSeparators = (e * tasa).toLocaleString("es-VE", {
      maximumFractionDigits: 2, // Opcional: puedes establecer el número máximo de decimales
    });

    setVes(vesWithSeparators);
  };

  return (
    <div className="relative mt-3 ">
      <div
        className="bg-white px-4 text-xs absolute z-10  "
        style={{ top: "-7px", left: "20px" }}
      >
        <p className=" ">Envias a tu familia desde</p>
      </div>

      <div className="flex items-center border relative rounded-xl  ">
        <div className="   font-medium  w-8/12 flex flex-col   ">
          <div
            onClick={() => setOpen(!open)}
            className={`  flex items-center justify-between h-16 w-full  rounded p-1 ${
              !selected && "text-gray-700"
            }`}
          >
            {selected ? (
              <Image alt="log" src={selected} height={40} width={40} />
            ) : (
              "Select Country"
            )}
            <p>EUR</p>
            <BiChevronDown size={30} className={`${open && "rotate-180"}`} />
          </div>

          <ul
            className={`bg-white absolute top-16 overflow-y-auto w-72 z-20  ${
              open ? "h-auto" : "max-h-0"
            } `}
          >
            {/* <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div> */}
            {countries?.map((country) => (
              <li
                key={country?.name}
                className={` text-sm hover:bg-sky-600 hover:text-white p-3 
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValor)
                ? "block"
                : "hidden"
            }`}
                onClick={() => {
                  if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                    setSelected(country?.image);
                    setOpen(false);
                    setInputValor("");
                  }
                }}
              >
                <div className="flex justify-start items-center gap-4">
                  <Image
                    alt="log"
                    src={country.image}
                    width={"30"}
                    height={"30"}
                  />
                  {country?.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-16 w-full border rounded-lg relative">
          <input
            type="number"
            className="w-full outline-none text-2xl font-bold text-right p-4 flex-grow-1 mr-5 "
            placeholder={euro}
            value={!input ? input : euro}
            // onChange={(e) => setEuro(e.target.value.toLowerCase())}
            onChange={(e) => handleChangeEuro(e.target.value.toLowerCase())}
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold">
            €
          </span>
        </div>
      </div>
    </div>
  );
};

export default Selector;
