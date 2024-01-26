import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function Login() {
  return (
    <div>
      <div className="bg-white border p-4 max-w-xs mx-auto mt-4">
        <h1 className=" text-4xl font-bold text-center" >
          Inicia Sesión
        </h1>
        <button className="text-center btn-primary font-semibold text-white bg-blue-500"> 
        <FontAwesomeIcon icon={faGoogle} className='w-6' />
          Inicia Con Google
          
        </button>
      </div>
    </div>
  );
}
