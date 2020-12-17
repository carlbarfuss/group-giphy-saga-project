import React, { Component } from 'react';
import InputField from '../InputField/InputField'
import GifGallery from '../GifGallery/GifGallery'

class SearchView extends Component {

   render() {
      return (
         <div>
            <InputField />
            <GifGallery />
         </div>
      );
   }

}

export default SearchView;
