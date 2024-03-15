import React from "react";
import Selector from "./Selector";
import InputVenezuela from "./InputVenezuela";

export default function Calculadora({ tasa, euro, setEuro }) {
  return (
    <div className="px-4  py-5 bg-white mx-4  rounded-xl p-3  shadow-md">
      <div className="mt-5 mb-10">
        <h3 className="text-lg font-semibold">
          Calcula tu envío desde España o Europa y{" "}
          <span
            className="px-2  py-1 rounded-md font-bold"
            style={{ backgroundColor: "#DCEC20" }}
          >
            CONTACTANOS AQUI
          </span>
        </h3>
      </div>
      <Selector setEuro={setEuro} euro={euro} />
      <div className="text-xs ml-3 mt-3 mb-8">
        <p>1 EUR= {tasa}</p>
      </div>

      <InputVenezuela tasa={tasa} euro={euro} setEuro={setEuro} />
      <div className="text-xs ml-3 mt-3 mb-5">
        <p> Monto minimo 20 EUR</p>
      </div>
    </div>
  );
}
