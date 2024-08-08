import React from 'react'
import OrderItem from './OrderItem';

const MyWishList = () => {
  const orders = [
    {
        id: 1,
        photo: 'https://via.placeholder.com/100',
        name: 'Product 1',
        price: 50.00,
        status: 'Delivered',
        date: '24 March 2024',
    },
    {
        id: 2,
        photo: 'https://via.placeholder.com/100',
        name: 'Product 2',
        price: 75.00,
        status: 'Expected to be delivered',
        date: '30 March 2024',
    },
    {
        id: 3,
        photo: 'https://via.placeholder.com/100',
        name: 'Product 3',
        price: 100.00,
        status: 'Delivered',
        date: '10 April 2024',
    },
    {
        id: 2,
        photo: 'https://via.placeholder.com/100',
        name: 'Product 2',
        price: 75.00,
        status: 'Expected to be delivered',
        date: '30 March 2024',
    },
];
  return (
    <div className='bg-white w-full  py-[40px] font-TenorSans'>
    <h2 className="text-2xl mx-5 mb-5 text-[#754F23] font-extralight">My WishLists</h2>
    <div>
        {orders.map(order => (
            <OrderItem key={order.id} order={order} />
        ))}
    </div>
</div>
  )
}

export default MyWishList
