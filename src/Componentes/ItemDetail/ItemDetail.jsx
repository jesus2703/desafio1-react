import React from 'react';

const ItemDetail = ({item}) => {
    return (
        <div>
            <div className="card m-2 bg-primary text-bg-info rounded-3 w-50">
            <div className='card-body'>
                <img src={item.img} alt="imagen" className="w-100 card-img-top"/>
                <h3>{item.name}</h3>
                <p>Precio: {item.price}</p>
                <p>{item.description}</p>
                <p>Stock: {item.stock}</p>
            </div>
            <button className='btn btn-light'>Añadir a Carrito</button>
        </div>
            
        </div>
    );
}

export default ItemDetail;
