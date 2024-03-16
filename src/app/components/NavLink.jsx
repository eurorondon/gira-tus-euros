import { Link as ScrollLink } from "react-scroll";
import React from "react";

const NavLink = ({ href, title, setNavbarOpen, offset }) => {
  return (
    <ScrollLink
      to={href.slice(1)} // Elimina el carácter "#" del href
      spy={true}
      smooth={true}
      offset={offset} // Ajusta el valor según sea necesario
      duration={500}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      onClick={() => setNavbarOpen(false)}
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;
