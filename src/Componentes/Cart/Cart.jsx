import React, { useContext } from 'react';
import { CarritoContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { items, removeItem, clearCart, getTotal} = useContext(CarritoContext)
    

    return (
        <div className='container'>
            <div className='contain'>
                {
                    items.map((item) => (
                        <div key={item.id}>

                            <table className='table'>

                                <tbody>
                                    <tr>
                                        <th className='col-2'>{item.name}</th>
                                        <td>{item.cantidad}</td>
                                        <td>{item.price}</td>
                                        <td>{(item.price)*(item.cantidad)}</td>

                                        <button onClick={() => removeItem(item.id)}>Eliminar Producto</button>

                                    </tr>
                                </tbody>
                            </table>
                            


                        </div>
                        
                    ))
                    
                    
                }
                <p>Total de su compra = ${getTotal()}</p>

                
                <Link to={"/"}>
                    <button className='btn btn-primary'>Seguir Comprando</button>
                </Link>

                <button className='btn btn-primary' onClick={() => clearCart()}>Vaciar Carrito</button>
                <Link to={"/checkout"}>
                    <button className='btn btn-primary'>Finalizar Compra</button>
                </Link>
                
                

            </div>
            
        </div>
    );
}

export default Cart;