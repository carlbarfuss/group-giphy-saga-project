import React, { Component } from "react";
import { connect } from "react-redux";

class FavoriteView extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_FAV" });
  }

  //TODO sequel langauge for database
  //MAP on the DOM

  render() {
    return (
      <div>
        <p>Welcome to FavoriteView</p>
        {this.props.setFavReducer.map( (gif) => (<img src={gif.url} alt={gif.alt_text} />))}
      </div>
    );
  }
}
const mapReduxStateToProps = (reduxStore) => {
  return reduxStore;
};

export default connect(mapReduxStateToProps)(FavoriteView);
