/* Componente funcional */
import React from 'react';
// import { Fragment } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';

const PrimeraApp = ( {saludo, subtitulo} ) => {
    // const saludo = 'Hola mundo';
    /* const saludo = {
        nombre: 'daniel',
        edad: 42,
    } */
    //console.log( props );

    /* if ( !saludo) {
        throw new Error('El saludo es necesario');
    } */

    return (
        // <div>
        //     <h1>Hola mundo</h1>
        //     <p>Mi primera aplicación</p>
        // </div>

        // Usando Fragments explícitos
        // <Fragment>
        //     <h1>Hola mundo</h1>
        //     <p>Mi primera aplicación</p>
        // </Fragment>

        // Usando Fragments implícitos
        <>
            <h1>{ saludo }</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{ subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo : 'Soy un subtitulo',
}

export default PrimeraApp;