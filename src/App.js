import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import BookList from './components/BookList';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={'/AddBook'} className='nav-link'>
                Bookify
              </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <Link to={'/AddBook'} className='nav-link'>
                  Add Book
                </Link>
              </Nav>
              <Nav>
                <Link to={'/BookList'} className='nav-Link'>
                  Book List
                </Link>
              </Nav>
              </Nav>
          </Container>
        </Navbar>
      </header>
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={AddBook} />
                <Route path='/EditBook/:id' component={EditBook} />
                <Route path='/BookList' component={BookList} />
                  </Switch>
    </div>
    </Col>
    </Row>
    </Container>
    </div>
    </Router>
  );
}

export default App;
