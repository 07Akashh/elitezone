import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
// import { TbTruckDelivery } from "react-icons/tb";
// import { HiArrowPath } from "react-icons/hi2";

import { fetchProduct, fetchProductByColor } from '../../redux/slices/productSlice';
import { addItemToCart } from '../../services/cartService';
import Breadcrumbs from '../../shared/Breadcrumbs';
import ProductReviews from '../../shared/StarRating';
import { addToWishlist, getWishlist, removeFromWishlist } from '../../redux/slices/wishListSlice';
import { fetchCartItems } from '../../redux/slices/cartSlice';
import SimilarProductsPage from '../../shared/SimilarProduct';

import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const products = useSelector((state) => state.products.selectedProduct);
  const loading = useSelector((state) => state.products.selectedProduct.isLoading);
  const error = useSelector((state) => state.products.selectedProduct.error);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems.data);
  const wishlistLoading = useSelector((state) => state.wishlist.loading);


  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [, setLocalWishlist] = useState([]);
  const [isAddingToCart, setIsAddingToCart] = useState(false);


  useEffect(() => {
    const loadData = async () => {
      await dispatch(fetchProduct(id));
      await dispatch(getWishlist()).then(({ payload }) => {
        setLocalWishlist(payload);
      });
    };
    loadData();
  }, [id, dispatch]);

  useEffect(() => {
    if (products.product?.id) {
      setSelectedColor(products.product.color || '');
      setSelectedSize(products.product.size?.[0] || '');
      setMainImage(products.images?.[0]?.url || '');
      setIsInWishlist(products.product.isLike || false);
    }
  }, [products, wishlistItems, wishlistLoading]);

  if (error || !products.product?.id) return <div>Product not found</div>;


  const handleAddToCart = async () => {
    if (!products.product.inStock) {
      toast.success("Product is not available")
      console.log('Product is not available');
      return;
    }
    try {
      setIsAddingToCart(true);
      const res = await addItemToCart(products.product.id, quantity, selectedSize);
      dispatch(fetchCartItems())
      toast.success(res.message)
    } catch (error) {

      toast.error("Error adding item to cart")
      console.error('Error adding item to cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
  };



  const handleWishlistToggle = async () => {
    try {
      if (isInWishlist) {
        const res = await dispatch(removeFromWishlist(id));
        await dispatch(getWishlist());
        toast.success(res.payload.message)
      } else {
        const res= await dispatch(addToWishlist(id));
        await dispatch(getWishlist());
        toast.success(res.payload.message)
      }

      const resultAction = await dispatch(fetchProduct(id));
      if (fetchProduct.fulfilled.match(resultAction)) {
        const updatedProduct = resultAction.payload;

        if (updatedProduct && updatedProduct.product) {
          setSelectedColor(updatedProduct.product.color || '');
          setSelectedSize(updatedProduct.product.size?.[0] || '');
          setMainImage(updatedProduct.images?.[0]?.url || '');
          setIsInWishlist(updatedProduct.product.isLike || false);
        }
      } else {
        toast.error('Failed to fetch the updated product')
        console.error('Failed to fetch the updated product');
      }
    } catch (error) {
      toast.error('Error updating wishlist')
      console.error('Error updating wishlist:', error);
    }
  };


  const percentageOffer = products.product.offer.find(o => o.offerType === 'percentOff' && o.percentOff);
  const offerPrice = products.product.offer.find(o => o.offerType === 'offerPrice' && o.offerPrice);

  let finalPrice = products.product.price;
  if (offerPrice) {
    finalPrice = offerPrice.offerPrice;
  } else if (percentageOffer) {
    finalPrice = products.product.price - (products.product.price * (percentageOffer.percentOff / 100));
  }

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    fetchProductDetailsByColor(color);
  };


  const fetchProductDetailsByColor = async (color) => {
    const productName = products.product.productName;
    try {
      const response = await dispatch(fetchProductByColor({ color, productName }));
      const updatedProduct = response.payload;
      if (updatedProduct) {
        navigate(`/${updatedProduct.product.categoryId}/${updatedProduct.product.subCategoryId}/${updatedProduct.product.id}`);
      }
    } catch (error) {
      console.error('Error fetching product details by color:', error);
    }
  };


  return (
    <>
      <ToastContainer />
      {loading && (
        <div className="loading-overlay">
          <div className="text-white font-TenorSans text-xl">Loading...</div>
        </div>
      )}
      <div className={`${loading ? 'opacity-50' : ''}`}>
        <div className='md:mx-14 '>
          <Breadcrumbs productName={products.product.productName} />
        </div>
        <div className="md:flex px-2 font-TenorSans  md:justify-around xl:mx-28 border-black">
          <div className='flex justify-center md:w-1/2 border-black'>
            <div className="w-1/4 flex p-2 h-[300px] md:h-[400px] lg:h-[500px] no-scrollbar overflow-scroll flex-col items-center">
              {products.images?.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={products.product.name}
                  className={`lg:h-[151px] h-[90px]  lg:w-[138px] object-fit mb-2 cursor-pointer ${mainImage === image.url ? 'border-2 border-[#754F23]' : ''}`}
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>
            <img src={mainImage} alt={products.product.productName} className="lg:h-[505px] md:h-[400px] md:w-[260px] h-[300px] w-[200px] lg:w-[418px] object-fit mb-4" />
          </div>
          <div className="flex mx-auto md:w-1/2 w-full  flex-col items-center border-black">
            <div className="w-full md:w-3/4">
              <h1 className="text-3xl">{products.product.productName}</h1>
              <div className=' align-middle py-auto flex gap-3 mb-1'>
                <ProductReviews reviews={products.product.rating} />
                <span className="text-sm my-auto text-gray-500 mt-2 font-Poppins">({products.product.reviewCount} Reviews) |</span>
                <span className={`text-sm my-auto mt-2 font-Poppins ${products.product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                  {products.product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              {offerPrice ? (
                <div>
                  <p className="text-2xl font-normal font-TenorSans leading-normal mb-[24px] tracking-wide">
                    &#8377;{offerPrice.offerPrice.toFixed(2)}
                    <span className='text-[#808080] text-[15px] line-through ml-2'>&#8377;{products.product.price.toFixed(2)}</span>
                  </p>
                </div>
              ) : (
                <p className="text-2xl font-normal font-TenorSans leading-normal mb-[24px] tracking-wide">
                  &#8377;{finalPrice.toFixed(2)}
                  {products.product.price !== finalPrice && (
                    <span className='text-[#808080] text-[15px] line-through ml-2'>
                      &#8377;{products.product.price.toFixed(2)}
                    </span>
                  )}
                </p>
              )}
              <p className="mb-5 font-TenorSans border-b pb-5 border-gray-600 ">{products.product.description}</p>
              <div className="mb-4 flex gap-4">
                <div className="block">Colours:</div>
                <div className=" border-black flex flex-wrap gap-3">
                  {products.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`rounded-full w-5 h-5 ${selectedColor === color ? 'ring-2 ring-black border border-white' : ''}`}
                      style={{ backgroundColor: getColorValue(color) }}
                      onClick={() => handleColorSelect(color)}
                    >
                      {/* Optional: Add text or icon here */}
                    </button>
                  ))}
                </div>
              </div>



              <div className="mb-4">
                {products.product.size && products.product.size?.length > 0 && (
                  <div className='flex gap-4'>
                    <div className="block mb-2">Size:</div>
                    <div id='size' className="flex space-x-2 flex-wrap gap-2">
                      {products.product.size.map((size, index) => (
                        <button
                          key={index}
                          className={` border-black px-3 h-8 rounded font-TenorSans border ${selectedSize === size ? 'bg-[#754F23] text-white border border-none' : 'bg-transparent text-black'}`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className='space-x-2 lg:flex'>
                <div className="flex items-center">
                  <button onClick={() => handleQuantityChange(-1)} className="px-3 py-2 border text-md text-black border-[#00000080] font-bold rounded-l">&#8722;</button>
                  <input
                    min="1"
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    disabled
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border-y spinner outline-none border-[#00000080] bg-transparent p-2 w-20 text-center"
                  />
                  <button onClick={() => handleQuantityChange(1)} className="px-3 py-[9px] bg-[#754F23] text-white text-6 border-[#00000080] font-bold rounded-r">&#43;</button>
                </div>
                <div className='space-x-2 mt-5 lg:mt-0 flex'>
                  <button
                    onClick={handleAddToCart}
                    className={`py-2 px-4 rounded ${products.product.inStock ? 'bg-[#754F23] text-white' : 'bg-red-500 text-white cursor-not-allowed opacity-50'}`}
                    disabled={!products.product.inStock || isAddingToCart}
                  >
                    {products.product.inStock ? (isAddingToCart ? 'Adding...' : 'Add to Cart') : 'Out of Stock'}
                  </button>

                  {wishlistLoading ? (
                    <button onClick={handleWishlistToggle} className={`border text-lg border-[#00000080] rounded px-2 text-black`}>
                      <IoMdHeartEmpty className="text-3xl" />
                    </button>
                  ) : (
                    <button onClick={handleWishlistToggle} className={`border text-lg border-[#00000080] rounded px-2 ${isInWishlist ? 'text-red-500 bg-[#754F23] border-white' : 'text-black'}`}>
                      {isInWishlist ? <IoMdHeart className="text-3xl " /> : <IoMdHeartEmpty className="text-3xl" />}
                    </button>
                  )}
                </div>
              </div>

              {/* Banner offer Ad Code Here  Do Not Remove This */}

              {/* <div className='border mt-5 py-[24px] border-black rounded'>
                <div className='flex border-b border-black gap-2 px-[16px] pb-[16px]'>
                  <TbTruckDelivery className='w-10 h-10' />
                  <div>
                    <h1 className='text-black text-base font-normal font-TenorSans leading-normal'>Free Delivery</h1>
                    <p className='text-black text-xs font-normal underline leading-[18px]'>Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <div className='flex gap-2 px-[16px] pt-[16px]'>
                  <HiArrowPath className='w-10 h-10' />
                  <div>
                    <h1 className='text-black text-base font-normal font-TenorSans leading-normal'>Return Delivery</h1>
                    <p className='text-black text-xs font-normal leading-[18px]'>Free 30 Days Delivery Returns. <span className='underline'>Details</span></p>
                  </div>
                </div>
              </div> */}


            </div>
          </div>
        </div>
        <div className='mt-5 sm:mt-0'>
          <SimilarProductsPage categoryId={products.product.categoryId} subCategoryId={products.product.subCategoryId} />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;




const getColorValue = (colorName) => {
  switch (colorName) {
    case "Shiny Green":
      return "#66FF66";
    case "Royal Blue":
      return "#4169E1";
    case "Cobalt Blue":
      return "#0047AB";
    case "Deep Black":
      return "#000000";
    case "Platinum Grey":
      return "#E5E4E2";
    case "Snow White":
      return "#FFFAFA";
    case "Copper":
      return "#B87333";
    case "Midnight Blue":
      return "#191970";
    case "Emerald Green":
      return "#50C878";
    case "Wine Red":
      return "#722F37";
    case "Teal":
      return "#008080";
    case "Mint Green":
      return "#98FF98";
    case "Butterfly White":
      return "#F8F8FF";
    case "Pastel Pink":
      return "#FFD1DC";
    case "Cream":
      return "#FFFDD0";
    case "Sky Blue":
      return "#87CEEB";
    case "Lavender":
      return "#E6E6FA";
    case "Charcoal":
      return "#36454F";
    case "Steel Blue":
      return "#4682B4";
    case "Navy Blue":
      return "#000080";
    case "Turquoise":
      return "#40E0D0";
    case "Maroon":
      return "#800000";
    case "Blush Pink":
      return "#FF6FFF";
    case "Bronze":
      return "#CD7F32";
    case "White":
      return "#FFFFFF";
    case "Forest Green":
      return "#228B22";
    case "Ivory":
      return "#FFFFF0";
    case "Peach":
      return "#FFDAB9";
    default:
      return "#FFFFFF";
  }
};
