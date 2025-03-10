import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  image: string;
  title: string;
  rating: string;
  price: string;
  oldPrice?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, rating, price, oldPrice }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className="stars">{rating}</div>
      <p className="price">
        {price} {oldPrice && <span className="old-price">{oldPrice}</span>}
      </p>
    </div>
  );
};

export default ProductCard;