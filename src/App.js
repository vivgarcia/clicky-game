import React from 'react';
import './App.css';
import Header from './components/Header';
import Stripe from './components/Stripe';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <Stripe />
      <Container />
    </div>
  );
}

export default App;
