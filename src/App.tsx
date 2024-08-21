import './App.css';
import Product from './Component/card';
import Header from './Component/header';
import products from './products.json';

import { useCart } from './context/store';
function App() {

  const searchValue = useCart();
  console.log("searchValue",searchValue);

  const filterProducts = products.filter((product)=> product.productName.toLowerCase().includes((searchValue?.inputValue || '').toLowerCase()))

  return (
    <div className="App">
     
    <Header/>
    
    <div className='products'>
    {filterProducts.map((card)=>(
        <Product key={card.id} {...card} />
    ))}
    
  </div>

    </div>
  );
}

export default App;
