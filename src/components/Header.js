import Link from "next/link";

export default function Header() {
  return (
    <header className="font-semibold bg-white border-b flex justify-between p-4">
      <div className="flex gap-4">
        <Link href={"/"}>LinkList</Link>

        <nav className="flex items-center gap-2 text-slate-500 text-sm">
          <Link href={"/about"}>Acerca de</Link>
          <Link href={"/pricing"}>Precios</Link>
          <Link href={"/contact"}>Contacto</Link>
        </nav>
      </div>
      <div className="flex gap-4 items-center text-slate-500 text-sm">
        <Link href={"/login"}>Ingresa</Link>
        <Link href={"/register"}>Regístrate</Link>
      </div>
    </header>
  );
}
