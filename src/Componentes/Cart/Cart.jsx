// import React, { useContext } from 'react';
// import { CarritoContext } from '../../context/CartContext';

// const Cart = () => {

//     const { items, removeItem} = useContext(CarritoContext)
    

//     return (
//         <div className='container'>
//             <div className='contain'>
//                 {
//                     items.map((item) => (
//                         <div key={item.id}>
//                             <br />
//                             <h3>{item.cantidad} . {item.name}</h3>
//                             <h5 style={{color: "red"}} onClick={() => removeItem(item.id)}>Borrar productos</h5>

//                         </div>
//                     ))
                    
//                 }

//             </div>
            
//         </div>
//     );
// }

// export default Cart;
