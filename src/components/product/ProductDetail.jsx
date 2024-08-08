// Assuming this is part of your component
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../redux/slices/productSlice';
import { addItemToCart } from '../../services/cartService';
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Breadcrumbs from '../../shared/Breadcrumbs';
import ProductReviews from '../../shared/StarRating';
import { addToWishlist, getWishlist, removeFromWishlist } from '../../redux/slices/wishListSlice';
import ColorSwatchButton from './component/ColorSwatchButton';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(id));
    dispatch(getWishlist()).then(({ payload }) => {
      setLocalWishlist(payload);
    });
  }, [id, dispatch]);

  const product = useSelector((state) => state.products.selectedProduct);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems.data);
  const wishlistLoading = useSelector((state) => state.wishlist.loading);

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [, setLocalWishlist] = useState([]);

  useEffect(() => {
    if (product?.id) {
      setSelectedColor(product.colors?.[0] || '');
      setSelectedSize(product.sizes?.[0] || '');
      setMainImage(product.images[0]?.[0]?.url || '');
      if (wishlistItems) {
        setIsInWishlist(wishlistItems.some(item => item.id === product.id));
      }
    }
  }, [product, wishlistItems, wishlistLoading]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product?.id) return <div>Product not found</div>;

  const handleAddToCart = async () => {
    try {
      await addItemToCart(product.id, quantity);

    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
  };

  const handleWishlistToggle = async () => {
    try {
      if (isInWishlist) {
        await dispatch(removeFromWishlist(product.id));
      } else {
        await dispatch(addToWishlist(product.id));
      }
      dispatch(getWishlist()).then(({ payload }) => {
        setLocalWishlist(payload);
        setIsInWishlist(!isInWishlist);
      });
    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div className='mx-14'>
        <Breadcrumbs />
      </div>
      <div className="flex font-TenorSans justify-between border mx-24 border-black">
        <div className='flex border w-1/2 border-black'>
          <div className="w-1/4 flex p-2 h-[500px] no-scrollbar overflow-scroll flex-col items-center">
            {product.images[0]?.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={product.name}
                className={`h-[151px] w-[138px] object-fit mb-2 cursor-pointer ${mainImage === image.url ? 'border-2 border-blue-500' : ''}`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          <img src={mainImage} alt={product.name} className="h-[505px] w-[418px] object-fit mb-4" />
        </div>
        <div className="flex w-1/2 flex-col items-center border border-black">
          <div className="w-3/4">
            <h1 className="text-3xl">{product.name}</h1>
            <div className=' align-middle py-auto flex border gap-3 mb-1'>
              <ProductReviews reviews={product.reviews} />
              <span className="text-sm my-auto text-gray-500 mt-2 font-Poppins">({product.reviews.length} Reviews)</span>
            </div>
            <h1 className='text-2xl font-normal font-TenorSans leading-normal mb-[24px] tracking-wide'>${product.price}</h1>
            <p className="mb-5 font-TenorSans border-b pb-5 border-gray-600 ">{product.description}</p>

            <div className="mb-4 flex gap-2">
              <div className="block">Color:</div>
              <div className="flex space-x-10 gap-5">
                {/* {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`border border-black rounded-full w-10 h-10 ${selectedColor === color ? 'ring-2 ring-blue-500' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(color)}
                  />
                ))} */}
              </div>
            </div>

            <div className="mb-4">
              {product.sizes && product.sizes?.length > 0 && (
                <>
                  <div className="block mb-2">Size</div>
                  <div id='size' className="flex space-x-2">
                    {product.sizes.map((size, index) => (
                      <button
                        key={index}
                        className={`px-4 py-2 border-black rounded-sm font-TenorSans border ${selectedSize === size ? 'bg-[#754F23] text-white' : 'bg-white text-black'}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className='space-x-2 flex'>
              <div className="flex items-center">
                <button onClick={() => handleQuantityChange(-1)} className="px-3 py-2 border text-md text-black border-[#00000080] font-bold rounded-l">&#8722;</button>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border-y border-[#00000080] bg-transparent p-2 w-20 text-center"
                />
                <button onClick={() => handleQuantityChange(1)} className="px-3 py-[9px] bg-[#754F23] text-white text-6 border-[#00000080] font-bold rounded-r">&#43;</button>
              </div>
              <button onClick={handleAddToCart} className="bg-[#754F23] text-white py-2 px-4 rounded">
                Buy Now
              </button>
              {wishlistLoading ? (
                <p>Loading...</p>
              ) : (
                <button onClick={handleWishlistToggle} className={`border text-lg border-[#00000080] rounded px-2 ${isInWishlist ? 'text-red-500 bg-[#754F23] border-white' : 'text-black'}`}>
                  {isInWishlist ? <IoMdHeart className="text-3xl " /> : <IoMdHeartEmpty className="text-3xl" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
