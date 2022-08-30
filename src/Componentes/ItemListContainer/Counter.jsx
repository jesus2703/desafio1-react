// import './Counter.css';
// import {useState} from 'react';


// const Counter = ({stock, onAdd}) => {
//     const [count, setCount] = useState(0)

//     function add(){
//         if (count < stock ){
//             setCount(count + 1)
//         }
        
//     }

//     function substract(){
//         if(count > 0){
//             setCount(count - 1)
//         }
        
//     }

//     function reset(){
//         setCount(0)
//     }


//     return (
//        <div>

//             <div className="counter">
//                 <h1>Counter</h1>
//                 <p>Stock: {stock} </p>
//                 <p>Cantidad: {count}</p>

//                 <div>
//                     <button className="btn btn-danger" onClick={substract}> - </button>
//                     <button className="btn btn-warning" onClick={reset}> Reset </button>
//                     <button className="btn btn-success" onClick={add}> + </button>
//                 </div>
//                 <div>
//                     <button className="btn btn-primary m-2" onClick={() => onAdd(count)}>Confirmar</button>
//                 </div>
//             </div>

           

//         </div>
//     );
// }

// export default Counter;
