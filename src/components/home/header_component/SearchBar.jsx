import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProductsByQuery } from '../../../services/searchService';
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

    return (
        <div className="relative">
            <div className="flex items-center border rounded">
                <IoSearchOutline className="m-2" />
                <input
                    type="text"
                    placeholder="Search"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        handleSearch(e.target.value);
                    }}
                    className="px-2 leading-snug font-normal tracking-wide w-full bg-transparent outline-none border-b border-black"
                />
            </div>
            <div className="absolute left-0 right-0 mt-2 w-[350px] rounded-[10px] bg-white/40  backdrop-blur-[10.80px]  shadow-lg max-h-60 overflow-y-auto z-10">
                {loading && <p className='m-2'>Loading...</p>}
                {error && <p className='m-2'>{error}</p>}
                {results?.length > 0 && (
                    <ul className="list-none py-2">
                        {results?.map((product) => (
                            <Link to={`/product/${product.id}`}>
                                <li key={product.id} className="flex text-[#3C3C4399] gap-2 py-0.5 px-2 bg-transparent">
                                    <IoSearchOutline className=' mt-[2px] font-extralight' />
                                    <p className="text-[15px] my-auto font-Poppins">{product.productName}</p>
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
