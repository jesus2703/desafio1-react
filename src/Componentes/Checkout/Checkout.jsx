import React from 'react';
import { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CartContext';
import db from '../../Firebase/Firebase';
import { addDoc, collection } from 'firebase/firestore';



const Checkout = () => {
    const {items, getTotal, clearCart} = useContext(CarritoContext);
    const [orderId, setOrderId] = useState()

    const [buyer, setBuyer] = useState({
        Nombre:"",
        Email:"",
        Telefono:""
    })

    const {Nombre,Email,Telefono} = buyer

    const generateOrder = async(data) => {
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            console.log("OrdenNro:", order)
            setOrderId(order.id)
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const item = items.map(e=>{return{id:e.id,title:e.name,price:e.price,cantidad:e.cantidad}})
        const dia = new Date()
        const total = getTotal()
        const data = {buyer, item,dia,total}
        console.log("data", data)
        generateOrder(data)
        clearCart()

    }

    return (
        <>
            
            <h1 className='text-center'>Finalizando Compra</h1>
            <hr />
            {!orderId?
                <div><h4 className='text-center'>Completar Datos</h4>
            
                <form className='m-5 text-center' onSubmit={handleSubmit}>
                    <input 
                        className='w-25'
                        type="text" 
                        name="Nombre"
                        placeholder="Nombre"
                        value={Nombre}
                        onChange={handleInputChange}
                    />
                    <br /><br />
                    <input 
                        className='w-25'
                        type="text" 
                        name="Email"
                        placeholder="Email"
                        value={Email}
                        onChange={handleInputChange}
                    />
                    <br /><br />
                    <input
                        className='w-25' 
                        type="text" 
                        name="Telefono"
                        placeholder="Telefono"
                        value={Telefono}
                        onChange={handleInputChange}
                    />
                    <br />
                    <br />
                    <input 
                        type="submit"
                        value="Finalizar compra"
                        className="btn btn-success"
                        
                        />
                </form></div>
                : 
                <h4 className='text-center'>Su orden de compra es: {orderId}</h4>
            }
            
        </>
    );
}

export default Checkout;
