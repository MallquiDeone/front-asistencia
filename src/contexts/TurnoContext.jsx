import { createContext, useContext, useState } from "react";
import { createTurnoRequest, getTurnosRequest } from "../api/turno";

const TurnoContext = createContext();

export const useTurnos = () => {
  const context = useContext(TurnoContext);
  if (!context) {
    throw new Error("useT must be used within a taskProvider");
  }
  return context;
};

export function TurnoProvider({ children }) {
  const [turnos, setTurnos ] = useState([]);

  //GET TURNO XDD
  const getTurnos = async () => {
    try {
      const res = await getTurnosRequest();
      setTurnos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTurno = async (turno) => {
    const res = await createTurnoRequest(turno);
    console.log(res);
  };

  return (
    <TurnoContext.Provider
      value={{
        turnos,
        createTurno,
        getTurnos,
      }}
    >
      {children}
    </TurnoContext.Provider>
  );
}
