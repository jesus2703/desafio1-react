import React from 'react';

const Item = (props) => {
    return (
        
        <div className='card w-25 m-2 bg-primary text-bg-info rounded-3'>
            
            <img src={props.img} alt="" className="card-img-top"/>
            <div className='card-body'>
                <h3>{props.name}</h3>
                <p>Precio: {props.price}</p>
                <button className='btn btn-light'>Ver detalles</button>
            </div>
            
        </div>
        
    );
}

export default Item;





