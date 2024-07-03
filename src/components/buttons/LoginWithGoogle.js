"use client";
import { signIn } from "next-auth/react";
export default function LoginWithGoogle() {
  return (
    <button onClick={() => signIn("google")} className="btn btn-primary mx-2">
      Ingresa
    </button>
  );
}
