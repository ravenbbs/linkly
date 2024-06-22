import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "./buttons/LogoutButton";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="font-semibold  border-b  py-4">
      <div className="max-w-4xl flex justify-between mx-auto px-4">
        <div className="flex gap-4 items-center ">
          <Link href={"/"}>LinkList</Link>
          <nav className="flex items-center gap-2 text-slate-500 text-sm">
            <Link href={"/about"}>Acerca de</Link>
            <Link href={"/pricing"}>Precios</Link>
            <Link href={"/contact"}>Contacto</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-slate-500 text-sm">
          {!!session && (
            <>
              <Link href={"/account"} className="flex gap-1 items-center">
                {session?.user?.name}
              </Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              <Link href={"/login"}>Ingresa</Link>
              <Link className="btn btn-primary" href={"/register"}>
                Regístrate
              </Link>
            </>
          )}
          
        </div>
      </div>
    </header>
  );
}
