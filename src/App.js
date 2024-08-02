import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/home/Footer';
import Header from './components/home/Header';
import LandingPage from './components/home/LandingPage';
import ProductList from './components/product/ProductList';
import { demoProducts } from './demo';
import { setCartItems } from './redux/slices/cartSlice';
import { setProducts } from './redux/slices/productSlice';
import { getCartItems } from './services/cartService';
import ProductDetails from './components/product/ProductDetail';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(demoProducts));
  }, [dispatch]);


  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await getCartItems();
        dispatch(setCartItems(response.data.items));
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [dispatch]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
          <Header />
        <main className="flex-grow mt-32">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/trending" element={<ProductList category="trending" />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/new-arrivals" element={<ProductList category="new-arrivals" />} />
            <Route path="/embroidered-abaya" element={<ProductList category="embroidered-abaya" />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
