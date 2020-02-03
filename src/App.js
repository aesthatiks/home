import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <section className='container'>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/about' component={About} />
          <Route exact path='/mywork' component={MyWork} />
        </Switch>
      </section>
    </Router>
  );
}

export default App;
