import axios from "./axios";

export const getGradoRequest = () => axios.get("/grado");

export const createGradoRequest = (grado) => axios.post("/grado", grado);