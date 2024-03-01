import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Importa el archivo CSS para los estilos
import axios from 'axios'; // Para realizar la solicitud PUT

const EditarEntrega = ({ id }) => {
  const [odontologoSeleccionado, setOdontologoSeleccionado] = useState('');
  const [obraSocialSeleccionada, setObraSocialSeleccionada] = useState('');
  const [numeroInicio, setNumeroInicio] = useState('');
  const [numeroFinal, setNumeroFinal] = useState('');
  const [odontologos, setOdontologos] = useState([]);
  const [obrasSociales, setObrasSociales] = useState([]);
  const [idEntrega, setIdEntrega] = useState(null);

  useEffect(() => {
    const fetchOdontologos = async () => {
      const response = await axios.get('https://localhost:5002/Agremiacion/Odontologo/ListarOdontologos');
      setOdontologos(response.data);
    };

    const fetchObrasSociales = async () => {
      const response = await axios.get('https://localhost:5002/Agremiacion/ObraSocial/ListarObrasSociales');
      setObrasSociales(response.data);
    };

    fetchOdontologos();
    fetchObrasSociales();
  }, []);

  useEffect(() => {
    setIdEntrega(id);
  }, [id]);

  const handleSubmit = async () => {
    const data = {
      odontologo: odontologoSeleccionado,
      obraSocial: obraSocialSeleccionada,
      numeroInicio,
      numeroFinal,
    };

    await axios.put(`https://localhost:5002/Agremiacion/Entrega/${idEntrega}`, data);

    // Redirigir a la página de Listado de Entregas
    window.location.href = '/EntregaDeBonos';
  };

  return (
    <div>
      <h1>Editar Entrega Bono</h1>
      <div id="altaEntrega">
        <div>
          <div id='odontologo'>
            <h4>Odontólogo</h4>
            <select value={odontologoSeleccionado} onChange={(e) => setOdontologoSeleccionado(e.target.value)}>
              {odontologos.map((odontologo) => (
                <option key={odontologo.id} value={odontologo.id}>
                  {odontologo.nombre} {odontologo.apellido}
                </option>
              ))}
            </select>
          </div>
          <Link to="/AltaOdontologo">
            <button>+</button>
          </Link>
        </div>

        <div>
          <div id='obrasocial'>
            <h4>Obra Social</h4>
            <select value={obraSocialSeleccionada} onChange={(e) => setObraSocialSeleccionada(e.target.value)}>
              {obrasSociales.map((obraSocial) => (
                <option key={obraSocial.id} value={obraSocial.id}>
                  {obraSocial.nombre}
                </option>
              ))}
            </select>
          </div>
    
        </div>

        <div>
          <div id='desde'>
            <h4>Desde</h4>
            <input
              type="number"
              placeholder="Número de Inicio..."
              value={numeroInicio}
              onChange={(e) => setNumeroInicio(e.target.value)}
            />
          </div>
          <div id='hasta'>
            <h4>Hasta</h4>
            <input
              type="number"
              placeholder="Número de Final..."
              value={numeroFinal}
              onChange={(e) => setNumeroFinal(e.target.value)}
            />
          </div>
        </div>

        <button id="volver"><Link id='link' to="/EntregaDeBonos">Cancelar</Link></button>
        <button onClick={handleSubmit}><Link id='link' to="/EntregaDeBonos">Guardar</Link></button>
      </div>
    </div>
  );
};

export default EditarEntrega;