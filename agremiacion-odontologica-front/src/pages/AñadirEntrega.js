import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../AE.css'; // Importa el archivo CSS para los estilos

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
        <h1>Entrega Bono</h1>
        <div id="altaEntrega">
            <div>
                
                <div id='odontologo'>
                <h4>Odontólogo</h4>
                <input
                    type="text"
                    placeholder="Search..."
                    value={odontologo}
                    onChange={handleBuscarOdontologo}
                />
                </div>
                <Link to="/AltaOdontologo">
                <button onClick={handleCrearOdontologoNuevo}>+</button>
                </Link>
            </div>

            <div>
                <div id='obrasocial'>
                <h4>Obra Social</h4>
                <select>
                    <option value={obraSocial} onChange={handleBuscarObraSocial}></option>
                    <option value={obraSocial} onChange={handleBuscarObraSocial}></option>
                    <option value={obraSocial} onChange={handleBuscarObraSocial}></option>
                </select>

                </div>
                <button onClick={handleCrearObraSocialNueva}>+</button>
            </div>
            <div>
                <div id='desde'>
                    <h4>Desde</h4>
                    <input
                        type="number"
                        value={numeroInicio}
                        onChange={(e) => setNumeroInicio(e.target.value)}
                    />
                </div>
                <div>
                    <h4 id='hasta'>Hasta</h4>
                    <input
                        type="number"
                        value={numeroFinal}
                        onChange={(e) => setNumeroFinal(e.target.value)}
                    />
                </div>
            </div>

            <button id="volver"><Link id='link' to="/EntregaDeBonos">Cancelar</Link></button>
            <br></br>
            <button onClick={handleSubmit}>Entregar Bono</button>
        </div>
    </div>
    );
}

export default AñadirEntrega;
