import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gira tus Euros",
  description: "Create by Euro Rondon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta
          name="facebook-domain-verification"
          content="hhnarhtokejdum1dvr2n2lntkac6t2"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
