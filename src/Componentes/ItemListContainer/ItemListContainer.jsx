import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
// import Counter from './Counter';
import infoProductos from '../../data';



const ItemListContainer = () => {
    const [productos , setProductos] = useState([]);

    useEffect(() => {

        const getProductos = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(infoProductos);

            }, 2000)

        })
        getProductos.then((response) => setProductos(response))

    }, [productos]);

    
    return <ItemList list={productos}/>
}

export default ItemListContainer;

// const ItemListContainer = () => {

//     function onAdd(count){

//         console.log(`Se han seleccionado ${count} productos`)
//     }


//     return (

//         <div>
//             <Counter stock={10} onAdd={onAdd}/>
//         </div>
        
//     );
// }

// export default ItemListContainer;
