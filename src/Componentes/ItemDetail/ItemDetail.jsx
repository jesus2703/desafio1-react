import React from 'react';
import { CarritoContext } from '../../context/CartContext';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(1);
    const {addItem} = useContext(CarritoContext);

   


    const cantidadProducto = (operacion) => {

        if(operacion === "+"){
            if(cantidad < item.stock){
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
                    <img src={item.img} alt="imagen" className="card-img-top"/>
                    <h3>{item.name}</h3>
                    <p>Precio: {item.price}</p>
                    <p>{item.description}</p>
                    <p>Stock: {item.stock}</p>
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
                        <button className='btn btn-light' onClick={() => addItem(item, cantidad)}>Comprar</button>
                    </Link>
                    
                </div>
                    
            </div>
            
        
    );
}

export default ItemDetail;
