import Navbar from "./components/Navbar";
import fondo from "../../public/fondo.png";
import Hero from "./components/Hero";
import Tasa from "./components/Tasa";
import Calculadora from "./components/Calculadora";

const BgStyle = {
  backgroundImage: `url(../../public/fondo.png)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "700px",
  width: "100%",
};

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Tasa />
      <Calculadora />
    </div>
  );
}
