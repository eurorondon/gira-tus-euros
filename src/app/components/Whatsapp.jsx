"use client";
import React from "react";
import {
  sendEventToFacebookAPI,
  whatsappButtonEvent,
} from "../../../utils/facebookPixelEvents";

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

function Whatsapp() {
  const [showObject, setShowObject] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const triggerHeight = 10; // Altura de desencadenamiento en píxeles

      if (scrollPosition > triggerHeight) {
        setShowObject(true);
      } else {
        setShowObject(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // React.useEffect(() => {
  //   sendEventToFacebookAPI(eventData);
  // }, []);

  const handleClick = () => {
    sendEventToFacebookAPI(eventData);
    window.open("https://wa.me/message/2GZHD5NUAMOZC1", "_blank");
    // whatsappButtonEvent();
  };
  if (showObject)
    return (
      <button
        className=" rounded-t-2xl sticky bottom-0 w-full"
        onClick={handleClick}
        style={{ backgroundColor: "#DCEC20" }}
      >
        <div className="p-4 " style={{ color: "#545353" }}>
          <h3 className=" text-md font-extrabold text-center">
            CONTINUA TU CAMBIO POR WHATSAPP <br />
            <span className="font-semibold text-sm">
              O Pide acceso a nuestro grupo para referencias
            </span>
          </h3>
        </div>
      </button>
    );
}

export default Whatsapp;
