import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import Alerta from './Alerta'
import {useNavigate} from 'react-router-dom'


const Formulario = () => {

  const navigate = useNavigate()

  const nuevoAlumnosSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es obligatorio'),
    fechaNac: Yup.date().required('El campo fecha es obligatorio'),
    colegio: Yup.string().required('El colegio es obligatorio'),
    graGru: Yup.string().required('Grado y grupo son obligatorios'),
  })

  const handleSubmit = async (valores) =>{
    // console.log(valores);
    try {
      const url = 'http://localhost:4000/alumnos'
      const respuesta = await fetch(url, {
        method:"POST",
        body: JSON.stringify(valores),
        headers: {
          "Content-Type": "application/json"
        }
      
      })
      console.log(respuesta);
      const resultado = await respuesta.json()
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
      <h1 
        className='font-bold text-gray-600 text-xl text-center uppercase'>
            Ingresar Información Del Alumno</h1>
            <Formik
              initialValues={{
                nombre:"",
                fechaNac:"",
                colegio:"",
                graGru:"",
              }}
              onSubmit={async (values, {resetForm})=>{
                await handleSubmit(values)
                resetForm()
                navigate('/alumnos')
              }}
              validationSchema={nuevoAlumnosSchema}
            >
              {({errors, touched})=>{
                // console.log(touched);
                return (
              <Form>
                <div className='mt-8'>
                  <label
                    className='font-bold text-gray-600 text-xl px-2' 
                    htmlFor="nombre">Nombre
                  </label>
                  <Field
                    id="nombre"
                    type="text"
                    placeholder="Nombre del alumno"
                    className="bg-gray-50 p-2 mt-2 text-gray-800 block w-full shadow-md"
                    name="nombre"
                  />
                  {
                    errors.nombre && touched.nombre ? (
                      <Alerta>{errors.nombre}</Alerta>
                    ):null
                  }
                </div>
                <div className='mt-10'>
                  <label
                    className='font-bold text-gray-600 text-xl px-2' 
                    htmlFor="fechaNac">Fecha de Nacimiento
                  </label>
                  <Field
                    id="fechaNac"
                    type="date"
                    className="bg-gray-50 p-2 mt-2 text-gray-800 block w-full shadow-md"
                    name="fechaNac"
                  />
                  {
                    errors.fechaNac && touched.fechaNac ? (
                      <Alerta>{errors.fechaNac}</Alerta>
                    ):null
                  }
                </div>
                <div className='mt-10'>
                  <label
                    className='font-bold text-gray-600 text-xl px-2' 
                    htmlFor="colegio">Colegio
                  </label>
                  <Field
                    as="select"
                    id="colegio"
                    type="text"
                    className="bg-gray-50 p-2 mt-2 text-gray-800 block w-full shadow-md"
                    name="colegio"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="Albatros">Albatros</option>
                    <option value="Tecnoalbatros">Tecnoalbatros</option>
                
                  </Field>
                  {
                    errors.colegio && touched.colegio ? (
                      <Alerta>{errors.colegio}</Alerta>
                    ):null
                  }
                </div>
                <div className='mt-10'>
                  <label
                    className='font-bold text-gray-600 text-xl px-2' 
                    htmlFor="graGru">Grado y Grupo
                  </label>
                  <Field
                    as="select"
                    id="graGru"
                    type="text"
                    className="bg-gray-50 p-2 mt-2 text-gray-800 block w-full shadow-md"
                    name="graGru"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="">---Kinder---</option>
                    <option value="K1A">K1A</option>
                    <option value="K1B">K1B</option>
                    <option value="K1C">K1C</option>
                    <option value="K2A">K2A</option>
                    <option value="K2B">K2B</option>
                    <option value="K2C">K2C</option>
                    <option value="K3A">K3A</option>
                    <option value="K3B">K3B</option>
                    <option value="K3C">K3C</option>
                   
                    <option value="">---Primaria Baja---</option>
                    <option value="P1A">P1A</option>
                    <option value="P1B">P1B</option>
                    <option value="P1C">P1C</option>
                    <option value="P2A">P2A</option>
                    <option value="P2B">P2B</option>
                    <option value="P2C">P2C</option>
                    <option value="P3A">P3A</option>
                    <option value="P3B">P3B</option>
                    <option value="P3C">P3C</option>

                    <option value="">---Primaria Alta---</option>
                    <option value="P4A">P4A</option>
                    <option value="P4B">P4B</option>
                    <option value="P4C">P4C</option>
                    <option value="P5A">P5A</option>
                    <option value="P5B">P5B</option>
                    <option value="P5C">P5C</option>
                    <option value="P6A">P6A</option>
                    <option value="P6B">P6B</option>
                    <option value="P6C">P6C</option>

                    <option value="">---Secundaria---</option>
                    <option value="S1A">S1A</option>
                    <option value="S1B">S1B</option>
                    <option value="S1C">S1C</option>
                    <option value="S2A">S2A</option>
                    <option value="S2B">S2B</option>
                    <option value="S2C">S2C</option>
                    <option value="S3A">S3A</option>
                    <option value="S3B">S3B</option>
                    <option value="S3C">S3C</option>
                  </Field>
                </div>
                {
                    errors.graGru && touched.graGru ? (
                      <Alerta>{errors.graGru}</Alerta>
                    ):null
                  }
          {/*       <div className='mt-10 pb-5'>
                  <label
                    className='font-bold text-gray-600 text-xl px-2' 
                    htmlFor="imgAlu">Fotografía
                  </label>
                  <Field
                    as="file"
                    id="imgAlu"
                    type="text"
                    className="bg-gray-50 p-2 mt-2 text-gray-800 block w-full shadow-md"

                  />
                </div> */}
                <div className='mt-10'>
                  <input 
                    type="submit"
                    value="Agregar Alumno" 
                    className='block w-full uppercase font-bold bg-blue-900 text-white text-xl p-3
                    cursor-pointer hover:bg-blue-800 transition-colors shadow-md mb-5 rounded-md'
                  />
                </div>
                      
                
              </Form>
              )}}
            </Formik>

  
      
    </div>
  )
}

export default Formulario