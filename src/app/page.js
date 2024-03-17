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
import * as fbq from "../../lib/fpixel";

const BgStyle = {
  backgroundImage: `url(../../public/fondo.png)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "700px",
  width: "100%",
};

export default function Home() {
  const handleClick = () => {
    fbq.event("Purchase", { currency: "USD", value: 10 });
  };
  const [tasa, setTasa] = React.useState(37);
  const [euro, setEuro] = React.useState(20);
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Calcular el valor inicial de VES y formatearlo con separadores de miles
  const initialVesValue = formatNumber(tasa * euro);

  // Inicializar el estado de VES con el valor formateado
  const [ves, setVes] = React.useState(initialVesValue);
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
