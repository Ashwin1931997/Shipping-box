import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="main">
    <div className="home-container">
      <div className="home-section">
        <h1>Welcome to Global Shipping Company</h1>
        <p>Delivering your packages Anywhere,Anytime,Ontime.</p>
        <Link to={"/ShippingForm"}><button>Get Started</button></Link>
      </div>
      </div>
      </div>
  );
};

export default Home;