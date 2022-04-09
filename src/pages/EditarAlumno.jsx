import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Spinner from '../components/Spinner'

import Formulario from '../components/Formulario';

const EditarAlumno = () => {

  const [cargando, setCargando] = useState([])
  const [alumno, setAlumno] = useState(true)
  const {id} = useParams()
  useEffect(()=>{
      const obtenerAlumnosAPI = async () => {
          try {
              const url = `http://localhost:4000/alumnos/${id}`
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()
              setAlumno(resultado);
          } catch (error) {
              console.log(error);
          }
          setCargando(!cargando)
      }
      obtenerAlumnosAPI()
  },[])


  return (
    <>
      {alumno?.nombre ? (
        <div>
          <h1 className="font-black text-3xl text-blue-900">Editar Alumno</h1>
          <p className="mt-3">Utiliza este formulario para editar un alumno.</p>
          <Formulario 
            alumno={alumno}
            cargando={cargando}
          />
        </div>
      ):(
        cargando ? <Spinner /> :(
          <div>
            <h1 className="font-black text-3xl text-blue-900">Editar Alumno</h1>
            <p className="mt-3">No se han encontrado resultados</p>
            
          </div>
        )
      )}

    </>
  )
}

export default EditarAlumno