import Image from "next/image";
import React from "react";
import colors from "../colors";

function InstruccionesEnvio() {
  return (
    <div className="mx-4 my-5">
      <h4 className="font-bold text-sm">¿Como hacer tus envios?</h4>
      <p className="text-xs">
        Sigue las intrucciones para el correcto envio a tus familiares en
        Venezuela.
      </p>

      <div className="grid grid-cols-2 mx-5 ">
        <Image
          src={"/instruccion1.png"}
          alt="intruccion1"
          height={150}
          width={150}
        />
        <Image
          src={"/instruccion2.png"}
          alt="intruccion1"
          height={150}
          width={150}
        />
        <Image
          src={"/instruccion3.png"}
          alt="intruccion1"
          height={150}
          width={150}
        />
        <Image
          src={"/instruccion4.png"}
          alt="intruccion1"
          height={150}
          width={150}
        />
      </div>
      <div className="flex justify-center ">
        <button
          class="flex items-center gap-3 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mt-3"
          style={{ backgroundColor: colors.primary }}
        >
          <p className="text-xs">CONTACTANOS AHORA </p>
        </button>
      </div>
    </div>
  );
}

export default InstruccionesEnvio;
