"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverLay";
import Image from "next/image";

const navLinks = [
  {
    title: "Nosotros",
    path: "#about",
  },
  {
    title: "Proyectos",
    path: "#projects",
  },
  {
    title: "Contacto",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      // Cerrar el menú si se hace clic fuera del componente
      if (!event.target.closest("#navbar") && navbarOpen) {
        setNavbarOpen(false);
      }
    };

    // Agregar el evento de clic al documento
    document.addEventListener("mousedown", handleOutsideClick);

    // Limpiar el evento cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navbarOpen]);

  return (
    <nav
      className={
        navbarOpen
          ? "fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100"
          : "fixed mx-auto border border-[#33353f00]  top-0 left-0 right-0 z-20  bg-opacity-100"
      }
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 ">
        <Link
          href={"/"}
          className="text-sm md:text-5xl text-white font-semibold flex items-center gap-3"
        >
          <Image src="/logo.png" alt="logo" height={43} width={43} />
          <span>Gira tus Euros</span>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
