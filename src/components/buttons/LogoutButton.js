'use client'
import { signOut } from "next-auth/react"
export default function LogoutButton() {
  return (
    <button 
      onClick={() => signOut("google")}
      className="btn btn-error"
    >
      Cerrar sesión
    </button>
  );
}
