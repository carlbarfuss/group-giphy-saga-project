import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifGalleryItem from '../GifGalleryItem/GifGalleryItem'
import './GifGallery.css'


class GifGallery extends Component {

   render() {
      return (
         <div className="gif-gallery">
             {this.props.reduxState.fetchReducer.map(
                 (gif) => {
                     return(
                         <GifGalleryItem key={gif.id} gif={gif} />
                     )
                 }
             )}
         </div>
      );
   }

}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(GifGallery);