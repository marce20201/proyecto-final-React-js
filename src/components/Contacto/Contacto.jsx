import React, {useState} from 'react'
import BotonGenerico from '../BotonGenerico/BotonGenerico'
import './Contacto.css'
import {getFirestore} from '../../services/firebaseService'
import swal from 'sweetalert'

function Contacto() {

    const [consultor, setConsultor] = useState(initialState)
    const consulta = {consultor } 


    const handlerChange = (evt)=>{
        setConsultor({
            ...consultor,
            [evt.target.name]: evt.target.value,
        })
    }

    const handlerSubmit=(evt)=>{
        evt.preventDefault()
        
        const db = getFirestore()
        db.collection('consulta').add(consulta)

        .then(({id})=>{
            swal({
                title:`Consulta enviada!`,
                text:`La identificacion de consulta es : ${id}`,
                icon:"success",
                height: "340px"
            })
            setConsultor(initialState)
        })
        .catch(err=>console.log(err))
        
    }
    return (
        <>
        <h2>Envianos tus dudas!</h2>
        <div className="form-consul-cont">
        <form className='formulario-consulta'
                        onSubmit={handlerSubmit}
                        onChange={handlerChange}
                    >
                        <input 
                            type='text'
                            placeholder='Nombre' 
                            name='nombre'
                            value={consultor.nombre}
                        />
                        <input 
                            type='email' 
                            placeholder='E-mail' 
                            name='mail'
                            value={consultor.mail}
                        />
                        <textarea
                            placeholder='Escribí aquí tu consulta' 
                            name='txtConsulta'
                            value={consultor.txtConsulta}
                        />
                        <div>
                            <BotonGenerico contenido ={'Enviar'}/>
                        </div>
                    </form>
        </div>
        
        </>
    )}

export default Contacto

const initialState ={
    nombre:'',
    txtConsulta:'',
    mail:'',
} 
