import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './media.scss';
import { IMAGES } from '../../dostext.jsx';

class Media extends Component {
  render() {
    return (
      <div className="media-wrapper">
        <h1 className="media-text">
          Media
        </h1>
        <div className="image-gallery">
          <ImageGallery items={IMAGES} />
        </div>
      </div>
    );
  }
}

export default Media;
