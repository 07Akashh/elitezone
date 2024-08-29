import React, { useEffect, useState } from 'react';
import OrderItem from './OrderItem';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../redux/slices/orderSlice';


const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
};

const MyOrders = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const orders = useSelector((state) => state.orders.getOrders.data);

    useEffect(() => {
        setLoading(true)
        dispatch(getOrders());
        setLoading(false)
    }, [dispatch]);

    return (
        <>
            {loading && (
                <div className="loading-overlay">
                    <div className="text-white font-TenorSans text-xl">Loading...</div>
                </div>
            )}
            <div className={`${loading ? 'opacity-50' : ''}`}>
                <div className='bg-white w-full h-[480px] no-scrollbar overflow-scroll py-[40px] font-TenorSans'>
                    <div>
                        {orders.length === 0 && (
                            <p className='text-center'>No Orders Found...</p>
                        )}
                        {orders.map(order =>
                            order.order_items.map(item => (
                                <OrderItem
                                    id={item.productId}
                                    categoryId={item.categoryId}
                                    subCategoryId={item.subCategoryId}
                                    key={item.id}
                                    productName={item.productName}
                                    finalPrice={item.finalPrice}
                                    status={order.order_statuses[0].status}
                                    date={formatDate(item.createdAt)}
                                    photo="https://via.placeholder.com/100"
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyOrders;
