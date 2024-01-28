import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function LoginWithGoogle() {
  return (
    <button 

    // onClick={()  => {}}
    className="flex justify-center gap-2 btn-primary font-semibold text-white bg-blue-500">
      <FontAwesomeIcon icon={faGoogle} className="w-6" />

      <span>Inicia Con Google</span>
    </button>
  );
}
