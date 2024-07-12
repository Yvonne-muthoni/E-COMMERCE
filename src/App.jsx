import Products from './components/Products'
import Orders from './components/Orders'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
}

export default App