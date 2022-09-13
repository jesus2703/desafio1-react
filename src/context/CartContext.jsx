import { useState } from "react";
import { createContext } from "react";



const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProductoCarrito = (item) => {

        if(carrito.some(elemento => elemento.id === item.id)){

            let index = carrito.findIndex(elemento => elemento.id === item.id);
            let producto = carrito[index];
            console.log(producto)
            // producto.cantidad = producto.cantidad + cantidad;
        } else {
            let producto = {...item}
            setCarrito({...carrito, producto})
        }
        
    }

    const quitarProductoCarrito = (item) => {
        const auxCarrito = carrito
        let indice = auxCarrito.findIndex(prod => prod.id === item.id)
        auxCarrito.splice(indice, 1)
        setCarrito(auxCarrito)
    }

    return (

        <>
            <CarritoContext.Provider value={{carrito, agregarProductoCarrito, quitarProductoCarrito}}>
                {props.children}
            </CarritoContext.Provider>
        </>

    )

}

export { CarritoContext, CarritoProvider};