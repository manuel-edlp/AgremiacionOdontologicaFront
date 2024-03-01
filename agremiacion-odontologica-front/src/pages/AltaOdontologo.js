import React, { Link } from 'react';

const handleSubmit = () => {
    // Lógica para manejar la presentación de los datos ingresados
};

const AltaOdontologo = () =>{
    return(
        <div>
            <h1>Alta odontólogo</h1>
            <h4>Datos Personales</h4>

            <div>
                <h4>Nombre</h4>
                <input type="text"/>
            </div>

            <div>
                <h4>DNI</h4>
                <input type="text"/>
            </div>

            <div>
                <h4>Apellido</h4>
                <input type="text"/>
            </div>

            <div>
                <h4>Matrícula</h4>
                <input type="text"/>
            </div>

            <div>
                <h4>Estado</h4>
                <select>
                    <option></option> /* Opcion para elegir Agremiado */
                    <option></option> /* Opcion para elegir No Agremiado */
                </select>
            </div>

            <h4>Domicilio</h4>
            <div>
                <h4>Provincia</h4>
                <select>
                    <option></option> /* Opcion para elegir Buenos Aires */
                    <option></option> /* Opcion para elegir Mendoza */
                    <option></option> /* Opcion para elegir Santa Cruz */
                </select>
            </div>

            <div>
                <h4>Localidad</h4>
                <select>
                    <option></option> /* Opcion para elegir La Plata */
                    <option></option> /* Opcion para elegir City Bell */
                    <option></option> /* Opcion para elegir Gonnet */
                </select>
            </div>

            <div>
                <h4>Calle</h4>
                <input type="text"/>
            </div>

            <div>
                <h4>Cod. Postal</h4>
                <input type="text"/>
            </div>

            <div>
                <h4>Número</h4>
                <input type="text"/>
            </div>

            <button id="volver"><Link id='link' to="/EntregaDeBonos">Cancelar</Link></button>
            <button onClick={handleSubmit}><Link id='link' to="/EntregaDeBonos">Guardar</Link></button>

        </div>
    );
}

export default AltaOdontologo