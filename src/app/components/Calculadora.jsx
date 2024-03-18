import React from "react";
import Selector from "./Selector";
import InputVenezuela from "./InputVenezuela";
import { whatsappButtonEvent } from "../../../utils/facebookPixelEvents";
import { sendEventToFacebookAPI } from "../../../utils/facebookApiEvents";

export default function Calculadora({ tasa, euro, setEuro, ves, setVes }) {
  const eventData = {
    event_name: "Click-Whatsapp-Button",
    event_time: Math.floor(Date.now() / 1000),
    action_source: "website",
    user_data: {
      em: [null],
      ph: [null],
    },
    // custom_data: {
    //   currency: "USD",
    //   value: "142.52",
    // },
  };

  const handleClick = () => {
    window.open("https://wa.me/message/2GZHD5NUAMOZC1", "_blank");
    whatsappButtonEvent();
    sendEventToFacebookAPI(eventData);
  };
  return (
    <div className="px-4  py-1 bg-white mx-4  rounded-xl p-3  shadow-md">
      <div className="mt-5 mb-10">
        <h3 className="text-lg font-semibold">
          Calcula tu envío desde España o Europa y{" "}
          <button
            className="px-2  py-1 rounded-md font-bold"
            style={{ backgroundColor: "#DCEC20" }}
            onClick={handleClick}
          >
            CONTACTANOS AQUI
          </button>
        </h3>
      </div>
      <Selector setEuro={setEuro} euro={euro} tasa={tasa} setVes={setVes} />
      <div className="text-xs ml-3 mt-1 mb-4 flex  justify-end">
        <p>1 EUR= {tasa}</p>
      </div>

      <InputVenezuela
        tasa={tasa}
        euro={euro}
        setEuro={setEuro}
        ves={ves}
        setVes={setVes}
      />
      <div className="text-xs ml-3 mt-3 mb-5">
        <p> Monto minimo 20 EUR</p>
      </div>
    </div>
  );
}
