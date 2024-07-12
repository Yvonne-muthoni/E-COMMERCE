import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from "./components/Profile";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Profile />
    </BrowserRouter>
  );
}

export default App;