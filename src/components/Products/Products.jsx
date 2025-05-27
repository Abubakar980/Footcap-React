import  { useState } from 'react';
import './Products.css';

const Products = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Array of available product images
  const productImages = [
    '../images/product-1.jpg',
    '../images/product-2.jpg',
    '../images/product-3.jpg',
    '../images/product-4.jpg',
    '../images/product-5.jpg',
    '../images/product-6.jpg',
    '../images/product-7.jpg',
    '../images/product-8.jpg',
  ];

  // Array of products with random images
  const products = [
    { title: 'NIKE', price: '$100.99', description: 'High-quality sportswear.' },
    { title: 'BATA', price: '$110.99', description: 'Comfortable footwear.' },
    { title: 'SERVICE', price: '$120.99', description: 'Durable and stylish.' },
    { title: 'ADIDAS', price: '$130.99', description: 'Popular sports brand.' },
    { title: 'INDURE', price: '$140.99', description: 'Innovative designs.' },
    { title: 'PUMA', price: '$150.99', description: 'Sporty and comfortable.' },
    { title: 'NIKE', price: '$160.99', description: 'Latest trends in sports.' },
    { title: 'SERVICE', price: '$170.99', description: 'Affordable quality.' },
    { title: 'NIKE', price: '$180.99', description: 'New and improved sportswear.' },
    { title: 'BATA', price: '$190.99', description: 'Stylish and comfortable.' },
    { title: 'SERVICE', price: '$200.99', description: 'Quality footwear for everyone.' },
    { title: 'ADIDAS', price: '$210.99', description: 'Trusted by athletes worldwide.' },
    { title: 'INDURE', price: '$220.99', description: 'Revolutionizing comfort.' },
    { title: 'PUMA', price: '$230.99', description: 'Designed for the active.' },
    { title: 'NIKE', price: '$240.99', description: 'For performance and style.' },
    { title: 'SERVICE', price: '$250.99', description: 'Built to last.' },
    { title: 'NIKE', price: '$260.99', description: 'Trendy and practical.' },
    { title: 'BATA', price: '$270.99', description: 'Every step in comfort.' },
    { title: 'SERVICE', price: '$280.99', description: 'Affordable excellence.' },
    { title: 'ADIDAS', price: '$290.99', description: 'Classic sportswear.' },
    { title: 'INDURE', price: '$300.99', description: 'Leading in innovation.' },
    { title: 'PUMA', price: '$310.99', description: 'Modern and sleek.' },
    { title: 'NIKE', price: '$320.99', description: 'Stay ahead in fashion.' },
    { title: 'SERVICE', price: '$330.99', description: 'Durable for all needs.' },
    { title: 'NIKE', price: '$340.99', description: 'Performance meets style.' },
    { title: 'BATA', price: '$350.99', description: 'Perfect for every occasion.' },
    { title: 'SERVICE', price: '$360.99', description: 'Comfort that lasts.' },
    { title: 'ADIDAS', price: '$370.99', description: 'Top sports gear.' },
    { title: 'INDURE', price: '$380.99', description: 'Exceptional quality.' },
    { title: 'PUMA', price: '$390.99', description: 'Sporty elegance.' },
    { title: 'NIKE', price: '$400.99', description: 'High-end sports apparel.' },
    { title: 'SERVICE', price: '$410.99', description: 'Affordable luxury.' },
    { title: 'NIKE', price: '$420.99', description: 'Trusted by champions.' },
    { title: 'BATA', price: '$430.99', description: 'Stylish everyday wear.' },
    { title: 'SERVICE', price: '$440.99', description: 'Designed for comfort.' },
    { title: 'ADIDAS', price: '$450.99', description: 'Athletic and trendy.' },
    { title: 'INDURE', price: '$460.99', description: 'Ultimate innovation.' },
    { title: 'PUMA', price: '$470.99', description: 'Perfect for active lifestyles.' },
    { title: 'NIKE', price: '$480.99', description: 'Elevate your game.' },
    { title: 'SERVICE', price: '$490.99', description: 'Unmatched durability.' },
    { title: 'NIKE', price: '$500.99', description: 'Bold and innovative.' },
    { title: 'BATA', price: '$510.99', description: 'Comfort meets style.' },
    { title: 'SERVICE', price: '$520.99', description: 'Reliable and stylish.' },
    { title: 'ADIDAS', price: '$530.99', description: 'Sportswear at its best.' },
    { title: 'INDURE', price: '$540.99', description: 'Leading the market.' },
    { title: 'PUMA', price: '$550.99', description: 'Run, jump, and play.' },
    { title: 'NIKE', price: '$560.99', description: 'For the best performance.' },
    { title: 'SERVICE', price: '$570.99', description: 'Crafted with care.' },
].map((product) => ({
    ...product,
    image: productImages[Math.floor(Math.random() * productImages.length)],
  }));

  return (
    <div className="product-section">
      <div className="product-content">
        <div className="product-title">
          <p>Bestsellers Products</p>
        </div>

        <div className="product-tabs">
          <ul>
            {['All', 'Nike', 'Adidas', 'Puma', 'Bata', 'Apex'].map((category) => (
              <li
                key={category}
                className={activeTab === category ? 'active' : ''}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="product-wrapper-container">
        <div className="product-wrapper">
          {products
            .filter((product) => activeTab === 'All' || product.title.toLowerCase() === activeTab.toLowerCase())
            .map((product, index) => (
              <div className="product-card" key={index}>
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>

                <div className="product-text">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <h3>{product.price}</h3>
                  <div className="product-star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star-half-stroke"></i>
                  </div>
                  <a href="#" className="btn">Add To Cart</a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
