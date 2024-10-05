import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProductsByQuery } from '../../../../services/searchService';
import { IoSearchOutline } from 'react-icons/io5';

const SearchBar = () => {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (query) => {
        if (!query) {
            setResults([]);
            return;
        }

        setLoading(true);
        setError('');
        try {
            const result = await fetchProductsByQuery(query);
            setResults(result);
        } catch (error) {
            setError('Failed to fetch products.');
        } finally {
            setLoading(false);
        }
    };

    const handleLinkClick = () => {
        setInput('');
        setResults([]);
    };

    return (
        <div className="relative border border-black  sm:border-none rounded-md">
            <div className="flex items-center gap-2 md:w-[243px] bg-[#F5F5F5] py-[7px] px-[20px] rounded">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        handleSearch(e.target.value);
                    }}
                    className="text-sm leading-snug font-normal tracking-wide w-full bg-transparent outline-none border-black"
                />
                <IoSearchOutline className="text-xl" />
            </div>
            <div className="absolute left-0 right-0 sm:mt-2 mt-4 sm:w-[350px] w-full  bg-black/80 sm:bg-black/20 rounded backdrop-blur-[60px] shadow-lg max-h-60 overflow-y-auto z-10">
                {loading && <p className="m-2 text-white">Loading...</p>}
                {error && <p className="m-2 text-[#3C3C4399]">{error}</p>}
                {results?.length > 0 && (
                    <ul className="list-none py-2">
                        {results?.map((product) => (
                            <Link
                                to={`/${product.categoryId._id}/${product.subCategoryId._id}/${product._id}`}
                                key={product._id}
                                onClick={handleLinkClick}
                            >
                                <li className="flex text-white gap-2 py-0.5 px-2 bg-transparent">
                                    <IoSearchOutline className="mt-[2px] font-extralight" />
                                    <p className="text-[15px] my-auto font-Poppins">
                                        {product.productName}
                                    </p>
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchBar;

