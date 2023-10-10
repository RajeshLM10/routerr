import React, { useState, useEffect } from 'react';
import './Header.css';
import Cart from './Cart';
import axios from 'axios';


const initialOfferTimeInSeconds =   60 * 60;
const randomInitialTimes = Array.from({ length: 30 }, () =>
Math.floor(Math.random() * 2400) + 1
);

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerRow = 3;
  const productsPerColumn = 3;

  useEffect(() => {
    // Fetch product data from your API
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        const fetchedProducts = response.data.products;
        // Initialize quantities for each product to 0
        const initialQuantities = fetchedProducts.reduce((quantities, product) => {
          quantities[product.id] = 0;
          return quantities;
        }, {});
        setProductsData(fetchedProducts);
        setProductQuantities(initialQuantities);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  // Calculate the overall total price
  const totalCartPrice = productsData.reduce((total, product) => {
    return total + (product.price * productQuantities[product.id]);
  }, 0);

  // Rest of your component code (addToCart, removeFromCart, handleRemoveAllClick, etc.)

  const addToCart = (product) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: prevQuantities[product.id] + 1,
    }));
  };

  const removeFromCart = (product) => {
    if (productQuantities[product.id] > 0) {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product.id]: prevQuantities[product.id] - 1,
      }));
    }
  };

  const handleRemoveAllClick = () => {
    // Reset all product quantities to 0
    const updatedQuantities = {};
    for (const productId in productQuantities) {
      updatedQuantities[productId] = 0;
    }
    setProductQuantities(updatedQuantities);
  };

  // Render the JSX elements here
  return (
    <div className='container pro text-center'>
      <div className="grid-container">
                {productsData.map((product,index) => (
              <div className="card" key={product.id}>
                                <img
                                  src={Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : 'fallback-image-url'}
                                  alt={product.title}
                                  width="311"   
                                  height="250"  
                                />
                          <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                  <h5 className="card-title">{product.title}</h5>
                                  <p className="card-text scrollable-description">{product.description}</p>
                                </div>
                                <div>
                                  <p className="card-text">${product.price}<i className="fa fa-tags" aria-hidden="true"></i></p>
                                  <p className="card-text">Quantity: {parseInt(productQuantities[product.id], 10)}</p>
                                  <button onClick={() => addToCart(product)} className='cartbut'>Add to Cart</button>
                                </div>
                          </div>
                          <div className="card-footer">
                            <span className="blinking-text">!!Grab before Offer ends</span>
                            <CountdownTimer initialTime={randomInitialTimes[index]} />
                          </div>
              </div>
          ))}
        </div>

      {/* Pagination controls */}
      <div className="pagination">
        {/* Add your pagination buttons here */}
      </div>

      <div className="push"> </div>
      {/* Add Cart component here */}
      <Cart productQuantities={productQuantities} totalCartPrice={totalCartPrice} onRemoveAllClick={handleRemoveAllClick} />
    </div>
);
};

const CountdownTimer = ({ initialTime }) => {
const [time, setTime] = useState(initialTime);

useEffect(() => {
  const timer = setInterval(() => {
    if (time > 0) {
      setTime(time - 1);
    }
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, [time]);

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

return <span>{formatTime(time)}</span>;
};

export default Products;
