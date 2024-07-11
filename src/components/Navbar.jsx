import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faBoxOpen, faClipboardList, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/roboto'; 

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex items-center justify-between">
      <div className="text-white font-bold text-xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <FontAwesomeIcon icon={faBoxOpen} className="mr-2" />
        E-Com
      </div>
      <div className="flex items-center space-x-6"> {/* Adjusted spacing */}
        <a href="/" className="text-white hover:text-gray-300 flex items-center">
          <FontAwesomeIcon icon={faHome} className="mr-1" />
          Home
        </a>
        <a href="/products" className="text-white hover:text-gray-300 flex items-center">
          <FontAwesomeIcon icon={faBoxOpen} className="mr-1" />
          Products
        </a>
        <a href="/orders" className="text-white hover:text-gray-300 flex items-center">
          <FontAwesomeIcon icon={faClipboardList} className="mr-1" />
          Orders
        </a>
        <a href="/cart" className="text-white hover:text-gray-300 flex items-center">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
          Cart
        </a>
        <a href="/login" className="text-white hover:text-gray-300 flex items-center">
          <FontAwesomeIcon icon={faSignInAlt} className="mr-1" />
          LogIn
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
