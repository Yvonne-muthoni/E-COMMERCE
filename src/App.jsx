import Products from './components/Products'
import Orders from './components/Orders'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <Router>

      <div>

        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        
        </Routes>
      </div>
    </Router>
  )

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;


import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

}

export default App;

