'use client'
import { signOut } from "next-auth/react"
export default function LogoutButton() {
  return (
    <button 
      onClick={() => signOut("google")}
      className=" btn btn-primary "
    >
      Cerrar sesión
    </button>
  );
}
