import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GifGalleryItem.css'


class GifGalleryItem extends Component {

    addFavorite = () => {
        console.log('in addFavorite', this.props.gif.title);
    }

   render() {
      return (
         <div className="gif-item">
             <img src={this.props.gif.images.fixed_height.url} alt={this.props.gif.title}/>
             <br></br>
             <button onClick={this.addFavorite}>Favorite</button>
         </div>
      );
   }

}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(GifGalleryItem);