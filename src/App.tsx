import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <>
      <Menu />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
