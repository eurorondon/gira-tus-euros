import React from "react";

function OpcionesEnvio() {
  return (
    <div className="my-5 px-4">
      <h3 className="text-sm ml-5">OPCIONES DE ENVIO</h3>
      <div className="flex justify-around items-stretch gap-5 mt-3 ">
        <div className="p-2 rounded-md w-full bg-white shadow-md">
          <h4 className=" font-bold">Estandar</h4>
          <p className="text-xs">Entrega 15 min aprox.</p>
          <div className="mt-2 text-sm">
            <p>BBVA TRANSFER</p>
            <p>Depósito Efectivo</p>
          </div>
        </div>
        <div
          className="p-2 rounded-md w-full text-white shadow-md "
          style={{ backgroundColor: "#2CC7D1" }}
        >
          <h4 className=" font-bold">Otros Bancos</h4>
          <p className="text-xs">Entrega 15 min aprox.</p>
          <div className="mt-2 text-sm">
            <p>BIZUM</p>
            <p>Transferencia INSTATÁNEA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpcionesEnvio;
