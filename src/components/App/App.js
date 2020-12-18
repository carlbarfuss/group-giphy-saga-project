import React, { Component } from 'react';
import SearchView from '../SearchView/SearchView.js'
import FavoriteView from '../FavoriteView/FavoriteView'
import Header from '../Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Header />

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
