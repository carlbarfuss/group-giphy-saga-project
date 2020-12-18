import React, { Component } from 'react';
import SearchView from '../SearchView/SearchView.js'
import FavoriteView from '../FavoriteView/FavoriteView'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <header className="App-header">
              <nav>
                <ul>
                  <li><Link to="/">GIPHY SEARCH</Link></li>
                  <li><Link to="/favorites">favorites</Link></li>
                </ul>
              </nav>
            </header>

            <div className="content-container">
              <Route exact path="/" component={SearchView} />
              <Route path="/favorites" component={FavoriteView} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
  
}

export default App;
