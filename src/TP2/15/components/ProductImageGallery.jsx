import { useState } from 'react';

const ProductImageGallery = () => {
  const [currentImage, setCurrentImage] = useState('https://via.placeholder.com/200');
  const images = ['https://via.placeholder.com/200', 'https://via.placeholder.com/150', 'https://via.placeholder.com/100'];

  return (
    <div className="image-gallery">
      <img src={currentImage} alt="Product" className="main-image" />
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${currentImage === image ? 'selected' : ''}`}
            onClick={() => setCurrentImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
