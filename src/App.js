import './App.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Nabvar from './Componentes/Nabvar/Nabvar';


function App() {
    return(
        <div className="App">
            
            <Nabvar />
            <ItemListContainer/>
            
        </div>
    );
    
}

export default App;