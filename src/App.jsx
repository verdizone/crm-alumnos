import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import VerAlumno from "./pages/VerAlumno"
import Inicio from "./pages/Inicio"
import NuevoAlumno from "./pages/NuevoAlumno"
import EditarAlumno from './pages/EditarAlumno'


const App = () =>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/alumnos" element={<Layout />}>
                        <Route index element={<Inicio />}/>
                        <Route path="nuevo" element={<NuevoAlumno />}/>
                        <Route path="editar/:id" element={<EditarAlumno />}/>
                        <Route path=":id" element={<VerAlumno />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App