import axios from "./axios";

export const createAsistenciaRequest = (asistencia) => axios.post("/asistencia", asistencia);