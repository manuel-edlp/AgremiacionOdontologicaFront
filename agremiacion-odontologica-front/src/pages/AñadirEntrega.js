import React, { Link, useState } from 'react';
import '../App.css'; // Importa el archivo CSS para los estilos

const AñadirEntrega = () => {
    const [odontologo, setOdontologo] = useState('');
    const [obraSocial, setObraSocial] = useState('');
    const [numeroInicio, setNumeroInicio] = useState('');
    const [numeroFinal, setNumeroFinal] = useState('');

    const handleBuscarOdontologo = (e) => {
        setOdontologo(e.target.value);
        // Aquí puedes agregar la lógica de búsqueda en respuesta a los cambios en el campo de búsqueda de odontólogo
    };

    const handleBuscarObraSocial = (e) => {
        setObraSocial(e.target.value);
        // Aquí puedes agregar la lógica de búsqueda en respuesta a los cambios en el campo de búsqueda de obra social
    };

    const handleCrearOdontologoNuevo = () => {
        // Lógica para crear un nuevo odontólogo
    };

    const handleCrearObraSocialNueva = () => {
        // Lógica para crear una nueva obra social
    };

    const handleSubmit = () => {
        // Lógica para manejar la presentación de los datos ingresados
    };

    return (
        <div>
        <h1>Añadir Entrega</h1>
        <div id="altaEntrega">
            <div>
                <input
                    type="text"
                    placeholder="Buscar odontólogo"
                    value={odontologo}
                    onChange={handleBuscarOdontologo}
                />
                
                <Link to="/CrearOdontologo">
                <button onClick={handleCrearOdontologoNuevo}>Crear Nuevo Odontólogo</button>
                </Link>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Buscar obra social"
                    value={obraSocial}
                    onChange={handleBuscarObraSocial}
                />
                <button onClick={handleCrearObraSocialNueva}>Crear Nueva Obra Social</button>
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Número de Inicio"
                    value={numeroInicio}
                    onChange={(e) => setNumeroInicio(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Número de Final"
                    value={numeroFinal}
                    onChange={(e) => setNumeroFinal(e.target.value)}
                />
            </div>
            <button onClick={handleSubmit}>Guardar Entrega</button>
        </div>
    </div>
    );
}

export default AñadirEntrega;
