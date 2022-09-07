import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
// import Counter from './Counter';
import infoProductos from '../../data';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
    const [productos , setProductos] = useState([]);

    const {categoria} = useParams()

    useEffect(() => {

        const getProductos = new Promise((resolve, reject) => {
            if (categoria) {
                setTimeout(() =>{
                resolve(infoProductos.filter(item => item.category === categoria))}, 2000)
            } else {
                setTimeout(() =>{
                    resolve(infoProductos)}, 2000)
            }          

        })
        
        getProductos.then((response) => setProductos(response))

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
