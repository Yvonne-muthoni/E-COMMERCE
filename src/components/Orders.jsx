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
                                <th scope="col" className="px-6 py-3">Qty</th>
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
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path className='bg-white' stroke="currentColor" d="M1 1h16"/>
                                                </svg>
                                            </button>
                                            <div>
                                                <input type="number" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required value={order.qty} readOnly />
                                            </div>
                                            <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path className='bg-white' stroke="currentColor" d="M9 1v16M1 9h16"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
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
