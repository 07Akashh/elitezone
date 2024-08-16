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
    if (user) {
      dispatch(getWishlist());
    }
  }, [dispatch, user])





  useEffect(() => {
    if (user) {
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

            <Route path="/:categoryId" element={<ProductFilterPage title="Embriodered" subtitle="Abayas" />} />
            <Route path="/:categoryId/:subCategoryId" element={<ProductFilterPage title="Nida" subtitle="Fabric" />} />
            <Route path="/:categoryId/:subCategoryId" element={<ProductFilterPage title="TikTok" subtitle="Fabric" />} />
            <Route path="/:categoryId/:subCategoryId" element={<ProductFilterPage title="Harira" subtitle="Fabric" />} />
            <Route path="/:categoryId/:subCategoryId" element={<ProductFilterPage title="Shiffon" subtitle="Fabric" />} />
            <Route path="/:categoryId/:subCategoryId" element={<ProductFilterPage title="Silk Shiny" subtitle="Fabric" />} />
            <Route path="/:categoryId/:subCategoryId" element={<ProductFilterPage title="Zoom" subtitle="Fabric" />} />
            <Route path="/:categoryId/:subCategoryId" element={<ProductFilterPage title="Korean Nida" subtitle="Fabric" />} />


            <Route path="/product/:categoryId=''" element={<ProductFilterPage title="Our" subtitle="Products" />} />
            {/* <Route path="/abayas/tiktok-fabric" element={<ProductFilterPage categoryId="abayas-001" title="TikTok" subtitle="Fabric" subCategoryId="tiktok-fabric"/>} /> */}
            {/* <Route path="/abayas/harira-fabric" element={<ProductFilterPage categoryId="abayas-001" title="Harira" subtitle="Fabric" subCategoryId="harira-fabric"/>} /> */}
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/trending" element={<ProductList category="trending" />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/new-arrivals" element={<ProductList category="new-arrivals" />} />
            <Route path="/embroidered-abaya" element={<ProductList category="embroidered-abaya" />} />
            <Route path="/:categoryId/:subCategoryId/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
