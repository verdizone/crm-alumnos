import {Link, Outlet, useLocation} from 'react-router-dom'

const Layout = () => {

    const location  = useLocation();

    const locationActual = location.pathname;

    return (
      <div className='md:min-h-screen md:flex'>
        <div className='md:w-1/4 bg-blue-900 px-5 py-10 '>
          <h2 className='text-white text-3xl text-center font-black'>CRM - Alumnos</h2>
          <nav className='mt-10'>
              <Link 
                className={`${locationActual === '/alumnos' ? 'text-blue-300': 'text-white'} block text-2xl mt-2 hover:text-blue-300`}
                to="/alumnos">Alumnos</Link>
              <Link
                className={`${locationActual === '/alumnos/nuevo' ? 'text-blue-300': 'text-white'} block text-2xl mt-2 hover:text-blue-300`}
                to="/alumnos/nuevo">Nuevo Alumno</Link>
          </nav>
        </div>
        <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
          <Outlet />
        </div>
      </div>
    )
}

export default Layout