import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import CreateBook from './components/CreateBook';
import EditBook from './components/EditBook';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <CreateBook />
      <EditBook />
      <BookList />
    </div>
  );
}

export default App;
