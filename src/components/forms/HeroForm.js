"use client";

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function HeroForm() {

  useEffect(() => {
    if("localStorage" in window && window.localStorage.getItem("desiredUsername")) {
      const userName = window.localStorage.getItem("desiredUsername")
      window.localStorage.removeItem("desiredUsername")
      redirect('/account?desiredUsername=' + userName)
    }
  }, [])

  async function handleSubmit(ev) {
    ev.preventDefault();

    const form = ev.target
    const input = form.querySelector("input")
    const userName = input.value

    if(userName.length > 0) {
      window.localStorage.setItem("desiredUsername", userName)
      await signIn("google")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" inline-flex items-center shadow-xl"
    >
      <span className="py-4 bg-secondary rounded-ss-lg rounded-es-lg pl-4 text-white">
        linkly.es/
      </span>
      <input
        type="text"
        placeholder="username"
        className="py-4 bg-secondary placeholder-white/70 outline-none"
      />
      <button
        type="submit"
        className="rounded-se-xl rounded-ee-xl bg-primary text-white py-4 px-6"
      >
        Unirse Gratis
      </button>
    </form>
  );
}