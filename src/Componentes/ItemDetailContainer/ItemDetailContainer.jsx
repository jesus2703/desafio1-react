import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
// import Counter from './Counter';
import infoProductos from '../../data';



const ItemLDetailContainer = () => {
    const [productos , setProductos] = useState([]);

    useEffect(() => {

        const getProductos = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(infoProductos);

            }, 2000)

        })
        getProductos.then((response) => setProductos(response))

    }, []);

    
    return <ItemDetail item={productos}/>
}

export default ItemLDetailContainer;

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
