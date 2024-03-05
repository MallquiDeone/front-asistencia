import React from "react";
import { useForm } from "react-hook-form";
import { useTurnos } from "../contexts/TurnoContext";
import { useNavigate, Link } from "react-router-dom";

function TurnoFormPage() {
  const { register, handleSubmit } = useForm();
  const { createTurno } = useTurnos();
  //console.log(createTurno());
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createTurno(data);
    navigate("/turno");
  });

  return (
    <>
      <div className="w-full max-w-xs mx-auto">
        <form
          onSubmit={onSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nombre Turno
            </label>
            <input
              type="text"
              placeholder="nombre turno"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("tipo_turno")}
              autoFocus
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Hora limite entrada
            </label>
            <input
              id="username"
              type="time"
              placeholder="hora"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("hora_limite_entrada")}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
            <li className="cursor-pointer  text-black block mt-4 lg:inline-block lg:mt-0 text-teal-20 mr-4">
              <Link to="/turno" className="flex-grow w-full p-3 border-2 hover:bg-slate-300">
                VOLVER
              </Link>
            </li>
          </div>
        </form>
      </div>
    </>
  );
}

export default TurnoFormPage;
