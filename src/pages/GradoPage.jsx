import InicioPage from "./InicioPage";
import { useGrados } from "../contexts/GradoContext";
import { useEffect } from "react";
import GradoCard from "../components/GradoCard";

function GradoPage() {

  const { getGrados, grados } = useGrados()

  useEffect(()=>{
    getGrados()
  }, [])

  return (
    <>
      <InicioPage/>
      <div className="text-center my-2">
        <h1 className="text-3xl font-bold border-b-2 inline-block">GRADO</h1>
      </div>
      <div className="grid grid-cols-3 gap-3">
          {grados.map((grado) => (
            <GradoCard grado={grado} key={grado.id_grado} />
          ))}
        </div>
    </>
  )
}

export default GradoPage