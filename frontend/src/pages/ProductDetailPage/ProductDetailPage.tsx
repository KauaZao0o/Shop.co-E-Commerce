import React from 'react';
import './ProductDetailPage.css'; // Importe o CSS específico da página

const ProductDetailPage: React.FC = () => {
  return (
    <div className="product-detail-page">
      {/* Seção de Imagem do Produto */}
      <div className="product-image">
        <img src="https://via.placeholder.com/400x500" alt="Product" />
      </div>

      {/* Seção de Detalhes do Produto */}
      <div className="product-details">
        <h1 className="product-title">T-shirt with Tape Details</h1>
        <div className="product-price">
          <span className="current-price">$120</span>
          <span className="old-price">$150</span>
        </div>
        <div className="product-rating">
          <span className="stars">★★★★☆</span>
          <span className="reviews">(120 reviews)</span>
        </div>
        <p className="product-description">
          This stylish T-shirt features unique tape details, offering a modern and trendy look. Made from high-quality cotton, it ensures comfort and durability.
        </p>

        {/* Seção de Tamanhos */}
        <div className="size-section">
          <h3>Select Size</h3>
          <div className="size-options">
            <button className="size-option">S</button>
            <button className="size-option">M</button>
            <button className="size-option">L</button>
            <button className="size-option">XL</button>
          </div>
        </div>

        {/* Botão de Adicionar ao Carrinho */}
        <button className="add-to-cart-btn">Add to Cart</button>

        {/* Informações Adicionais */}
        <div className="additional-info">
          <h3>Product Details</h3>
          <ul>
            <li><strong>Material:</strong> 100% Cotton</li>
            <li><strong>Fit:</strong> Regular Fit</li>
            <li><strong>Care Instructions:</strong> Machine Wash</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;