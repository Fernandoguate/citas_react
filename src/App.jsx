import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import {useState, useEffect} from 'react'

function App() {
  const [paciente, setPaciente] = useState([]);
  const [pacientes, setPacientes] = useState({});

  useEffect(() => {
    const obtenerLS= () => {
      const pacientesLS = JSON.parse(localStorage.getItem('paciente')) ?? [] ;
      setPaciente(pacientesLS)
    }

    obtenerLS();
  }, [])

  useEffect(() => {
    localStorage.setItem('paciente', JSON.stringify(paciente));
  }, [paciente])
  const eliminarPaciente= id => {
    const pacientesActualizados = paciente.filter(paciente => paciente.id !== id);
    setPaciente(pacientesActualizados)
  }
  return (
    <div className="container mx-auto mt-20">
      <Header 
        
        />
        <div className="mt-12 md:flex">
          <Formulario 
          paciente={paciente}
          setPaciente={setPaciente}
          pacientes={pacientes}
          setPacientes={setPacientes}/>
          <ListadoPacientes 
          paciente={paciente}
          setPacientes={setPacientes}
          eliminarPaciente= {eliminarPaciente}
          />
          
        </div>
    </div>
  )
}

export default App
