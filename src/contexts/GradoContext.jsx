import { createContext, useContext, useState } from "react";
import { createGradoRequest, getGradoRequest } from "../api/grado";

const GradoContext = createContext();

export const useGrados = () => {
  const context = useContext(GradoContext);
  if (!context) {
    throw new Error("useT xdd must be used within a gradoProvider");
  }
  return context;
};

export function GradoProvider({ children }) {
  const [grados, setGrados] = useState([]);

  const getGrados = async () => {
    try {
      const res = await getGradoRequest();
      setGrados(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createGrado = async (grado) => {
    const res = await createGradoRequest(grado);
    console.log(res);
  };

  return (
    <GradoContext.Provider
      value={{
        grados,
        createGrado,
        getGrados,
      }}
    >
      {children}
    </GradoContext.Provider>
  );
}
