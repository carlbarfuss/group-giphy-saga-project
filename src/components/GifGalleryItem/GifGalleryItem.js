import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GifGalleryItem.css'


class GifGalleryItem extends Component {

   render() {
      return (
         <div className="gif-item">
             <img src={this.props.gif.images.original.url} alt={this.props.gif.title}/>
         </div>
      );
   }

}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(GifGalleryItem);