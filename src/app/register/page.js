import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";

export default function Login() {
  return (
    <div>
      <div className="bg-white border p-4 max-w-xs mx-auto mt-4">
        <h1 className=" text-4xl font-bold text-center" >
          Regístrate
        </h1>
        <LoginWithGoogle />
      </div>
    </div>
  );
}
