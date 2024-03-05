import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(()=>{
    if(isAuthenticated) navigate('/inicio')
  }, [isAuthenticated])

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10">
      {signinErrors.map((error, i) => (
          <p className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </p>
        ))}
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("correo", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Correo"
          />
          {errors.correo && <p className="text-red-500">Correo requerido</p>}

          <input
            type="password"
            {...register("contrasena", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="contrasena"
          />
          {errors.contrasena && (
            <p className="text-red-500">contrasena requerido</p>
          )}

          <button type="submit" className="border-2 p-2 rounded-md mt-3 hover:bg-white hover:text-black">Iniciar sesion</button>
        </form>
        
      </div>
    </div>
  );
}

export default LoginPage;
