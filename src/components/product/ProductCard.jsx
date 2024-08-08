import { Link } from 'react-router-dom';

const ProductCard = ({ product, data }) => {
  const value = product || data;
  

  const percentageOffer = value.offer.find(o => o.offerType=== 'percentOff' && o.percentOff);
  const offerPrice = value.offer.find(o => o.offerType === 'offerPrice' && o.offerPrice);
  

  let finalPrice = value.price;
  if (offerPrice) {
    finalPrice = offerPrice.offerPrice;
  } else if (percentageOffer) {
    finalPrice = value.price - (value.price * (percentageOffer.percentOff / 100));
  }



  return (
    <div className="w-[165px] sm:w-[300px] relative">
      <Link to={`/product/${value.id}`}>
        <div>
          <div className=' sm:h-[360px] h-[200px] relative'>
            {percentageOffer && !offerPrice && (
              <div className='absolute h-[40px] w-[40px] sm:mt-3 ml-3 bg-[#DD8560] text-white text-sm font-light rounded-full flex items-center justify-center'>
                -{percentageOffer.percentOff}%
              </div>
            )}
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
            ${offerPrice.offerPrice.toFixed(2)}
            <span className='text-[#808080] text-[15px] line-through ml-2'>${value.price.toFixed(2)}</span>
          </p>
        </div>
      ) : (
        <p className="mb-2 text-center text-[18px] font-TenorSans text-[#DD8560]">
          ${finalPrice.toFixed(2)}
          {value.price !== finalPrice && (
            <span className='text-[#808080] text-[15px] line-through ml-2'>
              ${value.price.toFixed(2)}
            </span>
          )}
        </p>
      )}
    </div>
  );
};

export default ProductCard;
