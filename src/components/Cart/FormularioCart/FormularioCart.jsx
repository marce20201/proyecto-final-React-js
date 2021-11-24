import React, { useState, useContext } from 'react';
import {CartContext} from './../../../context/CartContext'
import {getFirestore} from './../../../services/firebaseService'
import swal from 'sweetalert'
import BotonGenerico from '../../BotonGenerico/BotonGenerico';
import './FormularioCart.css'
function FormularioCart() {
    const {cartList,costoTotal,cleanList}= useContext(CartContext)  
    const [buyer, setBuyer] = useState(initialState)
    const order = {buyer, item:cartList, totalCompra: `$${costoTotal()}`} 
    
    const handlerChange = (evt)=>{
        setBuyer({
            ...buyer,
            [evt.target.name]: evt.target.value,
        })
    }
    const handlerSubmit=(evt)=>{
        evt.preventDefault()
        
        const db = getFirestore()
        db.collection('order').add(order)

        .then(({id})=>{
            swal({
                title:`Compra realizada por $${costoTotal()}, Muchas gracias`,
                text:`Tu orden de compra es : ${id}`,
                icon:"success",
                height: "340px"
            })
            
        })
        .catch(err=>console.log(err))
        cleanList()
    }

    return (
        <>
            <form className='formulario-comprador'
                        onSubmit={handlerSubmit}
                        onChange={handlerChange}
                    >
                        <input 
                            type='text'
                            placeholder='Nombre' 
                            name='nombre'
                            value={buyer.nombre}
                        />
                        <input 
                            type='text' 
                            placeholder='Apellido' 
                            name='apellido'
                            value={buyer.apellido}
                        />
                        <input 
                            type='text' 
                            placeholder='Domicilio' 
                            name='domicilio'
                            value={buyer.domicilio}
                        />
                        <input 
                            type='text' 
                            placeholder='Provincia' 
                            name='provincia'
                            value={buyer.provincia}
                        />
                        <input 
                            type='text' 
                            placeholder='Codigo Postal' 
                            name='postcode'
                            value={buyer.postcode}
                        />
                        <input 
                            type='tel' 
                            placeholder='Telefono' 
                            name='telefono'
                            value={buyer.telefono}
                        />
                        <input 
                            type='email' 
                            placeholder='E-mail' 
                            name='mail'
                            value={buyer.mail}
                        />
                        <div>
                            <BotonGenerico contenido ={ "Realizar compra"}/>
                        </div>
                        
                    </form>
        </>
    )
}

export default FormularioCart

const initialState ={
    nombre:'',
    apellido:'',
    domicilio:'',
    provincia:'',
    postcode:'',
    telefono:'',
    mail:'',
} 