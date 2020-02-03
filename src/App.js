import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <section className='container'>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </section>
    </Router>
  );
}

export default App;
