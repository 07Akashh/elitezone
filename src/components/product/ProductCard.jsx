import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="w-[300px]">
      <Link to={`/product/${product.id}`}>
        <img src='https://res.cloudinary.com/dmao0koo4/image/upload/v1722531707/Rectangle_325_sulyhn.jpg' alt={product.name} className="w-[300px] h-[360px] object-fit mb-1" />
      </Link>
      <h2 className="text-[18px] mb-1 text-center font-TenorSans">{product.name}</h2>
      <p className="mb-2 text-center text-[18px] font-TenorSans text-[#DD8560]">${product.price}</p>
    </div>
  );
};

export default ProductCard;
