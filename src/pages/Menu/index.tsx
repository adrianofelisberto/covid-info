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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#brazil">Dados no Brasil</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </header>
  );
}

export default Menu;