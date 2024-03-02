import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../AE.css'; // Importa el archivo CSS para los estilos
import axios from 'axios';

const AñadirEntrega = () => {
    const [odontologo, setOdontologo] = useState('');
    const [odontologos, setOdontologos] = useState([]);
    const [obraSocial, setObraSocial] = useState('');
    const [inicio, setNumeroInicio] = useState('');
    const [final, setNumeroFinal] = useState('');
    const [obraSocialOptions, setObraSocialOptions] = useState([]);
    const [selectedObraSocial, setSelectedObraSocial] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [showOdontologosList, setShowOdontologosList] = useState(false);

    const odontologosListRef = useRef(null); // Referencia al elemento de la lista desplegable de odontólogos

    useEffect(() => {
        listarObrasSociales();
        document.addEventListener('click', handleClickOutside); // Agrega el event listener para cerrar la lista al hacer clic fuera de ella
        return () => {
            document.removeEventListener('click', handleClickOutside); // Limpia el event listener cuando el componente se desmonta
        };
    }, []);

    const handleClickOutside = (event) => {
        console.log("Clicked outside");
        if (odontologosListRef.current && !odontologosListRef.current.contains(event.target)) {
            setShowOdontologosList(false);
        }
    };

    const listarObrasSociales = () => {
        axios.get('https://localhost:5002/Agremiacion/ObraSocial/ListarObrasSociales')
            .then((response) => {
                if (response.status === 200) {
                    setObraSocialOptions(response.data); 
                    setMensaje('Agregado exitoso.');
                    setTimeout(() => {
                      setMensaje('');
                    }, 3000); // Borra el mensaje después de 3 segundos
                }
            })
            .catch((error) => {
                setMensaje('Error al agregar.');
                setTimeout(() => {
                  setMensaje('');
                }, 3000); // Borra el mensaje después de 3 segundos
            });
    };

    const buscarOdontologos = (busqueda) => {
        axios.get(`https://localhost:5002/Agremiacion/Odontologo/listar/${busqueda}`)
            .then((response) => {
                setOdontologos(response.data);
                setShowOdontologosList(true); // Mostrar la lista de odontólogos al obtener resultados
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleBuscarOdontologo = (event) => {
        const busqueda = event.target.value;
        setOdontologo(busqueda);
        if (busqueda === '') {
            setOdontologos([]); // Si la búsqueda está vacía, borra los resultados
        } else {
            buscarOdontologos(busqueda);
        }
    };

    const handleSelectObraSocialChange = (event) => {
        setSelectedObraSocial(event.target.value);
    };

    const handleSubmit = () => {
        // Separar el nombre y el apellido del odontólogo
        const [nombre, apellido] = odontologo.split(' ');
        
        // Configurar los datos de entrega con cada campo en su respectivo lugar
        const datosEntrega = {
            odontologoNombre: nombre,
            odontologoApellido: apellido,
            obraSocial: selectedObraSocial,
            inicio,
            final
        };

        try {
            // Enviar los datos de entrega al servidor
            const respuesta = axios.post('https://localhost:5002/Agremiacion/Entrega/AltaEntrega/', datosEntrega);
      
            if (respuesta.status === 201) {
                setMensaje('Agregado exitoso.');
                setTimeout(() => {
                    setMensaje('');
                }, 3000); // Borra el mensaje después de 3 segundos
            }
        } catch {
            setMensaje('Error al agregar.');
            setTimeout(() => {
                setMensaje('');
            }, 3000); // Borra el mensaje después de 3 segundos
        }
    };

    const handleSelectOdontologo = (odontologoSeleccionado) => {
        // Concatenar el nombre y el apellido del odontólogo y asignarlos al estado 'odontologo'
        const nombreCompleto = `${odontologoSeleccionado.nombre} ${odontologoSeleccionado.apellido}`;
        setOdontologo(nombreCompleto);
        setShowOdontologosList(false);
    };

    const handleCrearOdontologoNuevo = () => {
        // Lógica para crear un nuevo odontólogo
    };

    const handleCrearObraSocialNueva = () => {
        // Lógica para crear una nueva obra social
    };

    return (
        <div>
            <h1>Entrega Bono</h1>
            <div id="altaEntrega" className="grid-container">
                <div id="columna-1">
                <div id='odontologo' onClick={() => setShowOdontologosList(true)}>
                    <h4>Odontólogo</h4>
                    <div id="alinear">
                        <input
                            type="text"
                            placeholder="Buscar odontólogo..."
                            value={odontologo}
                            onChange={handleBuscarOdontologo}
                        />
                        {showOdontologosList && (
                            <ul ref={odontologosListRef}>
                                {odontologos.map((odontologo) => (
                                    <li key={odontologo.id} onClick={() => handleSelectOdontologo(odontologo)}>
                                        {odontologo.nombre} {odontologo.apellido}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <Link to="/AltaOdontologo">
                            <button className="boton" onClick={handleCrearOdontologoNuevo}>+</button>
                        </Link>
                    </div>
                </div>
                <div id='obrasocial'>
                    <h4>Obra Social</h4>
                    <div id="alinear">
                        <select value={selectedObraSocial} onChange={handleSelectObraSocialChange}>
                            <option value="">Seleccione una obra social</option>
                            {obraSocialOptions.map((obraSocial) => (
                                <option key={obraSocial.id} value={obraSocial.value}>
                                    {obraSocial.nombre}
                                </option>
                            ))}
                        </select>
                        <button id="boton2" onClick={handleCrearObraSocialNueva}>+</button>
                    </div>
                </div>

                </div>
                <div id="columna-2">
                    <div id='desde'>
                        <h4>Desde</h4>
                        <input
                            type="number"
                            value={inicio}
                            onChange={(e) => setNumeroInicio(e.target.value)}
                        />
                    </div>
                    <div>
                        <h4 id='hasta'>Hasta</h4>
                        <input
                            type="number"
                            value={final}
                            onChange={(e) => setNumeroFinal(e.target.value)}
                        />
                    </div>
                </div>
                <div className='botones-flex'>              
                    <button id="volver"><Link id='link' to="/EntregaDeBonos">Cancelar</Link></button>
                    <br></br>
                    <button id="guardar" onClick={handleSubmit}><Link id='link' to="/EntregaDeBonos">Entregar Bono</Link></button>
                </div>     
            </div>
        </div>
    );
}

export default AñadirEntrega;
