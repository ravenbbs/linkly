"use client";
export default function OpenModal() {
  return (
    <button
      className="btn btn-error"
      onClick={() => document.getElementById("my_modal").showModal()}
    >
      Cerrar sesión
    </button>
  );
}
