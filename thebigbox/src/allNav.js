import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import thebigbox from "./images/thebigbox.jpg";
import Nav from 'react-bootstrap/Nav';

export function NavHome(){
    return(
    <Navbar bg="light" variant="light" customNavbar={{height:'10px'}}>
    <Container>
      <Navbar.Brand href="#home">
      <img
          alt=""
          src={thebigbox}
          width="40"
          height="40"
          className="d-inline-block align-top"
          style={{ position: 'absolute', left: '250px',bottom: '10px'}}
        />
        
      </Navbar.Brand>
      <Navbar.Brand style={{ fontSize: '30px',position: 'absolute', left: '300px',bottom: '0px' }}>The Big Box</Navbar.Brand>
      <Nav className="ms-auto">
      <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/registrar">Registrarse</Nav.Link>
        <Nav.Link href="/admin/login">Administración</Nav.Link>         
      </Nav>
    </Container>
  </Navbar>
    )
}
export function NavNegro() {
    return (
      <>
        <Navbar bg="dark" variant="dark" style={{ backgroundColor: '#000000' }} >
          <Container>
            <Navbar.Brand href="/">
  {/*             <img
                alt=""
                src={thebigbox}
                width="30"
                height="30"
                className="d-inline-block align-top"
              /> */}
              Gestor de torneos
            </Navbar.Brand>
          </Container>
        </Navbar>    
      </>
  
    );
  }