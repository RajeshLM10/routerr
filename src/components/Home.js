import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; 

const Home = () => {
    return (
        <div className="home-container">
            <div className='hed'>
            <h1> Welcome to our Shoe Store</h1>
            <p><span className="highlight">We offer a wide range of stylish and comfortable shoes for limited time  only Hurry up!!.</span></p>
            <h2>Featured Shoes</h2>
            </div>
            <div className="featured-shoes">
                <div className="shoe">
                    <h3>Mobiles</h3>
                    <p>Discover the latest mobile phones with cutting-edge technology and features.</p>
                    <Link to="/products">
                        <button id="mobile" className="view-details-button">View Details</button>
                    </Link>
                </div>
                <div className="shoe">
                    <h3>Laptops</h3>
                    <p>Explore a wide range of laptops for work, gaming, and everyday use.</p>
                    <Link to="/products">
                        <button className="view-details-button">View Details</button>
                    </Link>
                </div>
                <div className="shoe">
                    <h3>House holds</h3>
                    <p>Find essential household items to make your life easier and more comfortable.</p>
                    <Link to="/products">
                        <button  className="view-details-button">View Details</button>
                    </Link>
                </div>
            </div>
            <div className="push"></div>
        </div>
    );
}

export default Home;
