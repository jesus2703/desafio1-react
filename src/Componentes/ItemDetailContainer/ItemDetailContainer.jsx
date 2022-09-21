import React, {useEffect, useState} from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const {id} = useParams()  
    const [data, setData] = useState({});
    

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "productoscarnesag", id);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))

    }, [id])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;
