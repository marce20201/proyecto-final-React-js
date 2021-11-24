import React, { useContext } from 'react';
import {CartContext} from './../../context/CartContext'
import {ImCross} from 'react-icons/im'  
import "./Cart.css";
import FormularioCart from './FormularioCart/FormularioCart';
import BotonGenerico from '../BotonGenerico/BotonGenerico';

function Cart() {

    const {cartList,removeItem,costoTotal,cleanList}= useContext(CartContext)    
    return (
        <>
        <h2>Carrito de compras</h2>
        {cartList.length === 0?
            <p>El carrito esta vacio</p>
        :
        <div>
            <BotonGenerico onClick={cleanList} contenido={"Vaciar el carrito"}/>
            <table>
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Total</th>
                </tr>
                </thead>
                <tbody>
                {cartList.map(item => 
                    <tr key = {item.item.id}>
                        <td><img src={item.item.imgDir} width='30px' height='40px' alt="" /><p>{item.item.nombre}</p></td>
                        <td>{item.itemQ}</td>
                        <td>${item.item.precio*item.itemQ}</td>
                        <td><ImCross className="remove"onClick={()=>{removeItem(item)}}/></td> 
                    </tr>
                )}                        
                </tbody>
            </table>
            <p className="total">{`Total a pagar : $${costoTotal()}`} </p> 
            <div className="titulo-form">
                <h3>Ingresá tus datos para enviar tu pedido</h3>
                <FormularioCart/>
            </div>
        </div>
        }
        </>
        
    )
}
export default Cart
