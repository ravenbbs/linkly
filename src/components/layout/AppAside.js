"use client";
import OpenModal from "@/components/buttons/OpenModal";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppAside({ UserImage, uri }) {
  const path = usePathname();

  return (
    <aside className="drawer w-screen h-24 sm:w-52 sm:drawer-open z-10  top-2 sm:relative sm:top-0 absolute ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content block sm:hidden">
        <div className="navbar max-w-4xl mx-auto px-4 bg-base-300/70 rounded-md shadow-lg">
          <div className="flex-none">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
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
            </label>
          </div>
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
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu fixed  bg-base-300 gap-6 text-base-content min-h-full p-4 px-6 ">
          <div className="w-36 mx-auto overflow-hidden rounded-full outline outline-primary">
            <Image
              priority
              src={UserImage}
              width={256}
              height={256}
              alt={"avatar"}
            />
          </div>

          <li>
            <Link className="btn btn-ghost text-primary gap-0" href={`/${uri}`}>
              <Icon
                icon={"foundation:social-treehouse"}
                fontSize={38}
              />
              /{uri}
            </Link>
          </li>

          <li>
            <Link
              href={"/account"}
              className={`btn ${
                path.includes("account")
                  ? " btn-accent bg-accent/70 btn-active "
                  : ""
              }`}
            >
              Mi Linkly
            </Link>
          </li>
          <li>
            <Link
              href={"/analytics"}
              className={`btn ${
                path.includes("analytics")
                  ? " btn-accent bg-accent/70 btn-active"
                  : ""
              } `}
            >
              Analíticas
            </Link>
          </li>
          <li>
            <OpenModal />
          </li>
          <div className="divider my-0"></div>
          <li>
            <Link href={"/"} className="btn btn-neutral bg-neutral/80 ">
              Regresar
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
