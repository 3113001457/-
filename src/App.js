import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Page1 from './page1';
import Page2 from './page2';
import More from './more'

class App extends Component {
  render() {
    return (
      <Router><div className="App">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">page1</Link></li>
            <li><Link to="/page2">page2</Link></li>
            <li><Link to="/more/two">more</Link></li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/page1" component={Page1}/>
        <Route path="/page2" component={Page2}/>
        <Route path="/more" component={More}/>
      </div></Router>
    );
  }
}

export default App;
