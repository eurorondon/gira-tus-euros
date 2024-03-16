import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Image from "next/image";

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

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '388293310623512');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height={1}
            width={1}
            alt="meta"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=388293310623512&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
