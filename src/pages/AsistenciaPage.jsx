import InicioPage from "./InicioPage";
import { useForm } from "react-hook-form";
import { useAsistencias } from "../contexts/AsistenciaContext";

function AsistenciaPage() {

  const { register, handleSubmit } = useForm()
  const {createAsistencia} = useAsistencias()

  const onSubmit = handleSubmit((data) => {
    createAsistencia(data);
  });

  return (
    <>
      <InicioPage />
      <div className="text-center my-2">
        <h1 className="text-3xl font-bold border-b-2 inline-block">Asistencia</h1>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <label>DNI</label>
          <input className="text-black" type="number" placeholder="Ingrese dni" {...register("dni")} />
          <button type="submit">Enviar</button>
        </form>
      </div>
      
    </>
  )
}

export default AsistenciaPage