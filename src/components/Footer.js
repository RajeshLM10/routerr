import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: example@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footer-section">
                    <h3>Address</h3>
                    <p>123 Main Street</p>
                    <p>City, State ZIP</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Your Shoe Store</p>
            </div>
        </footer>
    );
}

export default Footer;
