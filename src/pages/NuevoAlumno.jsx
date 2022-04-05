import Formulario from "../components/Formulario"


const NuevoAlumno = () => {
  return (
    <>
        <h1 className="font-black text-3xl text-blue-900">Nuevo Alumno</h1>
        <p className="mt-3">Llena los siguientes campos para registrar un alumno.</p>

        <Formulario />

    </>
  )
}

export default NuevoAlumno