import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Nabvar from './Componentes/Nabvar/Nabvar';


function App() {
    return(
        <BrowserRouter>
            <div className="App">  
            <Nabvar />
            <Routes>
                <Route path='/' element={<ItemListContainer/>}></Route>
                <Route path='/productos' element={<ItemListContainer/>}></Route>
                <Route path='/detalles/:id' element={<ItemDetailContainer/>}></Route>   
               
            </Routes>
            </div>
        </BrowserRouter>
        
    );
    
}

export default App;