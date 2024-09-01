import { useState } from 'react';

const ProductImageGallery = () => {
  const [currentImage, setCurrentImage] = useState('image1.jpg');
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

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
