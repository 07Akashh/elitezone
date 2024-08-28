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
import Wishlist from './components/user_profile/WishList';
import ContactUs from './components/home/ContactUs';

import { demoProducts } from './demo';
import { fetchUserData } from './redux/slices/authSlice';
import { fetchCartItems } from './redux/slices/cartSlice';
import { fetchAllProducts, fetchCategory, setProducts } from './redux/slices/productSlice';
import { getWishlist } from './redux/slices/wishListSlice';

import PrivateRoute from './shared/PrivateRoute';
import ProductFilterPage from './shared/ProductFilter';
import Checkout from './components/checkout_page/Checkout';
import Apps from './color';
import { fetchAddresses } from './redux/slices/addressSlice';
import { getOrders } from './redux/slices/orderSlice';



function App() {


  const token = localStorage.getItem('token')
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);


  useEffect(() => {
    dispatch(setProducts(demoProducts));
  }, [dispatch]);


  useEffect(() => {
    if (token) {
      dispatch(fetchUserData());
    }
  }, [dispatch, token]);


  useEffect(() => {
    dispatch(fetchAllProducts())
    dispatch(fetchCategory('newarrivals'));
  }, [dispatch, user])


  useEffect(() => {
    if (user) {
      dispatch(getOrders())
      dispatch(fetchAddresses());
      dispatch(getWishlist());
      const fetchCartItem = async () => {
        try {
          dispatch(fetchCartItems())
        } catch (error) {
          console.error('Error fetching cart items:', error);
        }
      };

      fetchCartItem();
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

            <Route path="/:categoryId" element={<ProductFilterPage />} />
            <Route path="/:categoryId/:subCategoryId" element={<ProductFilterPage />} />

            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/color" element={<Apps />} />
            <Route path="/trending" element={<ProductList category="trending" />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/new-arrivals" element={<ProductList category="new-arrivals" />} />
            <Route path="/embroidered-abaya" element={<ProductList category="embroidered-abaya" />} />
            <Route path="/:categoryId/:subCategoryId/:id" element={<ProductDetails />} />

            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
