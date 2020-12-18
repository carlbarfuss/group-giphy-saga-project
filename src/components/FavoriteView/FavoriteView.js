import React, { Component } from "react";
import { connect } from "react-redux";

class FavoriteView extends Component {

   state = {
      category: ''
   }
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_FAV" });
  }

  //TODO sequel langauge for database
  //MAP on the DOM
  handleChange = (event) => {
     console.log('in handlechange', event.target.value);
     this.setState({
     category: event.target.value
     })
   
  }

   dispatchCategory = (event, id) => {
      this.props.dispatch({ type: 'SET_CATEGORY', payload: [this.state.category, id] })
      this.setState({
         category: ''
      })
   }

  render() {
    return (
      <div>
        <p>Welcome to FavoriteView</p>
          {this.props.setFavReducer.map((gif) => (
         <div key={gif.id}>
          <img  src={gif.url} alt={gif.alt_text} /> <br/>
         
         <label>Assign Category:</label> 
            <select onChange={ (event) => this.handleChange(event)} id="category" name="category">
               <option value='1'>Unassigned</option>
               <option value="2">Funny</option>
               <option value="3">Cohort</option>
               <option value="4">Cartoon</option>
               <option value="5">NSFW</option>
               <option value="6">Meme</option>
            </select>
            <button onClick={(event) => this.dispatchCategory(event, gif.id)}>Save</button>
            <br/>
            <label>Category: {gif.name}</label>

            </div>))}
      </div>
    );
  }
}
const mapReduxStateToProps = (reduxStore) => {
  return reduxStore;
};

export default connect(mapReduxStateToProps)(FavoriteView);
