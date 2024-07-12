import Profile from './components/Profile'
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from "./components/Profile";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  );
}

export default App;