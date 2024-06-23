import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "./buttons/LogoutButton";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="font-semibold border-b py-2">
      <div className="navbar max-w-4xl mx-auto px-4">
        <div className="navbar-start">
          <Link className="btn btn-ghost text-xl" href={"/"}>
            LinkList
          </Link>
          <div className="dropdown">
            <div tabindex="0" role="button" className="btn btn-ghost sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="btn btn-ghost" href={"/about"}>
                  Acerca de
                </Link>
              </li>
              <li>
                <Link className="btn btn-ghost" href={"/pricing"}>
                  Precios
                </Link>
              </li>
              <li>
                <Link className="btn btn-ghost" href={"/contact"}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-center hidden sm:flex">
            <ul className="menu menu-horizontal px-0">
              <li>
                <Link className="btn btn-ghost px-2 mx-1" href={"/about"}>
                  Acerca de
                </Link>
              </li>
              <li>
                <Link className="btn btn-ghost px-2 mx-1" href={"/pricing"}>
                  Precios
                </Link>
              </li>
              <li>
                <Link className="btn btn-ghost px-2 mx-1" href={"/contact"}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end">

          {!!session && (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="User avatar"
                      src={session?.user?.image}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
                >
                  <li>
                    <Link href={"/account"} className="btn btn-ghost  ">
                      Perfil
                    </Link>
                  </li>
                  <li>
                    <LogoutButton />
                  </li>
                </ul>
              </div>
            </>
          )}
          {!session && (
            <>
              <Link href={"/login"} className="btn btn-primary mx-2">Ingresa</Link>
              <Link className="btn btn-neutral" href={"/register"}>
                Regístrate
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
