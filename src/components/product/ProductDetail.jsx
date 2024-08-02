import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProduct } from '../../redux/slices/productSlice';
import { addItemToCart } from '../../services/cartService';
import { setCartItems, updateItemCount } from '../../redux/slices/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selectedProduct);
  const products = useSelector((state) => state.products.products);

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (products.length > 0) {
      dispatch(selectProduct(id));
    }
  }, [id, dispatch, products]);

  useEffect(() => {
    if (product?.id) {
      setSelectedColor(product.colors?.[0] || '');
      setSelectedSize(product.sizes?.[0] || '');
    }
  }, [product]);

  if (!product?.id) return <div>Product not found</div>;

  const handleAddToCart = async () => {
    try {
      const cartData = await addItemToCart(product.id, quantity);
      dispatch(setCartItems(cartData.items));
      dispatch(updateItemCount(cartData.items.length));
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2">
        {product.images?.map((image, index) => (
          <img key={index} src={image} alt={product.name} className="h-64 w-64 object-fit mb-4" />
        ))}
      </div>
      <div className="w-1/2 p-4">
        <h1 className="text-3xl mb-4">{product.name}</h1>
        <p className="text-lg mb-4">Rating: {product.rating}</p>
        <p className="mb-4">{product.description}</p>
        <div className="mb-4">
          <label htmlFor="color" className="block mb-2">Color</label>
          <select
            id="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="border p-2 w-full"
          >
            {product.colors?.map((color, index) => (
              <option key={index} value={color}>{color}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="size" className="block mb-2">Size</label>
          <select
            id="size"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="border p-2 w-full"
          >
            {product.sizes?.map((size, index) => (
              <option key={index} value={size}>{size}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-2">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border p-2 w-20"
          />
        </div>
        <button onClick={handleAddToCart} className="bg-green-500 text-white py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
