import { Link,  useParams } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";


const ProductCard = ({ product, data }) => {
  const { categoryId, subCategoryId } = useParams();
  const value = product || data;


  let finalPrice = value.price;

if(value.offer){
  var percentageOffer = value.offer.find(o => o.offerType === 'percentOff' && o.percentOff);
  var offerPrice = value.offer.find(o => o.offerType === 'offerPrice' && o.offerPrice);
}


if (offerPrice) {
  finalPrice = offerPrice.offerPrice;
} else if (percentageOffer) {
  finalPrice = value.price - (value.price * (percentageOffer.percentOff / 100));
}


  const generateLink = () => {
    if (categoryId && subCategoryId) {
      return `/${categoryId}/${subCategoryId}/${value.id}`;
    } else if (categoryId){
      return `/${categoryId}/${value.subCategoryId}/${value.id}`;
    } else if (subCategoryId){
      return `/${value.categoryId}/${subCategoryId}/${value.id}`;
    } else {
      return `/${value.categoryId}/${value.subCategoryId}/${value.id}`;
    }
  };

  const isLiked =value.isLike;

  
  return (
    <div className="w-[160px] sm:w-[300px] relative">
      <Link to={generateLink()}>
        <div>
          <div className='sm:h-[360px] h-[200px] relative border-black'>
            {percentageOffer && !offerPrice && (
              <div className='absolute sm:h-[40px] h-[25px] w-[25px] ml-2 mt-2 sm:w-[40px] sm:mt-3 sm:ml-3 bg-[#DD8560] text-white text-[10px] sm:text-sm font-light rounded-full flex items-center justify-center'>
                {percentageOffer.percentOff}%
              </div>
            )}
            {isLiked && (
              <div className='absolute sm:h-[40px] h-[25px] w-[25px] ml-2 right-2 sm:right-3 mt-2 sm:w-[40px] sm:mt-3 sm:ml-3 bg-[#DD8560] text-white text-[10px] sm:text-sm font-light rounded-full flex items-center justify-center'>
              <CiHeart className='text-lg sm:text-2xl'/>
            </div>
            )}
            {/* {value.isLike && <CiHeart/>} */}
            <img
              src={"https://res.cloudinary.com/dmao0koo4/image/upload/v1722531707/Rectangle_325_sulyhn.jpg"}
              alt={value.productName}
              className="sm:w-[300px] w-[165px] h-[200px] sm:h-[360px] object-cover mb-1"
            />
          </div>
        </div>
      </Link>
      <h2 className="text-[18px] mb-1 text-center font-TenorSans">{value.productName}</h2>
      {offerPrice ? (
        <div>
          <p className="mb-2 text-center text-[18px] font-TenorSans text-[#DD8560]">
            &#8377;{offerPrice.offerPrice.toFixed(2)}
            <span className='text-[#808080] text-[15px] line-through ml-2'>&#8377;{value.price.toFixed(2)}</span>
          </p>
        </div>
      ) : (
        <p className=" text-center text-[18px] font-TenorSans text-[#DD8560]">
          &#8377;{finalPrice?.toFixed(2)}
          {value.price !== finalPrice && (
            <span className='text-[#808080] text-[15px] line-through ml-2'>
              &#8377;{value.price.toFixed(2)}
            </span>
          )}
        </p>
      )}
      {value.inStock ? (
        <p className="text-center text-green-500 text-sm font-TenorSans">In Stock</p>
      ) : (
        <p className="text-center text-red-500 text-sm font-TenorSans">Out of Stock</p>
      )}
    </div>
  );
};

export default ProductCard;
