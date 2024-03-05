import { createContext, useContext, useState } from "react";
import { createAsistenciaRequest } from "../api/asistencia";

const AsistenciaContext = createContext();

export const useAsistencias = () => {
  const context = useContext(AsistenciaContext);
  if (!context) {
    throw new Error("useT must be used within a taskProvider");
  }
  return context;
};

export function AsistenciaProvider({ children }) {

    const createAsistencia = async(asistencia) =>{
        const res = await createAsistenciaRequest(asistencia)
        console.log(res);
    }
    return(
        <AsistenciaContext.Provider
            value={{
                createAsistencia
            }}
        >
            {children}
        </AsistenciaContext.Provider>
    )
}
