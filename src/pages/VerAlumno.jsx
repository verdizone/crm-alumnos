import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Spinner from '../components/Spinner'

const VerAlumno = () => {
    const [cargando, setCargando] = useState([])
    const [alumno, setAlumno] = useState(true)
    const {id} = useParams()
    useEffect(()=>{
        setCargando(!cargando)
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
      cargando ? <Spinner /> : 
            Object.keys(alumno).length === 0 ? 
            <p>No hay resultados</p>: 
        (
        <>
            
                <h1 className="font-black text-3xl text-blue-900">Ver alumno: {alumno.nombre}</h1>
                <p className="mt-3">Información del alumno.</p>
            
                {alumno.nombre && (
                    <p className='text-4xl text-gray-800 mt-10'>
                        <span className='text-gray-700 uppercase font-bold '>Alumno: </span> 
                        {alumno.nombre}
                    </p>
                )}
                {alumno.fechaNac && (
                    <p className='text-2xl text-gray-800 mt-4'>
                        <span className='text-gray-700 uppercase font-bold'>Fecha de Nacimiento </span> 
                        {alumno.fechaNac}
                    </p>
                )}
                {alumno.colegio && (
                    <p className='text-2xl text-gray-800 mt-4'>
                        <span className='text-gray-700 uppercase font-bold'>Colegio: </span> 
                        {alumno.colegio}
                    </p>
                )}
                {alumno.graGru && (
                    <p className='text-2xl text-gray-800 mt-4'>
                        <span className='text-gray-700 uppercase font-bold'>Grado y Grupo: </span> 
                        {alumno.graGru}
                    </p>
                )}
        </>
        )
  )
}

export default VerAlumno