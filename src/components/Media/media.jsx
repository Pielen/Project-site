import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import css from './media.scss';

class Media extends Component {
  render() {
    return (
      <div className="media-wrapper">
        <h1 className="media-text">
          Media
        </h1>
        <div className="image-gallery">
          <ImageGallery items={this.props.images} />
        </div>
      </div>
    );
  }
}

export default Media;
