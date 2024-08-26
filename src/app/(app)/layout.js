import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Linkly",
  description:
    "Linkly te permite centralizar y compartir todos tus enlaces, redes sociales, información de contacto y más en una página única. Simplifica tu presencia en línea de manera elegante y eficiente.",
  referrer: "origin-when-cross-origin",
  icons: "/favicon.ico",
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

export default async function AppLayout({ children }) {
  return (
    <html lang="es" data-theme="nord">
      <body className={inter.className + " relative min-h-screen "}>
        {/* bg ibelik mallas */}
        <div className="absolute z-[-2] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_top,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]"></div>
        <div className="absolute z-[-2] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_top,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_100%,#000_30%,transparent_100%)]"></div>

        <main className="flex flex-col justify-center max-w-6xl mx-auto">
            {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}