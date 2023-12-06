// GalleryModal.js

import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "./GalleryModal.css"; // Create a separate CSS file for modal styles

const GalleryModal = ({ images, onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <div className="gallery">
            <ImageGallery items={images} showPlayButton={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
