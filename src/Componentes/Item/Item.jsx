import React from 'react';
import { Link } from 'react-router-dom';


const Item = (props) => {


    return (
       
        
        <div className='col-sm-6 col-md-6 col-lg-4 float-start'>

            <div className='card h-100 my-1 rounded-2'>

                <img src={props.img} alt="" className="card-img-top"/>
                <div className='card-body rounded bg-primary text-bg-info'>
                    <h3>{props.name}</h3>
                    <p>Precio: {props.price}</p>
                    <Link to={`/detalles/${props.id}`}>
                        <button className='btn btn-light'>Ver detalles</button>
                    </Link>
                
                </div>

            </div>
            
            
            
        </div>
        
    );
}

export default Item;





