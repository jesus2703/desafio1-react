import './App.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Nabvar from './Componentes/Nabvar/Nabvar';


function App() {
    return(
        <div className="App">
            <h1>Desafio de react</h1>
            <Nabvar />
            <ItemListContainer saludo="Mi Ecommerce se llama CARNES AG" />
            
        </div>
    );
    
}

export default App;