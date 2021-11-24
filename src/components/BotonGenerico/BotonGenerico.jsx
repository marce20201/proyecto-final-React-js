import React from 'react'
import './BotonGenerico.css'

function BotonGenerico({contenido, onClick}){
    return (
        <button className="boton-generico" onClick={onClick}>
            {contenido}
        </button>
    )
}

export default BotonGenerico
