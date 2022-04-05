import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className='bg-red-800 text-white p-3 mt-5 rounded-md font-bold 
                      text-lg capitalize text-center'>
        <p>{children}</p>
    </div>
  )
}

export default Alerta