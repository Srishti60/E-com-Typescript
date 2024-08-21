import './App.css';
import Product from './Component/card';
import Header from './Component/header';
import ProductApi from './api/api';
import { useState,useEffect } from 'react';
import { useCart } from './context/store';

interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
}
function App() {

  const searchValue = useCart();
  console.log("searchValue",searchValue);

  const[products,setProducts] = useState<ProductType[]>([]);

  useEffect(()=>{
     const fetchData = async()=>{
    const data = await ProductApi();
    setProducts(data|| []);
     }
     fetchData();
  },[])

  const filterProducts = products.filter((product)=> product.name.toLowerCase().includes((searchValue?.inputValue || '').toLowerCase()))

  return (
    <div className="App">
     
    <Header/>
    
    <div className='products'>
    {filterProducts.map((card)=>(
        <Product key={card.id} name = {card.name}  image = {card.image} price = {card.price} />
    ))
   }
    
  </div>

    </div>
  );
}

export default App;
