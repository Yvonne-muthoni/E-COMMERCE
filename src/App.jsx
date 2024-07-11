import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';


const App = () => {
  return (

    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
         
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;
