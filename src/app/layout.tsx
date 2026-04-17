import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Klinik Primer Cherang Pasir Mas | Rawatan Saraf, Sendi, Post-Stroke & Diet Klinikal",
  description:
    "Klinik Primer Cherang Pasir Mas menawarkan rawatan sakit lutut, saraf, sendi, kebas, slipped disc, pemulihan post-strok, program diet klinikal, pemeriksaan kesihatan dan pembedahan kecil di Pasir Mas, Kelantan.",
  keywords: [
    "klinik pasir mas",
    "klinik primer cherang",
    "rawatan sakit lutut",
    "rawatan sakit saraf",
    "rawatan post strok",
    "program diet klinikal",
    "pemeriksaan kesihatan",
    "pembedahan kecil",
    "klinik kelantan",
    "doktor pasir mas",
  ],
  authors: [{ name: "Klinik Primer Cherang Pasir Mas" }],
  metadataBase: new URL("https://klinikprimerpasirmas.my"),
  openGraph: {
    title: "Klinik Primer Cherang Pasir Mas",
    description:
      "Pusat Rawatan Saraf, Sendi, Post-Stroke dan Diet Klinikal di Pasir Mas, Kelantan.",
    url: "https://klinikprimerpasirmas.my",
    siteName: "Klinik Primer Cherang Pasir Mas",
    locale: "ms_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Primer Cherang Pasir Mas",
    description:
      "Pusat Rawatan Saraf, Sendi, Post-Stroke dan Diet Klinikal di Pasir Mas, Kelantan.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ms"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <StructuredData />
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PRPJ4FHK');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRPJ4FHK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
