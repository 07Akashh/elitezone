import React, { useEffect, useState } from 'react';
import FilterAccordion from './FilterAccordion';
import ColorCircle from './ColorCircle';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/user/product/component/ProductCard';
import { fetchAllProducts } from '../redux/slices/productSlice';
import Breadcrumbs from './Breadcrumbs';
import { useParams } from 'react-router-dom';

import { Tooltip as ReactTooltip } from 'react-tooltip'


// import Error404 from './Error404';

const ProductFilterPage = () => {
    const { categoryId, subCategoryId } = useParams();
    const dispatch = useDispatch();
    const { colors } = useSelector((state) => state.products.allProducts);
    const isLoading = useSelector((state) => state.products.allProducts.isLoading);
    const error = useSelector((state) => state.products.allProducts.error);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [product, setProduct] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const [showFilter, setShowFilter] = useState(false);
    const [, setIsError] = useState('')

    // const getTitleAndSubtitle = (id) => {
    //     if (!id) return { title: '', subtitle: '' };

    //     const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    //     const parts = id.split('-').map(capitalize);
    //     const subtitle = parts.pop();
    //     const title = parts.join(' ');

    //     return { title, subtitle };
    // };


    // const { title, subtitle } = subCategoryId
    // ? getTitleAndSubtitle(subCategoryId)
    // : getTitleAndSubtitle(categoryId);


    useEffect(() => {
        if (categoryId) {
            setPage(0);
            setHasMore(true);

            dispatch(fetchAllProducts({
                categoryId,
                subCategoryId,
                color: selectedColor,
                size: selectedSizes,
                priceRange: selectedPriceRange,
                sorting: sortOption,
                page: 0
            }))
                .unwrap()
                .then(response => {
                    setProduct(response.data);
                    if (response.data.length === 0) {
                        setHasMore(false);
                    }
                    setShowFilter(false);
                })
                .catch(error => {
                    setIsError(error)
                    console.error('Error fetching products:', error);
                });
        }
        if (!categoryId) {
            dispatch(fetchAllProducts())
        }

    }, [categoryId, subCategoryId, selectedColor, selectedSizes, selectedPriceRange, dispatch, sortOption]);

    useEffect(() => {
        if (categoryId && page > 0 && hasMore) {
            dispatch(fetchAllProducts({
                categoryId,
                subCategoryId,
                color: selectedColor,
                size: selectedSizes,
                sorting: sortOption,
                priceRange: selectedPriceRange,
                page
            }))
                .unwrap()
                .then(response => {
                    setProduct(prevProducts => [...prevProducts, ...response.data]);
                    if (response.data.length === 0) {
                        setHasMore(false);
                    }
                })
                .catch(error => {
                    setIsError(error)
                    console.error('Error fetching products:', error);
                });
        }
    }, [page, categoryId, subCategoryId, selectedColor, selectedSizes, selectedPriceRange, dispatch, hasMore, sortOption]);

    const handleSizeChange = (size) => {
        setSelectedSizes(prev =>
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handlePriceChange = (price) => {
        setSelectedPriceRange(prev =>
            prev.includes(price) ? [] : [price]
        );
    };

    const handleLoadMore = () => {
        if (hasMore) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handleResetFilters = () => {
        setSelectedSizes([]);
        setSelectedColor(null);
        setSelectedPriceRange([]);
        setPage(0);
        setHasMore(true);
        setProduct([]);

        dispatch(fetchAllProducts({
            categoryId,
            subCategoryId,
            page: 0,
        }))
            .unwrap()
            .then(response => {
                setProduct(response.data);
                if (response.data.length === 0) {
                    setHasMore(false);
                }
            })
            .catch(error => {
                setIsError(error)
                console.error('Error fetching products:', error);
            });
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };


    if (isLoading && page === 0) return <p className="text-center font-TenorSans">Loading...</p>;
    if (error) return <div className='text-center font-TenorSans'>Error: {error}</div>;
    if (product.length === 0) return <div className="text-center font-TenorSans">
        {/* <Error404 /> */}
        Product Not Found...
    </div>

    return (
        <div className='xl:px-[135px] lg:px-[100px] md:px-[60px]'>
            <div className='text-center sm:mb-3 '>
                {/* <h2 className="sm:text-5xl text-xl font-thin font-BerkshireSwash border-b pb-3 border-[#2F2F2F] inline-block">
                    {title} <span className='text-sm sm:text-2xl font-BerkshireSwash'>{subtitle}</span>
                </h2> */}
            </div>
            <div className='sm:mt-[40px] sm:mb-[40px] px-[20px] sm:px-0'><Breadcrumbs /></div>
            <div className="sticky sm:mt-5 bg-transparent lg:hidden py-2 shadow-sm flex justify-around mb-4">
                <button
                    className="py-1 px-3 text-[13px] bg-[#DB4444] text-white rounded-lg lg:hidden"
                    onClick={toggleFilter}
                >
                    {showFilter ? 'Filters' : 'Filters'}
                </button>
                <select
                    className="py-1  bg-transparent outline-none border-black rounded-md"
                    value={sortOption}
                    onChange={handleSortChange}
                >
                    <option value="">Sort by</option>
                    <option value="lowtohigh">Low to High</option>
                    <option value="hightolow">High to Low</option>
                </select>
            </div>

            <div className="flex  flex-col  border-black lg:flex-row">
                <aside className={`fixed inset-0 z-50 bg-white py-4 lg:w-[300px]  border-black xl:w-[400px] lg:h-full lg:bg-transparent overflow-y-auto lg:sticky lg:top-28 ${showFilter ? 'block' : 'hidden'} lg:block`}>
                    <p className='text-black text-base font-medium font-PlayfairDisplay tracking-widest'>Filters</p>
                    <FilterAccordion title="Sizes">
                        <div className="flex flex-wrap gap-2">
                            {['S', 'M', 'L', 'XL', '2X'].map(size => (
                                <button
                                    key={size}
                                    className={`px-4 py-2 border border-black ${selectedSizes.includes(size) ? 'bg-[#754F23] text-white' : 'text-black'}`}
                                    onClick={() => handleSizeChange(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </FilterAccordion>


                    <FilterAccordion title="Colors">
                        <div className="flex flex-wrap gap-2">
                            {colors && colors.map(color => (
                                <div key={color._id}>
                                    <div data-tip={color.name} data-for={`tooltip-${color.name}`}>
                                        <ColorCircle
                                            color={color}
                                            selected={color.name === selectedColor}
                                            onSelect={() => handleColorSelect(color.name)}
                                        />
                                    </div>
                                    <ReactTooltip id={`tooltip-${color.name}`} effect="solid" place="top" />
                                </div>
                            ))}
                        </div>
                    </FilterAccordion>


                    <FilterAccordion title="Price Range">
                        {[
                            { range: 'Under 1000', lowPrice: 0, highPrice: 1000 },
                            { range: '1000 - 2000', lowPrice: 1000, highPrice: 2000 },
                            { range: '2000 - 3000', lowPrice: 2000, highPrice: 3000 },
                            { range: '3000 - 4000', lowPrice: 3000, highPrice: 4000 },
                            { range: '4000 - 5000', lowPrice: 4000, highPrice: 5000 }
                        ].map(({ range, lowPrice, highPrice }) => (
                            <label key={range} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={selectedPriceRange.includes(range)}
                                    onChange={() => handlePriceChange({ lowPrice, highPrice })}
                                    className="appearance-none h-4 w-4 border border-gray-400 rounded-sm checked:bg-blue-600 checked:border-transparent"
                                />
                                <span>{range}</span>
                            </label>
                        ))}
                    </FilterAccordion>

                    {/* Reset Filters Button */}
                    <div className="my-4">
                        <button
                            className="w-full px-4 py-2 bg-transparent text-right hover:underline"
                            onClick={handleResetFilters}
                        >
                            Reset Filters
                        </button>
                    </div>
                </aside>

                <main className="w-full font-PlayfairDisplay px-5  lg:border-black overflow-y-auto">
                    {/* Sticky Sort and Filter Bar */}
                    <div className="px-5 bg-transparent hidden lg:flex justify-end">
                        <select
                            className="py-1  bg-transparent outline-none border-black rounded-md"
                            value={sortOption}
                            onChange={handleSortChange}
                        >
                            <option value="">Sort by</option>
                            <option value="lowToHigh">Low to High</option>
                            <option value="highToLow">High to Low</option>
                        </select>
                    </div>
                    <div className=''>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5 border-black mx-auto py-4">
                            {product.map(product => (
                                <div key={product._id} className="mb-10 sm:mb-5  w-auto mx-auto">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {hasMore && !isLoading && (
                        <div className="flex justify-end p-10">
                            <button
                                className="px-4 py-2 bg-[#DB4444] text-white rounded-lg"
                                onClick={handleLoadMore}
                            >
                                Load More
                            </button>
                        </div>
                    )}
                    {isLoading && <p className="text-center">Loading more products...</p>}
                    {!hasMore && <p className="text-center">No more products available.</p>}
                </main>
            </div>

            {/* Background Overlay */}
            {showFilter && <div className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden" onClick={toggleFilter}></div>}
        </div>
    );
}

export default ProductFilterPage;
