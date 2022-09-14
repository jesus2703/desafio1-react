import { useState } from "react";
import { createContext } from "react";



const CarritoContext = createContext([])

const CarritoProvider = (props) => {

    const [items, setItems] = useState([]);

    const isInCar = (id) => {
        const found = items.find(item => item.id === id)
        return found
    }

    const addItem = (item, cantidad) => {
        isInCar(item.id)
            ?
            setItems(items.map((prod) => {
                if(prod.id === item.id) {
                    prod.cantidad += cantidad
                }
                return prod
                
            }))
            :
            setItems([...items, {id: item.id, name: item.name, price: item.price, cantidad: cantidad}])
    
    }
    

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }


    return (

        <>
            <CarritoContext.Provider value={{items, addItem, removeItem}}>
                {props.children}
            </CarritoContext.Provider>
        </>

    )

}


export { CarritoContext, CarritoProvider};