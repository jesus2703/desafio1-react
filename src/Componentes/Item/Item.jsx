import React from 'react';

const Item = (props) => {
    return (
        <div className="card-body bg-primary w-25 text-bg-info rounded-3">
            <img src={props.img} alt="" className="w-100 card-img-top"/>
            <h3>{props.name}</h3>
            <p>Precio: {props.price}</p>
            <p>Stock: {props.stock}</p>

        </div>
    );
}

export default Item;



// const Item = ({producto}) => {
//     return <li>{producto.name}</li>
       
// }

// export default Item;

