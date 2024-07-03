import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "./buttons/LogoutButton";
import UserAvatar from "./UserAvatar";
import LoginWithGoogle from "./buttons/LoginWithGoogle";
import OpenModal from "./buttons/OpenModal";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="font-semibold py-2 ">
      <div className="navbar max-w-4xl mx-auto px-4 bg-base-300/70 rounded-md shadow-lg">
        <div className="navbar-start">
          <Link className="btn btn-ghost text-xl py-1 h-fit" href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                fill="#5e81ac"
                d="M20.398 4.386c-.821-.448-2.09.298-2.837 1.642l-1.418 2.389c-.523.97-.448 2.165.224 3.135l.075.075a23 23 0 0 0 1.791 2.09c.15.15.299.373.373.672c.224.821-.224 1.717-1.12 1.94c-.82.225-1.716-.223-1.94-1.119c-.075-.224-.075-.448-.075-.597c.075-.373-.074-.896-.597-1.493c-.522-.523-1.493.522-1.866 1.567v.075c-.299 1.045-.523 2.016-.448 2.09c0 .075.075.075.075.15c.448.895.149 1.94-.747 2.388s-1.94.15-2.389-.746s-.15-1.941.747-2.389c.074 0 .074-.075.149-.075s.224-.448.448-1.045c.15-.522.224-.746.299-.97c.074-.299.224-1.045.149-1.344c-.075-.373-.448-.373-.821-.15c-.224.15-.672.523-.821.673a2.9 2.9 0 0 0-.822 1.12a2.3 2.3 0 0 1-.373.522a1.636 1.636 0 0 1-2.24-.224a1.636 1.636 0 0 1 .225-2.24c.224-.149.448-.298.671-.298c.374-.075 1.717-.896 2.539-1.493c.149-.075.373-.299.448-.373c.223-.299 0-.523-.224-.523c-.672.075-1.419.15-1.568.373c-.075.075-.15.224-.299.299c-.597.448-1.493.299-1.94-.299c-.449-.597-.3-1.493.298-1.94c.224-.225.597-.3.821-.3c.523 0 1.866.3 2.911.075l.299-.074c1.12-.224 2.464-1.195 2.986-2.165c0 0 .523-.896 1.12-2.016c.672-1.12.597-2.388-.075-2.762L13.157.28c-.672-.373-1.642-.373-2.314 0l-8.66 4.927C1.513 5.58.99 6.476.99 7.222v9.555c0 .747.523 1.643 1.195 2.016l8.659 4.927c.672.373 1.717.373 2.314 0l8.66-4.927c.671-.373 1.194-1.269 1.194-2.015V7.222c0-.746-.523-1.642-1.194-2.015c0 0-.598-.373-1.419-.821z"
              />
            </svg>
            Linkly
          </Link>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
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

          <div className="navbar-center hidden sm:flex text-gray-700">
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
                  className="rounded-box transition-all bg-neutral/10 btn-ghost flex items-center mx-2	py-1 px-2 cursor-pointer"
                >
                  <h2 className="font-bold text-center mr-2 max-sm:hidden">
                    {session?.user?.name}
                  </h2>
                  <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full outline outline-primary">
                      <UserAvatar UserImage={session?.user?.image} />
                    </div>
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
                >
                  <li>
                    <Link href={"/account"} className="btn btn-ghost mb-2">
                      Perfil
                    </Link>
                  </li>
                  <li>
                    <OpenModal />
                  </li>
                </ul>
              </div>
              <dialog id="my_modal" class="modal h-screen w-screen ">
                <div class="modal-box bg-base-200">
                  <h3 class="font-bold text-lg">Cuidado!!</h3>
                  <p class="py-4">Estas seguro de cerrar la sesión?</p>

                  <div class="modal-action">
                    <form method="dialog">
                      <button class="btn btn-secondary mr-2">Cancelar</button>
                      <LogoutButton />
                    </form>
                  </div>
                </div>
                <form method="dialog" class="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </>
          )}
          {!session && <LoginWithGoogle />}
        </div>
      </div>
    </header>
  );
}
