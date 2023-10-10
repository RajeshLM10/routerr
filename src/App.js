import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
