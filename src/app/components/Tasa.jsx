import React from "react";

export default function Tasa({ tasa }) {
  return (
    <div className="flex items-center justify-center  relative mb-20  ">
      <div
        className="  my-5  flex flex-row  w-11/12 absolute   "
        style={{ top: "-4.5rem" }}
      >
        <div className="w-4/6  bg-white p-3 rounded-l-xl shadow-lg ">
          <h3 className="text-xl" style={{ color: "#545353" }}>
            TASA DEL DIA
          </h3>
          <p className="text-2xl font-extrabold" style={{ color: "#545353" }}>
            {tasa} bs x EUR
          </p>
          <div
            className="p-1  rounded-md"
            style={{ backgroundColor: "rgba(44, 199, 209, 0.19)" }}
          >
            <p className="text-xs" style={{ color: "#545353" }}>
              Monto minimo de envio 20 EUR
            </p>
          </div>
        </div>
        <div
          className="w-2/6 rounded-r-md p-2 flex items-center text-white shadow-lg"
          style={{ backgroundColor: "#2CC7D1" }}
        >
          <div className="border p-1 rounded-md ">
            <p className="text-xs font-bold">Ver terminos y condiciones</p>
          </div>
        </div>
      </div>
    </div>
  );
}
