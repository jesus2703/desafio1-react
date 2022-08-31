import React from 'react';
import Item from '../Item/Item';


const ItemList = ({list}) => {
    return (
        <>
            {list.map(producto => (
                <Item name={producto.name} img={producto.img} price={producto.price} stock={producto.stock} description={producto.description}/>
            ))}

        </>
    );
}

export default ItemList;
