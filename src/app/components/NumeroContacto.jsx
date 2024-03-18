import React from "react";
import colors from "../colors";
import Image from "next/image";
import { whatsappButtonEvent } from "../../../utils/facebookPixelEvents";
import { sendEventToFacebookAPI } from "../../../utils/facebookApiEvents";

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

function NumeroContacto() {
  const handleClick = () => {
    window.open("https://wa.me/message/2GZHD5NUAMOZC1", "_blank");
    whatsappButtonEvent();
    sendEventToFacebookAPI(eventData);
  };
  return (
    <>
      <div
        className="text-white mx-4 my-5 p-4 rounded-lg"
        style={{ backgroundColor: colors.dark }}
        id="contacto"
      >
        <h4 className="font-semibold text-xs">Unicos numero de contacto</h4>
        <div className="my-3">
          <p className="font-extrabold text-xs">
            +34 613 41 16 89 / +507 6524 67 47
          </p>
          <p className="font-extralight text-xs text-gray-300">
            Cualquier otro números de contacto es falso.
          </p>
        </div>
        <button
          className="text-xs py-1 px-2 border border-yellow-400 rounded-lg font-extralight"
          onClick={handleClick}
        >
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
