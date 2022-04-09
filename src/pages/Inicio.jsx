import {useEffect, useState} from 'react';
import Alumno from '../components/Alumno';

const Inicio = () => {
  const [alumnos, setAlumnos] = useState([])
  useEffect(()=>{
    const obtenerAlumnosAPI = async () =>{
      try {
        const url = "http://localhost:4000/alumnos"
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setAlumnos(resultado);
      } catch (error) {
        console.log(error);
      }
    }
    obtenerAlumnosAPI()
  }, [])

  const handleEliminarAlumnos = async id =>{
    const confirmar  = confirm('¿Seguro que desea eliminar al alumno?')
    
    if(confirmar){
      //Llamar la api para que elimine el registro
      try {
        const url =`http://localhost:4000/alumnos/${id}`
        const respuesta = await fetch(url, {
          method: 'DELETE',
        })
        await respuesta.json()
        const arrayAlumnos = alumnos.filter( alumno => alumno.id !== id)
        setAlumnos(arrayAlumnos)
      } catch (error) {
        console.log(error);
      }
    }
  }
    
  return (
    <>
      <h1 className="font-black text-3xl text-blue-900">Alumnos</h1>
      <p className="mt-3">Aqui podrás ver los alumnos ingresados.</p>
      
        <table className='w-full mt-5 table-auto shadow bg-white'>
          <thead  className='bg-blue-800 text-white font-bold'>
            <tr>
              <th className='p-2'>Nombre</th>
              <th className='p-2'>Fecha de Nacimiento</th>
              <th className='p-2'>Colegio</th>
              <th className='p-2'>Grado y Grupo</th>
            </tr>
          </thead>
          <tbody>
            {
              alumnos.map((alumno)=>(
                <Alumno 
                  key={alumno.id}
                  alumno={alumno}
                  handleEliminarAlumnos={handleEliminarAlumnos}
                />
              ))
            }
          </tbody>
        </table>
      
    
    </>
    
  )
}

export default Inicio