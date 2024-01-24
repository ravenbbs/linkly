import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Linkly App",
  description:
    "Linkly te permite centralizar y compartir todos tus enlaces, redes sociales, información de contacto y más en una página única. Simplifica tu presencia en línea de manera elegante y eficiente.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "linkly",
    " enlaces",
    " redes sociales",
    " contacto",
    " página única",
    " centralizar",
    " presencia en línea",
  ],
  authors: [{ name: "Julio Condor", url: "https://github.com/ravenbbs" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
