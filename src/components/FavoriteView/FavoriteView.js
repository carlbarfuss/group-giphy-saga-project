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
        Welcome to FavoriteView
        {JSON.stringify(this.props)}
      </div>
    );
  }
}
const mapReduxStateToProps = (reduxStore) => {
  return reduxStore;
};

export default connect(mapReduxStateToProps)(FavoriteView);
