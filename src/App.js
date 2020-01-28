import React from 'react';
import './App.css';
import Header from './components/Header';
import Header2 from './components/Header2';
import Header3 from './components/Header3';
import Menu from './components/Menu';
// import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Header2 />
      <Header3 />
      <Menu />
      {/* <Cart /> */}
    </div>
  );
}

export default App;
