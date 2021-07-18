import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Navigation from './components/Navigation';
import { Main } from './components/Main';
import { Footer } from './components/Footer'

function App() {
  return (
    <Router>
      <Navigation/>
      <Main/>
      <Footer/>
    </Router>
  );
}

export default App;
