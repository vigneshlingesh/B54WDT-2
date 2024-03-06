import React from 'react';
import './App.css';
import './App2.css'
import BookManagement from './BookManagement';
import AuthorForm from './AuthForm';

function App() {
  return (
    <div className="App">
      <h1>Library store</h1>
      <div className="dashboard">
        <BookManagement />
        <AuthorForm />
      </div>
    </div>
  );
}

export default App;
