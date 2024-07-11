import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
      <Navbar />
      <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
      </>
   
  );
}

export default App;