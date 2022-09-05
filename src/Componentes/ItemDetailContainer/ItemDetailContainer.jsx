import React, {useEffect, useState} from 'react';
import infoProductos from '../../data';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    useEffect(() => {

        const getProduct = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(infoProductos.find(products => products.id === 1));

            }, 2000)

        })
        getProduct.then((response) => setItem(response))

    }, []);


    
    return (
        <ItemDetail item={item}/>
    );
}

export default ItemDetailContainer;
