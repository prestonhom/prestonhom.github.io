import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import { Route, Switch, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';


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

                  <h1>Home Page</h1>
                </div>
              )
            }} />
            <Route exact path='/about' render={() => {
              return (
                <div style={{

                }}>
                  <Navigation />
                  <About

                  />
                </div>
              )
            }} />
            <Route exact path='/projects' render={() => {
              return (
                <div>
                  <Navigation />
                  <Projects
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
