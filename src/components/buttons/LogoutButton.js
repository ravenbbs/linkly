'use client'
import { signOut } from "next-auth/react"
export default function LogoutButton() {
  return (
    <button 
      onClick={() => signOut("google")}
      className=" font-semibold border p-2 shadow  "
    >
      Cerrar sesión
    </button>
  );
}
