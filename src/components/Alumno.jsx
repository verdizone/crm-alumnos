import React from 'react'
import {useNavigate} from 'react-router-dom'

const Alumno = ({alumno}) => {
    const navigate = useNavigate()
    const {nombre, fechaNac, colegio, graGru, id } = alumno
  return (
    <tr className='border-b-2 hover:bg-gray-100'>
        <td className='p-3'>{nombre}</td>
        <td className='p-3'>{fechaNac}</td>
        <td className='p-3'>
            <p>{colegio}</p>
            <p>{graGru}</p>
        </td>
        <td className='p-3'>
            <button 
                onClick={()=>(navigate(`/alumnos/${id}`))}
                className='block w-full bg-amber-600 hover:bg-amber-700 text-white p-3 uppercase font-bold text-xs'>
                Ver
            </button>
            
            <button className='block w-full bg-blue-600 hover:bg-blue-700 text-white p-3 uppercase font-bold text-xs mt-2'>
                Editar
            </button>
            
            <button className='block w-full bg-red-600 hover:bg-red-700 text-white p-3 uppercase font-bold text-xs my-2'>
                Eliminar
            </button>
            
        </td>
    </tr>
  )
}

export default Alumno