import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiChevronDown, BiSearch } from "react-icons/bi";

function NavBar() {
  return (
    <Navbar className="Navbar" expand="lg">
      <Container>
        <p className='brand my-auto'>LOGO</p>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-auto">
            <Nav.Link className='navlink'>Qualifications <BiChevronDown /> </Nav.Link>
            <Nav.Link className="navlink">Oraganizations <BiChevronDown /></Nav.Link>
            <Nav.Link className="navlink">Research & Analysis <BiChevronDown /></Nav.Link>
            <Nav.Link className="navlink">Lorem Ipsum <BiChevronDown /></Nav.Link>
            <Nav.Link className="navlink">Lorem Ipsum <BiChevronDown /></Nav.Link>
            <Nav.Link className="navlink"><BiSearch /></Nav.Link>
            
            <button className='navbut mx-auto'>Enrollment</button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;