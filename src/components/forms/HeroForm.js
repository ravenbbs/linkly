export default function HeroForm() {
  return (
    <form className=" inline-flex items-center shadow-xl">
      <span className="py-4 bg-secondary rounded-ss-lg rounded-es-lg pl-4 text-white">
        linkly.es/
      </span>
      <input type="text" placeholder="username" className="py-4 bg-secondary placeholder-white/70 outline-none" />
      <button
        type="submit"
        className="rounded-se-xl rounded-ee-xl bg-primary text-white py-4 px-6"
      >
        Unirse Gratis
      </button>
    </form>
  );
}
