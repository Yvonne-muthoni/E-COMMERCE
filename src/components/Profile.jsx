import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
      setError('Please enter both username and password');
    } else {
      // Add your login logic here
      console.log('Login successful!');
    }
  };

  const handleCreateUser = () => {
    // Add your create user logic here
    console.log('Create user button clicked!');
  };

  return (
    <section>
      <h1>Profile</h1>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <button type="submit" onClick={handleLoginSubmit} style={{
        padding: 10, 
        margin: 10, 
        backgroundColor: '#4CAF50', 
        color: 'white', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer'
      }}>
        Log In
      </button>
      <button type="button" onClick={handleCreateUser} style={{
        padding: 10, 
        margin: 10, 
        backgroundColor: '#4CAF50', 
        color: 'white', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer', 
        marginLeft: 10
      }}>
        Create User
      </button>
    </section>
  );
}

export default App;