import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);}

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://en.wikipedia.org/wiki/Guitar">Features</Nav.Link>
            <Nav.Link href="https://www.amazon.in/Musical-Instruments/b?ie=UTF8&node=3677697031">Pricing</Nav.Link>
            <NavDropdown title="Other" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Buy now</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Specifications</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Products</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">About</NavDropdown.Item>
      </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default ColorSchemesExample;