import React from 'react';
import { CarritoContext } from '../../context/CartContext';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({data}) => {

    const [cantidad, setCantidad] = useState(1);
    const {addItem} = useContext(CarritoContext);

   


    const cantidadProducto = (operacion) => {

        if(operacion === "+"){
            if(cantidad < data.stock){
                setCantidad(cantidad + 1)
            } 
            
        } else {
            if(cantidad > 1){
                setCantidad(cantidad - 1)
            }
            
        }

    }

    return (
       
            <div className="card m-2 bg-primary text-bg-info rounded-3 w-25">
                <div className='card-body'>
                    <img src={data.img} alt="imagen" className="card-img-top"/>
                    <h3>{data.name}</h3>
                    <p>Precio: {data.price}</p>
                    <p>{data.description}</p>
                    <p>Stock: {data.stock}</p>
                    <button className='btn btn-primary' onClick={() => cantidadProducto("+")}>
                        +
                    </button>
                    
                    <button className='btn btn-primary' onClick={() => cantidadProducto("-")}>
                        -
                    </button>
                    <p className='m-1'>
                        Cantidad = {cantidad}
                    </p>
                    <Link to={"/cart"}>
                        <button className='btn btn-light' onClick={() => addItem(data, cantidad)}>Añadir a Carrito</button>
                    </Link>
                    
                </div>

                <button className='btn btn-success'>Finalizar Compra</button>
                    
            </div>
            
        
    );
}

export default ItemDetail;
