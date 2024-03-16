import React from "react";
import colors from "../colors";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

function Terminos() {
  return (
    <>
      <div className="mx-4 p-4 my-10 rounded-lg bg-white shadow-md ">
        <div className="flex justify-between mb-5">
          <h4 className="font-semibold">Terminos </h4>
          <ScrollLink
            to="terminos"
            offset={100}
            smooth={true}
            duration={500}
            className="font-semibold"
            style={{ color: colors.primary }}
          >
            Ver Mas
          </ScrollLink>
        </div>
        <ul className="text-xs ">
          <li className="mb-1">
            • Para hacer tus envíos debes ser el titular de la cuenta.
          </li>
          <li className="mb-1">
            • No puedes colocar un concepto diferente al solicitado en los
            términos y condiciones.
          </li>
        </ul>
      </div>
      <div
        className="flex justify-center mb-10 mx-4"
        style={{ position: "relative" }}
        id="terminos"
      >
        <Image
          src={"/family.png"}
          width={360}
          height={160}
          alt="family"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          className="rounded-md"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(to bottom right, #2C6ED1, rgba(0, 123, 255, 0))",
          }}
        >
          <div className="mx-4 mt-3 text-white text-md font-extralight">
            <h1>Más de 7 años de experiencia en el mercado de divisas.</h1>
          </div>
        </div>
      </div>
      <div className=" mx-4 my-5 p-4 rounded-lg bg-white flex justify-center flex-col">
        <p className="text-xs font-extrabold">Terminos</p>
        <h4 className="  text-xl font-bold" style={{ lineHeight: "1" }}>
          Métodos de <br />
          pago
        </h4>
        <div className="mx-auto mt-2">
          <Image src={"/1.png"} alt={"metodos"} width={300} height={300} />
        </div>
      </div>
    </>
  );
}

export default Terminos;
