import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import CreateBook from './components/CreateBook';
import EditBook from './components/EditBook'

function App() {
  return (
    <div className="App">
      < CreateBook />
      < EditBook />
    </div>
  );
}

export default App;
