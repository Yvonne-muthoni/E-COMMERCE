import img1 from '../Images/Image1.jpg';
import img2 from '../Images/Image2.jpg';
import img3 from '../Images/Image3.jpeg';
import img4 from '../Images/Image4.jpg';
import img5 from '../Images/Image5.jpeg';
import img6 from '../Images/Image6.jpg';
import img7 from '../Images/Image7.jpeg';
import img8 from '../Images/Images8.jpeg';

const products = [
    { id: 1, name: "Apple Laptop", price: 2099, rating: 5.0, img: img1 },
    { id: 2, name: "Apple Tablet", price: 1599, rating: 5.0, img: img2 },
    { id: 3, name: "Apple Phone", price: 1099, rating: 5.0, img: img3 },
    { id: 4, name: "Apple Watch", price: 599, rating: 5.0, img: img4 },
    { id: 5, name: "Samsung Laptop", price: 2599, rating: 5.0, img: img5 },
    { id: 6, name: "Samsung Tablet", price: 1299, rating: 5.0, img: img6 },
    { id: 7, name: "Samsung Phone", price: 3099, rating: 5.0, img: img7 },
    { id: 8, name: "Samsung Watch", price: 1599, rating: 5.0, img: img8 },

];

function Products() {
    return (
        <>
            <h1 className='text-3xl text-center mt-20'>Products Available</h1>
            <div className='flex py-32 flex-wrap justify-center'>
                {products.map(product => (
                    <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
                        <a href="#">
                            <img className="p-10 rounded-t-lg" src={product.img} alt={`${product.name} image`} />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                {[...Array(5)].map((star, index) => (
                                    <svg key={index} className={`w-4 h-4 ${index < Math.floor(product.rating) ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                ))}
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{product.rating}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;
