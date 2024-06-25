import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";

export default function Login() {
  return (
    <div>
      <div className="bg-white border p-4 max-w-xs mx-auto mt-4 rounded-md">
        <h1 className=" text-4xl font-bold text-center my-2">Inicia Sesión</h1>

        <p className="text-center mb-6 text-gray-500 font-semibold">
          Ingrese en su cuenta utilizando uno de los siguientes métodos
        </p>

        <LoginWithGoogle />
      </div>
    </div>
  );
}