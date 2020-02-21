import React from 'react';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Routes from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
     <Footer/>
    </div>
  );
}

export default App;
