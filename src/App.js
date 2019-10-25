import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import { Route, Switch, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Contact from './components/Contact'


class App extends Component {
  state = {
    page: []
  }

  render() {
    return (
      <div>
        <Navigation />
        <div>
          <Switch>
            <Route exact path='/' render={() => {
              return (
                <div>
                <Home/>
                </div>
              )
            }} />
            <Route path='/about' render={() => {
              return (
                <div>
                  <Navigation />
                  <About
                  />
                </div>
              )
            }} />
            <Route path='/projects' render={() => {
              return (
                <div>
                  <Navigation />
                  <Projects
                  />
                </div>
              )
            }} />
            <Route path='/Contact' render={() => {
              return (
                <div>
                  
                  <Contact
                  />
                </div>
              )
            }} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
