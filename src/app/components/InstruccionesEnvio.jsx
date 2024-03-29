import Image from "next/image";
import React from "react";
import colors from "../colors";
import { sendEventToFacebookAPI } from "../../../utils/facebookApiEvents";
import { whatsappButtonEvent } from "../../../utils/facebookPixelEvents";

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

function InstruccionesEnvio() {
  const handleClick = () => {
    window.open("https://wa.me/message/2GZHD5NUAMOZC1", "_blank");
    whatsappButtonEvent();
    sendEventToFacebookAPI(eventData);
  };
  return (
    <div className="mx-4 my-5" id="instrucciones">
      <h4 className="font-bold text-sm">¿Como hacer tus envios?</h4>
      <p className="text-xs">
        Sigue las intrucciones para el correcto envio a tus familiares en
        Venezuela.
      </p>

      <div className="grid gap-y-2 grid-cols-2 gap-x-2 mt-2 ">
        <Image src={"/2.png"} alt="intruccion1" height={200} width={200} />
        <Image src={"/3.png"} alt="intruccion1" height={200} width={200} />
        <Image src={"/4.png"} alt="intruccion1" height={200} width={200} />
        <Image src={"/5.png"} alt="intruccion1" height={200} width={200} />
      </div>

      {/* <div className="grid grid-cols-2 mx-5 ">
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
      </div> */}
      <div className="flex justify-center ">
        <button
          className="flex items-center gap-3 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mt-3"
          style={{ backgroundColor: colors.primary }}
          onClick={handleClick}
        >
          <p className="text-xs">CONTACTANOS AHORA </p>
        </button>
      </div>
    </div>
  );
}

export default InstruccionesEnvio;
