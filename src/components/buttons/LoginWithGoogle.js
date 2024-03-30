'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react"
export default function LoginWithGoogle() {
  return (
    <button 
      onClick={() => signIn("google")}
      className="flex justify-center gap-3 btn-primary font-semibold text-white bg-blue-500"
    >
      <FontAwesomeIcon icon={faGoogle} className="w-6 h-6" />
      <span>Inicia Con Google</span>
    </button>
  );
}
