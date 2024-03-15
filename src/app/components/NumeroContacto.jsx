import React from "react";
import colors from "../colors";
import Image from "next/image";

function NumeroContacto() {
  return (
    <>
      <div
        className="text-white mx-4 my-5 p-4 rounded-lg"
        style={{ backgroundColor: colors.dark }}
      >
        <h4 className="font-semibold text-xs">Unicos numero de contacto</h4>
        <div className="my-3">
          <p className="font-extralight text-xs">
            +34 613 41 16 89 / +507 6524 67 47
          </p>
          <p className="font-extralight text-xs text-gray-300">
            Cualquier otro números de contacto es falso.
          </p>
        </div>
        <button className="text-xs py-1 px-2 border border-yellow-400 rounded-lg font-extralight">
          Escribenos aqui
        </button>
      </div>
      <div className="mx-4 my-4 rounded-lg">
        <Image
          src={"/gt2.png"}
          alt="gt"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </>
  );
}

export default NumeroContacto;
