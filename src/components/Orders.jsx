import { useState } from 'react';
import img1 from '../Images/Image1.jpg';
import img2 from '../Images/Image2.jpg';
import img3 from '../Images/Image3.jpeg';
import img4 from '../Images/Image4.jpg';
import img5 from '../Images/Image5.jpeg';
import img6 from '../Images/Image6.jpg';
import img7 from '../Images/Image7.jpeg';
import img8 from '../Images/Images8.jpeg';

const initialOrders = [
    { id: 1, name: "Apple Laptop", price: 2099, rating: 5.0, img: img1 },
    { id: 2, name: "Apple Tablet", price: 1599, rating: 5.0, img: img2 },
    { id: 3, name: "Apple Phone", price: 1099, rating: 5.0, img: img3 },
    { id: 4, name: "Apple Watch", price: 599, rating: 5.0, img: img4 },
    { id: 5, name: "Samsung Laptop", price: 2599, rating: 5.0, img: img5 },
    { id: 6, name: "Samsung Tablet", price: 1299, rating: 5.0, img: img6 },
    { id: 7, name: "Samsung Phone", price: 3099, rating: 5.0, img: img7 },
    { id: 8, name: "Samsung Watch", price: 1599, rating: 5.0, img: img8 }
];

function Orders() {
    const [orders, setOrders] = useState(initialOrders);

    const handleRemove = (id) => {
        setOrders(orders.filter(order => order.id !== id));
    };

    return (
        <>
            <h1 className='text-3xl text-center mt-20'>Your Orders</h1>
            <div className="px-32 pt-32 pb-32">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-16 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">Product</th>
                                <th scope="col" className="px-6 py-3">Price</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4">
                                        <img src={order.img} className="w-16 md:w-32 max-w-full max-h-full" alt={order.name} />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{order.name}</td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">${order.price}</td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => handleRemove(order.id)}>Remove</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Orders;
