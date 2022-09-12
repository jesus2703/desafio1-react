import React, { useState } from "react";
import { useContext } from "react";


const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map(product=>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }))
        } else {
            setCart([...cart, {...item, quantity}])
        }
    }
   console.log(cart)

   const clear = () => setCart([]);

   const isInCart = (id) => cart.find(product => product.id === id) ? true:false;
   const removeItem = (id)=> setCart(cart.filter(product => product.id !== id));
   const totalProduct = () => cart.reduce((collector, product) => collector + product.quantity,0);

   return (
        <CartContext.Provider value={{clear, isInCart, removeItem, totalProduct, addItem}}>
            {children}
        </CartContext.Provider>
   )
}