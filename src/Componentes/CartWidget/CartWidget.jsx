import './CartWidget.css';
import React, { useContext } from 'react';
import { CarritoContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const {items} = useContext(CarritoContext)
    let itemsInCart = 0

    items.map((item) => {
       return itemsInCart = itemsInCart + item.cantidad;
    })

    return (
        <div>
            <div>
                {itemsInCart}
            </div>
            <Link to={"/cart"}>
                <img className='icon' src='carrito.png' alt=''/>
            </Link>
            
        </div>
        
    );
}

export default CartWidget;
