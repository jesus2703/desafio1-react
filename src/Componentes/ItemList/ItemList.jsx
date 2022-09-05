import React from 'react';
import Item from '../Item/Item';


const ItemList = ({list}) => {
    return (
        <div>
            {list.map(producto => (
                <Item key={producto.id} name={producto.name} img={producto.img} price={producto.price} />
            ))}

        </div>
    );
}

export default ItemList;
