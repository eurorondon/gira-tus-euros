import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Image from "next/image";
import FacebookPixel from "./components/FacebookPixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gira tus Euros",
  description: "Create by Euro Rondon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <meta
          name="facebook-domain-verification"
          content="hhnarhtokejdum1dvr2n2lntkac6t2"
        />
      </Head>
      <body className={inter.className}>{children}</body>
      <FacebookPixel />
    </html>
  );
}
