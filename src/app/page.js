import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="font-semibold p-4 pt-20  mx-auto max-w-4xl">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Tu único link <br />
            para Todo
          </h1>
          <h2 className="text-slate-500 text-xl mt-6">
            Unifica y comparte tus enlaces, redes sociales, información de
            contacto y más, todo en una página.
          </h2>
        </div>
        <form className=" inline-flex items-center shadow-xl">
          <span className="py-4 bg-white rounded-ss-lg rounded-es-lg pl-4">
            linkly.to/
          </span>
          <input type="text" placeholder="username" className="py-4 " />
          <button
            type="submit"
            className="rounded-se-xl rounded-ee-xl bg-blue-500 text-white py-4 px-6"
          >
            Unirse Gratis
          </button>
        </form>
      </section>
    </>
  );
}
