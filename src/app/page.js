import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="font-semibold p-4">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">
            Tu único link <br />
            para Todo
          </h1>
          <h2 className="text-slate-500 text-xl mt-6">
          Unifica y comparte tus enlaces, redes sociales,
  información de contacto y más, todo en una página.
          </h2>
        </div>
        <form className="flex flex-col gap-4">
          <input type="text"/>
          <button type="submit" className="rounded-lg bg-blue-500 text-white py-4 px-6" >
            Unirse Gratis
          </button>
        </form>
      </section>
    </main>
  );
}
