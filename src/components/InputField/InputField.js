import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InputField.css'


class InputField extends Component {

    state = {
        searchParameter: ''
     }
  
     handleChangeFor = (event, input) => {
        this.setState({
                [input]: event.target.value
        });
      }
  
      searchGifs = (event) =>{
        event.preventDefault();
        console.log('inside searchGifs');
        this.props.dispatch({
            type: 'FETCH_GIPHY',
            payload: this.state.searchParameter
        });
      }

   render() {
      return (
         <div className="input-field">
            <h3>Search For a Gif!</h3>
            <form onSubmit={this.searchGifs}>
                <input value={this.state.searchParameter} onChange={(event) => this.handleChangeFor(event, 'searchParameter')}></input>
                <button type="submit">Search for GIFS</button>
            </form>
         </div>
      );
   }

}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(InputField);
