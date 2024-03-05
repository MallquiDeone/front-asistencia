import axios from "./axios";

export const getTurnosRequest = () => axios.get("/turno");

export const createTurnoRequest = (turno) => axios.post("/turno", turno);
