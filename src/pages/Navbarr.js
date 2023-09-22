import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import { LinkContainer } from 'react-router-bootstrap';

const Navbarr = () => {
    return (
        <Navbar bg="secondary" data-bs-theme="dark" className="Navigation">
      <Container className="Na">
        <Navbar.Brand href="#home">TAMILNADU TOURISM</Navbar.Brand>
          <Nav className="Navi">
            <LinkContainer to="/"><Nav.Link id="Navc">Home</Nav.Link></LinkContainer>
            <LinkContainer to="/Places"><Nav.Link>Place To Visit</Nav.Link></LinkContainer>
            <LinkContainer to="/Time"><Nav.Link>Best Time to Visit</Nav.Link></LinkContainer>
            <LinkContainer to="/Packages"><Nav.Link>Packages</Nav.Link></LinkContainer>
            <LinkContainer to="/Food"><Nav.Link>Food</Nav.Link></LinkContainer>
          </Nav>
        </Container>
    </Navbar>
    )
}

export default Navbarr;
