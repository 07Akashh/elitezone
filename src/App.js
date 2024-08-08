import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Footer from './components/home/Footer';
import Header from './components/home/Header';
import LandingPage from './components/home/LandingPage';
import ProductDetails from './components/product/ProductDetail';
import ProductList from './components/product/ProductList';
import CategoryPage from './components/Productpage';
import UserProfile from './components/user_profile/UserProfile';
import { demoProducts } from './demo';
import { fetchUserData } from './redux/slices/authSlice';
import { setCartItems } from './redux/slices/cartSlice';
import { fetchCategory, setProducts } from './redux/slices/productSlice';
import { getCartItems } from './services/cartService';
import PrivateRoute from './shared/PrivateRoute';
import Wishlist from './components/user_profile/WishList';
import { getWishlist } from './redux/slices/wishListSlice';
import ContactUs from './components/home/ContactUs';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(setProducts(demoProducts));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUserData());

  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategory('newarrivals'));
    dispatch(getWishlist());
  }, [dispatch])



  useEffect(() => {
    if (user) {
      const fetchCartItems = async () => {
        try {
          const response = await getCartItems();
          dispatch(setCartItems(response.data.items));
        } catch (error) {
          console.error('Error fetching cart items:', error);
        }
      };

      fetchCartItems();
    }
  }, [user, dispatch]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow mt-32">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/my-account/*" element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/trending" element={<ProductList category="trending" />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/cart" element={<Cart />} />
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
