import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../components/Assets/logo.png";
import { NavLink } from 'react-router-dom';
import './Navbarr.css';


function Navbarr() {
  return (
    <Navbar expand="lg" className="navbar-bg">
      <Container fluid>
        <Navbar.Brand ><img src={logo} alt="" style={{width:"50px"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >  <Nav.Link >
               <NavLink link to="/">Home</NavLink>
             </Nav.Link>
             <Nav.Link  >
               <NavLink link to="/Login">Login</NavLink>
             </Nav.Link>
          
            <NavDropdown title="Tours" id="navbarScrollingDropdown">
             
              <NavDropdown.Item >
              <NavLink link to="/">Home</NavLink>
              </NavDropdown.Item>
             
             
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <NavLink link to="/Domestic">Domestic Tours</NavLink>
              </NavDropdown.Item>

              <NavDropdown.Item >
              <NavLink link to="/International">International Tours</NavLink>
              </NavDropdown.Item>

              <NavDropdown.Item >
              <NavLink link to="/Eventbased">Eventbased Tours</NavLink>
              </NavDropdown.Item>

            </NavDropdown>
            <Nav.Link  >
            <NavLink link to="Packages">Packages</NavLink>
            </Nav.Link>


            <Nav.Link >
               <NavLink link to="/ContactUs">Contact Us</NavLink>
             </Nav.Link>

             <Nav.Link  >
               <NavLink link to="/AboutUs">About Us</NavLink>
             </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{backgroundColor:'red',color:'black'}} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
