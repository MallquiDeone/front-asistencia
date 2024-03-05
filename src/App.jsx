import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./contexts/AuthContext";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";
import QrscanPage from "./pages/QrscanPage";
import AsistenciaPage from "./pages/AsistenciaPage";
import { TurnoProvider } from "./contexts/TurnoContext";
import { GradoProvider } from "./contexts/GradoContext";
import InicioPage from "./pages/InicioPage";
import TurnoPage from "./pages/TurnoPage";
import TurnoFormPage from "./pages/TurnoFormPage";
import NotFound from "./pages/NotFound";
import GradoPage from "./pages/GradoPage";
import { AsistenciaProvider } from "./contexts/AsistenciaContext";

function App() {
  return (
    <AuthProvider>
      <TurnoProvider>
        <GradoProvider>
          <AsistenciaProvider>
            <BrowserRouter>
              {/* <Navbar /> */}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<NotFound />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/add-tasks" element={<TaskFormPage />} />
                  <Route path="/tasks/:id" element={<TasksPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/qr" element={<QrscanPage />} />
                  <Route path="/asistencia" element={<AsistenciaPage />} />
                  <Route path="/turno" element={<TurnoPage />} />
                  <Route path="/turno/new" element={<TurnoFormPage />} />
                  <Route path="/inicio" element={<InicioPage />} />
                  <Route path="/grado" element={<GradoPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </AsistenciaProvider>
        </GradoProvider>
      </TurnoProvider>
    </AuthProvider>
  );
}

export default App;
