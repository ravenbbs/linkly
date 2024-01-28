import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
  return (
    <div>
      <div className="bg-white border p-4 max-w-xs mx-auto mt-4 rounded-md">
        <h1 className=" text-4xl font-bold text-center my-2">Inicia Sesión</h1>

        <p className="text-center mb-6 text-gray-500 font-semibold">Ingrese en su cuenta utilizando uno de los siguientes métodos</p>


        <button className="flex justify-center gap-3 btn-primary font-semibold text-white bg-blue-500">
          <FontAwesomeIcon icon={faGoogle} className="w-6" />

          <span>Inicia Con Google</span>
        </button>
      </div>
    </div>
  );
}
