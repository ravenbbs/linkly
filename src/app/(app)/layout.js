import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import LogoutButton from "@/components/buttons/LogoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

import AppAside from "@/components/layout/AppAside";

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

  const session = await getServerSession(authOptions);


  return (
    <html lang="es" data-theme="nord">
      <body
        className={
          inter.className +
          " relative min-h-screen flex flex-col justify-between"
        }
      >
        {/* bg ibelik mallas */}
        <div className="absolute z-[-2] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_top,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]"></div>
        <div className="absolute z-[-2] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_top,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_100%,#000_30%,transparent_100%)]"></div>

        <main className=" flex justify-between ">
          {/* <Header /> */}
          <AppAside UserImage={session?.user?.image} />
          {children}
            
          <Toaster />
        </main>
        <dialog id="my_modal" className="modal h-screen w-screen ">
                <div className="modal-box bg-base-200">
                  <h3 className="font-bold text-lg">Cuidado!!</h3>
                  <p className="py-4">Estas seguro de cerrar la sesión?</p>

                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn btn-secondary mr-2">Cancelar</button>
                      <LogoutButton />
                    </form>
                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>

        {/* <footer className="footer sm:grid-flow-col bg-base-300/80 px-12 py-2 gap-2 sm:py-4 max-w-4xl rounded-md self-center mt-12 mb-3 shadow-xl ">
          <aside className="grid-flow-col font-medium mx-auto sm:mx-2">
            <p>
              Designed by{" "}
              <a
                href="https://github.com/ravenbbs"
                target="_blank"
                className="hover:text-violet-700 transition-all"
              >
                Julio Condor
              </a>
            </p>
          </aside>
          <nav className="grid-flow-col gap-4 mx-auto sm:mx-0 sm:ml-auto">
            <a
              href="https://www.linkedin.com/in/julio-condor/"
              className="text-primary transition-all hover:text-primary/80"
              target="_blank"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 1000 1000"
              >
                <path d="M196.064.25C88.347.25.187 88.408.187 196.127v607.841c0 107.717 88.158 195.845 195.877 195.845h607.841c107.718 0 195.845-88.127 195.845-195.845V196.127C999.75 88.41 911.623.25 803.905.25zm49.266 164.948c51.648 0 83.461 33.906 84.443 78.475c0 43.585-32.797 78.444-85.442 78.444h-.969c-50.665 0-83.412-34.857-83.412-78.444c0-44.568 33.738-78.475 85.379-78.475zm445.08 208.31c99.329 0 173.79 64.922 173.79 204.436v260.449H713.247V595.406c0-61.06-21.847-102.718-76.476-102.718c-41.704 0-66.562 28.078-77.476 55.202c-3.987 9.704-4.967 23.257-4.967 36.832v253.671H403.375s1.981-411.613 0-454.233h150.984v64.324c20.06-30.95 55.942-74.977 136.051-74.977zm-521.556 10.685h150.953v454.202H168.854z" />
              </svg>
            </a>

            <a
              href="https://github.com/ravenbbs"
              className="text-primary hover:text-base-content transition-all "
              target="_blank"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </footer> */}
      </body>
    </html>
  );
}
