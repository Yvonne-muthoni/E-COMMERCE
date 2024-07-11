import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={Home} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;