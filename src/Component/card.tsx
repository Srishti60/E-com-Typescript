import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from '../context/store';

interface MyCardProps {
    productName:string;
    price: number;
    image : string;
}


const Product: React.FC<MyCardProps> = (props)=>{

  const cart = useCart();
  console.log("item",cart);
    return(
        <div>
        <Card >
          <Card.Img variant="top" src={props.image}  />
          <Card.Body>
            <Card.Title>{props.productName}</Card.Title>
            <Card.Text>
            Rs.{props.price}
            </Card.Text>
            <Button variant="primary" onClick={(e)=>cart?.setItem([...cart.value,{name:props.productName,price:props.price}])}>Add To cart</Button>
          </Card.Body>
        </Card>
        </div>
    );
}
export default Product;