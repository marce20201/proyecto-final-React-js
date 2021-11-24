import React from 'react'
import { Card} from 'react-bootstrap'
import { Link } from "react-router-dom";
import BotonGenerico from '../../../BotonGenerico/BotonGenerico';
import './Item.css'



function Item({ prodData }) {
    const {id, nombre, precio, imgDir} = prodData
    return(
                <Card style={{ width: '18rem' }} className="col-md-4 card-prod">
                    <Card.Img variant="top" src={imgDir} alt= {nombre} />
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>Precio: ${precio} <br/></Card.Text>
                        <BotonGenerico contenido={
                            <Link to={`/item/${id}`} className="text-decoration-none text-light" >
                            Detalles
                        </Link>
                        }/>
                    </Card.Body>
                </Card>
            )
            }
            
    

export default Item