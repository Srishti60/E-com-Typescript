import './App.css';
import Product from './Component/card';
import Header from './Component/header';
import products from './products.json';
import { ContextProvider } from './context/store';
function App() {
  return (
    <div className="App">
      <ContextProvider>
    <Header/>
    <div className='products'>
    {products.map((card)=>(
        <Product key={card.id} {...card} />
    ))}
    
  </div>
  </ContextProvider>
    </div>
  );
}

export default App;
