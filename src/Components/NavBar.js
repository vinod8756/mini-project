import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">AnalyticaHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Analytics" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => props.state("sales")}>Sales Data</NavDropdown.Item>
              <NavDropdown.Item onClick={() => props.state("employee")}>
                Employee Data
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => props.state("Manufacturing")}>Manufacturing</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;