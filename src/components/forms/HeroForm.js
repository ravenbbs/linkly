"use client";

import { signIn } from "next-auth/react";
import {redirect, useRouter} from "next/navigation";
import {useEffect} from "react";

export default function HeroForm({user}) {
  const router = useRouter();
  useEffect(() => {
    if (
      'localStorage' in window
      && window.localStorage.getItem('desiredUsername')
    ) {
      const username = window.localStorage.getItem('desiredUsername');
      window.localStorage.removeItem('desiredUsername');
      redirect('/account?desiredUsername=' + username);
    }
  }, []);

  async function handleSubmit(ev) {
    ev.preventDefault();
    const form = ev.target;
    const input = form.querySelector('input');
    const username = input.value;
    if (username.length > 0) {
      if (user) {
        router.push('/account?desiredUsername='+username);
      } else {
        window.localStorage.setItem('desiredUsername', username);
        await signIn('google');
      }
    }
  }


  return (
    <form
      onSubmit={handleSubmit}
      className=" inline-flex items-center shadow-xl text-white"
    >
      <span className="py-4 bg-secondary rounded-ss-lg rounded-es-lg pl-4 text-white">
        linkly.es/
      </span>
      <input
        type="text"
        placeholder="username"
        className="py-4 bg-secondary text-white placeholder-white/70 outline-none"
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