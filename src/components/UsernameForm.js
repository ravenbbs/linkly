"use client";
import grabUsername from "@/actions/grabUsername";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import SubmitButton from "./buttons/SubmitButton";

export default function UsernameForm({ desiredUsername }) {
  const [taken, setTaken] = useState(false);
  async function handleSubmit(formData) {
    const result = await grabUsername(formData);

    setTaken(result === false);

    if (result) {
      redirect("/account?created=" + formData.get("username"));
    } else {
      toast.error("Usuario no disponible!");
    }
  }

  return (
    <form className="max-w-md" action={handleSubmit}>
      <h1 className="text-5xl font-bold mb-6">Confirma tu Usuario</h1>

      <label
        className={`input input-bordered max-w-xs flex items-center gap-2 mx-auto my-2 ${
          taken ? " input-error" : " input-success"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          required
          autoFocus
          name="username"
          type="text"
          defaultValue={desiredUsername}
          className="grow"
          placeholder="Username"
        />
      </label>
      <SubmitButton>
        Verificar Usuario
      </SubmitButton>
    </form>
  );
}
