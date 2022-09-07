import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        // card w-25 m-2 bg-primary text-bg-info rounded-3
        
        <div className='card w-25 float-start gap-2 rounded-3 bg-primary text-bg-info me-2'>
            
            <img src={props.img} alt="" className="card-img-top"/>
            <div className='card-body'>
                <h3>{props.name}</h3>
                <p>Precio: {props.price}</p>
                <Link to={`/detalles/${props.id}`}>
                    <button className='btn btn-light'>Ver detalles</button>
                </Link>
                
            </div>
            
        </div>
        
    );
}

export default Item;





