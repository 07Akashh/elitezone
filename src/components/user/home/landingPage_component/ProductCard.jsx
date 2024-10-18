import React from 'react';


const ProductCard = ({ image, title, description, Link }) => {
    return (
        <div className="relative w-full h-full bg-cover bg-center rounded" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white rounded">
                <h3 className="text-xl font-bold line-clamp-1">{title}</h3>
                <div className="text-sm mb-2 line-clamp-2" dangerouslySetInnerHTML={{ __html: description }} />
                <a href={Link} className="text-sm underline underline-offset-4 font-medium">Shop Now</a>
            </div>
        </div>
    );
};

export default ProductCard;