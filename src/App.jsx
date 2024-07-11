import Profile from './components/Profile'
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Profile    />
    </BrowserRouter>
  );
}

export default App;