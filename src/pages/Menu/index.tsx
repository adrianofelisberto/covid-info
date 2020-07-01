import React from 'react';

import './styles.css';

import Logo from '../../assets/Logo.png';
import { Row, Media, Navbar, Nav, Container } from 'react-bootstrap';

function Menu() {
  return (
    <header className="menu">
      <Container> 
        <Row className="row">
          <Media>
            <img 
              height={60}
              src={Logo} alt="Coronvírus"
            />
          </Media>
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
<<<<<<< HEAD
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#brazil">Dados no Brasil</Nav.Link>
=======
                <Nav.Link className="nav-link-custom" href="#whats">Home</Nav.Link>
                <Nav.Link className="nav-link-custom" href="#brazil">Dados no Brasil</Nav.Link>
>>>>>>> e84dffa03558af42d7d763e0621a8170ca70b6d4
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </header>
  );
}

export default Menu;