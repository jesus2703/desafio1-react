import './App.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Nabvar from './Componentes/Nabvar/Nabvar';


function App() {
    return(
        <div className="App">
            
            <Nabvar />
            <ItemListContainer/>
            <ItemDetailContainer/>

            
        </div>
    );
    
}

export default App;