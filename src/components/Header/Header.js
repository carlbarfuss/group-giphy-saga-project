import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './Header.css'



class Header extends Component {

   render() {
      return (
        <header className="App-header">
            <nav>
                <ul>
                    <li><img src="https://media2.giphy.com/media/PiQejEf31116URju4V/100.gif?cid=e7d39fab1k59b37czg8j8jyz3f5bb77bfdozd2zdokz1ck48&rid=100.gif"></img></li>
                    <br></br>
                
                  <li><Link to="/">Giphy Search</Link></li>
                  <li><Link to="/favorites">Favorites</Link></li>
                </ul>
            </nav>
        </header>

      );
   }

}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(Header);



