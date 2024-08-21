import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useCart } from '../context/store';

const Header:React.FC = () => {
   
    const item = useCart();
    const total = item?.value.reduce((a,b)=>a+b.price,0);
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Ecommerce App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link >Cart: {item?.value.length}</Nav.Link>
              <Nav.Link href="#link">Rs.{total}</Nav.Link>
            </Nav>
            <input type='text' placeholder='search....' value={item?.inputValue} onChange={(e)=>item?.setSearchValue(e.target.value)} />
           </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Header;