import React, {useEffect, useState} from 'react';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
    const [productos , setProductos] = useState([]);

    const {categoria} = useParams()

    useEffect(() => {

        const querydb = getFirestore();
        const queryCollection = collection(querydb, "productoscarnesag")
        if (categoria){
            const queryFilter = query(queryCollection, where("category", "==", categoria))
            getDocs(queryFilter)
            .then(res => setProductos(res.docs.map(product => ({id: product.id, ...product.data()}))))

        } else {

            getDocs(queryCollection)
            .then(res => setProductos(res.docs.map(product => ({id: product.id, ...product.data()}))))


        }
        
    }, [categoria]);

    
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
