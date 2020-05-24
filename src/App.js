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
                Add Book
              </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <Link to={'/BookList'} className='nav-link'>
                  Book List
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <AddBook />
      <EditBook />
      <BookList />
    </div>
    </Router>
  );
}

export default App;
