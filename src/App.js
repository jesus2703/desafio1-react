import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Nabvar from './Componentes/Nabvar/Nabvar';
import Cart from './Componentes/Cart/Cart';
import { CartProvider } from './context/CartContext';


function App() {
    return(
        <CartProvider>

            <BrowserRouter>
                 <div className="App">  
                 <Nabvar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer/>}></Route>
                        <Route path='/categoria/:categoria' element={<ItemListContainer/>}></Route>
                        <Route path='/detalles/:id' element={<ItemDetailContainer/>}></Route>
                        <Route path='/cart' element={<Cart/>}></Route>
                        
                    </Routes>
                    </div>
            </BrowserRouter>

        </CartProvider>
        
        
    );
    
}

export default App;