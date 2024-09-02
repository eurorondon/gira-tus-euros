"use client";
import Navbar from "./components/Navbar";
import fondo from "../../public/fondo.png";
import Hero from "./components/Hero";
import Tasa from "./components/Tasa";
import Calculadora from "./components/Calculadora";
import OpcionesEnvio from "./components/OpcionesEnvio";
import Whatsapp from "./components/Whatsapp";
import MontoMinimo from "./components/MontoMinimo";
import Terminos from "./components/Terminos";
import InstruccionesEnvio from "./components/InstruccionesEnvio";
import NumeroContacto from "./components/NumeroContacto";
import React from "react";
import * as fbq from "../../lib/fbpixel";
import { sendEventToFacebookAPI } from "../../utils/facebookApiEvents";

const eventData = {
  event_name: "PageView",
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

const BgStyle = {
  backgroundImage: `url(../../public/fondo.png)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "700px",
  width: "100%",
};

export default function Home() {
  const [tasa, setTasa] = React.useState(40);
  const [euro, setEuro] = React.useState(20);
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Calcular el valor inicial de VES y formatearlo con separadores de miles
  const initialVesValue = formatNumber(tasa * euro);

  // Inicializar el estado de VES con el valor formateado
  const [ves, setVes] = React.useState(initialVesValue);

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (!isMounted.current) {
      sendEventToFacebookAPI(eventData);
      isMounted.current = true;
    }
  }, []);
  return (
    <div className="">
      <Hero />
      <Tasa tasa={tasa} />
      <Calculadora
        tasa={tasa}
        euro={euro}
        setEuro={setEuro}
        ves={ves}
        setVes={setVes}
      />
      <OpcionesEnvio />
      <MontoMinimo />
      <Terminos />
      <InstruccionesEnvio />
      <NumeroContacto />
      <Whatsapp />
    </div>
  );
}
