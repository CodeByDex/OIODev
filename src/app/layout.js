"use client";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

import "./globals.css";
import { Archivo, Open_Sans } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import BackgroundOrbs from "../components/BackgroundOrbs";
import { SessionProvider } from "next-auth/react";
import { ApolloProviderWrapper } from "@/components/apollo-provider";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
  variable: "--font-archivo",
});

const opensans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
  variable: "--font-opensans",
});

export default function RootLayout({ children }) {

  return (
    <SessionProvider>
      <ApolloProviderWrapper>
        <html lang="en">
          <body
            className={`${archivo.variable} ${opensans.variable} bg-brand-primary text-brand-textBody h-screen items-center justify-center`}
          >
            <Navbar />
            <div className="sticky top-0 mx-auto max-w-xs md:max-w-xl lg:max-w-3xl xl:max-w-5xl z-[-10]">
              <BackgroundOrbs />
            </div>
            {children}
            <Footer />
          </body>
        </html>
      </ApolloProviderWrapper>
    </SessionProvider>
  );
}
