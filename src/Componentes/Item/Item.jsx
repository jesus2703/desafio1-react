import React from 'react';

const Item = (props) => {
    return (
        <div className="card m-2 bg-primary text-bg-info rounded-3 w-25">
            <div className='card-body'>
                <img src={props.img} alt="" className="w-100 card-img-top"/>
                <h3>{props.name}</h3>
                <p>Precio: {props.price}</p>
                <p>{props.description}</p>
                <p>Stock: {props.stock}</p>
            </div>
        </div>
    );
}

export default Item;





