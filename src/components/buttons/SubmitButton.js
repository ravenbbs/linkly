import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={`btn btn-primary my-2  w-full max-w-xs cursor-pointer`}
    >
      Verificar usuario
    </button>
  );
}
