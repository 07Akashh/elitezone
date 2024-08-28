import React from 'react';
import OrderItem from './OrderItem';
import { useSelector } from 'react-redux';


const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options); // 'en-GB' for dd/mm/yyyy format
};



const MyOrders = () => {
    const orders = useSelector((state) => state.orders.getOrders.data);
    return (
        <div className='bg-white w-full h-[480px] no-scrollbar overflow-scroll py-[40px] font-TenorSans'>
            <div>
                {orders.map(order =>
                    order.order_items.map(item => (
                        <OrderItem
                            id = {item.productId}
                            categoryId = {item.categoryId}
                            subCategoryId = {item.subCategoryId}
                            key = {item.id}
                            productName = {item.productName}
                            finalPrice = {item.finalPrice}
                            status = {order.order_statuses[0].status}
                            date = {formatDate(item.createdAt)}
                            photo = "https://via.placeholder.com/100"
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default MyOrders;
