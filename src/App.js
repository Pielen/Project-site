import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import StartPage from './views/StartPage/startpage.jsx';
import DOSpage from './views/DOSpage/dospage.jsx';
import LineRiderPage from './views/LineRiderPage/lineriderpage.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Route exact path="/" component={StartPage}/>
            <Route path="/dos" component={DOSpage}/>
            <Route path="/linerider" component={LineRiderPage}/>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
