"use client";
export default function OpenModal() {
  return (
    <button
      className="btn"
      onClick={() => document.getElementById("my_modal").showModal()}
    >
      Cerrar sesión
    </button>
  );
}
