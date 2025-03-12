import React from 'react';
import './HomePage.css';
import casalModa from '../../../assets/images/casal-da-moda-posando-foto-inteira.png';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import tshirtTapeDetails from '../../assets/images/clothes/T-shirt with Tape Details.png';
import skinnyFitJeans from '../../assets/images/clothes/Skinny Fit Jeans.png';
import checkeredShirt from '../../assets/images/clothes/Checkered Shirt.png';
import sleeveStripedTshirt from '../../assets/images/clothes/Sleeve Striped T-shirt.png';
import verticalStripedShirt from '../../assets/images/clothes/Vertical Striped Shirt.png';
import courageGraphicTshirt from '../../assets/images/clothes/Courage Graphic T-shirt.png';
import looseFitBermudaShorts from '../../assets/images/clothes/Loose Fit Bermuda Shorts.png';
import fadedSkinnyJeans from '../../assets/images/clothes/Faded Skinny Jeans.png';

const HomePage: React.FC = () => {
  const viewAll = (category: string) => {
    console.log(`View all ${category} products`);
  };

  return (
    <div className="home-page">
      <Header />
      <main className="container container-geral">
        {/* Conteúdo da HomePage */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;