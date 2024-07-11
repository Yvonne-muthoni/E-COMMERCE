import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('/api/user/profile')
      .then(response => {
        const userData = response.data;
        if (!userData) {
          setErrorMessage('No user data found');
          return;
        }
        setUser(userData);
        setLoading(false);
      })
      .catch(error => {
        setErrorMessage('Error fetching user data');
        console.error(error);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (errorMessage) {
    return <div className="error">{errorMessage}</div>;
  }

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-info">
        <h2>Personal Information</h2>
        <ul>
          <li>
            <strong>Name:</strong> {user.name}
          </li>
          <li>
            <strong>Email:</strong> {user.email}
          </li>
          <li>
            <strong>Phone Number:</strong> {user.phoneNumber}
          </li>
        </ul>
      </div>
      {/* ... */}
    </div>
  );
};

export default Profile;