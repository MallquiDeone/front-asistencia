import { useTurnos } from "../contexts/TurnoContext";
import InicioPage from "./InicioPage";
import { useEffect } from "react";
import TurnoCard from "../components/TurnoCard";
import { Link } from "react-router-dom";

function TurnoPage() {
  const { getTurnos, turnos } = useTurnos();
  //console.log(createTurno());

  useEffect(() => {
    getTurnos();
  }, []);

  return (
    <>
      <InicioPage />
      <div className="text-center my-2">
        <h1 className="text-3xl font-bold border-b-2 inline-block">TURNO</h1>
      </div>
      <div className="gap-3 m-2">
        <li className="cursor-pointer border-2 hover:bg-white hover:text-black block mt-4 lg:inline-block lg:mt-0 text-teal-20 mr-4">
          <Link to="/turno/new" className="flex-grow flex w-full p-2">
            AGREGAR +
          </Link>
        </li>

        <div className="grid grid-cols-3 gap-3">
          {turnos.map((turno) => (
            <TurnoCard turno={turno} key={turno.id_turno} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TurnoPage;
