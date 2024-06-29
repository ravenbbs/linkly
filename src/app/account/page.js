import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import grabUsername from "@/actions/grabUsername";

export default async function AccountPage({ searchParams, ...rest }) {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;
  console.log(rest)

  if (!session) {
    redirect("/");
  }

  return (
    <div className="hero">
      <div className="hero-content text-center">
        <form className="max-w-md" action={grabUsername}>
          <h1 className="text-5xl font-bold mb-6">Confirma tu Usuario</h1>
          <label className="input input-bordered input-primary max-w-xs flex items-center gap-2 mx-auto my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input name="username" type="text" defaultValue={desiredUsername} className="grow" placeholder="Username" />
          </label>
          <button className="btn btn-primary  w-full max-w-xs">Verificar usuario</button>
        </form>
      </div>
    </div>
  );
}
