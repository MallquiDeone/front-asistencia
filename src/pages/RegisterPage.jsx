import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    signup,
    usuario,
    isAuthenticated,
    errors: registerErrors,
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <>
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {registerErrors.map((error, i) => (
          <p key={i} className="bg-red-500 p-2 text-white">
            {error}
          </p>
        ))}

        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("usuario", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Usuario"
          />
          {errors.usuario && <p className="text-red-500">Usuario requerido</p>}

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

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
