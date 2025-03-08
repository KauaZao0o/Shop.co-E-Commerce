import React from 'react';
import './App.css';
import casalModa from './assets/images/casal-da-moda-posando-foto-inteira.png'; // Importe a imagem

function App() {
  // Função para o botão "View All"
  const viewAll = (category: string) => {
    console.log(`View all ${category} products`);
    // Adicione a lógica para navegar ou filtrar produtos aqui
  };

  return (
    <div className="App">
      {/* Pop-up */}
      <div id="popup">
        <p>Sign up and get 20% off your first order. <a href="#">Sign Up Now</a></p>
        <span id="closePopup">&times;</span>
      </div>

      {/* Header */}
      <header className="header">
        <nav className="nav-header">
          <div className="nav-primary-container">
            {/* Menu Hambúrguer */}
            <div className="hamburger" id="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Logo */}
            <h1>shop.co</h1>
            <ul className="nav-list close">
              <li>Shop <img src="assets/img/navbar/Down-arrow.png" alt="Down Arrow" /></li>
              <li>On Sale</li>
              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>
          </div>

          {/* Barra de Pesquisa e Ícones */}
          <div className="nav-secondary-container">
            <div className="input-group close">
              <div className="input-icon">
                <img src="assets/img/navbar/Search.png" alt="Search" />
              </div>
              <input id="search" type="text" className="input-field" placeholder="Search for products..." />
            </div>
            <div className="nav-img">
              <img src="assets/img/navbar/Search.png" alt="Search" className="search-nav" />
              <img src="assets/img/navbar/Car.png" alt="Car" className="car-nav" />
              <img src="assets/img/navbar/Profile.png" alt="Profile" className="perfil-nav" />
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container container-geral">
        <div className="container-section">
          <h2 className="section-title">find clothes that matches your style</h2>
          <p className="p-title">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <div className="container-btn">
            <button className="btn-shop">Shop Now</button>
          </div>
          <div className="container-statistics">
            <article className="stat-primary stat-item">
              <h2>200+</h2>
              <p>International Brands</p>
            </article>
            <hr />
            <article className="stat-secondary stat-item">
              <h2>2,000+</h2>
              <p>High-Quality Products</p>
            </article>
            <hr className="line" />
            <article className="stat-third stat-item">
              <h2>30,000+</h2>
              <p>Happy Customers</p>
            </article>
          </div>
          <div className="container-image">
            <img src={casalModa} alt="Models" className="models" /> {/* Use a imagem importada */}
          </div>
        </div>
      </main>

      {/* Divisor e Seção de Logos */}
      <section className="section-brands">
        <article className="list-brands">
          <ul className="logo-mobile">
            <li><img src="assets/img/logos/Versace-logo.png" alt="Versace" /></li>
            <li><img src="assets/img/logos/Zara-logo.png" alt="Zara" /></li>
            <li><img src="assets/img/logos/Gucci-logo.png" alt="Gucci" /></li>
            <li><img src="assets/img/logos/Prada-logo.png" alt="Prada" className="prada" /></li>
            <li><img src="assets/img/logos/Calvin Klein-logo.png" alt="Calvin Klein" className="calvin-klein" /></li>
          </ul>
        </article>
      </section>

      {/* Seção NEW ARRIVALS */}
      <section className="product-section">
        <h2>NEW ARRIVALS</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="assets/img/clothes/T-shirt with Tape Details.png" alt="T-shirt with Tape Details" />
            <h3>T-shirt with Tape Details</h3>
            <div className="stars">★★★★☆</div>
            <p className="price">$120</p>
          </div>
          <div className="product-card">
            <img src="assets/img/clothes/Skinny Fit Jeans.png" alt="Skinny Fit Jeans" />
            <h3>Skinny Fit Jeans</h3>
            <div className="stars">★★★★★</div>
            <p className="price">$240 <span className="old-price"> $260</span></p>
          </div>
          <div className="product-card">
            <img src="assets/img/clothes/Checkered Shirt.png" alt="Checkered Shirt" />
            <h3>Checkered Shirt</h3>
            <div className="stars">★★★☆☆</div>
            <p className="price">$180</p>
          </div>
          <div className="product-card">
            <img src="assets/img/clothes/Sleeve Striped T-shirt.png" alt="View All" />
            <h3>Sleeve Striped T-shirt</h3>
            <div className="stars">★★★★☆</div>
            <p className="price">$130 <span className="old-price"> $160</span></p>
          </div>
        </div>
        <button className="view-all" onClick={() => viewAll('new')}>View All</button>
      </section>

      <hr className="section-divider" />

      {/* Seção TOP SELLING */}
      <section className="product-section">
        <h2>TOP SELLING</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="assets/img/clothes/Vertical Striped Shirt.png" alt="Vertical Striped Shirt" />
            <h3>Vertical Striped Shirt</h3>
            <div className="stars">★★★★☆</div>
            <p className="price">$212 <span className="old-price"> $232</span></p>
          </div>
          <div className="product-card">
            <img src="assets/img/clothes/Courage Graphic T-shirt.png" alt="Courage Graphic T-shirt" />
            <h3>Courage Graphic T-shirt</h3>
            <div className="stars">★★★★★</div>
            <p className="price">$120</p>
          </div>
          <div className="product-card">
            <img src="assets/img/clothes/Loose Fit Bermuda Shorts.png" alt="Loose Fit Bermuda Shorts" />
            <h3>Loose Fit Bermuda Shorts</h3>
            <div className="stars">★★★☆☆</div>
            <p className="price">$80</p>
          </div>
          <div className="product-card">
            <img src="assets/img/clothes/Faded Skinny Jeans.png" alt="Faded Skinny Jeans" />
            <h3>Faded Skinny Jeans</h3>
            <div className="stars">★★★★☆</div>
            <p className="price">$150</p>
          </div>
        </div>
        <button className="view-all" onClick={() => viewAll('top')}>View All</button>
      </section>

      {/* Seção Browse by Dress Style */}
      <section className="dress-style-section">
        <div className="dress-style-container">
          <h2>Browse by Dress Style</h2>
          <div className="dress-style-grid">
            <div className="dress-style-card casual">
              <img src="assets/img/dress-styles/Casual.png" alt="Casual" />
            </div>
            <div className="dress-style-card formal">
              <img src="assets/img/dress-styles/Formal.png" alt="Formal" />
            </div>
            <div className="dress-style-card party">
              <img src="assets/img/dress-styles/Party.png" alt="Party" />
            </div>
            <div className="dress-style-card gym">
              <img src="assets/img/dress-styles/Gym.png" alt="Gym" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção Our Happy Customers */}
      <section className="happy-customers-section">
        <div className="section-header">
          <h2>
            <span>OUR HAPPY</span>
            <span>CUSTOMERS</span>
          </h2>
          <div className="navigation-arrows">
            <span className="arrow-left">&#10094;</span>
            <span className="arrow-right">&#10095;</span>
          </div>
        </div>

        <div className="comments-container">
          <div className="comment sarah-comment">
            <div className="stars">★★★★★</div>
            <div className="comment-info">
              <span className="name">Sarah M.</span>
              <span className="verified"></span>
            </div>
            <p className="comment-text">“I’m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.”</p>
          </div>

          <div className="comment other-comment">
            <div className="stars">★★★★★</div>
            <div className="comment-info">
              <span className="name">Alex K.</span>
              <span className="verified"></span>
            </div>
            <p className="comment-text">“Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
          </div>

          <div className="comment other-comment">
            <div className="stars">★★★★★</div>
            <div className="comment-info">
              <span className="name">James L.</span>
              <span className="verified"></span>
            </div>
            <p className="comment-text">“As someone who’s always on the lookout for unique fashion pieces, I’m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h2>STAY UP TO DATE ABOUT<br />OUR LATEST OFFERS</h2>
            <form id="myForm" className="newsletter-form">
              <label htmlFor="email" className="email-container">
                <img src="assets/img/Address.png" alt="Email Icon" className="email-icon" />
                <input type="email" id="email" placeholder="Enter your email address" className="email-input" required />
              </label>
              <button type="submit" className="subscribe-btn">Subscribe to Newsletter</button>
            </form>
          </div>
        </div>

        <footer>
          <div className="footer-top">
            <div className="footer-left">
              <h1>SHOP.CO</h1>
              <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
              <div className="social-icons">
                <img src="assets/img/Social.png" alt="Social Icons" />
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-links">
                <div>
                  <h3>COMPANY</h3>
                  <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Career</a></li>
                  </ul>
                </div>
                <div>
                  <h3>HELP</h3>
                  <ul>
                    <li><a href="#">Customer Support</a></li>
                    <li><a href="#">Delivery Details</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>
                <div>
                  <h3>FAQ</h3>
                  <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Manage Deliveries</a></li>
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Payments</a></li>
                  </ul>
                </div>
                <div>
                  <h3>RESOURCES</h3>
                  <ul>
                    <li><a href="#">Free eBooks</a></li>
                    <li><a href="#">Development Tutorial</a></li>
                    <li><a href="#">How to - Blog</a></li>
                    <li><a href="#">Youtube Playlist</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="payment-cards">
              <img src="assets/img/Cards.png" alt="Payment Cards" />
            </div>
          </div>
        </footer>
      </footer>
    </div>
  );
}

export default App;