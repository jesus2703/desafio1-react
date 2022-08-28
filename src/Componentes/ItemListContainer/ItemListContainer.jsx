import React from 'react';
import Counter from './Counter';

const ItemListContainer = () => {

    function onAdd(count){

        console.log(`Se han seleccionado ${count} productos`)
    }


    return (

        <div>
            <Counter stock={10} onAdd={onAdd}/>
        </div>
        
    );
}

export default ItemListContainer;
